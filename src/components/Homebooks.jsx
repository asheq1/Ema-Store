import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homebooks = ({books}) => {
    const { bookId, bookName, image, author, category, rating, tags } = books;
  
    return (
      <div className="max-w-xs p-3 space-y-3 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 mx-auto flex flex-col justify-between min-h-[450px]">
        {/* Image with Link */}
        <Link to={`/book/${bookId}`}>
          <img
            src={image}
            alt={bookName}
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        </Link>
  
        {/* Tags */}
        <div className="flex space-x-2 mt-4 flex-wrap">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-gray-50 text-[#23BE0A] px-3 py-1 rounded-full hover:bg-gray-300 transition"
            >
              {tag}
            </button>
          ))}
        </div>
  
        {/* Book Name and Author */}
        <div className="mt-6 mb-2">
          <Link to={`/book/${bookId}`}>
            <h2 className="text-2xl font-semibold tracking-wide hover:underline">
              {bookName}
            </h2>
          </Link>
          <p className="text-xl tracking-wide">By: {author}</p>
        </div>
  
        {/* Horizontal line */}
        <hr className="border-t-2 border-gray-400 border-dashed my-4" />
  
        {/* Category and Rating */}
        <div className="flex items-center justify-between">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            {category}
          </span>
          <div className="flex items-center">
            <span className="mr-3">{rating}</span>
            <FaRegStar className="text-yellow-400" />
          </div>
        </div>
      </div>
    );
};

export default Homebooks;