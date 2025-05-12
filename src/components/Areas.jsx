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
