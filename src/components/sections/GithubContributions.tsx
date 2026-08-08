'use client';

import { useEffect, useState, useRef } from 'react';
import {GitHubCalendar} from 'react-github-calendar';

export default function GithubContributions() {
    const [mounted, setMounted] = useState(false);

    // Fix: Add <HTMLDivElement> to type the ref correctly
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Observer to detect when the calendar fetches data and renders, 
    // then immediately scrolls to the far right.
    useEffect(() => {
        if (!mounted || !scrollRef.current) return;

        const observer = new MutationObserver(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
            }
        });

        observer.observe(scrollRef.current, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, [mounted]);

    const githubUsername = "im1-omkar";

    const purpleTheme = {
        light: ['#ebedf0', '#c084fc', '#a855f7', '#9333ea', '#7e22ce'],
        dark: ['#161B22', '#4D2C5E', '#70388F', '#9E4AC7', '#D27DF5'],
    };

    const greenTheme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    if (!mounted) {
        return (
            <section className="w-full bg-black py-20 px-6 flex flex-col items-center">
                <h2 className="text-3xl font-semibold text-white text-center mb-12 tracking-wide">
                    GitHub Contributions
                </h2>

                <div className="w-full max-w-4xl h-[180px] rounded-lg bg-zinc-900 animate-pulse" />
            </section>
        );
    }

    return (
        <section className="w-full bg-black py-20 px-6 font-sans flex flex-col items-center overflow-hidden">
            <h2 className="text-3xl font-semibold text-white text-center mb-12 tracking-wide">
                GitHub Contributions
            </h2>

            {/* Scrollable container with ref attached */}
            <div
                ref={scrollRef}
                className="w-full max-w-4xl text-white overflow-x-auto flex justify-start lg:justify-center scroll-smooth pb-4"
                style={{ WebkitOverflowScrolling: 'touch' }}
            >
                {/* min-w-fit ensures the content doesn't shrink and forces the parent to scroll */}
                <div className="min-w-fit">
                    <GitHubCalendar
                        username={githubUsername}
                        colorScheme="dark"
                        theme={greenTheme}
                        blockSize={14}
                        blockMargin={4}
                        fontSize={14}
                    />
                </div>
            </div>
        </section>
    );
}