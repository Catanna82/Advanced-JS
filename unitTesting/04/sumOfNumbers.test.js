const { expect } = require('chai');
const sum = require('./sumOfNumbers');

describe('Sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    //test overloading
    it('sums multiple number', () => {
        expect(sum([1, 1])).to.equal(2);
    });
    it('sums different number', () => {
        expect(sum([2, 3, 5])).to.equal(10);
    });
});