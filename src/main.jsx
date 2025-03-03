import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import Users from './Components/Users/Users.jsx'
import ShowDetails from './Components/ShowDetails/ShowDetails.jsx'
import Posts from './Components/Posts/Posts.jsx'
import ShowPostDetails from './Components/ShowPostDetails/ShowPostDetails.jsx'
import ErrorElement from './Components/ErrorElement/ErrorElement.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/users/:userID',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <ShowDetails></ShowDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/posts/:postID',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        element: <ShowPostDetails></ShowPostDetails>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
