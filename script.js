function Fullname(){
    window.location.href="tel:+919929203445";
}
// let Fullname=()=>{
//     window.location.href="mailto:hemendrasinghbpr@gmail.com";
// }
// console.log("fullname");

let button=document.querySelector(".button1");
let signup=document.querySelector(".container");
button.addEventListener("click",(event)=>{
    event.stopPropagation();
    signup.classList.toggle("s1");
})