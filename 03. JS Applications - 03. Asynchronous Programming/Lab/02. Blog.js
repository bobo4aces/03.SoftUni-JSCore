function attachEvents() {
    const URL = "https://baas.kinvey.com/appdata/kid_ByWlrZfEm/";
    const USERNAME = "Peter";
    const PASSWORD = "p";
    const BASE_64 = btoa(`${USERNAME}:${PASSWORD}`);
    const AUTH = {"Authorization": "Basic " + BASE_64};
    let posts = $("#posts");
    let loadPostsButton = $("#btnLoadPosts");
    loadPostsButton.on("click",loadPosts);
    function loadPosts() {
        $.ajax({
            method: "GET",
            url: URL + "posts",
            headers: AUTH
        }).then(displayPosts).catch(handleError);
    }
    function displayPosts(postsArr) {
        console.log(postsArr);
        posts.empty();
        for (let post of postsArr) {
            let option = $("<option>");
            option.prop("value",post._id);
            option.text(post.title);
            posts.append(option);
        }
    }
    let viewPostsButton = $("#btnViewPost");
    viewPostsButton.on("click",viewPosts);
    function viewPosts() {
        let postId = posts.prop("value");
        if (!postId) {
            return;
        }
        let requestPosts = $.ajax({
            method: "GET",
            url: URL + `posts/${postId}/`,
            headers: AUTH
        });
        let requestComments = $.ajax({
            method: "GET",
            url: URL + `comments/?query={"post_id":"${postId}"}`,
            headers: AUTH
        });
        Promise.all([requestPosts,requestComments])
            .then(displayPostWithComments)
            .catch(handleError);
    }
    function displayPostWithComments([post,comments]) {
        $("#post-title").text(post.title);
        $("#post-body").empty();
        $("#post-body").text(post.body);
        $("#post-comments").empty();
        for (let comment of comments) {
            let currentItem = $("<li>").text(comment.text);
            $("#post-comments").append(currentItem);
        }
    }
    function handleError(err) {
        console.log(err.status);
    }
}