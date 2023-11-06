import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={MainRoutes}>
        </RouterProvider>
      </React.StrictMode>,
    </AuthProvider>
  </QueryClientProvider>
)
