import { Routes, Route } from 'react-router-dom'

import MainApp from 'layouts/MainApp'

import Home from 'pages/home'

export default function Router() {
    return (
        <Routes>
            <Route element={<MainApp />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}
