import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Homebooks from "../components/Homebooks";

const Home = () => {
    const booksList = useLoaderData()

    return (
        <div>
            <Banner />
            <h2 className="text-4xl text-center mt-5 mb-3 font-bold">Books</h2>
            {/* display only six compo  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    booksList.map((book) => (
                        <Homebooks key={book.bookId} books={book}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;