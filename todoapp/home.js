let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function (){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";
});