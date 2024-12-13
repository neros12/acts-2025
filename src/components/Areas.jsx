import { Section } from 'components/base/Section'
import { Container } from 'components/Base/Container'

export function Areas({ className }) {
    return (
        <Section className={className}>
            <Container>
                <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                    Conference Areas
                </h2>
                <p className="font-display mt-4 max-w-2xl text-2xl tracking-tight text-blue-900">
                    This conference aims to encompass the whole crystallization
                    aspects.
                </p>
                <div className="mt-8 grid gap-y-8 xl:grid-cols-2 xl:gap-x-12 xl:gap-y-10">
                    <div className="h-fit rounded-2xl bg-white p-4 text-xl font-light text-blue-900 shadow-xl shadow-blue-900/5 backdrop-blur">
                        <h4 className="mb-2 text-2xl font-semibold">
                            Fundamentals
                        </h4>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>
                                Nucleation, growth, agglomeration, habits,
                                morphology
                            </p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>
                                Polymorphs, cocrystals, solvates, salts,
                                polytypism
                            </p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Phase transformation</p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Phase equilibrium and thermodynamics</p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>
                                Molecular kinetics and transport phenomena in
                                crystal growth
                            </p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Biomineralization</p>
                        </div>
                    </div>
                    <div className="h-fit rounded-2xl bg-white p-4 text-xl font-light text-blue-900 shadow-xl shadow-blue-900/5 backdrop-blur">
                        <h4 className="mb-2 text-2xl font-semibold">
                            Materials aspects
                        </h4>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>
                                Crystal engineering for organic, inorganic,
                                hybrid solids
                            </p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Crystals in pharmaceutical formulations</p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Crystals for energy applications</p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Biomimetic and bio-inspired materials</p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Biomolecules</p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Nanostructured phases</p>
                        </div>
                    </div>
                    <div className="h-fit rounded-2xl bg-white p-4 text-xl font-light text-blue-900 shadow-xl shadow-blue-900/5 backdrop-blur">
                        <h4 className="mb-2 text-2xl font-semibold">
                            Processes
                        </h4>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Process design, simulation, and control</p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>
                                Techniques for purification, waste treatment,
                                recovery
                            </p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Crystallizer</p>
                        </div>
                    </div>

                    <div className="h-fit rounded-2xl bg-white p-4 text-xl font-light text-blue-900 shadow-xl shadow-blue-900/5 backdrop-blur">
                        <h4 className="mb-2 text-2xl font-semibold">
                            Emerging technologies
                        </h4>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Simulation and molecular-level modeling</p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>
                                Apparatus, instruments, and techniques for
                                crystallization
                            </p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Characterization of crystals</p>
                        </div>
                        <div className="my-1 flex sm:ml-12">
                            <span className="font-normal">-&nbsp;&nbsp;</span>
                            <p>Green and sustainable technologies</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

// function AreaContainer({ children }) {
//     return (
//         <div className="xs:grid-cols-2 grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-12 xl:grid-cols-4">
//             {children}
//         </div>
//     )
// }

// function AreaBlock({ children }) {
//     return (
//         <div className="flex flex-col items-center justify-center rounded-3xl bg-white/60 p-8 text-center text-blue-900 shadow-xl shadow-blue-900/5 backdrop-blur">
//             {children}
//         </div>
//     )
// }

// export function Areas({ className }) {
//     return (
//         <Section className={className}>
//             <Container>
//                 <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
//                     Conference Areas
//                 </h2>
//                 <p className="font-display mt-4 max-w-2xl text-2xl tracking-tight text-blue-900">
//                     This conference aims to encompass the whole crystallization
//                     aspects.
//                 </p>
//                 <div className="mt-8">
//                     <h4 className="my-4 text-2xl font-semibold text-blue-700">
//                         Fundamentals
//                     </h4>
//                     <AreaContainer>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Nucleation
//                             </div>
//                             <div className="mt-1 font-mono text-sm text-slate-500">
//                                 <div>growth</div>
//                                 <div>agglomeration</div>
//                                 <div>habits</div>
//                                 <div>morphology</div>
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Polymorphs
//                             </div>
//                             <div className="mt-1 font-mono text-sm text-slate-500">
//                                 <div>cocrystals</div>
//                                 <div>solvates</div>
//                                 <div>salts</div>
//                                 <div>polytypism</div>
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Phase transformation
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Thermodynamics
//                             </div>
//                             <div className="mt-1 font-mono text-sm text-slate-500">
//                                 <div>phase equilibrium</div>
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Crystal growth
//                             </div>
//                             <div className="mt-1 font-mono text-sm text-slate-500">
//                                 <div>molecular kinetics</div>
//                                 <div>transport phenomena</div>
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Biomineralization
//                             </div>
//                         </AreaBlock>
//                     </AreaContainer>
//                 </div>
//                 <div className="mt-8">
//                     <h4 className="my-4 text-2xl font-semibold text-blue-700">
//                         Processes
//                     </h4>
//                     <AreaContainer>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">Process</div>
//                             <div className="mt-1 font-mono text-sm text-slate-500">
//                                 <div>design</div>
//                                 <div>simulation</div>
//                                 <div>control</div>
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Techniques
//                             </div>
//                             <div className="mt-1 font-mono text-sm text-slate-500">
//                                 <div>purification</div>
//                                 <div>waste treatment</div>
//                                 <div>recovery</div>
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Crystalizer
//                             </div>
//                         </AreaBlock>
//                     </AreaContainer>
//                 </div>
//                 <div className="mt-8">
//                     <h4 className="my-4 text-2xl font-semibold text-blue-700">
//                         Materials aspects
//                     </h4>
//                     <AreaContainer>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Crystal engineering
//                             </div>
//                             <div className="mt-1 font-mono text-sm text-slate-500">
//                                 <div>organic</div>
//                                 <div>inorganic</div>
//                                 <div>hybrid solids</div>
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Pharmaceutical formulations
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Energy application
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Materials
//                             </div>
//                             <div className="mt-1 font-mono text-sm text-slate-500">
//                                 <div>biomimetic</div>
//                                 <div>bio-inspired </div>
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Biomolecules
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Nanostructured phases
//                             </div>
//                         </AreaBlock>
//                     </AreaContainer>
//                 </div>
//                 <div className="mt-8">
//                     <h4 className="my-4 text-2xl font-semibold text-blue-700">
//                         Emerging technologies
//                     </h4>
//                     <AreaContainer>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 molecular-level modeling
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Apparatus, instrumentsm and techniques
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Characterization of crystals
//                             </div>
//                         </AreaBlock>
//                         <AreaBlock>
//                             <div className="text-lg font-semibold">
//                                 Green and sustainable technologies
//                             </div>
//                         </AreaBlock>
//                     </AreaContainer>
//                 </div>
//             </Container>
//         </Section>
//     )
// }
