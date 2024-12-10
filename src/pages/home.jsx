import { useEffect, useRef } from 'react'

import { HomeHeader } from 'components/Header'
import { Footer } from 'components/Footer'
import { Hero } from 'components/Hero'
import { Opening } from 'components/Opening'
import { Areas } from 'components/Areas'
import { Contact } from 'components/Contact'
import { Schedule } from 'components/Schedule'
import { Speakers } from 'components/Speakers'
import { Sponsors } from 'components/Sponsors'
import { Committes } from 'components/committes'

export default function Home() {
    const speakersRef = useRef()
    const committesRef = useRef()
    const contactRef = useRef()

    const clickHeader = (e) => {
        const targetId = e.target.id
        if (targetId === 'nav-home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else if (targetId === 'nav-speakers') {
            speakersRef.current.scrollIntoView({ behavior: 'smooth' })
        } else if (targetId === 'nav-committes') {
            committesRef.current.scrollIntoView({ behavior: 'smooth' })
        } else if (targetId === 'nav-contact') {
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <HomeHeader onClick={clickHeader} />
            <Hero />
            <Opening />
            <Areas className="bg-slate-50" />
            <div ref={speakersRef} />
            {/* <Speakers className="bg-slate-50" /> */}
            {/* <Schedule /> */}
            <div ref={committesRef} />
            <Committes />
            <Sponsors className="bg-slate-50" />
            <div ref={contactRef} />
            {/* <Contact className="bg-slate-50" /> */}
            <Footer />
        </>
    )
}
