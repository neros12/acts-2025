import { Routes, Route } from 'react-router-dom'

import MainApp from 'layouts/MainApp'

import Home from 'pages/home'
import Program from 'pages/program'

export default function Router() {
    return (
        <Routes>
            <Route element={<MainApp />}>
                <Route path="/" element={<Home />} />
                <Route path="/program" element={<Program />} />
            </Route>
        </Routes>
    )
}
