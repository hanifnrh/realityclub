"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export const Shader = () => {
    const { width, height } = useWindowSize();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted || width === 0 || height === 0) {
        return (
            <div className={cn("absolute items-center scale-150")}>
                <div style={{ width, height }} />
            </div>
        );
    }

    return (
        <div className={cn("absolute items-center scale-150")}>
            <UnicornScene
                production={true} 
                projectId="cbmTT38A0CcuYxeiyj5H" 
                width={width} 
                height={height} 
            />
        </div>
    );
};