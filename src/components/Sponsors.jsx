import { Section } from 'components/base/Section'
import { Container } from 'components/base/Container'
import logoLaravel from 'images/logos/laravel.svg'
import logoMirage from 'images/logos/mirage.svg'
import logoStatamic from 'images/logos/statamic.svg'
import logoStaticKit from 'images/logos/statickit.svg'
import logoTransistor from 'images/logos/transistor.svg'
import logoTuple from 'images/logos/tuple.svg'

const sponsors = [
    { name: 'Transistor', logo: logoTransistor },
    { name: 'Tuple', logo: logoTuple },
    { name: 'StaticKit', logo: logoStaticKit },
    { name: 'Mirage', logo: logoMirage },
    { name: 'Laravel', logo: logoLaravel },
    { name: 'Statamic', logo: logoStatamic },
]

export function Sponsors({ className }) {
    return (
        <Section id="sponsors" className={className}>
            <Container>
                <h2 className="font-display mx-auto max-w-2xl text-center text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                    Current sponsorships for our workshops and speakers.
                </h2>
                <div className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:gap-x-16 lg:grid-cols-3 lg:gap-x-32">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.name}
                            className="aspect-[5/2] w-full bg-indigo-50"
                        />
                    ))}
                </div>
            </Container>
        </Section>
    )
}
