import { MdOutlineEmail, MdPhone } from 'react-icons/md'
import {
    HiOutlineClipboardDocumentList,
    HiOutlineClipboardDocumentCheck,
} from 'react-icons/hi2'

import { Section } from 'components/base/Section'
import { Container } from 'components/Base/Container'

export function Opening({ className }) {
    return (
        <Section className={className}>
            <Container>
                <div className="ms:gap-x-16 ms:grid ms:grid-cols-2 font-thin">
                    <div className="text-2xl font-semibold">
                        <div className="flex items-center justify-center">
                            <div className="flex w-full max-w-[32rem] flex-col items-center xs:flex-row xs:justify-between">
                                <button
                                    className="flex h-56 w-56 min-w-56 items-center justify-center hover:bg-gray-50"
                                    onClick={() => {
                                        alert('Registration is not open yet')
                                    }}
                                >
                                    <div className="flex h-48 flex-col items-center">
                                        <div className="h-28 w-28 rounded-full bg-blue-900 p-4">
                                            <HiOutlineClipboardDocumentList className="h-full w-full text-white" />
                                        </div>
                                        <div className="text-center font-semibold">
                                            Registeration
                                        </div>
                                    </div>
                                </button>
                                <button
                                    className="flex h-56 w-56 min-w-56 flex-col items-center justify-center p-4 hover:bg-gray-50"
                                    onClick={() => {
                                        alert('Registration is not open yet')
                                    }}
                                >
                                    <div className="flex h-48 flex-col items-center">
                                        <div className="h-28 w-28 rounded-full bg-emerald-700 p-4">
                                            <HiOutlineClipboardDocumentCheck className="h-full w-full text-white" />
                                        </div>
                                        <div className="text-center font-semibold">
                                            Check
                                            <br />
                                            Registeration
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="max-ms:mt-2 text-xl">
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
                    {/* Board Table */}
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
