const express= require("express");
const http=require("http");
const path=require("path");
const morgan=require("morgan");
const socketIo=require("socket.io");
const app=express();
const server= http.createServer(app);
const io= socketIo(server);


app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(morgan("tiny"));



app.get("/",function(req,res){
    res.render("index");
})


io.on("connection",function(socket){
    
   socket.on("message",function(msg){
     socket.broadcast.emit("rmessage",msg);
   })


})


server.listen(3000);




