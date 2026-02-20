"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center gap-8 w-full"
        >
            <div className="logo">
                <Link href="/" className="block">
                    <Image
                        src="/logo.svg"
                        alt="GIBSON VISUALS"
                        width={280}
                        height={36}
                        className="h-9 w-auto hover:opacity-70 transition-opacity duration-500"
                        priority
                    />
                </Link>
            </div>
            <nav>
                <ul className="flex space-x-10 text-[11px] tracking-[0.25em] font-normal uppercase font-sans">
                    <li>
                        <Link href="/" className="hover:opacity-50 transition-opacity duration-300">
                            PORTFOLIO
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:opacity-50 transition-opacity duration-300">
                            ÜBER MICH
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="hover:opacity-50 transition-opacity duration-300">
                            LEISTUNGEN
                        </Link>
                    </li>
                </ul>
            </nav>
        </motion.header>
    );
}
