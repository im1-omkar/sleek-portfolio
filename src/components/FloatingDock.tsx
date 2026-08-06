"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Standard UI icons from Lucide
import { Home, FileDown, Moon } from "lucide-react";
// Brand icons from React Icons
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function FloatingDock() {
    const [showResumeLabel, setShowResumeLabel] = useState(false);

    // Framer Motion animation variants for the icons
    const iconVariants = {
        hover: {
            scale: 1.2,
            y: -4,
            color: "#ffffff",
            transition: { type: "spring", stiffness: 300, damping: 15 }
        },
        initial: {
            scale: 1,
            y: 0,
            color: "#a1a1aa"
        }
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-center gap-4 px-6 py-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full shadow-2xl"
            >

                {/* Navigation */}
                <Link href="/">
                    <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                        <Home size={20} strokeWidth={2} />
                    </motion.div>
                </Link>

                {/* Divider */}
                <div className="w-[1px] h-6 bg-zinc-700/50 mx-1" />

                {/* Document Icon with Floating Tooltip */}
                <div
                    className="relative flex items-center justify-center"
                    onMouseEnter={() => setShowResumeLabel(true)}
                    onMouseLeave={() => setShowResumeLabel(false)}
                >
                    <Link href="/resume.pdf" target="_blank">
                        <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                            <FileDown size={20} strokeWidth={2} />
                        </motion.div>
                    </Link>

                    <AnimatePresence>
                        {showResumeLabel && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                // absolute positioning keeps it centered right above the icon
                                className="absolute -top-11 px-2.5 py-1.5 bg-zinc-800 text-zinc-300 text-[10px] tracking-wide rounded-md whitespace-nowrap border border-zinc-700 shadow-xl pointer-events-none"
                            >
                                Download resume
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <Link href="https://github.com/im1-omkar/" target="_blank">
                    <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                        <FaGithub size={20} />
                    </motion.div>
                </Link>

                <Link href="https://www.linkedin.com/in/omkar-kavhale-8a93b8312/" target="_blank">
                    <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                        <FaLinkedin size={20} />
                    </motion.div>
                </Link>

                <Link href="https://x.com/0mkar_x" target="_blank">
                    <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                        <FaXTwitter size={20} />
                    </motion.div>
                </Link>

                {/* Divider */}
                <div className="w-[1px] h-6 bg-zinc-700/50 mx-1" />

                {/* Theme Toggle */}
                <button onClick={() => console.log("Toggle Theme")}>
                    <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                        <Moon size={20} strokeWidth={2} />
                    </motion.div>
                </button>

            </motion.div>
        </div>
    );
}