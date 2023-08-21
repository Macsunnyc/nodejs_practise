const fs = require("fs")


exports.createNewUser = (req, res) => {
    let data = "";
    req.on("data", (chunk) => {
        data += chunk;
        console.log(data);
    })

    req.on("end", () => {
        fs.readFile("./user.json", "utf-8", (err, userData) => {
            if (err){
                res.statusCode = 500;
                res.end("An error occurred while creating a user")
                return;
            }
            const parsedUser = JSON.parse(userData);
            console.log(parsedUser);
            const parsedData = JSON.parse(data);
            parsedData.id = parsedUser.length + 1;
            const date = new Date().toISOString();
            parsedUser.createdAt = date;
            parsedData.updatedAt = date;
            parsedUser.push(parsedData);

            const newUser = JSON.stringify(parsedUser);

            fs.writeFile("./user.json", newUser, (err) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("An Error occured while adding user");
                    return;
                }
                res.statusCode = 201;
                res.end("User has been added successfully")
            })
        })
    })
}