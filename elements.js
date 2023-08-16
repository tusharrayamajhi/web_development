// import { hellow } from "fun.js";
let btn = document.createElement("button");
btn.innerText = "click me";
document.querySelector("body").appendChild(btn);
function hello(){
    console.log("button was clicked");
}
btn.onclick = hello;
