import { Logo } from 'components/Logo'

export function HomeHeader({ onClick }) {
    return (
        <header className="fixed top-0 z-30 w-full bg-white">
            <div className="mx-auto flex w-full max-w-7xl items-end justify-between pb-1 pr-4 sm:pl-2 sm:pr-6 lg:pl-4 lg:pr-8">
                <Logo className="h-20" />
                <ol
                    className="flex w-fit space-x-8 pb-4 max-md:hidden"
                    onClick={onClick}
                >
                    {/* <li
                        className="cursor-pointer text-xl font-light"
                        id="nav-home"
                    >
                        Home
                    </li>
                    <li
                        className="cursor-pointer text-xl font-light"
                        id="nav-speakers"
                    >
                        Speakers
                    </li>
                    <li
                        className="cursor-pointer text-xl font-light"
                        id="nav-committes"
                    >
                        Committees
                    </li>
                    <li
                        className="cursor-pointer text-xl font-light"
                        id="nav-contact"
                    >
                        Contact
                    </li> */}
                </ol>
                <div className="flex w-40 justify-end pb-4">
                    <div></div>
                </div>
            </div>
        </header>
    )
}
