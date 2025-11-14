import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { VscChromeMinimize } from 'react-icons/vsc'

export function Hero() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: false,
    }

    const ref = useRef(null)
    const [slideHeight, setSlideHeight] = useState(0)

    useEffect(() => {
        if (!ref.current) return

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setSlideHeight(entry.contentRect.height)
            }
        })

        observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return (
        <Slider {...settings} className="min-h-screen">
            <ACTSContents refObj={ref} />
            <Image01 height={slideHeight} />
        </Slider>
    )
}

export function ACTSContents({ refObj }) {
    return (
        <div
            ref={refObj}
            className="h-full min-h-screen bg-busan bg-cover bg-bottom"
        >
            <div className="h-full w-full p-4 backdrop-brightness-[.6] sm:p-16">
                <div className="mx-auto max-w-screen-lg text-white">
                    <h1 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl">
                        <span className="sr-only">DeceptiConf - </span> Asian
                        Crystallization Technology Symposium
                    </h1>
                    <div className="font-display mt-6 space-y-6 text-2xl tracking-tight">
                        <p>
                            The Asian Crystallization Technology Society aims to
                            provide a forum for academic researchers, scientists
                            and industry experts in Asia and all around the
                            world to discuss recent advances in crystallization
                            science and process technology.
                        </p>
                        <div className="space-y-4 border-black bg-black/35 p-4">
                            <div>
                                <h3 className="font-semibold">
                                    Important Due Dates
                                </h3>
                                <div className="flex items-center font-light">
                                    <VscChromeMinimize className="mr-2" />
                                    Abstract &#40;1 page&#41; : 15 September
                                    2025&nbsp;
                                    <span>&#40;extended&#41;</span>
                                </div>
                                <div className="flex items-center font-light">
                                    <VscChromeMinimize className="mr-2" />
                                    Acceptance Notification : 30 September 2025
                                </div>
                                <div className="flex items-center font-light">
                                    <VscChromeMinimize className="mr-2" />
                                    Pre-registration : 15 October 2025
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold">
                                    Registration and Fees
                                </h3>
                                <div className="flex items-center font-light">
                                    <VscChromeMinimize className="mr-2" />
                                    Pre-registration : USD 500 &#40; for student
                                    USD 300 &#41;
                                </div>
                                <div className="flex items-center font-light">
                                    <VscChromeMinimize className="mr-2" />
                                    Site registration : USD 550 &#40; for
                                    student USD 350 &#41;
                                </div>
                            </div>
                        </div>
                    </div>
                    <li className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                        {[
                            ['Date', '12-14 Nov. 2025'],
                            [
                                'Venue',
                                'Convention Hall 2, Mirae Building 4th Floor, Pukyong National University (Daeyon Campus)',
                            ],
                            ['Location', 'Busan, Republic of Korea'],
                        ].map(([name, value]) => (
                            <div key={name}>
                                <dt className="font-mono text-sm">{name}</dt>
                                <dd className="mt-0.5 text-2xl font-semibold tracking-tight">
                                    {value}
                                </dd>
                            </div>
                        ))}
                    </li>
                </div>
            </div>
        </div>
    )
}

export function Image01({ height }) {
    return (
        <div style={{ height }} className="overflow-y-hidden">
            <img src="images/acts-photo/01.jpg" />
            <img src="images/acts-photo/02.jpg" className="brightness-90" />
            <div className="h-full min-h-screen bg-busan bg-cover bg-bottom">
                <div className="h-full w-full p-4 backdrop-brightness-[.6] sm:p-16">
                    <div className="font-display h-fit max-w-screen-lg space-y-4 border-black bg-black/35 p-4 text-2xl tracking-tight text-white">
                        <div>
                            <h3 className="font-semibold">
                                Important Due Dates
                            </h3>
                            <div className="flex items-center font-light">
                                <VscChromeMinimize className="mr-2" />
                                Abstract &#40;1 page&#41; : 15 September
                                2025&nbsp;
                                <span>&#40;extended&#41;</span>
                            </div>
                            <div className="flex items-center font-light">
                                <VscChromeMinimize className="mr-2" />
                                Acceptance Notification : 30 September 2025
                            </div>
                            <div className="flex items-center font-light">
                                <VscChromeMinimize className="mr-2" />
                                Pre-registration : 15 October 2025
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold">Registration and Fees</h3>
                            <div className="flex items-center font-light">
                                <VscChromeMinimize className="mr-2" />
                                Pre-registration : USD 500 &#40; for student USD
                                300 &#41;
                            </div>
                            <div className="flex items-center font-light">
                                <VscChromeMinimize className="mr-2" />
                                Site registration : USD 550 &#40; for student
                                USD 350 &#41;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
