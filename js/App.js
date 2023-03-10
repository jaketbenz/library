let myLibrary = [
	{
		title: "Black Hawk Down",
		author: "Mark Bowden",
		pages: 320,
		read: true,
	},
	{
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		pages: 310,
		read: false,
	},
	{
		title: "The Fellowship of the Ring",
		author: "J.R.R. Tolkien",
		pages: 423,
		read: false,
	},
	{
		title: "The Two Towers",
		author: "J.R.R. Tolkien",
		pages: 352,
		read: false,
	},
	{
		title: "The Return of the King",
		author: "J.R.R. Tolkien",
		pages: 416,
		read: false,
	},
	{
		title: "Fahrenheit 451",
		author: "Ray Bradbury",
		pages: 256,
		read: true,
	},
	{
		title: "Eragon",
		author: "Christopher Paolini",
		pages: 509,
		read: true,
	},
	{
		title: "Eldest",
		author: "Christopher Paolini",
		pages: 694,
		read: true,
	},
	{
		title: "Brisngr",
		author: "Christopher Paolini",
		pages: 831,
		read: true,
	},
	{
		title: "Inheritance",
		author: "Christopher Paolini",
		pages: 860,
		read: true,
	},
	{
		title: "Dune",
		author: "Frank Herbert",
		pages: 412,
		read: false,
	},
	{
		title: "Dune Messiah",
		author: "Frank Herbert",
		pages: 256,
		read: false,
	},
	{
		title: "Children of Dune",
		author: "Frank Herbert",
		pages: 444,
		read: false,
	},
	{
		title: "God Emperor of Dune",
		author: "Frank Herbert",
		pages: 496,
		read: false,
	},
	{
		title: "Heretics of Dune",
		author: "Frank Herbert",
		pages: 480,
		read: false,
	},
	{
		title: "Chapterhouse: Dune",
		author: "Frank Herbert",
		pages: 464,
		read: false,
	},
	{
		title: "Foundation",
		author: "Isaac Asimov",
		pages: 255,
		read: false,
	},
	{
		title: "Foundation and Empire",
		author: "Isaac Asimov",
		pages: 247,
		read: false,
	},
	{
		title: "Second Foundation",
		author: "Isaac Asimov",
		pages: 210,
		read: false,
	},
];
class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
	setRead(read) {
		this.read = read;
	}
}

const titleInput = document.querySelector(".bookTitle__input");
const authorInput = document.querySelector(".bookAuthor__input");
const pagesInput = document.querySelector(".bookPages__input");
const readInput = document.querySelector(".bookRead__input");

const libraryShelf = document.querySelector(".library__body");

const getReadInput = () => {
	if (document.querySelector(".bookRead__input").checked === true) {
		return true;
	} else {
		return false;
	}
};

const addBook = () => {
	let title = titleInput.value;
	let author = authorInput.value;
	let pages = pagesInput.value;
	let read = getReadInput();
	let newBook = new Book(title, author, pages, read);
	if (title !== "") {
		myLibrary.push(newBook);
	} else {
		return;
	}
};

const addBookForm = document.querySelector(".addBookForm");
addBookForm.onsubmit = addBook;

const changeRead = (e) => {
	confirm("Do you want to change read status?");
	const book = e.target.parentElement.parentElement.parentElement;
	let changedBook = new Book(
		myLibrary[book.id].title,
		myLibrary[book.id].author,
		myLibrary[book.id].pages
	);
	if (book.classList.contains("read")) {
		book.classList.remove("read");
		book.classList.add("unread");
		e.target.classList.remove("button__read");
		e.target.classList.add("button__unread");
		e.target.textContent = "Unread";
		changedBook.setRead(false);
	} else if (book.classList.contains("unread")) {
		book.classList.remove("unread");
		book.classList.add("read");
		e.target.classList.remove("button__unread");
		e.target.classList.add("button__read");
		e.target.textContent = "Read";
		changedBook.setRead(true);
	}
	console.log(changedBook);
};

