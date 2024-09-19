import {useLoaderData } from "react-router-dom";
import { saveBook } from "../utils";


const BookDetails = () => { 
    const book = useLoaderData(); // Receives the book data from the loader
    const {image, bookName, author, category,
         review, tags, totalPages, publisher, yearOfPublishing, rating} = book;

    // If no book is found, display a message
    if (!book) {
        return <div>Book not found</div>;
    }

    return (
    <div className="m-4 p-4 bg-gray-100 rounded-lg">
        <div className="card lg:card-side bg-white shadow-xl rounded-lg overflow-hidden">
            <figure className="lg:w-1/3 w-full">
            <img src={image} alt={bookName} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body p-4 lg:w-2/3">
            {/* Book Title and Author */}
            <h2 className="card-title text-3xl font-bold mb-2">{bookName}</h2>
            <p className="text-xl text-gray-600 mb-2">By: {author}</p>
            
            <hr className="border-t-2 border-gray-300 mb-3" />

            {/* Category and Review */}
            <p className="text-lg text-gray-500 mb-1"><b>Category:</b> {category}</p>
            <p className="text-md text-gray-700 mb-3">
                <b>Review:</b> {review}
            </p>

            <div className="flex flex-wrap items-center mb-4 space-x-2">
                <span className="text-lg text-gray-600 font-medium">Tags:</span>
                {tags.map((tag, index) => (
                <button
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition"
                >
                    #{tag}
                </button>
                ))}
            </div>

            <hr className="border-t-2 border-gray-300 mb-3" />

            {/* Additional Information */}
            <div className="space-y-1 text-gray-600 text-md p-2">
                <div className="flex justify-between">
                    <b>Number of Pages:</b>
                    <span className="text-gray-800">{totalPages}</span>
                </div>
                <div className="flex justify-between">
                    <b>Publisher:</b>
                    <span className="text-gray-800">{publisher}</span>
                </div>
                <div className="flex justify-between">
                    <b>Year of Publishing:</b>
                    <span className="text-gray-800">{yearOfPublishing}</span>
                </div>
                <div className="flex justify-between">
                    <b>Rating:</b>
                    <span className="text-yellow-500 font-bold">{rating} / 5</span>
                </div>
            </div>

                {/* Buttons */}
                <div className="card-actions mt-4 space-x-3">
                    <button 
                         onClick={() => saveBook({ ...book, type: 'read' })}
                        className="btn btn-outline px-4 py-2 text-md font-medium border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
                    Read
                    </button>
                    <button 
                        onClick={() => saveBook({ ...book, type: 'wishlist' })}
                        className="btn btn-primary px-4 py-2 text-md font-medium">
                    Wishlist
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BookDetails;