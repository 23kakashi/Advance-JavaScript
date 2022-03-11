let data = JSON.parse(localStorage.getItem('movies'))
document.querySelector("#navbar").innerHTML = `
<div>
   <span id="home">Home</span>
   <span id="login">Login</span>
   <span id="signup">Signup</span>
   <span id="trending">Trending</span>
</div>
`
let timerId; // setTimeout id for debouncing
document.querySelector('#home').addEventListener('click', function () {
   window.location.href = 'index.html'
})

document.querySelector('#login').addEventListener('click', function () {
   window.location.href = 'Login.html'
})

document.querySelector('#signup').addEventListener('click', function () {
   window.location.href = 'Signup.html'
})

document.querySelector('#trending').addEventListener('click', function () {
   window.location.href = 'trending.html'
})

// slideshow

let slideImage = JSON.parse(localStorage.getItem('slideImage'))
let container = document.querySelector("#slideshow")
// console.log(slideImage)
let i = 0
let img = document.createElement('img')
img.src = slideImage[i].url
img.style.width = "100%"
img.style.height = "100%"
container.append(img)
i++
setInterval(function () {
   container.innerHTML = null
   i = i % slideImage.length
   let img = document.createElement('img')
   img.src = slideImage[i].url
   img.style.width = "100%"
   img.style.height = "100%"
   img.style.position = "relative"
   console.log(slideImage[i].url)
   container.append(img)
   i++
}, 200000)

//sort button 
document.querySelector("#sort-lh").addEventListener('click', function () {
   l2h(data)
})
document.querySelector("#sort-hl").addEventListener('click', function () {
   h2l(data)
})
function l2h(data) {
   let temp = data.sort((a, b) => { return a.imdbID - b.imdbID })
   display(temp)
}

function h2l(data) {
   let temp = data.sort((a, b) => { return b.imdbID - a.imdbID })
   display(temp)
}

//movies 
display(data)
function display(data) {
   // console.log(data)
   if (data === undefined) {
      return false
   }
   document.querySelector("#movies").innerHTML = ""
   data.map(function (item) {
      // console.log(item)
      let div = document.createElement('div')

      let img = document.createElement('img')
      img.src = item.Poster
      img.addEventListener('click',function(){
         showDetail(item)
      })
      img.style.width = '100%'
      img.style.height = "400px"

      let name = document.createElement('h3')
      name.innerText = item.Title

      let rating = document.createElement('p')
      rating.innerText = item.imdbID

      let date = document.createElement('p')
      date.innerText = item.Year

      div.append(img, name, date, rating)
      document.querySelector("#movies").append(div)
   })
}

async function showDetail(item){
   document.querySelector(`#thismovieImg`).innerHTML = null
   document.querySelector(`#thismovieDetail`).innerHTML = null
   // console.log(item.Title)
   let res = await fetch(`https://www.omdbapi.com/?apikey=f65e2728&t=${item.Title}`)
   let thismovie = await res.json()
   console.log(thismovie)

   let img = document.createElement(`img`)
   img.src = thismovie.Poster
   img.style.height = "400px"
   img.style.width = "400px"
   document.querySelector(`#thismovieImg`).append(img)

   let name = document.createElement(`h1`)
   name.innerText = thismovie.Title
   let rating = document.createElement(`p`)
   rating.innerText = thismovie.imdbRating
   let year = document.createElement(`p`)
   year.innerText = thismovie.Year
   let Genre = document.createElement(`p`)
   Genre.innerText = thismovie.Genre
   let Director = document.createElement(`p`)
   Director.innerText = thismovie.Director
   let Actors = document.createElement(`p`)
   Actors.innerText = thismovie.Actors
   let Awards = document.createElement(`p`)
   Awards.innerText = thismovie.Awards

   document.querySelector(`#thismovieDetail`).append(name,rating,year,Genre,Director,Actors,Awards)
}



//Debouncing and closure

async function searchMovie() {
   let input = document.querySelector(`#searchMovie`).value
   // console.log(input)
   try {
      let res = await fetch(`https://www.omdbapi.com/?apikey=f65e2728&s=${input}`)

      let searchData = await res.json()
      // console.log(searchData.Search)
      return searchData.Search
      // display(searchData.Search)
      // console.log(data)
   }
   catch (e) {
      console.log(e)
   }
}


async function main() {
   try {
      let a = await searchMovie()
      //this is a promise as async function alwways returns a promise
      console.log(a)
      display(a)
   }
   catch (e) {
      console.log(e)
   }
}

//Function for debouncing

function debounce(func, delay){

   if(timerId){
      clearTimeout(timerId)
   }

   timerId = setTimeout(function(){
      func()
   },delay)
}