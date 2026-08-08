'use client';

import { useEffect, useState, useRef } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubContributions() {
    const [mounted, setMounted] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);


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

    const greenTheme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    if (!mounted) {
        return (
            <section className="w-full flex flex-col items-center py-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-10">
                    GitHub Contributions
                </h2>
                <div className="w-full max-w-4xl h-[160px] rounded-xl bg-muted/50 border border-border/50 animate-pulse" />
            </section>
        );
    }

    return (
        <section className="w-full flex flex-col items-center py-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-10">
                GitHub Contributions
            </h2>

            
            <div
                ref={scrollRef}
                className="w-full overflow-x-auto overflow-y-hidden pb-4"
                style={{ WebkitOverflowScrolling: 'touch' }}
            >
                
                <div className="min-w-max w-fit mx-auto px-2">
                    <GitHubCalendar
                        username={githubUsername}
                        colorScheme="dark"
                        theme={greenTheme}
                        blockSize={12} 
                        blockMargin={4}
                        fontSize={12}
                    />
                </div>
            </div>
        </section>
    );
}