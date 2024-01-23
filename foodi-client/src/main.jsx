import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/Router'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>,
)
