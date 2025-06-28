
var email = document.getElementById("email");

var password = document.getElementById("password");

var nameInput = document.getElementById("name");

var loginBtn = document.getElementById("loginbtn");

var signUpBtn = document.getElementById("signup");

var registerButton = document.getElementById("register");

var namelog = document.getElementById("namelog");

var deleteBtn = document.getElementById("delete");



loginBtn.addEventListener("click", login);

signUpBtn.addEventListener("click", register);

registerButton.addEventListener("click", toggleRegister);

deleteBtn.addEventListener("click", deletaccount);


alluserdata = [];


if (localStorage.getItem("allusers") === null) {

    localStorage.setItem("allusers", JSON.stringify(alluserdata));
}

function login(event) {

    event.preventDefault();

    emailvalid = email.value;

    passwordvalid = password.value;

    if (emailvalid === "" || passwordvalid === "") {

        alert("Please fill in all fields.");

        return;
    }

    alluserdata = JSON.parse(localStorage.getItem("allusers"));

    for (var i = 0; i < alluserdata.length; i++) {

        if (alluserdata[i].email === emailvalid && alluserdata[i].password === passwordvalid) {

            alert("Login successful!");

            localStorage.setItem("currentUser", alluserdata[i].name);

            showLoader();

            setTimeout(function () {

                window.location.href = "welcome/welcome.html";

            }, 1500);

            return;

        }

    }

    alert("Invalid email or password. Please try again.");

    clear();


}


function clear() {

    email.value = "";

    password.value = "";

}


function register(event) {

    event.preventDefault();

    namevalid = nameInput.value.trim();

    emailvalid = email.value;

    passwordvalid = password.value;

    if (emailvalid === "" || passwordvalid === "") {

        alert("Please fill in all fields.");

        return;
    }

    alluserdata = JSON.parse(localStorage.getItem("allusers"));

    for (var i = 0; i < alluserdata.length; i++) {

        if (alluserdata[i].email === emailvalid) {

            alert("Email already exists. Please use a different email.");

            return;

        }

    }

    var newUser = {

        name: namevalid,

        email: emailvalid,

        password: passwordvalid

    };

    alluserdata.push(newUser);

    localStorage.setItem("allusers", JSON.stringify(alluserdata));

    alert("Registration successful!");

    localStorage.setItem("currentUser", alluserdata[i].name);

    showLoader();

    setTimeout(function () {

        window.location.href = "welcome/welcome.html";

    }, 1500);

    clear();

}

function toggleRegister() {

    if (signUpBtn.classList.contains("d-none")) {

        signUpBtn.classList.remove("d-none");

        loginBtn.classList.add("d-none");

        namelog.classList.remove("d-none");

        registerButton.innerText = "Already have an account?";

    } else {

        signUpBtn.classList.add("d-none");

        loginBtn.classList.remove("d-none");

        namelog.classList.add("d-none");

        registerButton.innerText = "Don’t have an account?";

    }


}

function deletaccount() {

    var emailvalid = email.value.trim().toLowerCase();

    var passwordvalid = password.value.trim();

    if (emailvalid === "" || passwordvalid === "") {

        alert("Please fill in both email and password to delete your account.");

        return;
    }

    alluserdata = JSON.parse(localStorage.getItem("allusers"));

    for (var i = 0; i < alluserdata.length; i++) {

        if (alluserdata[i].email.toLowerCase() === emailvalid && alluserdata[i].password === passwordvalid) {

            alluserdata.splice(i, 1);

            localStorage.setItem("allusers", JSON.stringify(alluserdata));

            alert("Account deleted successfully.");

            clear();

            return;

        }
    }

    alert("Account not found. Please check your email and password.");

}

function showLoader() {

    document.getElementById("loader").style.display = "flex";
}

function hideLoader() {

    document.getElementById("loader").style.display = "none";

}






