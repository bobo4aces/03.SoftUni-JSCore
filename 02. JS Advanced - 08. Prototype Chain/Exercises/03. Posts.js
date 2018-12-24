function posts() {
    class Post {
        constructor(title,content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            let baseString = `Post: ${this.title}\nContent: ${this.content}`;
            return baseString;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title,content,likes, dislikes) {
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let output = super.toString() + `\nRating: ${this.likes-this.dislikes}`;
            if (this.comments.length>0) {
                output +="\nComments:";
            }
            for (let comment of this.comments) {
                output += `\n * ${comment}`;
            }
            return output;
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title,content);
            this.views = views;
        }
        view() {
            this._views+=this.views++;
            return this;
        }
        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }
    return {Post,SocialMediaPost,BlogPost};
}
let classes = posts();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();
console.log(test.toString());
