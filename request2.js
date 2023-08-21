// const http = require("http")

// const data = JSON.stringify({
//     username: "Macsunny",
//     password: "123456789",
//     age: "12"
    
// });

// const options = {
//     hostname: "localhost",
//     host: "localhost:8000",
//     port: "8000",
//     pathname: "/",
//     method: "POST",
//     headers: {
//         "content-type": "application/json",
//         "content-length": data.length,
//     }
// }

// const req = http.request(options, (res) => {
//     let data = "";
//     console.log(`status: code: ${res.statusCode}`);
//     console.log(`status message: ${res.statusMessage}`);

//     console.log(`Headers: ${JSON.stringify(res.headers)}`)
//     res.setEncoding("utf-8");
//     res.on("data", (chunk) => {
//         data += chunk;
//     })
//     res.on("end", () => {
//         console.log("\n----- data start------\n");
//         console.log(data);
//         console.log("\n----- data end------\n");
//     })
// })

// req.write(data);
// req.end();




//create a server


const http = require("http")
const port = 8000;
const host = "localhost"

const server = http.createServer((res,req) => {
    res.write("server is up")
    res.end();
});

server.listen(port, host, () => {
    console.log("server is running")
});