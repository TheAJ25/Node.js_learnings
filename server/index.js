//With express creating server and routing

const express = require("express");
const app = express();

app.get('/', (req, res)=>{
  res.end("This is home page");
})

app.get('/new', (req, res) => {
  return res.end(`This is new page and you are ${req.query.age} years old ${req.query.name}.`);
});

app.get('/about', (req, res)=>{
  console.log(`The ${req.url} request recieved!`);
  return res.end("This is express about page!");
})

app.listen(8000, ()=>{
  console.log("Server is running!");
})





//With out express creating server using http request

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const myserver = http.createServer((req, res) =>{
//   if(req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()} ${req.url} request recieved\n`
//   const myurl = url.parse(req.url);
//   console.log(myurl);
//   fs.appendFile("log.txt", log, (err, data)=>{
//     switch(req.url){
//       case "/":
//         res.end("Home page");
//         break;
//       case "/about":
//         res.end("This is about page")
//         break;
//       case "/help":
//         res.end("This is help page")
//         break;
//       case "/signup":
//         if(req.method === "GET"){
//           res.end("This is signup form"); 
//         }
//         else if(req.method ==="POST"){
//           //DB Query
//           res.end("Success!");
//         }
//         break;
//       default:
//         res.end("404 Not Found!")
//     }
//   })
// })

// myserver.listen(8000, ()=> console.log("Server Started!"));