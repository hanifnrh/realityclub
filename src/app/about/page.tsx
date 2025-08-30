"use client";

import { DockDemo } from "@/components/ui/dock-demo";
import Footer from "@/components/ui/footer";
import { ImageSlider } from "@/components/ui/image-slider";
import { useEffect, useRef } from "react";

export default function About() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Auto-play was prevented:", error)
            })
        }
    }, [])

    const scrollToNext = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }
    return (
        <section className="relative w-full px-8 lg:px-20 xl:px-40 pt-28 pb-10 max-w-screen-2xl flex flex-col items-center">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src="/assets/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: "0.4" }}
                />

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
            </div>

            <div className="flex flex-col w-full items-center justify-between gap-10 mb-10">

                <div className="flex flex-col items-center gap-8 relative w-full">
                    <div className="w-full flex flex-col items-center gap-2 tracking-tighter">
                        <ImageSlider />
                    </div>

                    <div className="w-full bg-neutral-500/10 backdrop-blur-[20px] flex flex-col gap-4 p-4 sm:p-10 rounded-[15px] text-neutral-300 text-base sm:text-xl text-justify leading-6 tracking-tighter">
                        <p>
                            <span className="text-white font-semibold">Who knows where life will take you?</span>
                            <br />     <br />
                            For Reality Club, it took sibling vocalists Fathia Izzati and Faiz Novascotia Saripudin, drummer Era Patigo and bassist Nugi Wicaksono from forming the Jakarta-based band in 2016 as a hobby to being full-time award-winning musicians who&#39;ve played shows across Indonesia and beyond.
                            <br />     <br />
                            In between, they&#39;ve served up the bonafide indie pop classic <span className="text-white font-semibold">Is It The Answer?</span> from 2017 debut album <span className="text-white font-semibold">Never Get Better</span>, aimed for alt-rock cred via <span className="text-white font-semibold">Telenovia</span> <span className="text-white font-semibold">2112</span> on 2019 sophomore effort <span className="text-white font-semibold">What Do You Really Know?</span>, and in 2022 unleashed the genre-hopping <span className="text-white font-semibold">Reality Club Presents...</span> with its monster hits<span className="text-white font-semibold">Anything You Want</span> <span className="text-white font-semibold">Am I Bothering You</span> which landed them a couple of AMI Awards and a coveted opening spot on NIKI&#39;s Southeast Asia tour.
                            <br />     <br />
                            And now <span className="text-white font-semibold">Who Knows Where Life Will Take You?</span> captures the sound of Reality Club free of self-doubt and impostor syndrome, simply making music that they love with nothing to prove either to themselves or others. The signature wit and catchiness of their romance tunes are now infused with pathos (<span className="text-white font-semibold">You’ll Find Lovers Like You and Me</span>) and humor (<span className="text-white font-semibold">Quick! Love!</span>), while their growth has inspired songs that pay tribute to their loved ones (<span className="text-white font-semibold">Now &#39;’m a Diplomat, Mama’s Coming Home</span>) and deal with topics such as spirituality (<span className="text-white font-semibold">Close to You/Jauh</span>) and workplace disgruntlement (<span className="text-white font-semibold">I&#39;ll Do It Myself</span>).
                            <br />     <br />
                            In other words, life has taken Reality Club to become the best, most authentic version of themselves.
                            Welcome to the Club. The real Reality Club.
                        </p>

                        <DockDemo />
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};
