import { useLoaderData } from "react-router-dom";
import BookCards from "../components/BookCards";

const ListedBooks = () => {
    const booksList = useLoaderData()

    return (
        <div>
            <h2 className="text-4xl text-center mt-5 mb-3 font-bold">Books: {booksList.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    booksList.map(books => (
                    <BookCards
                        key={books.id}
                        books={books}
                    />
                    ))
                }
            </div>
        </div>
    );
};

export default ListedBooks;