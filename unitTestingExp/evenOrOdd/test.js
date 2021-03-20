const isOddOrEven = require('./isOddOrEven')
const assert = require('chai').assert;
// const describe = require('mocha').describe;

describe('check isOddOrEven', () => {
    it('Type is string', () => {
        assert.isUndefined(isOddOrEven(1), 'Message a==a', '1');
    });
    it('Is even', () => {
        assert.equal(isOddOrEven('aa'), 'even', 'Message a==a', '2');
    });
    it('Is odd', () => {
        assert.equal(isOddOrEven('a'), 'odd', 'Message a==a', '3');
        assert.equal(isOddOrEven('a'), 'odd', 'Message a==b', '4');
        assert.equal(isOddOrEven(2), undefined, 'Message a==b', '5');
    });
});