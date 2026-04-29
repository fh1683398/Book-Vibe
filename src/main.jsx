import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Pages/Home.jsx'
import ListedBooks from './components/Pages/ListedBooks.jsx'
import PagesToRead from './components/Pages/PagesToRead.jsx'
import Error from './components/Pages/Error.jsx'
import BookDetails from './components/Books/BookDetails.jsx'
import BookProvider from './components/Utlities/BookContext.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('/books.json'),
        Component: Home
      },
      { 
        path: "/listed-books", 
        loader: ()=> fetch("/books.json"),
        Component: ListedBooks 
      },
      { path: "/pages-to-read", Component: PagesToRead },
      {
        path: "/book/:bookId",
        loader: () => fetch('/books.json'),
        Component: BookDetails
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <BookProvider>
    <RouterProvider router={router} />
  </BookProvider>
  

)
