let btn = document.querySelectorAll('.num');
let res = document.querySelector('input');
function click(){
    let b = document.querySelector(".num").innerHTML;
    res.value = b;
}
for(bt of btn){
btn.onclick = click;
}

