const http = require("http");

const PORT = 5000;
const {
    createNewUser,
} = require("./bookHandler")

const server = http.createServer((req, res) => {
    const url = req.url;
    const pasrsedUrl = new URL(`http://localhost:${PORT}${url}`);
    const endpoint = pasrsedUrl.pathname;
    const method = req.method;

    switch (method) {
        case "POST":
            if (endpoint === "/books") {
                createNewUser(req, res);
            }
            break;
    }
    
})

server.listen(PORT, () => {
    console.log("Server is up and running")
})