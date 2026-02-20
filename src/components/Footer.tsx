"use client";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full border-t border-transparent py-24 mt-auto">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex space-x-12 text-[10px] tracking-[0.2em] uppercase font-sans text-black"
                >
                    <Link href="/impressum" className="hover:opacity-50 transition-opacity">Impressum</Link>
                    <Link href="/datenschutz" className="hover:opacity-50 transition-opacity">Datenschutz</Link>
                    <a href="https://wa.me/4915257120398" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity text-black">WhatsApp Kontakt</a>
                </motion.div>

                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    href="https://www.instagram.com/gibsonvisuals.fotografie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:opacity-50 transition-opacity duration-300"
                >
                    <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </motion.a>

                <p className="text-[6px] uppercase tracking-[0.5em] text-black/20 font-sans mt-12">
                    Copyright © 2026 Gibsonvisualsfotografie.
                </p>
            </div>
        </footer>
    );
}
