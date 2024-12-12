import { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

import Show from 'components/Show'
import { Section } from 'components/base/Section'
import { Container } from 'components/Base/Container'

function CommitteeMenu({ className, committeState, setCommitteeState, menu }) {
    return (
        <div
            className={twMerge(
                'cursor-pointer text-2xl',
                menu === committeState
                    ? 'text-blue-900'
                    : 'font-light text-slate-400',
                className
            )}
            onClick={() => {
                setCommitteeState(menu)
            }}
        >
            {menu}
        </div>
    )
}

function CommitteeContent({
    className,
    position,
    name,
    organization,
    country,
}) {
    return (
        <div className={twMerge('h-fit p-4', className)}>
            <div className="mb-1 text-center text-xl font-semibold">
                {position}. {name}
            </div>
            <div className="text-center">{organization}</div>
            <div className="text-center text-sm">{country}</div>
        </div>
    )
}

export function Committees({ className }) {
    const [committeState, setCommitteeState] = useState('Symposium Chairs')

    return (
        <Section className={className}>
            <Container>
                <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                    Committees
                </h2>
                <div className="mt-12 md:mt-20 md:flex md:gap-4">
                    <div className="flex flex-wrap gap-x-8 gap-y-4 max-md:mb-12 md:w-64 md:min-w-64 md:flex-col">
                        <CommitteeMenu
                            menu="Symposium Chairs"
                            committeState={committeState}
                            setCommitteeState={setCommitteeState}
                        />
                        <CommitteeMenu
                            menu="Symposium Secretary"
                            committeState={committeState}
                            setCommitteeState={setCommitteeState}
                        />
                        <CommitteeMenu
                            menu="Advisory Board"
                            committeState={committeState}
                            setCommitteeState={setCommitteeState}
                        />
                        <CommitteeMenu
                            menu="Scientific Committee"
                            committeState={committeState}
                            setCommitteeState={setCommitteeState}
                        />
                        <CommitteeMenu
                            menu="National Organizing Committee"
                            committeState={committeState}
                            setCommitteeState={setCommitteeState}
                        />
                    </div>
                    <div className="grid flex-auto grid-cols-1 gap-12 xs:grid-cols-2 lg:grid-cols-3">
                        <Show show={committeState === 'Symposium Chairs'}>
                            <CommitteeContent
                                name="Jeong Won Kang"
                                position="Prof"
                                organization="Korea University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Jonghwi Lee"
                                position="Prof"
                                organization="Chung Ang University"
                                country="Korea"
                            />
                        </Show>
                        <Show show={committeState === 'Symposium Secretary'}>
                            <CommitteeContent
                                name="Sang Hyuk Im"
                                position="Prof"
                                organization="Korea University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Kiho Park"
                                position="Prof"
                                organization="Hanyang University"
                                country="Korea"
                            />
                        </Show>
                        <Show show={committeState === 'Advisory Board'}>
                            <CommitteeContent
                                name="Izumi Hirasawa"
                                position="Prof"
                                organization="Waseda University"
                                country="Japan"
                            />
                            <CommitteeContent
                                name="Hirosi Ooshima"
                                position="Prof"
                                organization="Osaka Metropolitan University"
                                country="Japan"
                            />
                            <CommitteeContent
                                name="Choul-Ho Lee"
                                position="Prof"
                                organization="Kongju National University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Dae Ryook Yang"
                                position="Prof"
                                organization="Korea University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Kee-Kahb Koo"
                                position="Prof"
                                organization="Sogang University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Woo-Sik Kim"
                                position="Prof"
                                organization="Kyung Hee University"
                                country="Korea"
                            />
                        </Show>
                        <Show show={committeState === 'Scientific Committee'}>
                            <CommitteeContent
                                name="Gérard Coquerel"
                                position="Prof"
                                organization="University of Rouen Normandy"
                                country="France"
                            />
                            <CommitteeContent
                                name="Ann Chow"
                                position="Dr"
                                organization="Agency for Science, Technology and Research 	&#40;A*STAR	&#41;"
                                country="Singapore"
                            />
                            <CommitteeContent
                                name="Hongyuan Wei"
                                position="Prof"
                                organization="Tianjin University"
                                country="China"
                            />
                            <CommitteeContent
                                name="Hiroshi Takiyama"
                                position="Prof"
                                organization="Tokyo University of Agriculture and Technology"
                                country="Japan"
                            />
                            <CommitteeContent
                                name="Adrian Flood"
                                position="Prof"
                                organization="Vidyasirimedhi Institute of Science and Technology"
                                country="Thailand"
                            />
                            <CommitteeContent
                                name="Tu Lee"
                                position="Prof"
                                organization="National Central University"
                                country="Taiwan"
                            />
                            <CommitteeContent
                                name="Hongxun Hao"
                                position="Prof"
                                organization="Tianjin University"
                                country="China"
                            />
                            <CommitteeContent
                                name="Koichi Igarashi"
                                position="Prof"
                                organization="Osaka City University"
                                country="Japan"
                            />
                            <CommitteeContent
                                name="Saif Khan"
                                position="Prof"
                                organization="National University of Singapore"
                                country="Singapore"
                            />
                            <CommitteeContent
                                name="Tao Liu"
                                position="Prof"
                                organization="Dailian University of Technology"
                                country="China"
                            />
                            <CommitteeContent
                                name="Zuoliang Sha"
                                position="Prof"
                                organization="Tianjin University of Science and Technology"
                                country="China"
                            />
                            <CommitteeContent
                                name="Lek Wantha"
                                position="Prof"
                                organization="Suranaree University of Technology"
                                country="Thailand"
                            />
                            <CommitteeContent
                                name="Xing-Gui Zhou"
                                position="Prof"
                                organization="East China University of Science and Technology"
                                country="China"
                            />
                        </Show>
                        <Show
                            show={
                                committeState ===
                                'National Organizing Committee'
                            }
                        >
                            <CommitteeContent
                                name="Jinsoo Kim"
                                position="Prof"
                                organization="Kyung Hee University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Sang Kyu Kwak"
                                position="Prof"
                                organization="Korea University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="O-Pil Kwon"
                                position="Prof"
                                organization="Ajou University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Sang Wook Kim"
                                position="Prof"
                                organization="Ajou University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Yun Suk Huh"
                                position="Prof"
                                organization="Inha University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Tae Seok Seo"
                                position="Prof"
                                organization="Kyung Hee University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Bum Jun Park"
                                position="Prof"
                                organization="Kyung Hee University"
                                country="Korea"
                            />
                            <CommitteeContent
                                name="Taekyung Yu"
                                position="Prof"
                                organization="Kyung Hee University"
                                country="Korea"
                            />
                        </Show>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
