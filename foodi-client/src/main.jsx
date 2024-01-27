import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/Router'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>,
)
