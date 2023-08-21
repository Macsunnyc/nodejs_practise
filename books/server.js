const http = require("http");

const {
  getAllBooks,
  getBook,
  notFound,
  updateBook,
  deleteBook,
  addNewBook,
  createUser,
} = require("./handler");

const PORT = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const parsedUrl = new URL(`http://localhost:${PORT}${url}`);
  const endpoint = parsedUrl.pathname;
  // const params = parsedUrl.searchParams;
  const method = req.method;

  switch (method) {
    case "GET":
      if (endpoint === "/books") {
      //   const hasId = params.has("id");
      //   if (hasId) {
      //     getBook(req, res, params);
      //   } else {
          getAllBooks(req, res);
        }
      // } else {
      //   notFound(res, endpoint);
      // }
      break;
    // case "POST":
    //   if (endpoint === "/books") {
    //     addNewBook(req, res);
    //   } 
    //   //else {
    //   //   notFound(res, endpoint);
    //   // }
    //   break;
      case "POST":
        if(endpoint === "/user"){
          createUser(req, res);
        }
        break;
    // case "PUT":
    //   if (endpoint === "/books") {
    //     updateBook(req, res);
    //   } else {
    //     notFound(res, endpoint);
    //   }
    //   break;
    // case "DELETE":
    //   if (endpoint === "/books") {
    //     deleteBook(req, res, params);
    //   } else {
    //     notFound(res, endpoint);
    //   }
    //   break;
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
