import { twMerge } from 'tailwind-merge'

import { Section } from 'components/base/Section'
import { Container } from 'components/Base/Container'

export function Scope({ className }) {
    return (
        <Section>
            <Container className={className}>
                <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                    Conference Scope
                </h2>
            </Container>
        </Section>
    )
}
