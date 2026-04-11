let user = localStorage.getItem("user");
user = JSON.parse(user);

if(!user){
    alert("No user found! Please login first.");
    window.location.href = "login.html";
}
    

// Data show karna
document.getElementById("name").innerText = user.name;
document.getElementById("email").innerText = user.email;

// Logout function
function logout(){
    localStorage.removeItem("user");
    alert("Logged out successfully");
    window.location.href = "index.html";
}