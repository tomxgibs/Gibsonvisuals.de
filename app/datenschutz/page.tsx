"use client";
import { motion } from "framer-motion";

export default function Datenschutz() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-24 font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="font-display font-light uppercase tracking-widest mb-12 text-4xl md:text-6xl text-primary dark:text-white">
                    Datenschutz
                </h1>

                <div className="space-y-12 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    <section>
                        <h2 className="text-primary dark:text-white font-medium uppercase tracking-widest text-[10px] mb-6">1. Datenschutz auf einen Blick</h2>
                        <p>
                            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-primary dark:text-white font-medium uppercase tracking-widest text-[10px] mb-6">2. Hosting und Server-Logfiles</h2>
                        <p>
                            Der Anbieter dieser Website erhebt und speichert automatisch Informationen in so genannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-primary dark:text-white font-medium uppercase tracking-widest text-[10px] mb-6">3. Ihre Rechte</h2>
                        <p>
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
                        </p>
                    </section>
                </div>
            </motion.div>
        </main>
    );
}
