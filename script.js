let btn = document.querySelector(".button1");

// 🔘 click pe
btn.onclick = function () {

    if (btn.innerText === "Start") {
        btn.innerText = "Trade";
        localStorage.setItem("Start", "done");
        console.log("Saved:", localStorage.getItem("Start")); // debug
    } else {
        window.location.href = "chart.html";
    }

};


let icon = document.querySelector("#icon");
let mode = document.querySelector("#mode");

let curr = "off";
icon.addEventListener("click", function (){
    if(curr=== "off"){
        icon.innerHTML="<i class='fa-solid fa-toggle-on'></i>";
        curr="on";
        
    }else{
        icon.innerHTML="<i class='fa-solid fa-toggle-off'></i>";
        curr="off";
    }
    mode.classList.toggle("dark");
});

