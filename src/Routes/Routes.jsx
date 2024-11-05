import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import Home from "../Pages/Home"
import Statistics from "../Pages/Statistics"
import Dashboard from "../Pages/Dashboard"
import Products from "../Components/Products"




const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
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
            element: <Dashboard></Dashboard>
        },
        
      ]
    
    },
  ])

  export default routes