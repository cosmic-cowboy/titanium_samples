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

// Open main window
if(OS_IOS) { 
   $.navGroupWin.open(); 
} 
if (OS_ANDROID) { 
   $.index.open(); 
}
