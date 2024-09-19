import toast from "react-hot-toast";

export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books 
}

// save in LS 
export const saveBook = book => {
    let books = getBooks();
    const isExist = books.find(b => parseInt(b.bookId) === parseInt(book.bookId));
    if(isExist){
        return toast.error('Already Bookmared')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book bookmarked Successfully')

}

// delete from UI
export const deleteBook = id => {
    let books = getBooks();
    const remaining = books.filter(b => b.bookId !== id)
    localStorage.setItem('books', JSON.stringify(remaining))
    toast.success('Book removed from Bookmark')
}
