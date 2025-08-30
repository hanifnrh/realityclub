import Image from "next/image";
import Link from "next/link";
import { FaApple, FaSpotify } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { Button } from "../ui/button";
import SectionTitle from "../ui/section-title";

export const Featured = () => {
    const musicPlatforms = [
        {
            name: "Spotify",
            icon: FaSpotify,
            url: "https://open.spotify.com/album/5pGHtIQt7DH1e4FXywAvgt",
            bgColor: "bg-green-950 hover:bg-green-900",
            textColor: "text-green-600 group-hover:text-green-500",
        },
        {
            name: "Apple Music",
            icon: FaApple,
            url: "https://music.apple.com/id/album/who-knows-where-life-will-take-you/1828867271",
            bgColor: "bg-neutral-800 hover:bg-neutral-700",
            textColor: "text-neutral-200 group-hover:text-neutral-100",
        },
        {
            name: "Youtube Music",
            icon: SiYoutubemusic,
            url: "https://music.youtube.com/playlist?list=OLAK5uy_ljHGHjSCMM2u7H8ibREW8Qn11C5boZiZ4",
            bgColor: "bg-red-950 hover:bg-red-900",
            textColor: "text-red-600 group-hover:text-red-500",
        },
    ];

    return (
        <section className="w-full px-8 lg:px-20 xl:px-40 py-10">
            <div className="relative border-red-600/40 border flex flex-col w-full items-center justify-between gap-10">
                <div className="flex items-center justify-between w-full relative">
                    <div className="absolute top-0 left-0 w-[31px] h-[31px] border-t-2 border-l-2 border-[#e7000b]" />
                    <div className="absolute top-0 right-0 w-[31px] h-[31px] border-t-2 border-r-2 border-[#e7000b]" />
                </div>

                <SectionTitle title="Featured" />

                <div className="flex flex-col items-center gap-8 relative w-full">
                    <div className="flex flex-col items-center gap-6 tracking-tighter">
                        <div className="flex -space-x-24 sm:-space-x-32">
                            <Image
                                src="/assets/album4.jpg"
                                alt="Featured"
                                width={322}
                                height={322}
                                className="rounded-[15px] aspect-square object-cover z-30 h-40 sm:h-56 w-auto"
                            />
                            <Image
                                src="/assets/vinyl.png"
                                alt="Featured"
                                width={322}
                                height={322}
                                className="animate-[spin_3s_linear_infinite] object-cover z-10 h-40 sm:h-56 w-auto"
                            />
                        </div>
                        <h3 className="font-helvetica-bold font-bold text-neutral-200 text-3xl sm:text-4xl text-center">
                            Who Knows Where Life Will Take You?
                        </h3>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <p className="relative font-helvetica-bold text-neutral-300 text-lg sm:text-xl text-center tracking-[-1.00px] leading-[normal]">
                            Stream now on:
                        </p>

                        <div className="flex items-center justify-center gap-2.5 relative w-full flex-wrap">
                            {musicPlatforms.map((platform, index) => {
                                const Icon = platform.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={platform.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            className={`inline-flex h-[60px] group items-center justify-center gap-2.5 px-[30px] py-4 ${platform.bgColor} rounded-[10px] transition-all duration-300 ease-in-out`}
                                        >
                                            <Icon className={`w-6 h-6 ${platform.textColor}`} />
                                            <span
                                                className={`relative w-fit font-helvetica-bold ${platform.textColor} text-lg sm:text-xl tracking-[0] leading-[normal] whitespace-nowrap`}
                                            >
                                                {platform.name}
                                            </span>
                                        </Button>
                                    </Link>
                                );
                            })}
                        </div>

                    </div>

                    <div className="flex items-center justify-between w-full relative">
                        <div className="absolute left-0 bottom-0 w-[31px] h-[31px] border-b-2 border-l-2 border-[#e7000b]" />
                        <div className="absolute right-0 bottom-0 w-[31px] h-[31px] border-b-2 border-r-2 border-[#e7000b]" />
                    </div>
                </div>
            </div>
        </section>
    );
};
