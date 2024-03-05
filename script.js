
function Book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.info = function () {
        return `The ${this.title} by ${this.author}, ${this.page} pages`;
    };
}



Book.prototype.removeBooks = function () {
    // Create a "Remove Book" button with an event listener that removes the specific book card div.
    //return means i can access removeBookBtn elsewhere in my code when calling method removebooks()
    
    console.log("removing ", this.title, "from book-container div ");
    const removeBookBtn = document.createElement("button");
    removeBookBtn.classList.add("btn-remove-book");
    removeBookBtn.textContent = "Remove Book";

    removeBookBtn.addEventListener("click", (e) => {
        console.log("User clicked on Remove Books button");
        console.log("I just removed", this.title);
        e.target.parentElement.remove();
    });

    return removeBookBtn;
};

Book.prototype.toggleRead = function () {
    // // Create a "Toggle Read" button with a flag variable. The event toggles the flag's value,
    //changes the button text and background color accordingly (true=blue, false=green).
    //return value means i can access toggleReadBtn's elsewhere in the code when calling method toggleRead()
   
    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.classList.add("btn-toggle-read");
    toggleReadBtn.textContent = "Change book status";
    let flagBoolean = true;

    toggleReadBtn.addEventListener("click", (e) => {
        flagBoolean = !flagBoolean;
        if (flagBoolean) {
            e.target.textContent = "Book status read: yes";
            e.target.style.backgroundColor = "dodgerblue";
        } else {
            e.target.textContent = "Book status read: no";
            e.target.style.backgroundColor = "green";
        }
    });

    return toggleReadBtn;
};



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
    //forEach loop fixes bug:whenever submit btn was pressed i would get a duplicate book
    //the foreach loops through the node list and removes a bookcards div everytime(the extra one)
    
    const removeBookCardDiv=document.querySelectorAll(".book-card");
    removeBookCardDiv.forEach(book=>{
        book.remove()
    })
    //loop through array create div element and attach a class book-card
    // the text content of each div will be book.info() which stores the title author and page information
    //calling methods toggleRead() and removeBooks() fixes bug where my bookcard divs did not have buttons after the forEach loop
    //append each book cards to booksContainer div

    for(let i=0;i<arr.length;i++){
        const bookCards=document.createElement("div");
        bookCards.classList.add("book-card");
        bookCards.textContent =arr[i].info();

        // call the toggleRead() and removeBooks () methods on each book object of the arr.
        const toggleReadBtn = arr[i].toggleRead();
        const removeBookBtn = arr[i].removeBooks();

        bookCards.append(toggleReadBtn,removeBookBtn)// append the remove button and toggleReadBtn to each bookCards div 
        booksContainer.appendChild(bookCards);
        
    }
    console.log(`the length of the array is ${arr.length}`);
    return booksContainer;
}


const btnAddNewBooks = document.querySelector("#add-book");
console.log(btnAddNewBooks);

const bookSection=document.querySelector(".book-section"); // ill append the form to book section right under the button
console.log(bookSection)

btnAddNewBooks.addEventListener("click",()=>{
    //when btn is clicked, create a form, add class my-form,put the form as third child of book-section
    //create three input fields and labels, create three div wrappers and append them to my form
    //then appends the input field and label pair to each div wrappers
    //creates submit and reset buttons. submit buttons retrieves value of each input fields
    //creates a new book object then calls addBookToLibrary then displayCardBook
    //once everything is done the form is removed
    
   
    //conditional test if form already exists don't recreate it,don't execute the if block
    //otherwise if querySelector returns null which is falsy it means the form doesn't exist 
    //and the if block is true. So the conditional test will run
    // it will create the form a long with all content that needs to be inside the form
    if(!document.querySelector(".my-form")){ 
        const myForm=document.createElement("form")
        myForm.classList.add("my-form")
        bookSection.insertBefore(myForm,bookSection.children[2]); // put the form right after the button
        //create three input fields with labels and set their attributes
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
    
    
        //make 3 div wrappers around each pair of input label append them to my form
        const wrapper1=document.createElement("div")
        wrapper1.classList.add("wrapper-1");

        const wrapper2=document.createElement("div")
        wrapper2.classList.add("wrapper-2");

        const wrapper3=document.createElement("div")
        wrapper3.classList.add("wrapper-3");

    
        // append all div wrapper to my form
        myForm.append(wrapper1,wrapper2,wrapper3); 

        // append all pairs of inputs/label to each div wrappers
        wrapper1.append(labelTitle,inputTitle);
        wrapper2.append(labelAuthor,inputAuthor);
        wrapper3.append(labelPage,inputPage);

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

        
        submitBtn.addEventListener("click",(e)=>{
            e.preventDefault()// prevents form from submitting data
              // if any of the input fields are empty submit button wont work,because return will exit out of submitbtn event
            if(inputTitle.value===""||inputAuthor.value===""||inputPage.value===""){
                alert("please fill out the form completely!")
                return;
            }
            // retrieve the values of the input fields
            let inputVal1=document.getElementById('title').value
            let inputVal2=document.getElementById('author').value
            let inputVal3=document.getElementById('page').value
        
            console.log(inputVal1,inputVal2,inputVal3);
            // make new book object from Book constructor pass each input values as argument 
            const book=new Book(inputVal1,inputVal2,inputVal3);
        
            // HERE add lines that calls the method removeBooks()
            book.removeBooks();

            // here add line that calls method toggleRead()
            book.toggleRead();


            // add this book to library array by calling function,each book is an object
            console.log(addBookToLibrary(book));

            //display this as book card by calling function displayCardBook and passing library
            console.log(displayCardBook(myLibrary));

            //removes the form element from the dom better than hiding it...since I am re-creating the form every time I click add new book
            myForm.remove();

            // test to see if i can loop and what it displays  keep this for now
            for(let i=0;i<myLibrary.length;i++){
                console.log("looping through library",(myLibrary[i]));
            }

            
        })
        //when reset button is pressed it removes any value entered inside all input fields
        resetBtn.addEventListener("click",(e)=>{
            e.preventDefault();//prevent button from submitting form data
            console.log("Reset button was clicked removing all content from input fields")
            inputTitle.value="";
            inputAuthor.value="";
            inputPage.value="";
            
        })
    }
});
