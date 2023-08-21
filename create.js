//first way of creating server

const http = require("http")

http.createServer((req, res) => {
res.write("omor")
res.end()
}).listen(500, () => {
    console.log("server 1 is running")
})

//second way of creating server
const callback = (req, res) => {
res.write(`welcome`);
res.end();
}

http.createServer(callback).listen(9000, () => {
    console.log("server 2 is running")
})

//third way of creating server

const server = http.createServer(callback);

server.listen(8000, () => {
    console.log("server 3 is running")
})


