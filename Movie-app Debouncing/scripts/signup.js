
let userInfo = JSON.parse(localStorage.getItem("userInfo")) || []

document.querySelector("#submitSign").addEventListener('click',addUser)

function addUser(event){
   event.preventDefault()
   let signup = document.querySelector("#signup-form-div form")
   
   let obj = {
      name : signup.name.value,
      contact : signup.contact.value,
      email : signup.email.value,
      password : signup.password.value 
   }
   let check = checkCredential(obj)
   if(check){
      userInfo.push(obj)
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      window.location.href = "Login.html"
   }
   console.log(obj)
   console.log(check)


}

function checkCredential(obj){
   if(obj.name === ""){
      alert('Enter valid name')
      return false
   }
   else if(obj.contact === "" || obj.contact.length !== 10){
      alert('Enter valid contact')
      return false
   }
   else if(obj.email === "" ){
      alert('Enter valid email')
      return false
   }
   else if(obj.password === "" || obj.password.length < 8){
      alert('Enter valid password')
      return false
   }
   else{
      alert('Signup Successful')
      alert('Direct to login page')
      return true
   }
}