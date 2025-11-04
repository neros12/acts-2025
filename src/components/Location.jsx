import { Section } from 'components/Base/Section'
import { Container } from 'components/Base/Container'

export function CampusLocation({ className }) {
    return (
        <Section className={className}>
            <Container>
                <h2 className="mb-8 text-center text-3xl font-semibold tracking-tighter text-blue-600 sm:text-5xl">
                    Campus Location
                </h2>
                <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                    <img
                        className="h-full w-full"
                        src="/images/daeyeon_campus.png"
                    />
                    <div>
                        <div className="mb-1 text-xl font-semibold text-gray-600">
                            DAEYEON CAMPUS Mirae Building
                        </div>
                        <div>(48513) 45, Yongso-ro, Nam-gu, Busan, Korea</div>
                        <div>(Tel: +82-51-629-4114 Fax: +82-51-629-5119)</div>
                        <div className="mt-4 border-2 border-t-gray-700 bg-gray-200 py-1 text-center font-semibold">
                            LINE 2
                        </div>
                        <div className="text-lg font-semibold">
                            From Busan Station :
                        </div>
                        <div>
                            Busan Station → Seomyeon (transfer station) →
                            Kyungsung Univ.Pukyong Nat'l Univ.
                        </div>
                        <div className="mt-2 text-lg font-semibold">
                            From Seobusan Bus Terminal :
                        </div>
                        <div>
                            Sasang → Seomyeon → Kyungsung Univ.Pukyong Nat'l
                            Univ.
                        </div>
                        <a
                            className="mt-4 block text-lg text-blue-600 hover:text-blue-800"
                            href="https://www.pknu.ac.kr/eng/44"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            for more details
                        </a>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export function HotelLocation({ className }) {
    return (
        <Section className={className}>
            <Container>
                <h2 className="mb-8 text-center text-3xl font-semibold tracking-tighter text-blue-600 sm:text-5xl">
                    Hotel Location
                </h2>
                <div className="mx-auto aspect-square w-full max-w-[40rem]">
                    <iframe
                        title="아바니 센트럴 부산 위치"
                        src="https://www.google.com/maps?q=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%A0%84%ED%8F%AC%EB%8C%80%EB%A1%9C%20133%20%EC%95%84%EB%B0%94%EB%8B%88%20%EC%84%BC%ED%8A%B8%EB%9F%B4%20%EB%B6%80%EC%82%B0&z=16&output=embed"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </Container>
        </Section>
    )
}
