(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n) {
        return this.slice(n);
    }
    Array.prototype.take = function(n) {
        return this.slice(0, n);
    }
    Array.prototype.sum = function() {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += Number(this[i]);
        }
        return sum;
    }
    Array.prototype.average = function() {
        return Number(this.sum()) / Number(this.length);
    }
})();

let array = [1, 2, 3];
console.log(array.average());




