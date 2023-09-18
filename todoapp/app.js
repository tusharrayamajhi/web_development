let title = document.querySelector(".title");
let desc = document.querySelector(".discrib");
let submit = document.querySelector(".btn");
let list = document.querySelector(".list");
submit.addEventListener("click",(event)=>{
    let item = document.createElement("li");
    let btn = document.createElement("button");
    let div = document.createElement("div");
    let des = document.createElement("p");
    div.classList.add("content");
    list.appendChild(div);
    btn.innerText = "delete";
    btn.classList.add("delete");
    item.innerText = title.value;
    div.appendChild(item);
    div.appendChild(des);
    des.innerText = desc.value;
    div.appendChild(btn);
    title.innerText ="";
desc.innerText = "";
    btn.addEventListener("click", (event) => {
        let par = event.target.parentElement;
        par.remove();
    });
});