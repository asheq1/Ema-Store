

const BookCards = ({books}) => {
    const {bookId, bookName, image, author, category, rating, tags} = books;
    
    return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	    <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        {/* tags  */}
        <div className="flex space-x-4 mt-4">
            <button className="bg-gray-50 text-[#23BE0A] px-2 py-2 rounded-full hover:bg-gray-300 transition">
                Suspense
            </button>
            <button className="bg-gray-50 text-[#23BE0A] px-2 py-2 rounded-full hover:bg-gray-300 transition">
                Psychological
            </button>
        </div>

        <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
            <h2 className="text-2xl font-semibold tracking-wide">{bookName}</h2>
            <p className="text-xl tracking-wide">By: {author}</p>
        </div>
        <hr className="border-t-2 border-gray-400 border-dashed my-4" />
	    
    </div>
    );
};

export default BookCards;