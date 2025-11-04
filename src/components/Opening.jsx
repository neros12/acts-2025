import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEmail, MdPhone } from 'react-icons/md'
import {
    HiOutlineClipboardDocumentList,
    HiOutlineClipboardDocumentCheck,
} from 'react-icons/hi2'
import { LuHotel } from 'react-icons/lu'
import { AiOutlineSchedule } from 'react-icons/ai'

import { Section } from 'components/base/Section'
import { Container } from 'components/Base/Container'
import { useLocationContext } from 'contexts/LocationContext'

export function Opening({ className }) {
    const { isKorea } = useLocationContext()
    const [registerationPage, setRegisterationPage] = useState(
        'https://www.kiche.or.kr/_GG0d/en'
    )
    const [bookingPage, setBookingPage] = useState(
        'https://secure.minorhotels.com/rooms.aspx?language=en&_ucs_=1&adults=2&bc=AV&checkin=12%2f11%2f2025&children=0&currency=KRW&ga_client_id=1360015428.1742449780&ga_session_id=1747096992&group=puk1125&hc=VBIF&infants=0&nights=1&rooms=1&tealid=018bcc8e10d000136c0ccdce02cf0506f002c06700bd0'
    )

    useEffect(() => {
        if (isKorea) {
            setRegisterationPage('https://www.kiche.or.kr/_GG0d')
            setBookingPage('https://bit.ly/43eKypy')
        } else {
            setRegisterationPage('https://www.kiche.or.kr/_GG0d/en')
            setBookingPage(
                'https://secure.minorhotels.com/rooms.aspx?language=en&_ucs_=1&adults=2&bc=AV&checkin=12%2f11%2f2025&children=0&currency=KRW&ga_client_id=1360015428.1742449780&ga_session_id=1747096992&group=puk1125&hc=VBIF&infants=0&nights=1&rooms=1&tealid=018bcc8e10d000136c0ccdce02cf0506f002c06700bd0'
            )
        }
    }, [isKorea])
    return (
        <Section className={className}>
            <Container>
                <div className="font-thin ms:grid ms:grid-cols-2 ms:gap-x-16">
                    <div className="text-2xl font-semibold">
                        <div className="flex items-center justify-center">
                            <div className="grid w-full max-w-[32rem] grid-cols-1 items-center xs:grid-cols-2">
                                <a
                                    className="flex h-56 w-full flex-col items-center justify-center p-4 hover:bg-gray-50"
                                    href={registerationPage}
                                    alt=""
                                    target="_blank"
                                >
                                    <div className="flex h-48 flex-col items-center">
                                        <div className="h-28 w-28 rounded-full bg-blue-900 p-4">
                                            <HiOutlineClipboardDocumentList className="h-full w-full text-white" />
                                        </div>
                                        <div className="text-center font-semibold">
                                            Registration
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="flex h-56 w-full flex-col items-center justify-center p-4 hover:bg-gray-50"
                                    href="https://forms.gle/vWPprBpyFk23JroV6"
                                    alt=""
                                    target="_blank"
                                >
                                    <div className="flex h-48 flex-col items-center">
                                        <div className="h-28 w-28 rounded-full bg-emerald-700 p-4">
                                            <HiOutlineClipboardDocumentCheck className="h-full w-full text-white" />
                                        </div>
                                        <div className="text-center font-semibold">
                                            Abstract
                                            <br />
                                            Submission
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="flex h-56 w-full items-center justify-center hover:bg-gray-50"
                                    href={bookingPage}
                                    alt=""
                                    target="_blank"
                                >
                                    <div className="flex h-48 flex-col items-center">
                                        <div className="h-28 w-28 rounded-full bg-gray-600 p-4">
                                            <LuHotel className="h-full w-full text-white" />
                                        </div>
                                        <div className="text-center font-semibold">
                                            Hotel Reservation
                                        </div>
                                    </div>
                                </a>
                                <Link
                                    className="flex h-56 w-full items-center justify-center hover:bg-gray-50"
                                    to="/program"
                                >
                                    <div className="flex h-48 flex-col items-center">
                                        <div className="h-28 w-28 rounded-full bg-blue-400 p-4">
                                            <AiOutlineSchedule className="h-full w-full text-white" />
                                        </div>
                                        <div className="text-center font-semibold">
                                            Program Schedule
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-xl max-ms:mt-2">
                        <div className="mb-1 text-2xl font-semibold">
                            Organized by
                        </div>
                        <div>-&nbsp;&nbsp;Asian Crystallization Society</div>
                        <div>-&nbsp;&nbsp;Pukyong National University</div>
                        <div>
                            -&nbsp;&nbsp;The Division of Separation Technology
                        </div>
                        <div>
                            -&nbsp;&nbsp;Korean Institute of Chemical Engineers
                        </div>
                        <div>
                            -&nbsp;&nbsp;Korea University BK21 FOUR R&E Center
                            for Chemical&Biological Engineering
                        </div>
                        <div className="mb-1 mt-4 text-2xl font-semibold">
                            Contact
                        </div>
                        <div className="flex items-center space-x-2">
                            <MdOutlineEmail className="mt-1" />
                            <div>jwkang@korea.ac.kr</div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MdPhone />
                            <div>+82-2-3290-3305</div>
                        </div>
                        {/* <Link
                            to="/program"
                            className="mt-6 block w-fit font-normal text-blue-600 hover:text-blue-800"
                        >
                            &#60;&#60; See Program Schedule &#62;&#62;
                        </Link> */}
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 mt-10 text-3xl font-semibold text-blue-600">
                        Abstract template and more
                    </h4>
                    <div className="grid grid-cols-6 border-b border-black">
                        <div className="col-span-5 p-2 font-semibold">
                            Title
                        </div>
                        <div className="col-span-1 px-4 py-2 font-semibold">
                            Date
                        </div>
                    </div>

                    {/* Board Table */}
                    <div className="grid grid-cols-6 gap-2 pt-2">
                        <a
                            className="col-span-5 px-2"
                            href="https://naver.me/5pqh9xtg"
                            alt=""
                            target="_blank"
                        >
                            Presentation Guideline
                        </a>
                        <div className="px-2">
                            <span className="max-sm:hidden">2025-</span>10
                            <span className="max-sm:hidden">-</span>
                            <span className="sm:hidden">/</span>22
                        </div>
                        <a
                            className="col-span-5 px-2"
                            href="https://naver.me/GiazmvKX"
                            alt=""
                            target="_blank"
                        >
                            Fourth Circular
                        </a>
                        <div className="px-2">
                            <span className="max-sm:hidden">2025-</span>09
                            <span className="max-sm:hidden">-</span>
                            <span className="sm:hidden">/</span>29
                        </div>
                        <a
                            className="col-span-5 px-2"
                            href="https://naver.me/FkLm2g9A"
                            alt=""
                            target="_blank"
                        >
                            Third Circular
                        </a>
                        <div className="px-2">
                            <span className="max-sm:hidden">2025-</span>08
                            <span className="max-sm:hidden">-</span>
                            <span className="sm:hidden">/</span>05
                        </div>
                        <a
                            className="col-span-5 px-2"
                            href="https://naver.me/xfYnNxry"
                            alt=""
                            target="_blank"
                        >
                            Second Circular
                        </a>
                        <div className="px-2">
                            <span className="max-sm:hidden">2025-</span>05
                            <span className="max-sm:hidden">-</span>
                            <span className="sm:hidden">/</span>19
                        </div>
                        <a
                            className="col-span-5 px-2"
                            href="https://naver.me/5IiJ45Jw"
                            alt=""
                            target="_blank"
                        >
                            Abstract Template
                        </a>
                        <div className="px-2">
                            <span className="max-sm:hidden">2025-</span>05
                            <span className="max-sm:hidden">-</span>
                            <span className="sm:hidden">/</span>12
                        </div>
                        <a
                            className="col-span-5 px-2"
                            href="http://naver.me/FFGJSsL8"
                            alt=""
                            target="_blank"
                        >
                            First Circular and Call for Papers
                        </a>
                        <div className="px-2">
                            <span className="max-sm:hidden">2024-</span>12
                            <span className="max-sm:hidden">-</span>
                            <span className="sm:hidden">/</span>10
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
