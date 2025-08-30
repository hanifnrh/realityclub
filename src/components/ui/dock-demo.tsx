"use client";

import Image from "next/image";
import Link from "next/link";
import { Dock, DockIcon } from "./dock";

export function DockDemo() {
    const icons = [
        { src: "/logo/spotify.svg", alt: "Spotify Logo", href: "https://open.spotify.com/artist/1DjZI46mVZZZYmmmygRnTw" },
        { src: "/logo/apple.svg", alt: "Apple Logo", href: "https://music.apple.com/id/artist/reality-club/1468177977" },
        { src: "/logo/instagram.svg", alt: "Instagram Logo", href: "https://www.instagram.com/realityclub" },
        { src: "/logo/whatsapp.svg", alt: "WhatsApp Logo", href: "https://whatsapp.com" },
        { src: "/logo/x.svg", alt: "X Logo", href: "https://x.com" },
        { src: "/logo/youtube.svg", alt: "Youtube Logo", href: "https://www.youtube.com/channel/UCdU5OncGSaRQNKHVCsyXppg" },
    ];

    return (
        <div className="relative w-full flex">
            <Dock direction="middle">
                {icons.map(({ src, alt, href }) => (
                    <DockIcon key={href}>
                        <Link href={href} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={src}
                                alt={alt}
                                width={30}
                                height={30}
                                className="object-cover"
                            />
                        </Link>
                    </DockIcon>
                ))}
            </Dock>
        </div>
    );
}
