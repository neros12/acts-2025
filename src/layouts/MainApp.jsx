import { Outlet } from 'react-router-dom'

export default function MainApp({ children = <Outlet /> }) {
    return <div className="flex min-h-screen flex-col">{children}</div>
}
