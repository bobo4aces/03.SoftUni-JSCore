handlers.getAllPosts = function (ctx) {
    posts.listAllPosts()
        .then((posts) => {
            console.log(posts)
            posts.forEach((p, i) => {
                p.rank = i + 1;
                p.date = calcTime(p._kmd.ect);
                p.isAuthor = p._acl.creator === sessionStorage.getItem("userId");
            });
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem("username");
            ctx.posts = posts;

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                nav: './templates/common/nav.hbs',
                post: './templates/posts/post.hbs',
                postList: './templates/posts/postList.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/posts/catalog.hbs');
            })
        })
        .catch(notify.handleError);
};
handlers.getSubmitPage = function (ctx) {
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        nav: './templates/common/nav.hbs',
        submitForm: './templates/forms/submit-form.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/posts/submit.hbs')
    })
};
handlers.submitPost = function (ctx) {
    const author = sessionStorage.getItem("username");
    const url = ctx.params.url;
    const title = ctx.params.title;
    const imageUrl = ctx.params.image;
    const description = ctx.params.comment;

    if (url.slice(0,4) !== "http") {
        notify.showError("Invalid link!");
    } else if (url.length === 0) {
        notify.showError("Link URL must not be empty!");
    } else if (title.length === 0) {
        notify.showError("Link Title must not be empty!");
    } else {
        posts.createPost(author,title,description,url,imageUrl)
            .then(()=> {
                notify.showInfo("Post created.");
                $("#submitForm").trigger("reset");
                ctx.redirect("#/catalog");
            })
    }


};
function calcTime(dateIsoFormat) {
    let diff = new Date - (new Date(dateIsoFormat));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);
    function pluralize(value) {
        if (value !== 1) return 's';
        else return '';
    }
}