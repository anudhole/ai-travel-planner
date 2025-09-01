import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import { Toaster } from './components/ui/sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripId]/index.jsx'
import { LoadScript } from '@react-google-maps/api'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/create-trip', element: <CreateTrip /> },
  { path: '/view-trip/:tripId', element: <Viewtrip /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={['places']}
      >
        <Header />
        <Toaster />
        <RouterProvider router={router} />
      </LoadScript>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
