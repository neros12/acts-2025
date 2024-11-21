import { Container } from 'components/Container'
import { Logo } from 'components/Logo'

export function HomeHeader({ onClick }) {
    return (
        <header className="fixed top-0 z-30 flex h-20 w-full items-center bg-white">
            <Container className="flex items-end justify-between">
                <Logo />
                <ol
                    className="flex w-fit space-x-8 max-md:hidden"
                    onClick={onClick}
                >
                    <li
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
                        Committes
                    </li>
                    <li
                        className="cursor-pointer text-xl font-light"
                        id="nav-contact"
                    >
                        Contact
                    </li>
                </ol>
                <div className="flex w-40 justify-end">
                    <button
                        onClick={() =>
                            alert('Registration is currently not open')
                        }
                    >
                        Sign-up
                    </button>
                </div>
            </Container>
        </header>
    )
}
