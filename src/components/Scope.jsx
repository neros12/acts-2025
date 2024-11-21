import { twMerge } from 'tailwind-merge'

import { Container } from 'components/container'

export function Scope({ className }) {
    return (
        <section className={twMerge('py-20 sm:py-32', className)}>
            <Container>
                <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                    Conference Scope
                </h2>
            </Container>
        </section>
    )
}
