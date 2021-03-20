const { Repository } = require("./solution.js");
const { assert, expect } = require('chai');

describe("Tests Repository", function () {
    let properties = {
        name: 'string',
        age: 'number',
        birthday: 'object',
    };
    let repo;

    this.beforeEach(() => {
        repo = new Repository(properties);
    });
    describe("Constructor validate", function () {
        it("Constructor test", function () {
            assert.equal(repo instanceof Repository, true, 'It is correct class!');
            assert.equal(repo.props instanceof Object, true, 'It is {}!');
            assert.deepEqual(repo.data, new Map(), 'It is new Map()!');
            assert.equal(repo.nextId(), 0, 'It works!');
            assert.equal(repo.count, 0, 'Correct count!');
        });
    });
    describe("Add entity", function () {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        it("Is correct", function () {
            assert.equal(repo.add(entity), 0, 'It is true!');
        });
        let entityWrongName = {
            name: 22,
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        it("Name is incorrect", function () {
            assert.throws(() => repo.add(entityWrongName), 'Property name is not of correct type!');
        });
        let entityWrongAge = {
            name: 'Pesho',
            age: true,
            birthday: new Date(1998, 0, 7)
        };
        it("Age is incorrect", function () {
            assert.throws(() => repo.add(entityWrongAge), 'Property age is not of correct type!');
        });
        let entityWrongBirthday = {
            name: 'Pesho',
            age: 22,
            birthday: true
        };
        it("Birthday is incorrect", function () {
            assert.throws(() => repo.add(entityWrongBirthday), 'Property birthday is not of correct type!');
        });
        let entityMissingName = {
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        it("Name is missing", function () {
            assert.throws(() => repo.add(entityMissingName), 'Property name is missing from the entity!');
        });
        let entityMissingAge = {
            name: 'Pesho',
            birthday: new Date(1998, 0, 7)
        };
        it("Age is missing", function () {
            assert.throws(() => repo.add(entityMissingAge), 'Property age is missing from the entity!');
        });
        let entityMissingBirthday = {
            name: 'Pesho',
            age: 22
        };
        it("Birthday is missing", function () {
            assert.throws(() => repo.add(entityMissingBirthday), 'Property birthday is missing from the entity!');
        });
    });
    describe('Add multiple entity', function() {
        it('Correctly add multiple data', function() {
            let entity1 = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        let entity2 = {
            name: "Gosho",
            age: 35,
            birthday: new Date(1978, 0, 7)
        };
        let entity3 = {
            name: "Tosho",
            age: 45,
            birthday: new Date(1968, 0, 7)
        };
        let id1 = repo.add(entity1);
        let id2 = repo.add(entity2);
        let id3 = repo.add(entity3);
        assert.equal(repo.count,3);
        assert.equal(id1, 0);
        assert.equal(id2, 1);
        assert.equal(id3, 2);
        assert.deepEqual(repo.getId(0), entity1);
        assert.deepEqual(repo.getId(1), entity2);
        assert.deepEqual(repo.getId(2), entity3);
        repo.del(id1);
        repo.del(id2);
        assert.equal(repo.count,1);
        });
    })
    describe("Get id", function () {
        it("Correct id", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repo.add(entity);
            let pesho = repo.getId(id);
            assert.equal(pesho.name, 'Pesho', 'Correct name!');
            assert.equal(pesho.age, 22, 'Correct age!');
            assert.deepEqual(pesho.birthday, new Date(1998, 0, 7), 'Correct birthday!');
        });
        it("Incorrect id", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repo.add(entity);
            assert.throws(() => repo.getId(id + 1), `Entity with id: ${id + 1} does not exist!`);
        });
    });
    describe("Delete id", function () {
        it("Correct delete", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repo.add(entity);
            repo.del(id);
            assert.throws(() => repo.getId(id), `Entity with id: ${id} does not exist!`);
        });
        it("Incorrect delete", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repo.add(entity);
            assert.throws(() => repo.del(id + 1), `Entity with id: ${id + 1} does not exist!`);
        });
    });
    describe("Update data", function () {
        it("Correct update", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let newEntity = {
                name: "Gosho",
                age: 35,
                birthday: new Date(1978, 0, 7)
            };
            let id = repo.add(entity);
            repo.update(id, newEntity);
            let gosho = repo.getId(id);
            assert.equal(gosho.name, 'Gosho', 'Correct name!');
            assert.equal(gosho.age, 35, 'Correct age!');
            assert.deepEqual(gosho.birthday, new Date(1978, 0, 7), 'Correct birthday!');
        });
        it("Correct update", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let newEntity = {
                name: "Gosho",
                age: 35,
                birthday: new Date(1978, 0, 7)
            };
            let id = repo.add(entity);
            repo.update(id, newEntity);
            let gosho = repo.getId(id);
            assert.equal(gosho.name, 'Gosho', 'Correct name!');
            assert.equal(gosho.age, 35, 'Correct age!');
            assert.deepEqual(gosho.birthday, new Date(1978, 0, 7), 'Correct birthday!');
        });
        it("Incorrect update", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let newEntity = {
                name: "Gosho",
                age: 35,
                birthday: new Date(1978, 0, 7)
            };
            let id = repo.add(entity);
            assert.throws(() => repo.update(id + 1, newEntity), `Entity with id: ${id + 1} does not exist!`);
        });

        let entityWrongName = {
            name: 22,
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        it("Name is incorrect", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repo.add(entity);
            assert.throws(() => repo.update(id, entityWrongName), 'Property name is not of correct type!');
        });
        let entityWrongAge = {
            name: 'Pesho',
            age: true,
            birthday: new Date(1998, 0, 7)
        };
        it("Age is incorrect", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repo.add(entity);
            assert.throws(() => repo.update(id, entityWrongAge), 'Property age is not of correct type!');
        });
        let entityWrongBirthday = {
            name: 'Pesho',
            age: 22,
            birthday: true
        };
        it("Birthday is incorrect", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repo.add(entity);
            assert.throws(() => repo.update(id, entityWrongBirthday), 'Property birthday is not of correct type!');
        });
        let entityMissingName = {
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        it("Name is missing", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repo.add(entity);
            assert.throws(() => repo.update(id, entityMissingName), 'Property name is missing from the entity!');
        });
        let entityMissingAge = {
            name: 'Pesho',
            birthday: new Date(1998, 0, 7)
        };
        it("Age is missing", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repo.add(entity);
            assert.throws(() => repo.update(id, entityMissingAge), 'Property age is missing from the entity!');
        });
        let entityMissingBirthday = {
            name: 'Pesho',
            age: 22
        };
        it("Birthday is missing", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let id = repo.add(entity);
            assert.throws(() => repo.update(id, entityMissingBirthday), 'Property birthday is missing from the entity!');
        });
    });
    describe("Count", function () {
        it("Correct count", function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let newEntity = {
                name: "Gosho",
                age: 35,
                birthday: new Date(1978, 0, 7)
            };
            repo.add(entity);
            repo.add(newEntity);
            assert.equal(repo.count >= 2, true, 'Correct count number!');
        });
    });

});
