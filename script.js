
function Book(title,author,page,read){
    this.title=title; 
    this.author=author; 
    this.page=page; 
    this.read=read;
    this.info=function(){
        return `The ${this.title} by ${this.author} , ${this.page} pages, ${this.read}`
    };
     
}

 /*books will be added as objects to this library array after calling a function adBookToLibrary
 [book{title:"Hobbit",author:"J.R.R tolkien"},book2{title:"player one",author"Ernest Cline""}]*/
 const myLibrary =[];
 
function addBookToLibrary(...bookItem){
    //accepts an indefinite number of books and adds books to myLibrary array 
    // spread the array of books,so each book gets added properly...better than using a loop to manually add each of them to myLibrary
    myLibrary.push(...bookItem) 
    return myLibrary; // return array containing the books
}

// will use append/appendChild(foo) inside displayCardBook to add the bookCards to it
const booksContainer = document.querySelector(".books-container");



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


/*assignment 4 todo:make a reset button
*/
const btnAddNewBooks = document.querySelector("#add-book");
console.log(btnAddNewBooks);

const bookSection=document.querySelector(".book-section"); // ill append the form to book section right under the button
console.log(bookSection)

btnAddNewBooks.addEventListener("click",(e)=>{
    //when btn is clicked, create a form, add class my-form,put the form as third child of book-section
    //create four input fields and labels, create four div wrappers and append them to my form
    //then appends the input field and label pair to each div wrappers
    //creates submit and reset buttons. submit buttons retrieves value of each input fields
    //creates a new book object then calls addBookToLibrary then displayCardBook
    //once everything is done the form is hidden
    
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


    //create submit btn add class 
    const submitBtn =document.createElement("button");
    submitBtn.classList.add("btn-submit");
    submitBtn.textContent="Submit";
    

    // create reset button add class
    const resetBtn = document.createElement("button");
    resetBtn.classList.add("btn-reset");
    resetBtn.textContent="Reset"

    // create wrapper for buttons 
    const formBtnWrapper=document.createElement("div");
    formBtnWrapper.classList.add("form-btn-wrapper")

    //append both buttons two wrapper
    formBtnWrapper.append(submitBtn,resetBtn);

    // append wrapper div to form
    myForm.append(formBtnWrapper);

    //add event for submit button and reset button both e.preventDefault()
    // method on submit btn to stop default behavior of submitting form data 
    // reset button all input field values should be reset to empty string

    submitBtn.addEventListener("click",(e)=>{
        e.preventDefault()// prevents form from submitting data
        // retrieve the values of the input fields
       let inputVal1=document.getElementById('title').value
       let inputVal2=document.getElementById('author').value
       let inputVal3=document.getElementById('page').value
       let inputVal4=document.getElementById('read').value
        console.log(inputVal1,inputVal2,inputVal3,inputVal4);
        // make new book object from Book constructor pass each input values as argument 
        const book=new Book(inputVal1,inputVal2,inputVal3,inputVal4);
       
        // add this book to library array by calling function,each book is an object
        console.log(addBookToLibrary(book));

        //display this as book card by calling function displayCardBook and passing library
        console.log(displayCardBook(myLibrary));

        //note form should be hidden after everything is done
        myForm.style.display = "none";

        // test to see if i can loop and what it displays  keep this for now
        for(let i=0;i<myLibrary.length;i++){
            console.log("looping through library",(myLibrary[i]));
        }


         //solves bug where the same book would appear twice
         console.log("popping the book from my library....to avoid duplicate showing up",);
         myLibrary.pop();
         
    })

    // display elements inside of form in console
    console.log(myForm);
});
