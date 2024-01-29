import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ErrorPage from './pages/not-found';
import ProductPage from './pages/product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-red-500'>Hello World</div>,
    errorElement: <ErrorPage/>
  }, 
  {
    path:"/login",
    element: <LoginPage/>
  },
  {
    path:"/register",
    element: <RegisterPage/>
  },
  {
    path:"/products",
    element: <ProductPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <RouterProvider router={router} />

  </React.StrictMode>,
)
