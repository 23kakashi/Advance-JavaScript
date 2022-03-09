let data = JSON.parse(localStorage.getItem('movies'))
document.querySelector("#navbar").innerHTML = `
<div>
   <span id="home">Home</span>
   <span id="login">Login</span>
   <span id="signup">Signup</span>
</div>
`

document.querySelector('#home').addEventListener('click', function () {
   window.location.href = 'index.html'
})

document.querySelector('#login').addEventListener('click', function () {
   window.location.href = 'Login.html'
})

document.querySelector('#signup').addEventListener('click', function () {
   window.location.href = 'Signup.html'
})

// slideshow

let slideImage = JSON.parse(localStorage.getItem('slideImage'))
let container = document.querySelector("#slideshow")
console.log(slideImage)
let i = 0
let img = document.createElement('img')
img.src = slideImage[i].url
img.style.width = "100%"
img.style.height = "100%"
container.append(img)
i++
setInterval(function(){
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
},200000)

//sort button 
document.querySelector("#sort-lh").addEventListener('click', function(){
   l2h(data)
})
document.querySelector("#sort-hl").addEventListener('click',function(){
   h2l(data)
})
function l2h(data){
   let temp = data.sort((a,b) =>{return a.rating - b.rating})
   display(temp)
}

function h2l(data){
   let temp = data.sort((a,b) =>{return b.rating - a.rating})
   display(temp)
}

//movies 
display(data)
function display(data){
   document.querySelector("#movies").innerHTML = ""
   data.map(function (item){

      let div = document.createElement('div')

      let img = document.createElement('img')
      img.src = item.url
      img.style.width = '100%'
      img.style.height = "400px"

      let name = document.createElement('h1')
      name.innerText = item.name

      let rating = document.createElement('p')
      rating.innerText = item.rating

      let date = document.createElement('p')
      date.innerText = item.releaseDate

      div.append(img,name,rating,date)
      document.querySelector("#movies").append(div)
   })
}
