import { HomeHeader } from 'components/Header'
import { Footer } from 'components/Footer'
import { Hero } from 'components/Hero'
import { Opening } from 'components/Opening'
import { Areas } from 'components/Areas'
import { Sponsors } from 'components/Sponsors'
import { Committees } from 'components/committes'

export default function Home() {
    return (
        <>
            <HomeHeader />
            <Hero />
            <Opening />
            <Areas className="bg-slate-50" />
            <Committees />
            <Sponsors className="bg-slate-50" />
            <Footer />
        </>
    )
}
