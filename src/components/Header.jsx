import { Link } from 'react-router-dom'
import { Logo } from 'components/Logo'

export function HomeHeader() {
    return (
        <header className="fixed top-0 z-30 w-full bg-white">
            <div className="mx-auto flex w-full max-w-7xl items-end justify-between pb-1 pr-4 sm:pl-2 sm:pr-6 lg:pl-4 lg:pr-8">
                <Logo className="h-20" />
                <ol className="flex space-x-8 pb-4">
                    <Link
                        to="/"
                        className="inline-block text-2xl font-semibold text-slate-600 hover:text-black"
                    >
                        Home
                    </Link>
                    <Link
                        to="/program"
                        className="inline-block text-2xl font-semibold text-slate-600 hover:text-black"
                    >
                        Program
                    </Link>
                </ol>
            </div>
        </header>
    )
}
