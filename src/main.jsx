import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Pages/Home.jsx'
import ListedBooks from './components/Pages/ListedBooks.jsx'
import PagesToRead from './components/Pages/PagesToRead.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path:"books", Component:ListedBooks},
      {path: "pages", Component:PagesToRead}
    ]
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>

)
