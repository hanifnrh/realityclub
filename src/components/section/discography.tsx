import Link from "next/link";
import { FaApple, FaSpotify } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { Albums } from "../ui/albums";
import { Button } from "../ui/button";
import HoverExpand from "../ui/hover-expand";
import SectionTitle from "../ui/section-title";

export const Discography = () => {
    const musicPlatforms = [
        {
            name: "Spotify",
            icon: FaSpotify,
            url: "https://open.spotify.com/artist/1DjZI46mVZZZYmmmygRnTw",
            bgColor: "bg-green-950 hover:bg-green-900",
            textColor: "text-green-600 group-hover:text-green-500",
        },
        {
            name: "Apple Music",
            icon: FaApple,
            url: "https://music.apple.com/id/artist/reality-club/1468177977",
            bgColor: "bg-neutral-800 hover:bg-neutral-700",
            textColor: "text-neutral-200 group-hover:text-neutral-100",
        },
        {
            name: "Youtube Music",
            icon: SiYoutubemusic,
            url: "https://music.youtube.com/channel/UCdU5OncGSaRQNKHVCsyXppg",
            bgColor: "bg-red-950 hover:bg-red-900",
            textColor: "text-red-600 group-hover:text-red-500",
        },
    ];

    const images = [
        "/assets/album1.jpg",
        "/assets/album2.jpg",
        "/assets/album3.jpg",
        "/assets/album4.jpg",
    ]

    return (
        <section className="w-full px-8 lg:px-20 xl:px-40 py-10" id="discography">
            <div className="border-red-600/40 border flex flex-col w-full items-center justify-between gap-10">
                <div className="flex items-center justify-between w-full relative">
                    <div className="absolute top-0 left-0 w-[31px] h-[31px] border-t-2 border-l-2 border-[#e7000b]" />
                    <div className="absolute top-0 right-0 w-[31px] h-[31px] border-t-2 border-r-2 border-[#e7000b]" />
                </div>

                <SectionTitle title="Discography" />

                <div className="flex flex-col items-center relative w-full px-0 sm:px-20 xl:px-40 gap-8 md:gap-0">
                    <HoverExpand
                        images={images}
                        initialSelectedIndex={0}
                        thumbnailHeight={200}
                        modalImageSize={400}
                        maxThumbnails={11}
                    />

                    <Albums />

                    <div className="w-full flex flex-col lg:flex-row items-center justify-center md gap-4">
                        <p className="w-fit relative font-helvetica-bold text-neutral-300 text-xl text-center tracking-[-1.00px] leading-[normal]">
                            Listen more on:
                        </p>

                        <div className="flex items-center justify-center gap-2.5 relative w-fit flex-wrap">
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

                </div>
                <div className="flex items-center justify-between w-full relative">
                    <div className="absolute left-0 bottom-0 w-[31px] h-[31px] border-b-2 border-l-2 border-[#e7000b]" />
                    <div className="absolute right-0 bottom-0 w-[31px] h-[31px] border-b-2 border-r-2 border-[#e7000b]" />
                </div>
            </div>
        </section>
    );
};
