
function Book(title,author,page,read){
    this.title=title; 
    this.author=author; 
    this.page=page; 
    this.read=read; 
    /*Put a function into the constructor that can report the book info like so:
    theHobbit.info();  "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet" */
    this.info=function(){
        return `The ${this.title} by ${this.author}, ${this.page} pages, ${this.read}`
    };
}
 /*books will be added as objects to this array 
 [book{title:"Hobbit",author:"J.R.R tolkien"},book2{title:"player one",author"Ernest Cline""}]*/
const myLibrary =[];

function addBookToLibrary(...bookItem){
    //accepts an indefinite number of books and adds books to myLibrary array 
    myLibrary.push(bookItem) // push the book objects into the array
    return myLibrary; // return array containing the books
}



// make new books and shows the content of the books
 const book1= new Book("Hobbit","J.R.R Tolkien",295,"not read yet");
 console.log(book1)
 
 const book2= new Book("Player One","Ernest Cline",614,"yes I read it");
 console.log("\n ",book2)

 
console.log(addBookToLibrary(book1,book2)); // pass the new books to the function that will add it to my library
console.log("this is what i have in my personal library", myLibrary) // shows what I have in my array
console.log(book1.info())//log info about the book
console.log(book2.info())//log info about the book
