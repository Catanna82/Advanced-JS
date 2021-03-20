class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
    get likes() {
        if (this._likes.length < 1) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else if(this._likes.length > 1) {
            return `${this._likes[0]} and ${this._likes.length -1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        } else if (username === this.creator) {
            throw new Error(`You can't like your own story!`);
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        } else {
            let index = this._likes.indexOf(username);
            this._likes.splice(index, 1);
            return `${username} disliked ${this.title}`
        }
    }
    comment(username, content, id) {
        let index = this._comments.findIndex((v) => v.id === id);
        if (id === undefined || index === -1) {
            this._comments.push({
                id: this._comments.length + 1,
                username: username,
                content: content,
                replies: []
            })
           return `${username} commented on ${this.title}`;
        } else {
            this._comments[index].replies.push({
                id: `${index + 1}.${this._comments[index].replies.length + 1}`,
                username: username,
                content: content,
            })
            return `You replied successfully`;
        }
    }
    toString(sortingType) {
        let result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:`
            ];
        if (sortingType === 'asc') {
            this._comments.sort((a, b) => a.id - b.id).map(v => {
                result.push(`-- ${v.id}. ${v.username}: ${v.content}`);
                v.replies.sort((a, b) => a.id.localeCompare(b.id))
                .map(n => {
                    result.push(`--- ${n.id}. ${n.username}: ${n.content}`)
                })
            });
        } else if (sortingType === 'desc') {
            this._comments.sort((a, b) => b.id - a.id).map(v => {
                result.push(`-- ${v.id}. ${v.username}: ${v.content}`);
                v.replies.sort((a, b) => b.id.localeCompare(a.id))
                .map(n => {
                    result.push(`--- ${n.id}. ${n.username}: ${n.content}`)
                })
            });
        } else if (sortingType === 'username') {
            this._comments.sort((a, b) => a.username.localeCompare(b.username)).map(v => {
                result.push(`-- ${v.id}. ${v.username}: ${v.content}`);
                v.replies.sort((a, b) => a.username.localeCompare(b.username))
                .map(n => {
                    result.push(`--- ${n.id}. ${n.username}: ${n.content}`)
                })
            });
        }
        return result.join('\n');
    }
}

// let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));

const {assert} = require('chai');
// const Story = result;
let art = new Story("My Story", "Anny");
assert.equal(art.like("John"), "John liked My Story!");
assert.equal(art.likes, "John likes this story!");
assert.throw(()=>art.dislike("Sally"), "You can't dislike this story!");
assert.equal(art.like("Ivan"),"Ivan liked My Story!");
assert.equal(art.like("Steven"), "Steven liked My Story!");
assert.equal(art.likes, "John and 2 others like this story!");
assert.equal(art.comment("Anny", "Some Content"),"Anny commented on My Story");
assert.equal(art.comment("Ammy", "New Content", 1),"You replied successfully");
assert.equal(art.comment("Zane", "Reply", 2),"Zane commented on My Story");
assert.equal(art.comment("Jessy", "Nice :)"), "Jessy commented on My Story");
console.log(art.comment("SAmmy", "Reply@", 2), "You replied successfully");

assert.equal(art.toString('asc'),`Title: My Story
Creator: Anny
Likes: 3
Comments:
-- 1. Anny: Some Content
--- 1.1. Ammy: New Content
-- 2. Zane: Reply
--- 2.1. SAmmy: Reply@
-- 3. Jessy: Nice :)`);