// TODO: HTTP
// *The HTTP module allows developers to build applications that can send and receive HTTP requests and responses, enabling them to interact with web services, APIs, and other online resources. It's crucial for tasks like fetching data from a web server, sending data to a server, and creating web applications.

// todo: Key Concepts and Features of the HTTP Module:
// ^1.HTTP Clients: The module provides the ability to create HTTP clients that can make various types of requests to remote servers, such as GET, POST, PUT, DELETE, etc.

// ^2.HTTP Servers: The module also allows developers to create HTTP servers that can listen for incoming requests, process them, and send back responses. This is vital for building web applications and APIs.

//^Request and Response Objects: The HTTP module typically provides request and response objects that encapsulate all the details of an HTTP transaction, such as headers, content, status codes, and more.

const http = require("http");
// // TODO: properties
// const methods = http.METHODS;
// const status_code = http.STATUS_CODES
// console.log(methods);
// console.log(status_code)

// &Methods
// TODO: Making request
// const options = {
//   hostname : "www.google.com",
//   path: "/",
//   method: "GET",
// }

// const option2= new URL("www.google.com/?q=nodejs");
// console.log(option2);
// const myReq = http.request(options, (res) => {
//   console.log(`STATUS ${res.statusCode}`)
//   res.on("data", (chunk) => {
//     console.log(`Data: ${chunk}\n`);
//   })
//   res.on("end", () =>{
//     console.log("Data end... Processing data done!");
//   })
// });
// myReq.on("error", (err) => {
//   console.log(`REquest Error: ${err.message}`);
// })
// myReq.end();

// todo: CREATE SERVER
// ^syntax:
// *http.createServer((callback)).listen(port, host, callback)
// localhost | 127.0.0.1
http.createServer((request, response) =>{
  console.log(request)
  response.write("Hello World");
  response.write("Server is up and running")
  // Signals the server that all of the response header and
  // body has been sent
  response.end("this is the end of the response");
  // response.write("continue sending")
}) .listen(3000,()=>{
  console.log("Server is running")
}); // the server is listening on port 3000

const PORT = 8000;
const host = "127.0.0.1" || "localhost";
// // Create a listener
// const listener = (req, res) => {  
//   console.log(req.method);
//   // parse URI to show the entire url options
//   // console.log( new URL(`http:// ${host}: ${PORT}${req.url}`));
//   console.log(req.url);
//   res.writeHead(200, {'Content-Type': 'application/json'});
//   res.writeHead(JSON.stringify({message: "Welcome", company:"Learnuel Tech"}));
  
// }
// // Create a server
// const server = http.createServer(listener);
// server.listen(PORT, host, () =>{
//   console.log(`server is running on port ${host}: ${PORT}`);
// });


//  todo: Reading data
const server = http.createServer((req, res)=>{
  let data ="";
  console.log(req.method);
  console.log(req.url);
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    console.log("\n--------------Data Start---------");
    console.log(data);
    console.log("\n--------------Data End---------");
    res.end("Data Saved");
  })
});

server.listen(PORT, host, () => {
  console.log(`server is running on ${host}:${PORT}`);
})
