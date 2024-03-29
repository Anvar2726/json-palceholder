const albumsRow = document.querySelector('.photos__row');

let query = new URLSearchParams(location.search);
let albumId = query.get('albumId');
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

function getPhoto({albumId, id, title, url, thumbnailUrl}){
    return `
        <div class="photos__card">
            <p>albumId: ${albumId}</p>
            <p>id: ${id}</p>
            <p>title: ${title}</p>
            <img class="img" src=${url} alt=${title}>
            <img class="thumbnail" src=${thumbnailUrl} alt=${title}>
        </div>
    `
}

async function getPhotos(){
    let res = await getData(`${ENDPOINT}photos?albumId=${albumId}`);
    res.map(el =>{
        albumsRow.innerHTML += getPhoto(el)
    })
    loader.innerHTML =''
}
getPhotos();