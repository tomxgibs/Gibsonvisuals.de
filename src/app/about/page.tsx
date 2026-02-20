"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-12 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 shadow-sm">
                        <Image
                            src="/images/Kiara-4.jpg"
                            alt="Kiara"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="lg:col-span-7"
                >
                    <h1 className="mb-10 text-black">
                        Hi, ich bin Kiara
                    </h1>
                    <div className="space-y-6 text-black max-w-2xl">
                        <p>
                            Ich lebe mit meiner Familie - mein Mann und 2 wundervolle Kinder - in Oerlinghausen bei Bielefeld. Neben dem Mama-sein liebe ich es, kreativ zu sein und Menschen zu begegnen. In der Fotografie verbinden sich für mich genau diese beiden Dinge – der Kontakt zu Menschen und die Kreativität.
                        </p>
                        <p>
                            Mein Glaube ist der wichtigste Teil meines Lebens. Ich glaube daran, dass Gott jeden Menschen einzigartig geschaffen hat. Mein Wunsch ist es, genau das sichtbar zu machen: Menschen zu zeigen, wie wunderbar sie gemacht sind.
                        </p>
                        <p>
                            Bei meinen Shootings nehme ich mir immer viel Zeit, damit Raum für Vertrauen und echte Momente bleibt.
                        </p>
                    </div>
                    <div className="mt-12">
                        <a
                            className="text-[11px] uppercase tracking-[0.3em] font-sans border-b border-black/20 pb-1 hover:border-black:border-white transition-colors cursor-pointer text-black"
                            href="https://wa.me/4915257120398"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Kontakt Aufnehmen via WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
