
document.querySelector("#submitLogin").addEventListener('click',checkUser)

function checkUser(event){
   event.preventDefault()
   let userInfo = JSON.parse(localStorage.getItem("userInfo"))
   let login = document.querySelector("#login-form-div form")
   
   email = login.email.value
   password = login.password.value 
   console.log(email,password)

   let flag = false
   for(let i=0; i<userInfo.length; i++){
      if(email === userInfo[i].email && password === userInfo[i].password){
         flag = true
      }
      if(flag){
         alert('Login success')
         window.location.href = 'index.html'
         break
      }
   }
   if(flag === false){
      alert('invalid Credentials')
   }
   
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