const removeBook = (e) => {
	confirm("Do you want to remove book?");
	let book = e.target.parentElement.parentElement.parentElement;
	book.remove();
};

const clearForm = () => {
	document.querySelector(".addBookForm").reset();
};
const clearLibrary = () => {
	libraryShelf.innerHTML = "";
};

const createBook = (myLibrary) => {
	myLibrary.forEach((i) => {
		let arrayPosition = myLibrary.indexOf(i);

		const card = document.createElement("div");
		const cardBody = document.createElement("div");
		const cardTitle = document.createElement("h5");
		const cardText = document.createElement("p");
		const cardPages = document.createElement("p");
		const buttonContainer = document.createElement("div");
		const readButton = document.createElement("button");
		const removeButton = document.createElement("button");

		card.className =
			"card text-center col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mx-4 my-3";
		card.setAttribute("id", arrayPosition);
		card.dataset.num = arrayPosition;
		cardBody.className = "card-body p-3";
		cardTitle.className = "card-title";
		cardText.className = "card-text";
		cardPages.className = "card-text";
		buttonContainer.className =
			"buttonContainer d-flex justify-content-center";
		readButton.className = "button__read btn btn-dark m-1";
		readButton.onclick = changeRead;
		removeButton.className = "button__remove btn btn-dark m-1";
		removeButton.onclick = removeBook;

		cardTitle.textContent = `"${i.title}"`;
		cardText.textContent = i.author;
		cardPages.textContent = `${i.pages} pages`;
		if (i.read === true) {
			readButton.textContent = "Read";
			card.classList.add("read");
		} else {
			readButton.textContent = "Unread";
			card.classList.add("unread");
		}
		removeButton.textContent = "Remove";

		card.appendChild(cardBody);
		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardText);
		cardBody.appendChild(cardPages);
		cardBody.appendChild(buttonContainer);
		buttonContainer.appendChild(readButton);
		buttonContainer.appendChild(removeButton);
		libraryShelf.appendChild(card);
	});
};
createBook(myLibrary);

function removeArticles(string) {
	let words = string.split(" ");
	if (words.length <= 1) {
		return string;
	}
	if (words[0] == "a" || words[0] == "an" || words[0] == "the") {
		return words.splice(1).join(" ");
	}
	return string;
}

const sortBookTitle = () => {
	myLibrary.sort((a, b) => {
		let bookA = a.title.toLowerCase();
		let bookB = b.title.toLowerCase();

		bookA = removeArticles(bookA);
		bookB = removeArticles(bookB);

		if (bookA > bookB) {
			return 1;
		}
		if (bookA < bookB) {
			return -1;
		}
		return 0;
	});
};
const sortBookAuthor = () => {
	myLibrary.sort((a, b) => {
		if (a.author.toLowerCase() > b.author.toLowerCase()) {
			return 1;
		}
		if (a.author.toLowerCase() < b.author.toLowerCase()) {
			return -1;
		}
		if (a.title.toLowerCase() > b.title.toLowerCase()) {
			return 1;
		}
		if (a.title.toLowerCase() < b.title.toLowerCase()) {
			return -1;
		}
		return 0;
	});
};

const sortBookTitleButton = document.querySelector(".sortBook__title");
sortBookTitleButton.addEventListener("click", (e) => {
	e.preventDefault();
	clearLibrary();
	sortBookTitle();
	createBook(myLibrary);
});

const sortBookAuthorButton = document.querySelector(".sortBook__author");
sortBookAuthorButton.addEventListener("click", (e) => {
	e.preventDefault();
	clearLibrary();
	sortBookAuthor();
	createBook(myLibrary);
});

const submitButton = document.querySelector(".submitButton");
submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	addBook();
	clearForm();
	clearLibrary();
	createBook(myLibrary);
});
