// let box = document.querySelector("#outer");
// for(let i =0;i<8;i++){
//     let b = document.createElement("div");
//     b.innerText = i;
//     b.setAttribute("class","innerbox");
//     box.appendChild(b);
// }
// let fav = "avatar";
// let guess = prompt("guess a movie name");
// while(guess != fav && guess != "quit"){
//     guess = prompt("Try again");
// }
// if(guess == fav){
//     console.log("congrat");
// }else{
//     console.log("you quit");
// }
// let arr = [[1,2,3],[2,3,4],[4,5,6]];
// for(i of arr){
//     for(j of i){
//         console.log(j);
//     }
// }
// for(let i =0;i<arr.length;i++){
//     for(let j = 0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
//     console.log("\n");
// }
// let tod = [];
// let task = prompt("enter a task ");
// while(true){
//     if(task == "quit"){
//         console.log("you quit");
//         break;
//     }else if(task == "add"){
//         let add = prompt("add a task");
//         tod.push(add);
//     }else if(task == "list"){
//         for(let i = 0;i<tod.length;i++){
//             console.log(tod[i]);
//         }

//     }else if( task == "delete"){
//         let d = prompt("enter a index number");
//         tod.splice(d,1);
//     }else{
//         console.log("wrong task");
//     }
//     task = prompt("enter a task");
// }
// let student = {
//     name:"tushar Rayamajhi",
//     age:20,
//     marks:80
// };
// student.city = "butwal";
// student.age = 21;
// student.marks = 'A';
// delete student.name;
// console.log(student)
// const student = [
//     {
//         name:"tushar raymajhi",
//         class:"bachelor",
//         roll:35
//     },
//     {
//         name:"ram",
//         class:"bachelor",
//         roll:2
//     }
// ];
// let num = prompt("enter a number");
// let random = Math.floor(Math.random() * num)+1;
// let guess = prompt(`Guess a number between 1 to ${num}`);
// while(true){
//     if(random > guess){
//         guess = prompt("enter number is small guess again")
//     }else if(random < guess){
//         guess = prompt("enter number is large guess again");
//     }else if(random == guess){
//         console.log(   `you guess a correct ${guess}`);
//         break;
//     }else if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
// }
// function roleadice(){
//     console.log(`dice number = ${Math.floor(Math.random()*6)+1}`);
// }
// function printname(name){
//     console.log(name);
// }
// printname("tushar");
// function mux(num){
//     for(let i = 1;i<=10;i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }
// mux(5);

// function from1ton(n){
//     if(n == 0){
//         return n;
//     }
//     let a = from1ton(n-1);
//     return a+n;
// }
// console.log(from1ton(5));

// function concatstr(arr){
//     let str = "";
//     for(let i = 0;i<arr.length;i++){
//         str += arr[i];
//     }
//     return str;
// }
// let arr = ["tushar", "rayamajhi"];
// console.log(concatstr(arr));

// const sum = (a,b) => a+b;
// console.log(sum(4,5));

// console.log("hi");
// setInterval(() => {
//     console.log("hellow world");
// }, 4000);
// console.log("hellow");

// const student = {

//     name:"tusahr",
//     marks:80,
//     getname : function(){
//         console.log(this);
//         console.log(this.name);
//     },
//     getmakrs : ()=>{
//         console.log(this);
//         console.log(this.marks);
//     }

// }
// console.log(student.getname());
// console.log(student.getmakrs());

// const squar = (n) => n*n;
// console.log(squar(4));


let id = setInterval(()=>{
    console.log("helow world");
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("exits");
},10000);