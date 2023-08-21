const http = require("http");

const data = {
    username: "Macsunny C. Kingsley",
    password: "1234",
    date: "12/7/2023"

}

const options = {
    host: "localhost",
    hostname: "localhost:8000",
    port: "8000",
    pathname: "/",
    method: "POST",
    headers: {
        "content-type": "application/json",
        "content-length": data.length,
    }

}

