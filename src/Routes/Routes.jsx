import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import Home from "../Pages/Home"
import Statistics from "../Pages/Statistics"
import Dashboard from "../Pages/Dashboard"
import Products from "../Components/Products"
import Details from "../Pages/Details"
import Card from "../Components/Card"
import Wishlist from "../Components/Wishlist"
import ErrorPage from "../Components/Errorpage"




const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('../categories.json'),
            children: [
              {
                path: '/',
                element: <Products></Products>,
                loader: () => fetch('../products.json')
              },
              {
                path: '/category/:category',
                element: <Products></Products>,
                loader: () => fetch('../products.json')
              }
            ]

            
        },
        {
            path: '/statistics',
            element: <Statistics></Statistics>
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>,
            children: [
              {
                path: '/dashboard/card',
                element: <Card></Card>
              },
              {
                path: '/dashboard/wishlist',
                element: <Wishlist></Wishlist>
              }
            ]
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: () => fetch('../products.json')
            
        },
        
        
      ]
    
    },
  ])

  export default routes