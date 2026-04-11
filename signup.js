function Signup() {

    let fullName = document.getElementById("fullName").value;
    let Email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (fullName === "" || Email === "" || password === "" || confirmPassword === "") {
        alert("Please Signup complete");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password Miss Match");
        return;
    }

    let user = {
        name: fullName,
        email: Email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));


    
    
    
    // 4. Next page
    window.location.href = "index.html";
}













//     // Signup complete hone par
// function completeSignup() {
//     isSignedUp = true;

//     signupPage.style.display = "block"; // signup page band
//     window.location.href="index.html"
//     btn.innerText = "Trade"; // button text change
// }












