'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Sun } from 'lucide-react'; // Make sure lucide-react is installed

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-transparent transition-colors">
            <div className="mx-auto max-w-4xl px-6 h-16 flex items-center justify-between sm:justify-center relative">

                {/* Navigation Links */}
                <nav className="flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors hover:text-foreground ${isActive ? 'text-foreground' : 'text-muted-foreground'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Side: Search & Theme (Positioned absolute on desktop to keep links centered) */}
                <div className="flex items-center gap-4 sm:absolute sm:right-6">
                    {/* Search Fake Input */}
                    <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted/50 hover:bg-muted rounded-md text-xs text-muted-foreground transition-colors border border-muted">
                        <Search className="w-3.5 h-3.5" />
                        <span>Ctrl K</span>
                    </button>

                    {/* Theme Toggle Icon Placeholder */}
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <Sun className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;