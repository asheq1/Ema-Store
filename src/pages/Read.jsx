import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../utils";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";


const Read = () => {
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
        <div className="grid grid-cols-1  gap-6 mt-0">
                {books.map((book) => (
                <div key={book.bookId} className="flex gap-3 border rounded-lg p-3">
                    <div className="">
                    <img style={{height: '200px', width: '200px'}} 
                        className="rounded-lg" src={book.image} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{book.bookName}</h3>
                        <p className="text-sm">By: {book.author}</p>
                        <div className="mt-4 flex ">
                            <p className="items-cente">Tags: <span className="ml-4 border rounded-full px-3 py-1 text-[#23BE0A] cursor-pointer">#{book.tags[0]}</span> <span className="border rounded-full px-3 py-1 text-[#23BE0A] cursor-pointer">#{book.tags[1]}</span></p>
                            <p className="flex items-center ml-6"><span className="text-xl"><CiLocationOn /></span> Year of Publishing: {book.yearOfPublishing}</p>
                        </div>
                        <div className="mt-4 flex mb-1">
                            <p className="flex items-center"><FcBusinessman /> <span className="ml-2 text-sm">Publisher: {book.publisher}</span></p>
                            <p className="flex items-center ml-5"><MdOutlineInsertPageBreak /><span className="ml-2 text-sm">Page {book.totalPages}</span></p>
                        </div>
                        <hr className="mt-2" />
                        <div className="mt-3">
                            <button className="border text-sm text-[#328EFF] rounded-full px-3 py-1">Category: {book.category}</button>
                            <button className="border text-sm text-[#FFAC33] rounded-full px-3 py-1 ml-2">Rating: {book.rating}</button>
                            <button className="border text-sm text-white bg-[#23BE0A] rounded-full px-3 py-1 ml-2">View Details: </button>
                        </div>
                        <button
                            className="bg-rose-300 hover:bg-rose-500 py-1 px-3 mt-2 text-md rounded-lg font-medium"
                            onClick={() => handleDelete(book.bookId)}
                        >
                        Remove Book
                        </button>
                    </div>
                </div>
                ))}
            </div>
    );
};

export default Read;