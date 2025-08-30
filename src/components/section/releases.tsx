// components/Releases.tsx
"use client";

import { YouTubeApiResponse, YouTubeVideo } from "@/types/youtube";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import SectionTitle from "../ui/section-title";
import { Shader } from "../ui/shader";
import { SpotlightButton } from "../ui/spotlightbutton";

export const Releases = () => {
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://yt-api.p.rapidapi.com/channel/videos?id=UCdU5OncGSaRQNKHVCsyXppg&sort_by=newest",
                    {
                        method: "GET",
                        headers: {
                            "x-rapidapi-key": "113ec38266msh8121ec0eb2a219fp1ed462jsn532b65aa5bde",
                            "x-rapidapi-host": "yt-api.p.rapidapi.com",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: YouTubeApiResponse = await response.json();
                // Get the first 3 videos
                const latestVideos = data.data.slice(0, 3);
                setVideos(latestVideos);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred");
                console.error("Error fetching YouTube videos:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    // Function to handle card click
    const handleCardClick = (videoId: string) => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer');
    };

    if (loading) {
        return (
            <section className="overflow-hidden flex flex-col w-full items-center justify-center gap-2.5 px-4 md:px-10 lg:px-40 relative bg-black min-h-screen">
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

                <div className="flex flex-col w-full items-center relative py-10 gap-10">
                    <SectionTitle title="Latest Releases" />
                    <Shader />
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="overflow-hidden flex flex-col w-full items-center justify-center gap-2.5 px-4 md:px-10 lg:px-40 relative bg-black min-h-screen">
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

                <div className="flex flex-col w-full items-center relative py-10 gap-10">
                    <SectionTitle title="Latest Releases" />
                    <Shader />
                    <div className="text-red-500 text-xl">Error: {error}</div>
                </div>
            </section>
        );
    }

    return (
        <section className="overflow-hidden flex flex-col w-full items-center justify-center gap-2.5 px-8 lg:px-20 xl:px-40 py-10 relative bg-black min-h-screen">
            {/* Top fade overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

            <div className="flex flex-col w-full items-center relative py-10 gap-10">

                <SectionTitle title="Latest Releases" />
                <Shader />

                <div className="flex flex-col items-center relative w-full">
                    <div className="z-10 flex flex-col items-start gap-4 sm:gap-8 relative self-stretch w-full">
                        {videos.map((video, index) => (
                            <Card
                                key={video.videoId}
                                className="cursor-pointer flex items-center justify-center gap-[30px] p-5 relative self-stretch w-full bg-neutral-900/50 rounded-[20px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] border-none transition-all duration-300 hover:bg-neutral-800/60 hover:scale-[1.02]"
                                onClick={() => handleCardClick(video.videoId)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleCardClick(video.videoId);
                                    }
                                }}
                            >
                                <CardContent
                                    className={`font-helvetica-bold flex flex-col md:flex-row items-center justify-start gap-[30px] p-0 w-full ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                                >
                                    <div className="w-full flex flex-col items-center justify-center gap-4 relative flex-1 grow">
                                        <h3 className="relative self-stretch mt-[-1.00px] font-bold text-neutral-200 text-lg sm:text-xl md:text-2xl tracking-[-1.20px] leading-[normal]">
                                            {video.title}
                                        </h3>

                                        <p className="w-full flex text-neutral-300 text-base md:text-lg tracking-[-1.00px] leading-[normal] line-clamp-4">
                                            {video.description.length > 150
                                                ? `${video.description.substring(0, 150)}...`
                                                : video.description}
                                        </p>

                                        <div className="flex w-full gap-4 text-sm text-neutral-400">
                                            <span>{video.publishedTimeText}</span>
                                            <span>•</span>
                                            <span>{video.viewCountText}</span>
                                        </div>
                                    </div>

                                    <div className="relative w-full md:w-[380px] h-[200px] md:h-[246px] rounded-[15px] overflow-hidden transition-transform duration-300 hover:scale-105">
                                        <Image
                                            className="w-full h-full object-cover"
                                            alt={video.title}
                                            // Use the largest thumbnail available or fallback
                                            src={video.thumbnail && video.thumbnail.length > 0
                                                ? video.thumbnail[video.thumbnail.length - 1]?.url
                                                : "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"}

                                                width={1280}
                                                height={720}
                                        />
                                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                                            {video.lengthText}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="w-full flex items-center justify-end mt-10">
                        <SpotlightButton text="See all releases" href="https://www.youtube.com/channel/UCdU5OncGSaRQNKHVCsyXppg" />
                    </div>
                </div>
            </div>
        </section>
    );
};