import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { Section } from 'components/base/Section'
import { Container } from 'components/Base/Container'

export function Committes({ className }) {
    const [committeState, setCommitteState] = useState('Chairs')

    return (
        <Section className={className}>
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                        Committes
                    </h2>
                    <p className="font-display mt-4 text-2xl tracking-tight text-blue-900">
                        Learn from the experts on the cutting-edge of deception
                        at the most sinister companies.
                    </p>
                </div>
                <div className="mt-6 flex gap-8 border-4">
                    <div className="w-64 space-y-4 border text-2xl font-light text-slate-400">
                        <div>Symposium Chairs</div>
                        <div>Symposium Secretary</div>
                        <div>Advisory Board</div>
                        <div>Scientific Committe</div>
                        <div>National Organizing Committe</div>
                    </div>
                    <div className="flex-auto border"></div>
                </div>
            </Container>
        </Section>
    )
}
