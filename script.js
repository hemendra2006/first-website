// let btn = document.getElementById("authBtn");
// let Btn = document.getElementById("authBTN");

// // check user login state
// let user = localStorage.getItem("user");

// if (user) {
//     // ✅ After signup
//     btn.innerText = "Trade";
//     btn.onclick = function () {
//         window.location.href = "chart.html";
//     };
//     Btn.innerText = "Trade";
//     Btn.onclick = function () {
//         window.location.href = "chart.html";
//     };
// } else {
//     // ✅ Before signup
//     btn.innerText = "Sign Up";
//     btn.onclick = function () {
//         window.location.href = "signup.html";
//     };
//     Btn.innerText = "Sign Up";
//     Btn.onclick = function () {
//         window.location.href = "signup.html";
//     };
// }

let btn = document.getElementById("authBtn");
let Btn = document.getElementById("authBTN");

// check user login state
let user = localStorage.getItem("user");

// function to detect mobile
function isMobile() {
    return window.innerWidth <= 768;
}

if (user) {
    // ✅ After signup
    btn.innerText = "Trade";
    btn.onclick = function () {
        if (isMobile()) {
            window.location.href = "home.html";   // mobile
        } else {
            window.location.href = "chart.html";  // desktop
        }
    };

    Btn.innerText = "Trade";
    Btn.onclick = function () {
        if (isMobile()) {
            window.location.href = "home.html";
        } else {
            window.location.href = "chart.html";
        }
    };

} else {
    // ✅ Before signup
    btn.innerText = "Sign Up";
    btn.onclick = function () {
        window.location.href = "signup.html";
    };

    Btn.innerText = "Sign Up";
    Btn.onclick = function () {
        window.location.href = "signup.html";
    };
}


// let icon = document.querySelector("#icon");
// let mode = document.querySelector("#mode");

// let curr = "off";
// icon.addEventListener("click", function (){
//     if(curr=== "off"){
//         icon.innerHTML="<i class='fa-solid fa-toggle-on'></i>";
//         curr="on";
        
//     }else{
//         icon.innerHTML="<i class='fa-solid fa-toggle-off'></i>";
//         curr="off";
//     }
//     mode.classList.toggle("dark");
// });



let btn2 = document.getElementById("authbtn");

if (user) {
    btn2.style.display = "none";
}

function updateLink() {
    let btn = document.getElementById("myBtn");

    if (window.innerWidth <= 768) {
        btn.href = "mobile.html";
    } else {
        btn.href = "desktop.html";
    }
}

// page load pe run
updateLink();

// resize pe bhi run
window.addEventListener("resize", updateLink);

