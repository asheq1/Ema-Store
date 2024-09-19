import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../utils";

const ListedBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const saveBooks = getBooks();
        setBooks(saveBooks)
    },[])

    const handleDelete = (bookId) => {
        deleteBook(bookId)
        setBooks(getBooks())
    }

    return (
        <div className="m-6">
            <h2 className="text-4xl text-center mt-5 mb-3 font-bold">Books</h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
                {books.map((book) => (
                <div key={book.bookId} className="flex gap-3 border rounded-lg p-3">
                    <div className="">
                    <img style={{height: '150px', width: '200px'}} 
                        className="rounded-lg" src={book.image} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{book.bookName}</h3>
                        <p className="text-sm">By: {book.author}</p>
                        <div className="mt-2">
                            <p>Tags: <span>#{book.tags[0]}</span> <span>#{book.tags[1]}</span></p>
                        </div>
                        <p>Category: {book.category}</p>

                        <button
                        className="btn btn-outline px-4 py-2 text-md font-medium"
                        onClick={() => handleDelete(book.bookId)}
                        >
                        Remove from List
                        </button>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    );
};

export default ListedBooks;