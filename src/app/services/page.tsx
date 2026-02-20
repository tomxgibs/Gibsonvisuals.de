"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sections = [
    {
        title: "Kosten",
        content: (
            <>
                <p className="mb-4 text-black">
                    1-stündiges Shooting inklusive 30 bearbeiteter Bilder nach Wahl
                </p>
                <p className="text-2xl font-light font-display text-black tracking-widest italic">190€</p>
            </>
        ),
    },
    {
        title: "Bildauswahl",
        content: (
            <p className="text-black">
                Ihr bekommt alle gelungenen Bilder unbearbeitet in einer Online-Galerie. Dort dürft ihr euch eure 30 Lieblingsbilder aussuchen und mir die Auswahl zurückschicken – diese bearbeite ich dann für euch.
            </p>
        ),
    },
    {
        title: "Shootingorte",
        content: (
            <div className="space-y-6 text-black">
                <p>
                    Ihr könnt bei den meisten Shootings zwischen einer Homestory, einem Outdoor-oder einem Studioshooting wählen. Mein Studio befindet sich in Oerlinghausen.
                </p>
                <p>
                    Für Familien mit kleinen Kindern empfehle ich Outdoor-Shootings oder eine Homestory. Zu Hause haben sie ihren Safe Place, wodurch sie sich einfach direkt wohler fühlen. Draußen ist der Rahmen neutraler. Beides kann helfen, sich auf die ohnehin schon ungewohnte Situation, einzulassen.
                </p>
                <p>
                    Newbornshootings biete ich als Homestory an.
                </p>
            </div>
        ),
    },
    {
        title: "Hochzeiten",
        content: (
            <div className="space-y-8 text-black">
                <p>
                    Hochzeiten sind so unterschiedlich und individuell wie die Paare selbst. Wenn ihr Interesse an einer fotografischen Begleitung durch mich habt, schreibt mir sehr gern.
                </p>
                <a
                    href="https://wa.me/4915257120398"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-black border-b border-black/10 pb-2 hover:border-black transition-all group cursor-pointer"
                >
                    <span className="font-sans text-[11px] tracking-[0.2em] uppercase">WhatsApp Anfrage senden</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" strokeWidth={1} />
                </a>
            </div>
        ),
    },
];

export default function Services() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <motion.header
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="mb-24 text-center"
            >
                <h1 className="text-black mb-6">
                    Gut zu wissen
                </h1>
                <div className="w-12 h-px bg-black/10 mx-auto" />
            </motion.header>

            <div className="space-y-20 md:space-y-32">
                {sections.map((section, index) => (
                    <motion.section
                        key={section.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                    >
                        <div className="md:col-span-1">
                            <h2 className="text-black opacity-70">
                                {section.title}
                            </h2>
                        </div>
                        <div className="md:col-span-2">
                            {section.content}
                        </div>
                    </motion.section>
                ))}
            </div>
        </main>
    );
}
