let btn = document.getElementById("authBtn");
let Btn = document.getElementById("authBTN");


let user = localStorage.getItem("user");


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

