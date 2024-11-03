import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './Routes/Routes'




createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)