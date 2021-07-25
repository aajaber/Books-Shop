'use strict'

//================================== consts:

const form = document.getElementById('booksForm');
const tableSection = document.getElementById('tableSection');
const bookstable = document.getElementById('booksTable');

let min = 1;
let max = 500;



//================================== Random number generator:
function getRandomPages(min, max) {
    return Math.random() * (max - min) + min;
}


//===================================== Constructor 
function Book(name, price, pages) {
    this.name = name;
    this.price = price;
    this.pages = pages;

    Book.BooksArr.push(this);
}

Book.BooksArr = [];




//==================================== Event Listener 
form.addEventListener('submit', submitHandler);

function submitHandler(event) {
    const bookName = event.target.bookName.value;
    const bookPrice = event.target.bookPrice.value;
    const bookPages = getRandomPages();

    newBook = new Book(bookName, bookPrice, bookPages);
    
    saveToLocalStorage();
    renderResults();

}

//========================================== render header 
function renderHeader() {
    const tableRow = document.createElement('tr');
    bookstable.appendChild(tableRow);

    const th1 = document.createElement('th');
    tableRow.appendChild(th1);
    th1.textContent = 'Book Name';
    const th2 = document.createElement('th');
    tableRow.appendChild(th2);
    th2.textContent = 'Book Pages';

    const th3 = document.createElement('th');
    tableRow.appendChild(th3);
    th3.textContent = 'Price';
}

renderHeader();



Book.prototype.renderResults = function () {

    const dataRow = document.createElement('tr');
    bookstable.appendChild(dataRow);


    const tableData1 = document.createElement('td');
    dataRow.appendChild(tableData1);
    tableData1.textContent(Book.BooksArr[i].name);


    const tableData2 = document.createElement('td');
    dataRow.appendChild(tableData2);
    tableData2.textContent(Book.BooksArr[i].pages);

    const tableData3 = document.createElement('td');
    dataRow.appendChild(tableData3);
    tableData3.textContent(Book.BooksArr[i].price);
}




//=========================== Save to local storage :

function saveToLocalStorage() {
    const storedBooks = JSON.stringify(Book.BooksArr);
    localStorage.setItem('Books', storedBooks);
}


//=============================== get from local storage:

function getFromLocalstorage() {
    const storedData = localStorage.getItem('Key');
    const parsedData = JSON.parse(storedData);

    if (parsedData !== null) {
        Book.BooksArr = parsedData;
    }
}
getFromLocalstorage();