// const http = require("http")

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/plain"})
//     res.end("Hey there")
// })

// server.listen(4000,()=>{
// console.log("Server running");

// })


// const path = require("path")

// console.log(__dirname);
// console.log(__filename);

// const filePath = path.join(__dirname,"data","info.txt");
// console.log("join path", filePath);

// console.log(path.basename(filePath));
// console.log("ext",path.extname(filePath));
// console.log("ext",path.dirname(filePath));


// const os = require("os")

// console.log(os.type());
// console.log(os.type());
// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());
// console.log(os.homedir());


const crypto = require("crypto")

const password = "pravin"
const hashPass = crypto.createHash('sha256').update(password).digest("hex")
console.log(hashPass);
