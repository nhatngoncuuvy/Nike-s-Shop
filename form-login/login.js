// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnSubmitLogin = document.querySelector(".btn-login");
const avatar = document.querySelector(".avatar");

// validation form login

const user = {
    username: "admin",
    password: "123",
};

let json = JSON.stringify(user);
localStorage.setItem("admin", json);

btnSubmitLogin.addEventListener("click", () => {
    if (inputUsername.value === "" || inputPassword.value === "") {
        alert("Please don't leave fields empty");
    } else {
        const user = JSON.parse(localStorage.getItem(inputUsername.value));
        if (user && user.username === inputUsername.value && user.password === inputPassword.value) {
            if (inputUsername.value === 'admin' && inputPassword.value === '123') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'login.html';
            }
            alert("Login is successful");
        } else {
            alert("Login failed");
        }
    }
});


// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnSignUp = document.querySelector(".signup__signInButton");


// validation form register and register user local storage

btnSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        inputUsernameRegister.value === "" ||
        inputPasswordRegister.value === ""
    ) {
        alert("Please don't empty");
    } else {
        // array user
        const user = {
            username: inputUsernameRegister.value,
            password: inputPasswordRegister.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(inputUsernameRegister.value, json);
        alert("Register is success");
    }
});