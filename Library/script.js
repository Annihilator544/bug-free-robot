function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  let myLibrary = [];

  class Book {
    
    constructor(Title, Author, Pages) {
        this.Title = Title;
        this.Author = Author;
        this.Pages = Pages;
    }
}
  function Submit(){
    console.log("hi");
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Book1 = new Book(Title, Author, Pages);
    addBookToLibrary(Book1);
  }
  function addBookToLibrary(Book) {
    // do stuff here
    myLibrary.push(Book);
    addbook(); 
  }
  function addbook(){
    let table = document.getElementsByClassName("books");
    let tr=document.createElement("div");
        tr.style.display="flex";
        tr.style.justifyContent="space-around";
        tr.style.flexDirection="row";  
        tr.style.gap="16px";   
        tr.style.fontSize="20px";                                                                                                                                                 
    let para=document.createElement("p");
    para.innerText = myLibrary[myLibrary.length-1].Title;
    tr.appendChild(para);
     para=document.createElement("p");
    para.innerText = myLibrary[myLibrary.length-1].Author;
    tr.appendChild(para);
     para=document.createElement("p");
    para.innerText = myLibrary[myLibrary.length-1].Pages;
    tr.appendChild(para);
    let button=document.createElement("button");
    button.innerText="Delete";
    button.style.backgroundColor="red";
    button.style.color="white";
    button.style.borderRadius="5px";
    button.style.border="none";
    button.style.padding="5px";
    button.style.cursor="pointer";
    button.addEventListener("click",function(){
        tr.remove();
    })
    tr.appendChild(button);
    table[0].appendChild(tr);
  }
  function myFunction() {
    document.getElementById("myForm1").reset();
  }
    console.log(myLibrary);
    