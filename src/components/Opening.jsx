import { Section } from 'components/base/Section'
import { Container } from 'components/Base/Container'

export function Opening({ className }) {
    return (
        <Section className={className}>
            <Container>
                <div className="grid grid-cols-2 font-thin">
                    <div className="text-xl">
                        <div className="mb-1 mt-4 text-2xl font-semibold">
                            Organized by
                        </div>
                        <div>Asain Crystallization Society</div>
                        <div>Pukyong National University</div>
                        <div>The Division of Separation Technology</div>
                        <div>Korean Institue of Chemical Engineers (KICHE)</div>
                        <div className="mb-1 mt-4 text-2xl font-semibold">
                            Contact
                        </div>
                        <div>example@korea.ac.kr</div>
                        <div>82+ 000-0000-0000</div>
                    </div>
                    <div>
                        <div>D-date</div>
                        <div>D-</div>
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 mt-10 text-3xl font-semibold text-blue-600">
                        Board
                    </h4>
                    <div className="grid grid-cols-6 border-b border-black">
                        <div className="col-span-5 p-2 font-semibold">
                            Title
                        </div>
                        <div className="col-span-1 px-4 py-2 font-semibold">
                            Date
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-2">
                        <a
                            className="col-span-5 p-2"
                            href="http://naver.me/FFGJSsL8"
                            alt=""
                            target="_blank"
                        >
                            First Circular and Call for Papers
                        </a>
                        <div className="p-2">2024-12-10</div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
