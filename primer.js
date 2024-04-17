function displayBookDetails(book) {
    console.log("Name:".concat(book.name, "Author:").concat(book.author, "Pages:").concat(book.pages));
}
var myBook = { name: "this end with us", author: "Collen", pages: 1877 };
displayBookDetails(myBook);
