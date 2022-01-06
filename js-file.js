
let myLibrary = [];

let container = document.querySelector('.container');

// Create new book object
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
};

// Add a new book object to myLibrary
const addBookToLibrary = book => {
  myLibrary.push(book);
};

// create div element for book
const createBookCard = (book) => {
  let bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    container.appendChild(bookCard);
    bookCard.innerHTML = 'TITLE: ' + book.title + '<br />' + 
    'AUTHOR: ' + book.author + '<br />' +
    'PAGES: ' + book.pages + '<br />';
  let toggleReadButton = document.createElement('button');
    toggleReadButton.classList.add('toggleReadButton', 'readSelected');
    bookCard.appendChild(toggleReadButton);
    toggleReadButton.textContent = 'Read';
    toggleReadButton.addEventListener('click', function () {
        toggleReadButton.classList.toggle('readSelected');
        if (book.read == true) {
          book.read = false;
        } else {
          book.read = true;
        };
    });
  if (book.read === true) {
    toggleReadButton.classList.toggle('readSelected');
  };
  let deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    bookCard.appendChild(deleteButton);
    deleteButton.textContent = 'Remove Book';
    deleteButton.addEventListener('click', function () {
      let index = myLibrary.indexOf(book);
      if (index !== -1) {
      myLibrary.splice(index, 1);
      displayBookToPage();
      };
    });
  
};





// display books currently in library at page start up
const displayBookToPage = () => {
  container.innerHTML = "";
  myLibrary.forEach(function (book) {
    createBookCard(book);
});
};

// new book button
let newBookButton = document.querySelector('#newBookButton');

// prompts user for input, creates new book card with given input
newBookButton.addEventListener('click', function () {
  let title = prompt('Title?: ');
  let author = prompt('Author?: ');
  let pages = prompt('Number of pages?: ');
  let read = prompt('Have you read it? (true/false): ');
  let newBook = new Book(
    title,
    author,
    Number(pages),
    Boolean(read)
  );
  addBookToLibrary(newBook);
  createBookCard(newBook);
  console.log(myLibrary);
});


// Sample books

let lordOfTheRings = new Book(
  'Lord of the Rings',
  'J.R.R. Tolkien',
  500,
  true,
);

let eastOfEden = new Book(
  'East of Eden',
  'John Steinbeck',
  600,
  false,
);

let dune = new Book(
  'Dune',
  'Douglas Adams',
  400,
  false,
);

// Sample books


addBookToLibrary(lordOfTheRings);
addBookToLibrary(eastOfEden);
addBookToLibrary(dune);
displayBookToPage();

