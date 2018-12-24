let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

function solution(arg) {
    if (arg === "upvote") {
        this.upvotes = this.upvotes + 1;
    } else if (arg === "downvote") {
        this.downvotes = this.downvotes + 1;
    } else if (arg === "score") {
        let upvotes = this.upvotes;
        let downvotes = this.downvotes;
        let score = upvotes - downvotes;
        let totalVotes = upvotes + downvotes;
        let rating;
        if (totalVotes >= 10) {
            if ((upvotes / totalVotes) * 100 > 66) {
                rating = "hot";
            } else if (score >= 0 && (upvotes > 100 || downvotes > 100)) {
                rating = "controversial";
            } else if (score < 0) {
                rating = "unpopular";
            } else {
                rating = "new";
            }
        } else if (totalVotes < 10) {
            rating = "new";
        }
        let add = 0;
        if (this.upvotes + this.downvotes > 50) {
            add = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
        }
        return [upvotes + add, downvotes + add, score, rating];
    }
}

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score);
solution.call(post, 'downvote');
score = solution.call(post, 'score');