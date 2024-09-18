import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './layouts/MainLayOut';
import Home from './pages/Home';
import ListedBooks from './pages/ListedBooks';
import ReadPages from './pages/ReadPages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch('books.json')
      },
      {
        path: "/stats",
        element: <ReadPages />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
