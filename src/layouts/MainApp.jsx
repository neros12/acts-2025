import { Outlet } from 'react-router-dom'

import { HomeHeader } from 'components/Header'
import { Footer } from 'components/Footer'

export default function MainApp({ children = <Outlet /> }) {
    return (
        <div className="flex min-h-screen flex-col">
            <HomeHeader />
            <main className="flex-auto pt-[5.25rem]">{children}</main>
            <Footer />
        </div>
    )
}
