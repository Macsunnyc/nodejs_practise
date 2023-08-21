
//create a server to that accepts a request and writes a response in modules.

const http = require("http");

const server = http.createServer((req, res) => {
    let data ="";
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


module.exports = server;