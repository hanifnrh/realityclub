import Image from "next/image";
import { JSX } from "react";
import { RevealLinks } from "../ui/reveal-link";
import SectionTitle from "../ui/section-title";

export const Schedule = (): JSX.Element => {

    return (
        <section className="relative w-full py-10 overflow-hidden" id="schedule">

            <SectionTitle title="Schedule" />

            <RevealLinks />

            <Image
                src="/assets/gradient-red.png"
                alt="Schedule"
                width={947}
                height={362}
                className="pointer-events-none select-none -z-10 object-cover absolute bottom-0 left-1/2 -translate-x-1/2 animate-glow"
            />
        </section>
    );
};
