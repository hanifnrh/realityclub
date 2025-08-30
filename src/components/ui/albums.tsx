import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const albums = [
    "/assets/album1.jpg",
    "/assets/album2.jpg",
    "/assets/album3.jpg",
    "/assets/album4.jpg",
];

const AlbumCard = ({ img }: { img: string }) => {
    return (
        <div className="relative w-32 aspect-square overflow-hidden rounded-xl">
            <Image
                src={img}
                alt="Album cover"
                fill
                className="object-cover"
            />
        </div>
    );
};

export function Albums() {
    return (
        <div className="relative flex md:hidden w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {albums.map((img, i) => (
                    <AlbumCard key={i} img={img} />
                ))}
            </Marquee>

            {/* Gradient pinggir */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>
    );
}
