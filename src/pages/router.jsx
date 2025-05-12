import { Routes, Route } from 'react-router-dom'

import MainApp from 'layouts/MainApp'

import Home from 'pages/home'
import Abstracts from 'pages/abstract/abstracts'
import WriteAbstract from 'pages/abstract/write'
import ModifyAbstract from 'pages/abstract/modify'

export default function Router() {
    return (
        <Routes>
            <Route element={<MainApp />}>
                <Route path="/" element={<Home />} />
                <Route path="/abstracts" element={<Abstracts />} />
                <Route path="/abstract/write" element={<WriteAbstract />} />
                <Route
                    path="/abstract/modify/:id"
                    element={<ModifyAbstract />}
                />
            </Route>
        </Routes>
    )
}
