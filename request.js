const http = require("http");
// todo: POST DATA
const data = JSON.stringify({
  name: "learnuel",
  package: "Node js",
  date: new Date().toISOString(),
});

const options = {
  hostname: "localhost",
  host: "localhost:8000",
  port:"8000",
  pathname:"/",
  method: "POST",
  headers: {
    "content-type": "application/json",
    "content-length": data.length,
  }
}

const req = http.request(options, (res) => {
  let data = "";
  console.log(`Status code: ${res.statusCode}`);
  console.log(`Status message: ${res.statusMessage}`);
console.log(`Headers: ${JSON.stringify(req.headers)}`)
  res.setEncoding("utf-8");
  res.on("data", (chunk) =>{
    data +=chunk;
  })
  res.on("end", ()=> {
    console.log("\n----- data start------\n");
    console.log(data);
    console.log("\n----- data end------\n");
  })
})

req.write(data); // send data using the write method of the request method
req.end();