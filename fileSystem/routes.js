const http = require("http")
const fs = require("fs");


const users = [
  {id:1,name:"Pravin"},
  {id:2, name:"Ajay"}
]

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");

    // routing logic

    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200);
        res.end(JSON.stringify({message:"Welcome to Node.js API!"}));
    }else if(req.url === "/users" && req.method === "GET"){
        res.writeHead(200);
        res.end(JSON.stringify(users))
    }else if(req.url === "/user" && req.method === "POST"){
        let body = "";
        req.on("data",chunk => {
            body += chunk.toString();
        })

        req.on("end",()=>{
            const newUser = JSON.parse(body);
            users.push(newUser);
            res.writeHead(201);
            res.end(JSON.stringify({message:"User added", users}))
       })
    }else{
        res.writeHead(404);
        res.end(JSON.stringify({error:"Not Found"}))
    }

})


server.listen(4000, ()=>{
    console.log("Server is running");
    
})