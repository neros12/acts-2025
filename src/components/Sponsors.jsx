import { twMerge } from 'tailwind-merge'

import { Section } from 'components/base/Section'
import { Container } from 'components/base/Container'

function SponsorLogo({ name, imageUrl, className }) {
    return (
        <img
            id={name}
            src={imageUrl}
            className={twMerge('aspect-[4/1] w-full bg-white', className)}
        />
    )
}

export function Sponsors({ className }) {
    return (
        <Section id="sponsors" className={className}>
            <Container>
                <h2 className="font-display mx-auto text-center text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                    Current conference is supported by
                </h2>
                <div className="mt-20 grid grid-cols-1 gap-8 gap-y-8 sm:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
                    <SponsorLogo
                        className="p-4"
                        name="KICHE"
                        imageUrl="images/sponsers/KICHE.png"
                    />
                    <SponsorLogo
                        name="PukyongUniversity"
                        imageUrl="images/sponsers/PukyongUniversity.png"
                    />
                    <SponsorLogo
                        name="KICHE"
                        imageUrl="images/sponsers/Korea_University_BK.png"
                    />
                    <SponsorLogo
                        className="p-4"
                        name="LG"
                        imageUrl="images/sponsers/LG.svg"
                    />
                    <SponsorLogo
                        className="p-4"
                        name="Lotte"
                        imageUrl="images/sponsers/Lotte.svg"
                    />
                    <SponsorLogo
                        className="p-4"
                        name="Laminar"
                        imageUrl="images/sponsers/Laminar.png"
                    />
                </div>
            </Container>
        </Section>
    )
}
