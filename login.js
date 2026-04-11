function login() {
    let Email = document.querySelector("#Email").value;
    let password = document.querySelector("#password").value;

    let storedUser = localStorage.getItem("user");

    if (!storedUser) {
    alert("User Not Exist");
    } else {
    storedUser = JSON.parse(storedUser);


    }

    if (Email === storedUser.email && password === storedUser.password) {
        alert("Login successful");

        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Wrong Email or Password");
    }
}

    function forgotemailid(){
       let Email = prompt("Enter a Registered Email Id");
    
    let storedUser = localStorage.getItem("user");
    
    if(!storedUser){
        alert("User Not Exist");
        return;
    }
    
    storedUser = JSON.parse(storedUser);
    
    
    if(Email === storedUser.email){
        let NewEmail= prompt("Enter a New Email Id");

        if(!NewEmail){
            alert("Invalid Email");
            return;
        }
        
        storedUser.email= NewEmail;

        localStorage.setItem("user",JSON.stringify(storedUser));

        alert("Email Update Successfully");
    }else{
        alert("User not Found");
    }
}

function forgotpassword(){
    let Email = prompt("Enter a Registered Email Id");

    let storedUser = localStorage.getItem("user");
        if(!storedUser){
        alert("User Not Exist");
        return;
        }
    storedUser = JSON.parse(storedUser); 
    
        if(Email === storedUser.email){
        let Newpassword= prompt("Enter a New Password");
        let confirmpassword = prompt("Enter a confirmPassword");

        if(Newpassword !== confirmpassword){
            alert("Password Miss Match");
            return;
        }
        
        storedUser.password= Newpassword;

        localStorage.setItem("user",JSON.stringify(storedUser));

        alert("Password Update Successfully");
    }else{
        alert("User not Found");
    }

    
}





















// function login() {
//     isSignedUp = true;

//     signupPage.style.display = "block"; // signup page band
//     window.location.href="index.html"
//     btn.innerText = "Trade"; // button text change
// }
