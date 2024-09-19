import { useLoaderData } from "react-router-dom";


const BookDetails = () => { 
    const book = useLoaderData(); // Receives the book data from the loader
    console.log(book)
    
    // If no book is found, display a message
    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div>
            <h2>Book Details</h2>
        </div>
    );
};

export default BookDetails;