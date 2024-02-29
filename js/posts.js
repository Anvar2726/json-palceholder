const postsRow = document.querySelector('.posts__row');
let query = new URLSearchParams(location.search)
let userId = query.get('userId');
const loader = document.querySelector('.loader');

loader.innerHTML = `
    <div class="loader">
    <div class="loader__bar"></div>
    <div class="loader__bar"></div>
    <div class="loader__bar"></div>
    <div class="loader__bar"></div>
    <div class="loader__bar"></div>
    <div class="loader__ball"></div>
    </div>
`

function getPost({userId, id, title, body}){
    return `
        <div class="posts__card">
            <p>userId: ${userId}</p>
            <p>id: ${id}</p>
            <p>title: ${title}</p>
            <p>body: ${body}</p>
            <a href="/pages/comments.html?postId=${id}">Comments</a>
        </div>  
    `
}

async function getPosts(){
    let res = await getData(`${ENDPOINT}posts?userId=${userId}`)
    res.forEach(element => {
        postsRow.innerHTML += getPost(element) 
    });
    loader.innerHTML = ''
}
getPosts()