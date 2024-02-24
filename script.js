
function Book(title,author,page,read){
    this.title=title; 
    this.author=author; 
    this.page=page; 
    this.read=read;
    this.info=function(){
        return `The ${this.title} by ${this.author} , ${this.page} pages, ${this.read}`
    };
     
}

 /*books will be added as objects to this array 
 [book{title:"Hobbit",author:"J.R.R tolkien"},book2{title:"player one",author"Ernest Cline""}]*/
const myLibrary =[];

function addBookToLibrary(...bookItem){
    //accepts an indefinite number of books and adds books to myLibrary array 
    // spread the array of books,so each book gets added properly...better than using a loop to manually add each of them to myLibrary
    myLibrary.push(...bookItem) 
    return myLibrary; // return array containing the books
}



// making new books
 const book1 = new Book("Hobbit","J.R.R Tolkien",295,"not read yet");
 
 const book2 = new Book("Player One","Ernest Cline",614,"yes I read it");

 const book3 = new Book("Lost Light","Michael Connelly",385,"not read yet");

 const book4 = new Book("Frankenstein","Mary Shelley",280,"yes I read it");

 const book5 = new Book("Foundation","Isaac asimov",255,"yes I read it");

 const book6 = new Book("Game Of Thrones","George R.R Martin",865,"not read yet");

 const book7 = new Book("Catching Fire","Suzanne Collins",402,"yes I read it");

 const book8 = new Book("Better Never To Have Been","David Benatar",250,"not read yet");

 const book9 = new Book("HTML And CSS Design and build websites","Jon Duckett ",512,"not read yet");

 const book10 = new Book("One piece","Eiichiro Oda",150,"yes I read it");

 const book11 = new Book("Harry Potter and the Chamber Of Secrets","J.K Rowling",450,"not read yet");

 const book12 = new Book("Headfirst Javascript"," Elisabeth Robson And Eric Freeman",1387,"not read yet");


 
console.log(addBookToLibrary(book1,book2,book3,book4,book5,book6,book7,book8,book9,book10,book11,book12)); // pass the new books to the function that will add it to my library
console.log("this is what i have in my personal library", myLibrary); // shows what I have in my array
console.log(book1.info());//log info about the book
console.log(book2.info());//log info about the book


const booksContainer = document.querySelector(".books-container");// will use append/appendChild(foo) to add the bookCards to it
console.log(booksContainer);


function displayCardBook(arr){
    //loop through array create div element and attach a class book-card
    // the text content of each div will be the keys and value of the objects
    //append each book cards to booksContainer div
    for(let i=0;i<arr.length;i++){
        const bookCards=document.createElement("div");
        bookCards.classList.add("book-card");
        bookCards.textContent =arr[i].info(); 
        booksContainer.appendChild(bookCards);
        
    }
    console.log(`the length of the array is ${arr.length}`);
   return booksContainer;
}

// call func and pass myLibrary array which should be full of books since I called addBookToLibrary earlier
console.log(displayCardBook(myLibrary)); 