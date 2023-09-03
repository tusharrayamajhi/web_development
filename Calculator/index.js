let btn = document.querySelectorAll(".num");
let res = document.querySelector("input");
let res2 = document.querySelector("#res2");
let str = "";
let a = '';
res.disabled = true;
res2.disabled = true;
btn.forEach((btn) => {
    btn.addEventListener('click', () => {
    if(btn.textContent === "="){
        a = eval(a);
        res2.value = a;
    }else if(btn.textContent === "AC")
    {
        str = "";
        a = '';
        res2.value = "";
        res.value = "";
    }else{
        a += btn.textContent;
        res.value = a;
    }
    });
});


