// get a reference to our collection
var myBooks = Alloy.Collections.books;

// create a new model
var book = Alloy.createModel('books',{
	title : "Great Expectations",
	author : "Charles Dickens"
});

// add the book to collection
myBooks.add(book);

// persist it to the database
book.save();

function showBook(event){
	var selectedBook = event.source;
	var args = {
		title:selectedBook.title,
		author:selectedBook.author
	};
	var bookview = Alloy.createController('bookdetails', args).getView();

    if (OS_IOS) {
        $.navGroupWin.openWindow(bookview);
    }
    if (OS_ANDROID) {
        bookview.open();
    }
}

// Open main window
if(OS_IOS) {
   $.navGroupWin.open();
}
if (OS_ANDROID) {
   $.index.open();
}
