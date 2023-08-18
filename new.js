let box = document.querySelector("#outer");
for(let i =0;i<8;i++){
    let b = document.createElement("div");
    b.innerText = i;
    b.setAttribute("class","innerbox");
    box.appendChild(b);
}