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
let student = {
    name:"tushar Rayamajhi",
    age:20,
    marks:80
};
student.city = "butwal";
student.age = 21;
student.marks = 'A';
delete student.name;
console.log(student)