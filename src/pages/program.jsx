import { Section } from 'components/base/Section'
import { Container } from 'components/Base/Container'
import {
    TimeColumn,
    ProgramTable,
    ContentColumn,
    PosterTable,
    PosterNumber,
    PosterAuthor,
    PosterAffiliation,
    PosterTitle,
} from 'components/Table'
import {
    OralPresentationGuideline,
    PoseterPresentationGuideline,
} from 'components/ProgramGuideline'

export default function Program() {
    return (
        <>
            <Section className="border-t py-4 lg:py-4">
                <Container>
                    <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                        Program
                    </h2>
                    <OralPresentationGuideline />
                    {/* Nov 12 */}
                    <section className="mb-8 mt-6">
                        <h4 className="bg-orange-400 py-1 text-center text-xl font-semibold">
                            November 12, 2025 &#40;Wednesday&#41;
                        </h4>
                        <ProgramTable className="bg-gray-100 text-center font-semibold">
                            <TimeColumn>15:00~18:00</TimeColumn>
                            <ContentColumn>
                                Registration
                                <br />
                                &#40;Convention Hall 2, Mirae Building 4th
                                floor, Pukyoung National University&#41;
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable className="bg-orange-100 text-center font-semibold">
                            <TimeColumn>18:00~20:30</TimeColumn>
                            <ContentColumn>
                                Welcome reception
                                <br />
                                &#40;Convention Hall 2, Mirae Building 4th
                                floor, Pukyoung National University&#41;
                            </ContentColumn>
                        </ProgramTable>
                    </section>

                    {/* Nov 13 */}
                    <section className="mb-8">
                        <h4 className="bg-orange-400 py-1 text-center text-xl font-semibold">
                            November 13, 2025 &#40;Thursday&#41;
                        </h4>
                        <ProgramTable>
                            <TimeColumn>9:30~10:10</TimeColumn>
                            <ContentColumn className="bg-blue-200 font-semibold">
                                PL-01 &#40;Gérard Coquerel&#41;, University of
                                Rouen Normandy
                                <br />
                                Interference between solid solutions and
                                polymorphism: theory and examples
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>10:10~10:30</TimeColumn>
                            <ContentColumn className="bg-green-200 font-semibold">
                                KL-01 &#40;Hyunjoon Kong&#41;, The University of
                                Illinois at Urbana-Champaign
                                <br />
                                On-Chip Polymer-Assisted Microdroplet
                                Crystallization for Controlled Drug Size and
                                Dissolution
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>10:30~10:50</TimeColumn>
                            <ContentColumn>
                                OP-01 &#40;Shuntaro Amari&#41;, Tokyo University
                                of Agriculture and Technology
                                <br />
                                Influence of Microcrystal and Impurity
                                Properties on Growth Rate Enhancement of Sodium
                                Chloride Crystals
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>10:50~11:10</TimeColumn>
                            <ContentColumn>
                                OP-02 &#40;Yunna Xue&#41;, East China University
                                of Science and Technology
                                <br />
                                Polyacrylic acid-assisted preferential
                                enrichment of DL-alanine: Mechanism
                                investigations and optimization of operating
                                conditions
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>11:10~11:30</TimeColumn>
                            <ContentColumn>
                                OP-03 &#40;Leon Yoon Ho&#41;, Singapore-MIT
                                Alliance for Research and Technology
                                <br />
                                Producing stable microcrystalline suspensions
                                via crystallisation within isolated emulsion
                                droplets
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable className="text-center font-semibold">
                            <TimeColumn>11:30~13:30</TimeColumn>
                            <ContentColumn className="bg-orange-100">
                                Lunch &#40;steering committee meeting&#41; -
                                Poster Presentation
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>13:30~14:10</TimeColumn>
                            <ContentColumn className="bg-blue-200 font-semibold">
                                PL-02 &#40;Jeong Won Kang&#41;, Korea University
                                <br />
                                Thermodynamic Modeling Framework for the Design
                                of Industrial Crystallization Processes for
                                Organic Compounds
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>14:10~14:30</TimeColumn>
                            <ContentColumn className="bg-green-200 font-semibold">
                                KL-02 &#40;Kouji Maeda&#41;, University of Hyogo
                                <br />
                                Separation of unsaturated fatty acid mixture by
                                high-pressure crystallization
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>14:30~14:50</TimeColumn>
                            <ContentColumn>
                                OP-04 &#40;Jae Bem You&#41;, Chungnam National
                                University
                                <br />
                                Nanoextraction- and dissolution-driven
                                crystallization of organic molecules in surface
                                nanodroplets
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable className="text-center font-semibold">
                            <TimeColumn>14:50~15:40</TimeColumn>
                            <ContentColumn className="bg-orange-100">
                                Coffee break - Poster Presentation
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>15:40~16:00</TimeColumn>
                            <ContentColumn className="bg-green-200 font-semibold">
                                KL-03 &#40;Lek Wantha&#41;, Suranaree University
                                of Technology
                                <br />
                                Process Analytical Technology &#40;PAT&#41; in
                                Crystallization of Amino Acids
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>16:00~16:20</TimeColumn>
                            <ContentColumn>
                                OP-05 &#40;Kunio Funakoshi&#41;, National
                                Institute of Technology, Suzuka Collage
                                <br />
                                Purification Phenomena of Agglomerates for
                                Organic Compounds in Air and a Melt
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>16:20~16:40</TimeColumn>
                            <ContentColumn>
                                OP-06 &#40;Hyeuk Jin Han&#41;, Sungshin Women's
                                University
                                <br />
                                Liquid Metal-Assisted CVD for Facet-Controlled
                                Growth of Molybdenum Phosphide Single Crystals
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>16:40~17:00</TimeColumn>
                            <ContentColumn>
                                OP-07 &#40;Pengyu Zhao&#41;, Pusan National
                                University
                                <br />
                                MOFClassifier: A Machine Learning Approach for
                                Validating Computation-Ready Metal-Organic
                                Frameworks
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable className="bg-orange-400 text-center font-semibold">
                            <TimeColumn>18:00~20:00</TimeColumn>
                            <ContentColumn>
                                Conference banquet
                                <br />
                                &#40;Avani Central Busan Hotel&#41;
                            </ContentColumn>
                        </ProgramTable>
                    </section>

                    {/* Nov 14 */}
                    <section className="mb-8">
                        <h4 className="bg-orange-400 py-1 text-center text-xl font-semibold">
                            November 14, 2025 &#40;Friday&#41;
                        </h4>
                        <ProgramTable>
                            <TimeColumn>9:30~10:10</TimeColumn>
                            <ContentColumn className="bg-blue-200 font-semibold">
                                PL-03 &#40;Hiroshi Takiyama&#41;, Tokyo
                                University of Agriculture and Technology
                                <br />
                                Operation Desing of pH Modulation for Improving
                                External Shape in Reactive Crystallization
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>10:10~10:30</TimeColumn>
                            <ContentColumn className="bg-green-200 font-semibold">
                                KL-04 &#40;Yang Zhang&#41;, South China
                                University of Technology
                                <br />
                                Phase Diagrams and Lattice Energy Calculations
                                of Enantiospecific Colchicine–Malic Acid
                                Cocrystal
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>10:30~10:50</TimeColumn>
                            <ContentColumn>
                                OP-08 &#40;Chie-Shaan Su&#41;, National Taipei
                                University of Technology
                                <br />
                                Production of Ultrafine Ammonium Perchlorate
                                Particles Using the Continuous Antisolvent
                                Sonocrystallization Process
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable className="text-center font-semibold">
                            <TimeColumn>10:50~11:20</TimeColumn>
                            <ContentColumn className="bg-orange-100">
                                Coffee break
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>11:20~11:40</TimeColumn>
                            <ContentColumn className="bg-green-200 font-semibold">
                                KL-05 &#40;Pui Shan Chow&#41;, Agency for
                                Science, Technology and Research
                                &#40;A*STAR&#41;
                                <br />
                                Dehydration kinetics of hydrate and the
                                implications on humidified drying process
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>11:40~12:00</TimeColumn>
                            <ContentColumn>
                                OP-09 &#40;Tao Liu&#41;, Dalian University of
                                Technology
                                <br />
                                Start-up Optimization for Continuous
                                Crystallization via Continuous Oscillatory
                                Baffled Crystallizer
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>12:00~12:20</TimeColumn>
                            <ContentColumn>
                                OP-10 &#40;Chonut Xaiyathoumma&#41;, Suranaree
                                University of Technology
                                <br />A Comparative Study of Solvent Freeze-Out,
                                Cooling, and Antisolvent Techniques for Papain
                                Crystallization
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable className="text-center font-semibold">
                            <TimeColumn>12:20~13:30</TimeColumn>
                            <ContentColumn className="bg-orange-100">
                                Lunch
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>13:30~13:50</TimeColumn>
                            <ContentColumn className="bg-green-200 font-semibold">
                                KL-06 &#40;Shoji Kudo&#41;, Chiba Institute of
                                Technology
                                <br />A guideline for the cooling rate to
                                operate suspension-type cooling crystallization
                                while preventing scale formation
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>13:50~14:10</TimeColumn>
                            <ContentColumn>
                                OP-11 &#40;Takashi Mikami&#41;, Niigata
                                University
                                <br />
                                Influence of polymer additives on reactive
                                crystallization of benzoic acid
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>14:10~14:30</TimeColumn>
                            <ContentColumn>
                                OP-12 &#40;Siti Nur’Aqilah Irwan&#41;,
                                Universiti Teknologi MARA
                                <br />
                                Crystallisation-Driven Polymorphism of
                                L-Isoleucine: Experimental and Molecular
                                Insights into α, β, and γ Forms
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable className="text-center font-semibold">
                            <TimeColumn>14:30~15:00</TimeColumn>
                            <ContentColumn className="bg-orange-100">
                                Coffee break
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>15:00~15:20</TimeColumn>
                            <ContentColumn className="bg-green-200 font-semibold">
                                KL-07 &#40;Kiho Park&#41;, Hanyang University
                                <br />
                                Optimal design and simulation of impurity-free
                                precursor recovery from spent lithium-ion
                                batteries by PBE-DNN integrated model
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>15:20~15:40</TimeColumn>
                            <ContentColumn>
                                OP-13 &#40;Dhanang Edy Pratama&#41;, National
                                Central University
                                <br />A Solid-Solid-Liquid Quasi-Ternary Phase
                                Diagram Method for Multicomponent Solids
                                Validated by Curcumin Purification Design
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>15:40~16:00</TimeColumn>
                            <ContentColumn>
                                OP-14 &#40;Wenbo Wu&#41;, Tianjin University
                                <br />
                                Flexible Organic Charge–Transfer Cocrystals with
                                Near–Infrared Emission
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable>
                            <TimeColumn>16:00~16:20</TimeColumn>
                            <ContentColumn className="bg-green-200 font-semibold">
                                KL-08 &#40;Jonghwi Lee&#41;, Chung-Ang
                                University
                                <br />
                                Polymer-Supported Simultaneous Crystallization
                                of Antihypertensive Drugs
                            </ContentColumn>
                        </ProgramTable>
                        <ProgramTable className="bg-orange-400 text-center font-semibold">
                            <TimeColumn>16:20~16:30</TimeColumn>
                            <ContentColumn>Closing remarks</ContentColumn>
                        </ProgramTable>
                    </section>
                </Container>
            </Section>
            <Section className="bg-slate-50">
                <Container className="space-y-4 bg-slate-50">
                    <h2 className="font-display pb-8 text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                        Posters
                    </h2>
                    <PoseterPresentationGuideline />
                    <PosterTable>
                        <PosterNumber>PP-01</PosterNumber>
                        <PosterAuthor>Sewon Park</PosterAuthor>
                        <PosterAffiliation>
                            Chung-Ang University
                        </PosterAffiliation>
                        <PosterTitle>
                            Reformable Cellulose Foams for Free-Shaped,
                            Plastic-Replacing Structures
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-02</PosterNumber>
                        <PosterAuthor>Dayeon Lee</PosterAuthor>
                        <PosterAffiliation>
                            Chung-Ang University
                        </PosterAffiliation>
                        <PosterTitle>
                            Particulate Composites Prepared by Decreasing
                            Crystallinity of Microcrystalline Celluloses
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-03</PosterNumber>
                        <PosterAuthor>Bong Woo Kim</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Crystallization Engineering for High-Efficiency
                            Inorganic Perovskite LEDs via Supersaturated
                            Antisolvent Treatment
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-04</PosterNumber>
                        <PosterAuthor>Seok Yeong Hong</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            The Pb–Sn Perovskite Crystalline Solar Cell with
                            Passivated Defects and Suppressed Sn Oxidation in
                            the Perovskite Crystal via Zn Salt Engineering
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-05</PosterNumber>
                        <PosterAuthor>GunYoung Kim</PosterAuthor>
                        <PosterAffiliation>
                            Hanyang University
                        </PosterAffiliation>
                        <PosterTitle>
                            Modeling and simulation of forced circulation type
                            continuous evaporative crystallizer
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-06</PosterNumber>
                        <PosterAuthor>Jeong Seob Yun</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Eutectic salt-assisted crystal growth of Ti3AlC2 MAX
                            for Ti3C2Tx MXene transparent heaters and breath
                            sensors
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-07</PosterNumber>
                        <PosterAuthor>Quoc Hao Nguyen</PosterAuthor>
                        <PosterAffiliation>
                            Kyung Hee University
                        </PosterAffiliation>
                        <PosterTitle>
                            Hierarchically Structured Electrocatalyst with Fe
                            Single Atoms and Ultrafine Mo₂N for Enhanced
                            Activity and Durability in Flexible Zinc–Air
                            Batteries
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-08</PosterNumber>
                        <PosterAuthor>Beom Chan Ryu</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Solid–Liquid Equilibrium of Acrylic Acid, Water, and
                            Acetic Acid Ternary System for Separation Process
                            Design
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-09</PosterNumber>
                        <PosterAuthor>Beom Chan Ryu</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Phase Behavior of Neopentyl Glycol + Water +
                            2-Ethylhexanol: SLE and LLE Measurements for
                            Crystallization Process Design
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-10</PosterNumber>
                        <PosterAuthor>David Sunghwan Lee</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            pH-Modulated Optimization of Phosphonic Acid
                            Coordination with SnO2 Crystal Defects for Efficient
                            Perovskite Solar Cells
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-11</PosterNumber>
                        <PosterAuthor>Lin Lin Feng</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Scalable synthesis of silver nanowires with tunable
                            morphology via controlled precursor injection and
                            halide-regulated nucleation
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-12</PosterNumber>
                        <PosterAuthor>Hongtu Zhao</PosterAuthor>
                        <PosterAffiliation>
                            Tianjin University
                        </PosterAffiliation>
                        <PosterTitle>
                            Mechanistic study on the structure–property
                            relationship of flexible organic crystals
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-13</PosterNumber>
                        <PosterAuthor>Jae Kwon Shin</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Theoretical Investigation of Crystal Growth and
                            Binding Affinity of Multidentate Additives for
                            High-Performance Perovskite Light-Emitting Diodes
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-14</PosterNumber>
                        <PosterAuthor>Dong Hyeok Kwon</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Predicting Structural Compatibility at
                            Hetero-Epitaxial Zeolite Interfaces: A Computational
                            Screening Approach
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-15</PosterNumber>
                        <PosterAuthor>Ye Jin Kwon</PosterAuthor>
                        <PosterAffiliation>
                            Kyung Hee University
                        </PosterAffiliation>
                        <PosterTitle>
                            Role of Surfactants in Modulating Ethanol Diffusion
                            and Chiral Symmetry Breaking during Antisolvent
                            Crystallization
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-16</PosterNumber>
                        <PosterAuthor>Abimbola Jacob Olasoji</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Enhanced crystallization control of perovskite
                            thin-films via inverse opal scaffold templating
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-17</PosterNumber>
                        <PosterAuthor>So-Un Kim</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Synthesis of electron transport layers using SnO2
                            nanocrystals passivated with functional ions for
                            self-powered perovskite photodetectors
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-18</PosterNumber>
                        <PosterAuthor>SueHwan Lee</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Stoichiometry-Controlled Crystallization of 2D Tin
                            Halide Perovskite Thin Film
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-19</PosterNumber>
                        <PosterAuthor>Sun Yoo Hwang</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Thermodynamics-Guided Neural Network Modeling of
                            Crystallization Process
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-20</PosterNumber>
                        <PosterAuthor>Sun Yoo Hwang</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Antisolvent Selection Method based on Predictive
                            Thermodynamic Models
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-21</PosterNumber>
                        <PosterAuthor>Hui Yu</PosterAuthor>
                        <PosterAffiliation>
                            Tianjin University
                        </PosterAffiliation>
                        <PosterTitle>
                            Photomechanical macroscopic movements driven by
                            photoinduced topochemical [2+2] cycloaddition
                            reaction in tridentate cyanostilbene
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-22</PosterNumber>
                        <PosterAuthor>Yunmi Song</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            High-Crystallinity P3HT Nanoparticles via Pickering
                            Emulsion Mediated by Functionalized Graphene Quantum
                            Dots
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-23</PosterNumber>
                        <PosterAuthor>Haemin Lee</PosterAuthor>
                        <PosterAffiliation>
                            Chung-Ang University
                        </PosterAffiliation>
                        <PosterTitle>
                            Crystallization-Guided Structuring of Eco-Friendly
                            Polysaccharide Hydrogels for Microplastic Removal
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-24</PosterNumber>
                        <PosterAuthor>Abraha Gebremeskel Bairu</PosterAuthor>
                        <PosterAffiliation>
                            Tianjin University
                        </PosterAffiliation>
                        <PosterTitle>
                            Exploring Nucleation Kinetics of Vanillyl Alcohol:
                            Insights from Experimental and Modeling Approaches
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-25</PosterNumber>
                        <PosterAuthor>Chaejin Lee</PosterAuthor>
                        <PosterAffiliation>
                            Kyung Hee University
                        </PosterAffiliation>
                        <PosterTitle>
                            Correlation Between Initial Conditions and Final
                            Enantiopurity in the TCID of Racemic Cl-TAK
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-26</PosterNumber>
                        <PosterAuthor>Hyong Joon Lee</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Crystallization Regulation via Polyelectrolytic
                            Charge Transport Layer for Efficient Inorganic
                            Perovskite Solar cells
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-27</PosterNumber>
                        <PosterAuthor>Keita Sato</PosterAuthor>
                        <PosterAffiliation>
                            Niigata University
                        </PosterAffiliation>
                        <PosterTitle>
                            Influence of polymer additives on reactive
                            crystallization of Benzoic acid–Sodium Benzoate
                            cocrystal
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-28</PosterNumber>
                        <PosterAuthor>Seoeun Wi</PosterAuthor>
                        <PosterAffiliation>
                            Chung-Ang University
                        </PosterAffiliation>
                        <PosterTitle>
                            Stretchable Cellulose-Based Structures with Negative
                            Poisson’s Ratio Prepared via Directional
                            Crystallization
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-29</PosterNumber>
                        <PosterAuthor>Seung Min Lee</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            DFT study for defect passivation of FAPbBr3
                            perovskite nanocrystal induced by BF4- ion
                            incorporation
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-30</PosterNumber>
                        <PosterAuthor>Toan Minh Pham</PosterAuthor>
                        <PosterAffiliation>
                            Kyung Hee University
                        </PosterAffiliation>
                        <PosterTitle>
                            Facile Electrochemical Reconstruction Approach to
                            Synthesize Fe-Doped Nickel Oxyhydroxide Catalyst for
                            Oxygen Evolution Reaction
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-31</PosterNumber>
                        <PosterAuthor>Toan Minh Pham</PosterAuthor>
                        <PosterAffiliation>
                            Kyung Hee University
                        </PosterAffiliation>
                        <PosterTitle>
                            Investigation of Pt, Ru, and Pd Catalysts Supported
                            on Alumina Synthesized by Spray Pyrolysis for
                            Monobenzyl Toluene Hydrogenation
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-32</PosterNumber>
                        <PosterAuthor>Ye Hyeon Yun</PosterAuthor>
                        <PosterAffiliation>Korea University</PosterAffiliation>
                        <PosterTitle>
                            Improved Optical Performance and Stability of
                            Lead-Free Cesium Copper Halide Nanocrystals through
                            Siloxane Interface Reconstruction
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-33</PosterNumber>
                        <PosterAuthor>Jiaxuan Zhu</PosterAuthor>
                        <PosterAffiliation>
                            Tianjin University
                        </PosterAffiliation>
                        <PosterTitle>
                            Dynamic organic crystal as exceptionally efficient
                            artificial natural light-harvesting actuator
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-34</PosterNumber>
                        <PosterAuthor>Yunah Nam</PosterAuthor>
                        <PosterAffiliation>
                            Chung-Ang University
                        </PosterAffiliation>
                        <PosterTitle>
                            Composite of N-acetylcysteine and Catechin Prepared
                            by Antisolvent Crystallization
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-35</PosterNumber>
                        <PosterAuthor>Subin Lee</PosterAuthor>
                        <PosterAffiliation>
                            Chung-Ang University
                        </PosterAffiliation>
                        <PosterTitle>
                            Disulfide Surface Reaction between Crystalline
                            Cellulose Particles
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-36</PosterNumber>
                        <PosterAuthor>Aoi Obika</PosterAuthor>
                        <PosterAffiliation>
                            Osaka Metropolitan University
                        </PosterAffiliation>
                        <PosterTitle>
                            The effect of liposome interfaces on amino acid
                            crystallization
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-37</PosterNumber>
                        <PosterAuthor>Alyssa May Aguila</PosterAuthor>
                        <PosterAffiliation>
                            Kongju National University
                        </PosterAffiliation>
                        <PosterTitle>
                            Preparation of Li2CO3 by Reactive Heterogeneous
                            Crystallization of Li2SO4 and CO2
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-38</PosterNumber>
                        <PosterAuthor>Lie-Ding Shiau</PosterAuthor>
                        <PosterAffiliation>
                            Chang Gung University
                        </PosterAffiliation>
                        <PosterTitle>
                            Determining the nucleation parameters from
                            metastable zone width data for reactive
                            crystallization during controlled addition of
                            reactants
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-39</PosterNumber>
                        <PosterAuthor>In Hwan Oh</PosterAuthor>
                        <PosterAffiliation>
                            Kyung Hee University
                        </PosterAffiliation>
                        <PosterTitle>
                            Chiral Symmetry Breaking of Sodium Chlorate in a
                            Non-isothermal Couette–Taylor Reactor
                        </PosterTitle>
                    </PosterTable>
                    <PosterTable>
                        <PosterNumber>PP-40</PosterNumber>
                        <PosterAuthor>Hao Hu</PosterAuthor>
                        <PosterAffiliation>
                            Shanghai Advanced Silicon Technology Co., Ltd.
                        </PosterAffiliation>
                        <PosterTitle>
                            Ab initio analysis of the carbon-doping impact on
                            the formation of bulk micro defects in
                            Czochralski-grown silicon
                        </PosterTitle>
                    </PosterTable>
                </Container>
            </Section>
        </>
    )
}
