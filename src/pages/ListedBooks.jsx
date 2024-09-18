import { useLoaderData } from "react-router-dom";
import BookCards from "../components/BookCards";

const ListedBooks = () => {
    const booksList = useLoaderData()

    return (
        <div>
            <h2 className="text-4xl text-center font-bold">Books: {booksList.length}</h2>
            {
                booksList.map(books => <BookCards
                    key={books.id} 
                    books={books}></BookCards>)
            }
        </div>
    );
};

export default ListedBooks;