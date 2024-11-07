import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async'



createRoot(document.getElementById('root')).render(
  

  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={routes} />
    <ToastContainer />
    </HelmetProvider>
  </StrictMode>,
)
