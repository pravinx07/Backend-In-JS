// import fs from "fs"
const fs = require("fs")

// fs.writeFile("fileSystem/example.txt","Hello pravin", (err)=>{
//     if(err){
//         console.error("error writing file",err)
//     }else{
//         console.log("file writing successfully");
        
//     }
// })
function fsfile(){

    try {
        fs.writeFile("fileSystem/script.js","console.log(Pravin)",()=>{})
        
        console.log("file written suceesfully");

        fs.appendFile("fileSystem/script.js","\n//This is New Line",(err)=>{
            if(err) console.error(err)
            else console.log("Data Appendes");
            
        })
        
    } catch (error) {
        console.error("Error writing file:",error)
    }
}

fsfile()

function readFIle(){
    fs.readFile("fileSystem/script.js","utf-8",(err,data)=>{
        if(err){
            console.error("fails",err)
        }else{
            console.log(data);
            
        }
    })
}

// readFIle()

// fs.unlink("fileSystem/script.js",(err)=>{
//     if(err) console.log(err);
//     else console.log("done");
    
    
// })

if(fs.existsSync("fileSystem/script.js")){
    console.log("exist");
    
}else{
    console.log("not found");
    
}