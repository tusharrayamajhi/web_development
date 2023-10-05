let express = require("express");
let app = express();
let path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static("public"));
app.listen(8080,()=>{
    console.log("listining");
});
app.get("/",(req,res)=>{
    res.send("this is root page");
});
app.get("/todo",(req,res)=>{
    res.render("index");
});
app.get("/todo/help",(req,res)=>{
    res.send("this is help page");
});
app.get("/:username",(req,res)=>{
    let {username} = req.params;
    res.render("hello",{username});
});