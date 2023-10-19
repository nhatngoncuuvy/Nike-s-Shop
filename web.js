let btnLogin = document.querySelector(".btnlogin-popar");
let formLogin = document.querySelector(".wrapper-login");
let btnClose = document.querySelector(".btn-close");
let layoutOpacity = document.querySelector(".layoutOpacity");
let btnRegister = document.querySelector(".signup");
let registerLink = document.querySelector(".register-link");
let registerLinkLogin = document.querySelector(".signup__registerButton");

btnLogin.addEventListener("click", () => {
    formLogin.classList.add("show");
    layoutOpacity.classList.add("show");
})

btnClose.addEventListener("click", () => {
    formLogin.classList.remove("show");
    layoutOpacity.classList.remove("show");
})

registerLink.addEventListener("click", () => {
    btnRegister.classList.add("show");
    formLogin.classList.remove("show");
    layoutOpacity.classList.add("show");
})

registerLinkLogin.addEventListener("click", (e) => {
    formLogin.classList.add("show");
    btnRegister.classList.remove("show");
})
