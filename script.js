
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

//assignment 4 create an event for the button id add-book, once clicked it will bring up a form
// inside this form i'll have four input fields and a button called confirm or reset/close

const btnAddNewBooks = document.querySelector("#add-book");
console.log(btnAddNewBooks);

const bookSection=document.querySelector(".book-section"); // ill append the form to book section right under the button
console.log(bookSection)

btnAddNewBooks.addEventListener("click",(e)=>{
    //when btn is clicked, create a form, add class my-form,put the form as third child of book-section
    // create four input fields and labels
    //create four div wrappers and append them to my form
    //then appends the input field and label pair to each div wrappers
    //this click event only works once to prevent multiple form from filling up screen
    /*todo:Create a submit button add it to form,and create an event for submit button
    Modify the displayCardBook function
    
    */
    const myForm=document.createElement("form")
    myForm.classList.add("my-form")
    bookSection.insertBefore(myForm,bookSection.children[2]); // put the form right after the button

    //create four input fields with labels and set their attributes
    const inputTitle=document.createElement("input")
    const labelTitle=document.createElement("label")
    inputTitle.setAttribute("type","text");
    inputTitle.setAttribute("id","title");
    labelTitle.textContent="Title:";
    labelTitle.setAttribute("for","title");

    const inputAuthor=document.createElement("input")
    const labelAuthor=document.createElement("label")
    inputAuthor.setAttribute("type","text");
    inputAuthor.setAttribute("id","author");
    labelAuthor.textContent="Author:";
    labelAuthor.setAttribute("for","author");


    const inputPage=document.createElement("input")
    const labelPage=document.createElement("label")
    inputPage.setAttribute("type","text");
    inputPage.setAttribute("id","page");
    labelPage.textContent="Page:";
    labelPage.setAttribute("for","page");
   
    const inputRead=document.createElement("input")
    const labelRead=document.createElement("label")
    inputRead.setAttribute("type","text");
    inputRead.setAttribute("id","read");
    labelRead.textContent="Read:";
    labelRead.setAttribute("for","read");
   
    //make 4 div wrappers around each pair of input label append them to my form
    const wrapper1=document.createElement("div")
    wrapper1.classList.add("wrapper-1");

    const wrapper2=document.createElement("div")
    wrapper2.classList.add("wrapper-2");

    const wrapper3=document.createElement("div")
    wrapper3.classList.add("wrapper-3");

    const wrapper4=document.createElement("div")
    wrapper4.classList.add("wrapper-4");
    myForm.append(wrapper4);
   
    // append all div wrapper to my form
    myForm.append(wrapper1,wrapper2,wrapper3,wrapper4); 

    // append all pairs of inputs/label to each div wrappers
    wrapper1.append(labelTitle,inputTitle);
    wrapper2.append(labelAuthor,inputAuthor);
    wrapper3.append(labelPage,inputPage);
    wrapper4.append(labelRead,inputRead);

    // display elements inside of form in console
    console.log(myForm);
},{once:true});