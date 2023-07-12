const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

const newsletterForm = document.getElementById("form");
let newsletterEl = document.getElementById("newsletter");


newsletterForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("submit");
})




//displaying the login modals for the sections

const signUpSection = document.getElementById("signup-modal")

// document.querySelectorAll('#getStarted','#getStarted2').addEventListener('click', () => {
  
//   signUpSection.classList.add("block");
//   signUpSection.classList.remove("hidden");
// })

document.getElementById('getStarted').addEventListener("click", () => {

  signUpSection.classList.add("block");
  signUpSection.classList.remove("hidden");
})

document.getElementById('getStarted2').addEventListener("click", () => {

  signUpSection.classList.add("block");
  signUpSection.classList.remove("hidden");
})

document.getElementById('getStarted3').addEventListener("click", () => {

  signUpSection.classList.add("block");
  signUpSection.classList.remove("hidden");
})

document.getElementById('getStarted4').addEventListener("click", () => {

  signUpSection.classList.add("block");
  signUpSection.classList.remove("hidden");
})

document.getElementById('signup-close').addEventListener("click", () => {
  signUpSection.classList.remove("block");
  signUpSection.classList.add("hidden");
})


//implemting the password button
const passwordInput = document.getElementById('password');
const eye = document.getElementById("eye");

eye.addEventListener("click", function(){
  this.classList.toggle("fa-eye-slash")
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
  passwordInput.setAttribute("type", type)
})



//using swiper js 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// const loginModal = document.getElementById('login-modal')
// //login element
// document.getElementById('login-modal').addEventListener('click' , () => {
//   signUpSection.remove();
  
//   loginModal.classList.remove = "hidden"
//   loginModal.classList.add ="block"
  


// })


// // //form validation
// const username = document.getElementById('name');
// const email = document.getElementById('email');
// const password = document.getElementById('password');



// const isValidEmail = email => {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// signUpSection.addEventListener('submit', e => {
//   e.preventDefault();

//   validateInputs();
// })

// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');


//   errorDisplay.innerText = message;
//   inputControl.classList.remove('success');
//   inputControl.classList.add('error');

// }

// const setSuccess = element => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = "";
//   inputControl.classList.add('success');
//   inputControl.classList.remove('error');

// }

// const validateInputs = () => {
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();


//   if(usernameValue === ''){
//     setError(username, 'Username is required');
//   }else{
//     setSuccess(username);
//   }

//   if(emailValue === ''){
//     setError(email, 'Email is required');
//   }else if(!isValidEmail(emailValue)) {
//     setError(email, 'Provide email address');
//   }else{
//     setSuccess(email);
//   }

//   if(passwordValue = ''){
//     setError(password, 'password is required')
//   }else if (passwordValue.length < 8){
//     setError(password,'Password must be at least 8 characters')
//   }else{
//     setSuccess(password)
//   }

// }

