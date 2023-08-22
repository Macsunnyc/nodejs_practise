const fs = require("fs");
const path = require("path");
const promiseFs = fs.promises;


// const book = {
//   title:"dfkjkdfj",
//   author: "Learn",
//   createdAt: new Date().toISOString(),
//   updatedAt: new Date().toISOString(),
// }
exports.addNewBook = (req, res) => {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
    console.log(data);
  });

  req.on("end", () => {
    fs.readFile("./books.json", "utf-8", (err, bk) => {
      if (err) {
        res.statusCode = 500;
        res.end("An Error occured while try to add this book");
        return;
      }
      const parsedBooks = JSON.parse(bk);
      console.log(parsedBooks);
      const parsedData = JSON.parse(data);
      parsedData.id = parsedBooks.length + 1;
      const date = new Date().toISOString();
      parsedData.creadedAt = date;
      parsedData.updatedAt = date;
      parsedBooks.push(parsedData);

      const newBook = JSON.stringify(parsedBooks);
      
      fs.writeFile("./books.json", newBook, (err) => {
        if (err) {
          res.statusCode = 500;
          res.end("An error occured while adding the book");
          return;
        }

        res.statusCode = 201;
        res.end("Book has been added successfully");
      });
    });
  });
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await promiseFs.readFile(path.join(__dirname, './books.json'));
    res.writeHead(200, { "Content-Type": "application/json" });

    const bookView = JSON.parse(books.toString());
    console.log(bookView);
    res.end(books.toString());
  } catch (err) {
    console.log(`Error getting book: ${err.message}`);
    res.statusCode = 500;
    res.end("Sorry! Error occured while retrieving data");
  }
};
const checkPassword = (password) =>{
  if(password === "") return false;
  if(password.length <8) return false
  else return true;
}
exports.createUser =  (req, res) => {
  let data = "";
  req.on("data", (info) =>{
    data +=info;
  });
  req.on("end", ()=>{
    const newUser = JSON.parse(data);
    console.log(newUser.length)
  if(checkPassword(newUser.password.trim()) === false){
    res.statusCode = 400;
  return res.end("Invalid password");
  }
  newUser.id= Math.random().toString().substring(2);
console.log(newUser, "new user");
  res.statusCode = 201
  res.end("User created successfully")
  
})
}
// exports.getBook = (req, res, params) => {
//   const hasId = params.has("id");

//   if (!hasId || (id = null)) {
//     res.statusCode = 400;
//     res.end("Please supply the book ID as parameter");
//     return;
//   }

//   fs.readFile("./books.json", "utf-8", (err, data) => {
//     if (err) {
//       res.statusCode = 500;
//       res.end(
//         "An error occured while updating the book, please enter correct ID try again"
//       );
//       return;
//     }
//     const id = params.get("id");
//     const books = JSON.parse(data);
//     const userData = books.find((book) => book.id === parseInt(id));

//     const userDataObj = JSON.stringify(userData);
//     console.log(userDataObj);
//     if (!userData) {
//       res.statusCode = 404;
//       res.end(
//         "Sorry, we can't find the book you're looking for. Please try again with another id"
//       );
//       return;
//     }

//     const reqBook = JSON.stringify(userDataObj.toString());
//     const bookReq1 = JSON.parse(reqBook.toString());
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(bookReq1);
//   });
// };

// exports.updateBook = (req, res) => {
//   let userData = "";
//   req.on("data", (chunk) => {
//     userData += chunk;
//     console.log(userData);
//   });

//   req.on("end", () => {
//     const userDataObj = JSON.parse(userData.toString());
//     console.log(userDataObj);
//     if (!userDataObj.id) {
//       res.statusCode = 400;
//       res.end("Please supply the ID of book to be edited");
//       return;
//     }

//     fs.readFile("./books.json", "utf-8", (err, data) => {
//       if (err) {
//         res.statusCode = 500;
//         res.end(
//           "An error occured while updating the book, please try again later"
//         );
//         return;
//       }

//       const books = JSON.parse(data);
//       const userData = books.find((book) => book.id === userDataObj.id);

//       if (!userData) {
//         res.statusCode = 404;
//         res.end(
//           "Sorry, we can't find the book you're looking for. Please try again with another id"
//         );
//         return;
//       }

//       for (const key in userDataObj) {
//         userData[key] = userDataObj[key];
//       }

//       userData.updatedAt = new Date().toISOString();
//       const oldBook = books.filter((book) => book.id != userDataObj.id);

//       const newBook = [...oldBook, userData];
//       const newBookToString = JSON.stringify(newBook);

//       fs.writeFile("./books.json", newBookToString, (err) => {
//         if (err) {
//           res.statusCode = 500;
//           res.end(
//             "An error occured while trying to update the book, please try again later"
//           );
//           return;
//         }
//         res.end("The book has been update Successfully");
//       });
//     });
//   });
// };

// exports.deleteBook = (req, res, params) => {
//   const hasId = params.has("id");
//   if (!hasId) {
//     res.statusCode = 400;
//     res.end("Please supply the book ID as parameter");
//     return;
//   }
//   const id = params.get("id");
//   fs.readFile("./books.json", "utf-8", (err, data) => {
//     if (err) {
//       res.statusCode = 500;
//       res.end("An error occurred while deleting the book");
//       return;
//     }
//     const books = JSON.parse(data);
//     const newBook = books.filter((book) => book.id !== parseInt(id));
//     const newBookToString = JSON.stringify(newBook);
//     fs.writeFile("./books.json", newBookToString, (err) => {
//       res.statusCode = 500;
//       res.end("An error occurred while deleting the book");
//       return;
//     });
//     res.end("The book has been deleted successfully");
//   });
// };

// exports.notFound = (res, endpoint) => {
//   const msg = `Sorry! The endpoint ${endpoint} doesn't exist on our server.`;
//   res.statusCode = 404;
//   res.end(msg);
// };
