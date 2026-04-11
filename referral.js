// 🔹 Generate referral link
let user = localStorage.getItem("user");

if (!user) {
    alert("Please signup first");
    window.location.href = "signup.html";
}

let refLink = document.getElementById("refLink");

// simple fake referral link
refLink.value = window.location.origin + "https://www.delta.exchange/?code=VXUSZS" ;


// 🔹 Copy function
function copyLink() {
    refLink.select();
    document.execCommand("copy");
    alert("Link copied!");
}


// 🔹 Fake stats (demo purpose)
let totalRef = localStorage.getItem("totalRef") || 0;
let earnings = totalRef * 50; // ₹50 per referral

document.getElementById("totalRef").innerText = totalRef;
document.getElementById("earnings").innerText = earnings;