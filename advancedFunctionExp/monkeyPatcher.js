function solution(command) {
    switch (command) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let ups = this.upvotes;
            let downs = this.downvotes;
            let rating;
            if (this.upvotes + this.downvotes > 50) {
                let percent = Math.ceil(Math.max(ups, downs) * 0.25);
                ups += percent;
                downs += percent;
            }
            if (this.upvotes + this.downvotes < 10) {
                rating = 'new'
            } else if (this.upvotes < this.downvotes) {
                rating = 'unpopular'
            } else if (this.upvotes > this.downvotes && (this.upvotes > (this.upvotes + this.downvotes) * 0.66)) {
                rating = 'hot'
            } else if (this.upvotes >= this.downvotes && Math.max(this.upvotes, this.downvotes) > 100) {
                rating = 'controversial';
            } else {
                rating = 'new';
            }
            return [ups, downs, (ups - downs), rating];
    }
}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// console.log(score);
(new Array(50)).fill(1).map((v) => solution.call(post, 'downvote'));// (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);