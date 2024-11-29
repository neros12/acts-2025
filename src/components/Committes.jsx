import { twMerge } from 'tailwind-merge'

import { Section } from 'components/base/Section'
import { Container } from 'components/Base/Container'

export function Committes({ className }) {
    return (
        <Section id="committes" className={className}>
            <Container className="space-y-20">
                <div>
                    <h2
                        id="conference-chair"
                        className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
                    >
                        Conference Chair
                    </h2>
                    <p className="font-display mt-4 text-2xl tracking-tight text-blue-900">
                        Asst. Prof. Lek Wantha
                    </p>
                    <p className="font-display mt-4 text-2xl tracking-tight text-blue-900">
                        Asst. Prof. Lek Wantha
                    </p>
                </div>
                <div>
                    <h2
                        id="scientific-committee"
                        className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
                    >
                        Scientific Committee
                    </h2>
                    <p className="font-display mt-4 text-2xl tracking-tight text-blue-900">
                        Asst. Prof. Lek Wantha
                    </p>
                    <p className="font-display mt-4 text-2xl tracking-tight text-blue-900">
                        Asst. Prof. Lek Wantha
                    </p>
                </div>
                <div>
                    <h2
                        id="organizing-committee"
                        className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
                    >
                        Organizing Committee
                    </h2>
                    <p className="font-display mt-4 text-2xl tracking-tight text-blue-900">
                        Asst. Prof. Lek Wantha
                    </p>
                    <p className="font-display mt-4 text-2xl tracking-tight text-blue-900">
                        Asst. Prof. Lek Wantha
                    </p>
                </div>
            </Container>
        </Section>
    )
}
