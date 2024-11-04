import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { Hero } from "components/Hero";
import { Contact } from "components/Contact";
import { Schedule } from "components/Schedule";
import { Speakers } from "components/Speakers";
import { Sponsors } from "components/Sponsors";

export default function Home() {
  const speakersRef = useRef();
  const contactRef = useRef();
  const [searchParams] = useSearchParams();
  const queryScroll = searchParams.get("scroll");

  useEffect(() => {
    if (queryScroll) {
      if (queryScroll === "speakers") {
        speakersRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (queryScroll === "contact") {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [queryScroll]);

  return (
    <>
      <Hero />
      <div ref={speakersRef} />
      <Speakers />
      <Schedule />
      <Sponsors />
      <div ref={contactRef} />
      <Contact />
    </>
  );
}
