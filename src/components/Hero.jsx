import { VscChromeMinimize } from 'react-icons/vsc'

export function Hero() {
    return (
        <div className="bg-busan flex min-h-screen items-center justify-center bg-cover bg-bottom pt-20 sm:pt-32">
            <div className="w-full max-w-2xl p-4 text-white backdrop-brightness-[.6] sm:p-8 lg:max-w-4xl lg:p-12">
                <h1 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl">
                    <span className="sr-only">DeceptiConf - </span> Asian
                    Crystallization Technology Symposium
                </h1>
                <div className="font-display mt-6 space-y-6 text-2xl tracking-tight">
                    <p>
                        The Asian Crystallization Technology Society aim to
                        provide a forum for academic researchers, scientists and
                        industry experts in Asia and all around the world to
                        discuss recent advances in crystallization science and
                        process technology.
                    </p>
                    <div className="space-y-4 border-black bg-black/35 p-4">
                        <div>
                            <h3 className="font-semibold">
                                Important Due Dates
                            </h3>
                            <div className="flex items-center font-light">
                                <VscChromeMinimize className="mr-2" /> Abstract
                                &#40;1 page&#41; : 30 July 2025
                            </div>
                            <div className="flex items-center font-light">
                                <VscChromeMinimize className="mr-2" />
                                Acceptance Notification : 30 Agust 2025
                            </div>
                            <div className="flex items-center font-light">
                                <VscChromeMinimize className="mr-2" />
                                Pre-registration : 30 September 2025
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold">
                                Submissions on website
                            </h3>
                            <div className="flex items-center font-light">
                                <VscChromeMinimize className="mr-2" />
                                To ba announced
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
                <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                    {[
                        ['Speakers', '18'],
                        ['Date', '19-21 Nov. 2025'],
                        ['Venue', 'Pukyong National University'],
                        ['Location', 'Busan, Korea'],
                    ].map(([name, value]) => (
                        <div key={name}>
                            <dt className="font-mono text-sm">{name}</dt>
                            <dd className="mt-0.5 text-2xl font-semibold tracking-tight">
                                {value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
