let btn = document.getElementById("authBtn");

// check user login state
let user = localStorage.getItem("user");

if (user) {
    // ✅ After signup
    btn.innerText = "Trade";
    btn.onclick = function () {
        window.location.href = "charts.html";
    };
} else {
    // ✅ Before signup
    btn.innerText = "Sign Up";
    btn.onclick = function () {
        window.location.href = "signup.html";
    };
}