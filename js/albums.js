const albumsRow = document.querySelector('.albums__row');
let query = new URLSearchParams(location.search);
let userId = query.get('userId');

function getAlbum({userId, id, title}){
    return`
        <div class="albums__card">
            <p>userId: ${userId}</p>
            <p>id: ${id}</p>
            <p>title: ${title}</p>
            <a href="/pages/photos.html?albumId=${id}">Photos</a>
        </div>
    `
}

async function getALbums(){
    let res = await getData(`${ENDPOINT}albums?userId=${userId}`);
    res.map(el =>{
        albumsRow.innerHTML += getAlbum(el);
    })

}
getALbums();