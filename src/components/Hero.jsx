// import { BackgroundImage } from "components/BackgroundImage";
import { Button } from "components/Button";
import { Container } from "components/Container";

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      {/* <BackgroundImage className="-bottom-14 -top-36" /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">DeceptiConf - </span> Asian
            Crystallization Technology Society
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              The Asian Crystallization Technology Society was founded in 2011
              with the aim to provide a forum for academic researchers,
              scientists and industry experts in Asia and all around the world
              to discuss recent advances in crystallization science and process
              technology.
            </p>
            <p>
              Crystallization is a bottom-up process where atoms or molecules
              are gradually assembled into a larger entity, forming a
              highly-ordered arrangement called crystals.
            </p>
            <p>
              This conference aims to encompass the whole crystallization
              aspects, from an atomic level to an industrial scale, including
              the application of crystallization in real-life situations such as
              energy and environment, pharmaceuticals, food and agriculture,
              biomineralization, and crystallization in space.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Speakers", "18"],
              ["People Attending", "2,091"],
              ["Venue", "Staples Center"],
              ["Location", "Los Angeles"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
