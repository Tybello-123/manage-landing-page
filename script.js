const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

const formEl = document.getElementById("form");
let newsletterEl = document.getElementById("newsletter");


formEl.addEventListener("submit", e => {
    e.preventDefault();
    console.log("submit");
})




//displaying the login modals for the sections

const loginSection = document.getElementById("login-modal")

document.getElementById('getStarted').addEventListener("click", () => {

  loginSection.classList.add("block");
  loginSection.classList.remove("hidden");
})

document.getElementById('getStarted2').addEventListener("click", () => {

  loginSection.classList.add("block");
  loginSection.classList.remove("hidden");
})

document.getElementById('getStarted3').addEventListener("click", () => {

  loginSection.classList.add("block");
  loginSection.classList.remove("hidden");
})

document.getElementById('getStarted4').addEventListener("click", () => {

  loginSection.classList.add("block");
  loginSection.classList.remove("hidden");
})

document.getElementById('close-btn').addEventListener("click", () => {
  loginSection.classList.remove("block");
  loginSection.classList.add("hidden");
})


//implemting the password button
const passwordInput = document.getElementById('password');
const eye = document.getElementById("eye")


eye.addEventListener("click", function(){
  this.classList.toggle("fa-eye-slash")

  const type = passwordInput.getAttribute("type") === "password" ? 
  "text": "password"
  passwordInput.setAttribute("type",type);
  
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
