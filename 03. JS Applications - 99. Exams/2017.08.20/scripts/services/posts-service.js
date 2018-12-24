let posts = (()=> {


    function listAllPosts() {
        const endpoint = `posts?query={}&sort={"_kmd.ect":-1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createPost(author,title,description,url,imageUrl) {
        const data = {
            author: author,
            title: title,
            description: description,
            url: url,
            imageUrl: imageUrl
        };

        return remote.post('appdata', 'posts', 'kinvey', data);
    }

    function editPost(postId,author,title,description,url,imageUrl) {
        const endpoint = `posts/${postId}`;
        const data = {
            author: author,
            title: title,
            description: description,
            url: url,
            imageUrl: imageUrl
        };

        return remote.update('appdata', endpoint, 'kinvey', data);
    }

    function deletePost(postId) {
        const endpoint = `posts/${postId}`;
        return remote.remove('appdata', endpoint, 'kinvey', data);
    }

    function getMyPosts(userId) {
        const endpoint = `posts?query={"author":"${userId}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    return {
        listAllPosts,
        createPost,
        editPost,
        deletePost,
        getMyPosts
    }
})();