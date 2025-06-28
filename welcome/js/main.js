


var name = localStorage.getItem("currentUser");

document.getElementById("message").innerHTML = "Welcome, " + (name ? name : "User");

var logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {

    localStorage.removeItem("currentUser");

    showLoader(); 

    setTimeout(function () {

        localStorage.removeItem("currentUser");

        window.location.href = "./../index.html"; 

    }, 1000); 

});

function showLoader() {

    document.getElementById("loader").style.display = "flex";

}

function hideLoader() {

    document.getElementById("loader").style.display = "none";
    
}



