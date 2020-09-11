"use strict";
/*eslint-disable*/

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
    
];

function Addlibrary(){

let newBook={
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    libraryID: document.getElementById("ID").value
}
library.push(newBook)
}



function ShowTitles() {

    let titles = [];
    for (let book of library) {
        titles.push(book.title);
    }
titles.sort()
let bookTitles=titles.join("\n")



    let textArea = document.getElementById("displayArea");
    textArea.innerHTML =bookTitles
}




function Showauthors() {

    let authors = [];
    for (let writer of library) {
        authors.push(writer.author);
    }
authors.sort()
let bookAuthors=authors.join("\n")



    let textArea = document.getElementById("displayArea");
    textArea.innerHTML =bookAuthors
}




function ShowID(){

    let IdCard = [];
    for (let id of library) {
        IdCard.push(id.libraryID);
    }
    IdCard.sort((a,b)=>a-b)

let bookid=IdCard.join("\n")



    let textArea = document.getElementById("displayArea");
    textArea.innerHTML =bookid
}


