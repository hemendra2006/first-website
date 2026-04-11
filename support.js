// 🔹 Form submit
function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
    }

    // demo save (localStorage)
    let supportData = {
        name,
        email,
        message
    };

    localStorage.setItem("supportRequest", JSON.stringify(supportData));

    alert("Your request has been submitted!");
    
    // clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}


// 🔹 FAQ toggle
function toggleFAQ(element) {
    let p = element.nextElementSibling;

    if (p.style.display === "block") {
        p.style.display = "none";
    } else {
        p.style.display = "block";
    }
}