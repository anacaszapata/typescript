
interface Book {

  name: string;

  author: string;

  pages: number;
}

function displayBookDetails(book:Book):void {
    console.log(`Name:${book.name},Author:${book.author},Pages:${book.pages}`); 
}
const myBook: Book ={name: "this end with us", author:"Collen", pages:1877};
displayBookDetails(myBook);
//@ts-check
    