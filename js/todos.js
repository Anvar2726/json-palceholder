const todosRow = document.querySelector('.todos__row');
let query = new URLSearchParams(location.search);
let userId = query.get('userId');
console.log(userId);

function getTodos({userId, title, completed, id}){
    return `
    <div class="todos__card">
        <p>userId: ${userId}</p>
        <p>id: ${id}</p>
        <p>title: ${title}</p>
        <p>Complated: ${completed ? "complated" : "No complated"}</p>
    </div>
    `
}

async function getTodo(){
    let res = await getData(`${ENDPOINT}todos?userId=${userId}`);
    res.map(el =>{
        todosRow.innerHTML += getTodos(el)
    })

}
getTodo();