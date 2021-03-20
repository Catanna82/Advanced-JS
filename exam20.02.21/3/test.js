const { assert } = require('chai');
const numberOperations = require('./03. Number Operations_Resources');


describe("Tests object", function () {
    let powNumber, numberChecker, sumArrays;
    this.beforeEach(() => {
        powNumber = numberOperations.powNumber;
        sumArrays = numberOperations.sumArrays;
        numberChecker = numberOperations.numberChecker;
    });
    describe("functions", function () {
        it("functions", function () {
            assert.equal(typeof powNumber, 'function', 'It is 4!');
            assert.equal(typeof sumArrays, 'function', 'It is 4!');
            assert.equal(typeof numberChecker, 'function', 'It is 4!');
        });
    });
    describe("powNumber test", function () {
        it("powNumber", function () {
            assert.equal(powNumber(2), 4, 'It is 4!');
            assert.equal(powNumber(0), 0, 'It is 4!');
            assert.equal(powNumber('2'), 4, 'It is 4!');
            assert.equal(powNumber(10), 100, 'It is 100!');
            assert.equal(powNumber(-2), 4, 'It is 4!');
            assert.equal(powNumber(100), 10000, 'It is 10000!');
            assert.isNaN(powNumber('a'), true, 'It is NaN!');
            assert.isNaN(powNumber(), true, 'It is NaN!');
        });
    });
    describe("numberChecker test", function () {
        it("inputs is correct number", function () {
            assert.equal(numberChecker(1), 'The number is lower than 100!');
            assert.equal(numberChecker('1'), 'The number is lower than 100!');
            assert.equal(numberChecker(105), 'The number is greater or equal to 100!');
            assert.equal(numberChecker(100), 'The number is greater or equal to 100!');
            assert.equal(numberChecker('105'), 'The number is greater or equal to 100!');
            assert.throws(() => numberChecker('a'), 'The input is not a number!');
            assert.throws(() => numberChecker(), 'The input is not a number!');
        });
    });
    describe("sumArrays test", function () {
        it("sumArrays is correct", function () {
            assert.deepEqual(sumArrays([1, 2], [1, 2]), [2, 4], 'it works!');
            assert.deepEqual(sumArrays([1, 2, 3, 4], [1, 2]), [2, 4, 3, 4], 'it works!');
            assert.deepEqual(sumArrays([1, 2], [1, 2, 3, 4]), [2, 4, 3, 4], 'it works!');
            assert.deepEqual(sumArrays(['1', '2'], ['1', '2']), ['11', '22'], 'it works!');
            assert.deepEqual(sumArrays([1, 2], ['1', '2']), ['11', '22'], 'it works!');
            assert.deepEqual(sumArrays([1, 2], ['a', 's']), ['1a', '2s'], 'it works!');
            assert.deepEqual(sumArrays(['n', 'm'], ['a', 's']), ['na', 'ms'], 'it works!');
            assert.deepEqual(sumArrays([], []), [], 'it works!');
            assert.deepEqual(sumArrays([true, true], [1, 2]), [2, 3], 'it works!');
            assert.deepEqual(sumArrays([true, true], [false, false]), [1, 1], 'it works!');
        });
    });
});
