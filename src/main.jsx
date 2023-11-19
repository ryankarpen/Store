import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'

import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Products from './routes/Products.jsx'
import Contact from './routes/Contact.jsx'
import Product from './routes/Product.jsx'
import ProductName from './routes/ProductName.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "products",
        element: <Products/>,
      },
      {
        path:"contact",
        element: <Contact/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "products/:id",
        element: <Product/>
      },
      {
        path: "product/:name",
        element: <ProductName/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
