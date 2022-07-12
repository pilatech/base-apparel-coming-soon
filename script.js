const form = document.querySelector('form');
const input = document.querySelector('input')
const errorMsg = document.querySelector('.error-message');
console.log(form)
let error = ''

form.addEventListener('submit', e => {
 let email = e.target.email.value
 let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
 if(!regex.test(email)){
  error = "Please provide a valid email!"
 } 

 if(error){
  errorMsg.textContent = error
  input.classList.remove('invalid')
  input.classList.add('invalid')
 }

 e.preventDefault()
})
