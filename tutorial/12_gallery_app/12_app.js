// https://api.pexels.com/v1/curated?per_page=1
// https://api.pexels.com/v1/search?query=nature&per_page=1
// 563492ad6f91700001000001c5e6480855e74c238b20eac4d3d528f9
// https://api.pexels.com/v1/curated/?page=2&per_page=12


const API_KEY = '563492ad6f91700001000001c5e6480855e74c238b20eac4d3d528f9'
const galleryDiv = document.querySelector('.gallery')
const form = document.querySelector('form')
const loadMore = document.querySelector('.load_more')
const logo = document.querySelector('.logo')

let pageIndex = 1
let query = ''

async function getMoreImg(query){
    const baseURL = `https://api.pexels.com/v1/search?query=${query}&per_page=12&page=${pageIndex}`
    const data = await fetchImg(baseURL)
    paintImg(data.photos)
}

function getSearchImg(query){
    galleryDiv.innerHTML = ''
    getMoreImg(query)
}

function paintImg(photos){
    photos.forEach(photo =>{
        const item = document.createElement('div')
        item.classList.add('item')
        const html = ` <a href="${photo.src.original}"target="_blank">
                        <div class="photo">
                            <img src="${photo.src.medium}" alt="">
                        </div>        
                       </a>
                       <div class="info">
                            <h3>${photo.photographer}</h3>
                        </div>`
        item.innerHTML = html
        galleryDiv.appendChild(item)
    })
}

async function fetchImg(baseURL){
    const res = await fetch(baseURL, {
        headers : {
            Authorization : API_KEY
        }
    })
    const data = await res.json()
    return data
}


async function getImg(pageIndex){
    const baseURL = `https://api.pexels.com/v1/curated/?page=2&per_page=12`
    const data = await fetchImg(baseURL)
    paintImg(data.photos)
}

function init(){
    getImg(pageIndex)

    form.addEventListener('submit',e=>{
        e.preventDefault()
        const searchValue = e.target.querySelector('input').value
        query = searchValue
        getSearchImg(searchValue)
        form.reset()
    })

    loadMore.addEventListener('click',e=>{
        e.preventDefault()
        pageIndex++

        if(query === ''){
            getImg(pageIndex)
        } else{
            getMoreImg(query)
        }
    })

    logo.addEventListener('click',e=>{
        e.preventDefault()
        pageIndex = 1
        galleryDiv.innerHTML = ''
        getImg(pageIndex)
    })
}

init()
