import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Pages/Home.jsx'
import ListedBooks from './components/Pages/ListedBooks.jsx'
import PagesToRead from './components/Pages/PagesToRead.jsx'
import Error from './components/Pages/Error.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true, 
        loader: ()=>fetch('books.json'),
        Component: Home
      },
      {path:"listed-books", Component:ListedBooks},
      {path: "pages-to-read", Component:PagesToRead}
    ]
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>

)
