const commentsRow = document.querySelector('.comments__row');
let query = new URLSearchParams(location.search);
let postId = query.get('postId');

function getComment({postId, id, name, email, body}){
    return `
    <div class="comments__card">
        <p>postId: ${postId}</p>
        <p>id: ${id}</p>
        <p>name: ${name}</p>
        <p>email: ${email}</p>
        <p>body: ${body}</p>
    </div>  
    `
}

async function getComments(){
    let res = await getData(`${ENDPOINT}comments?postId=${postId}`)
    res.map(el =>{
        commentsRow.innerHTML += getComment(el)
    })
}
getComments();