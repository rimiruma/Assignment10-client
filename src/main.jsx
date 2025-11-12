import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'next-themes'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme='light'>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
      </ThemeProvider> 
    
  </StrictMode>,
)
