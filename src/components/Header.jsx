import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { Logo } from 'components/Logo'
import { BaseLink } from 'components/base/BaseLink'

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-white lg:pt-11">
            <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
                <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
                    <Logo className="h-12 w-auto text-slate-900" />
                </div>
                <div className="flex space-x-4">
                    <BaseLink url="/">Home</BaseLink>
                    <BaseLink url="/committes">Committes</BaseLink>
                    <BaseLink url="/?scroll=speakers">Speakers</BaseLink>
                    <BaseLink url="/?scroll=contact">Contact</BaseLink>
                </div>
                <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
                    <BaseLink url="/sign-up">Sign-up</BaseLink>
                </div>
            </Container>
        </header>
    )
}
