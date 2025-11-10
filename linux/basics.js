// console.log("00",process.pid);
// console.log("01",process.ppid);
// console.log("02",process.cwd());
// console.log("03",process.argv);
// console.log(process.memoryUsage());
// console.log(process.uptime(),"seconds");


const net = require("net");

const server = net.createServer((socket)=> {
  console.log("Client conected:", socket.remoteAddress);
  socket.write('hello from server!\n');

  socket.on("data",(data) => {
    console.log("Recieved:", data.toString());
    socket.write("Echo" + data)
    
  })

  socket.on("end", ()=> console.log("CLient disconnected")

  )
  
}
)


server.listen(3000, () => console.log("Server is running on port 3000")
)