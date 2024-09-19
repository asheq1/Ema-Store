import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import BookDetails from "../components/BookDetails";
import ReadPages from "../pages/ReadPages";
import Read from "../pages/Read";
import Wishlist from "../pages/Wishlist";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: async () => {
            const res = await fetch('/books.json');
            return res.json()
          }
        },
        {
          path: "/book/:id",
          element: <BookDetails />,
          loader: async ({ params }) => {
            const res = await fetch('/books.json');
            const books = await res.json();
            const book = books.find((b) => b.bookId === parseInt(params.id)); // Match using bookId
            return book || null;
          }
        },
        {
            path: "/listedBooks",
            element: <ListedBooks />,
            loader: () => fetch('/books.json'),
            children: [
            {
                index: true,
                element: <Read />,
                loader: () => fetch('books.json')
            },
            {
                path: "wishlist",
                element: <Wishlist />,
                loader: () => fetch('books.json')
            }
          ]
        },
        {
          path: "/stats",
          element: <ReadPages />
        }
      ]
    },
  ]);