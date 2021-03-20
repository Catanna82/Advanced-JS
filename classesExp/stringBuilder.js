const {assert} = require('chai');

describe('testString', function () {

    it('Incorrect constructor', () => {
        assert.throws(() => new StringBuilder(true), 'Argument must be а string');
    });
    it('Correct constructor', () => {
        let classInst = new StringBuilder();
        assert.equal(classInst._stringArray.length, 0, 'It is ok!');
        
        assert.ok(new StringBuilder('aha'), 'Works!');
    });
    it('Has properties', () => {
        let classInst = new StringBuilder();
        assert.ok(classInst.append, 'It is ok!');
        assert.ok(classInst.prepend, 'It is ok!');
        assert.ok(classInst.remove, 'It is ok!');
        assert.ok(classInst.insertAt, 'It is ok!');
        assert.ok(classInst.toString, 'It is ok!');
        assert.ok(classInst._stringArray, 'It is ok!');
        
    });
    it('Append', () => {
        let classInst1 = new StringBuilder('a');
        classInst1.append('n');
        assert.equal(classInst1._stringArray[1], 'n' , 'Correct');
    });
    it('Incorrect Append', () => {
        let classInst = new StringBuilder();
        assert.throws(() => classInst.append(255), 'Argument must be а string');
    });

    it('Prepend', () => {
        let classInst1 = new StringBuilder('a');
        classInst1.prepend('n');
        assert.equal(classInst1._stringArray[0], 'n' , 'Correct');
    });
    it('Incorrect Prepend', () => {
        let classInst = new StringBuilder();
        assert.throws(() => classInst.prepend(255), 'Argument must be а string');
    });
    it('InsertAt', () => {
        let classInst1 = new StringBuilder('aaaa');
        classInst1.insertAt('n', 2);
        assert.equal(classInst1._stringArray[2], 'n' , 'Correct');
    });
    it('Incorrect insertAt', () => {
        let classInst = new StringBuilder();
        assert.throws(() => classInst.insertAt(255, 0), 'Argument must be а string');
    });
    it('remove', () => {
        let classInst1 = new StringBuilder('baan');
        classInst1.remove(1, 2);
        assert.equal(classInst1._stringArray[0], 'b' , 'Correct');
        assert.equal(classInst1._stringArray[1], 'n' , 'Correct');
    });
    it('toString', () => {
        let classInst1 = new StringBuilder('baan');
        assert.equal(classInst1.toString(), 'baan', 'Correct string');
    });
});


class StringBuilder {
    constructor(string) {
      if (string !== undefined) {
        StringBuilder._vrfyParam(string);
        this._stringArray = Array.from(string);
      } else {
        this._stringArray = [];
      }
    }
  
    append(string) {
      StringBuilder._vrfyParam(string);
      for(let i = 0; i < string.length; i++) {
        this._stringArray.push(string[i]);
      }
    }
  
    prepend(string) {
      StringBuilder._vrfyParam(string);
      for(let i = string.length - 1; i >= 0; i--) {
        this._stringArray.unshift(string[i]);
      }
    }
  
    insertAt(string, startIndex) {
      StringBuilder._vrfyParam(string);
      this._stringArray.splice(startIndex, 0, ...string);
    }
  
    remove(startIndex, length) {
      this._stringArray.splice(startIndex, length);
    }
  
    static _vrfyParam(param) {
      if (typeof param !== 'string') throw new TypeError('Argument must be а string');
    }
  
    toString() {
      return this._stringArray.join('');
    }
  }
  