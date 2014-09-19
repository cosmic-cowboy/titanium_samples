var myBooks = Alloy.Collections.books;

function addBook () {
	var book = Alloy.createModel('books',{
		title  : $.titleInput.value,
		autoor : $.authorInput.value
	});

	myBooks.add(book);
	book.save();

	// close the window
	$.addbook.close();
}