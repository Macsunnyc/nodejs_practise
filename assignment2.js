const server = require("./assignment1");
const http = require("http")
const port = 8000;
const host = "localhost"
server.listen(port, host, () => {
    console.log("server is running ", `${port}`)
})

