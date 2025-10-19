import { createRoot } from 'react-dom/client'
import { useLayoutEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'

import Router from 'pages/router'
import { AuthContextProvider } from 'contexts/AuthContext'
import { LocationContextProvider } from 'contexts/LocationContext'

import 'styles/global.css'

const LayoutEffect = ({ children }) => {
    const location = useLocation()

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return children
}

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <LocationContextProvider>
            <BrowserRouter>
                <LayoutEffect>
                    <Router />
                </LayoutEffect>
            </BrowserRouter>
        </LocationContextProvider>
    </AuthContextProvider>
)
