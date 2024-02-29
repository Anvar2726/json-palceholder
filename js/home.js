const usersRow = document.querySelector('.users__row');
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

function getUser({id, name, username, email, phone, website, company}){
    return `
        <div class="users__card">
            <p>Id: ${id}</p>
            <p>name: ${name}</p>
            <p>username: ${username}</p>
            <p>email: ${email}</p>
            <p>phone: ${phone}</p>
            <p>website: ${website}</p>
            <p>company: ${company.name}</p>
            <a href="/pages/todos.html?userId=${id}">Todos</a>
            <a href="/pages/posts.html?userId=${id}">Posts</a>
            <a href="/pages/albums.html?userId=${id}">Albums</a>
        </div>
    `
}

async function getUsers(){
    let res = await getData(`${ENDPOINT}users`);
    res.map(el =>{
        usersRow.innerHTML += getUser(el)
    })
    loader.innerHTML = ""
}

getUsers();