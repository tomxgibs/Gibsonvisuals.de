"use client";
import { motion } from "framer-motion";

export default function Impressum() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-24 font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="font-display font-light uppercase tracking-widest mb-12 text-4xl md:text-6xl text-primary dark:text-white">
                    Impressum
                </h1>

                <div className="space-y-12 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    <section>
                        <p className="mb-4 text-primary dark:text-white font-medium uppercase tracking-widest text-[10px]">Anbieter</p>
                        <p>
                            Gibsonvisuals Fotografie<br />
                            Inhaber: Kiara Gibson<br />
                            Bielefelder Str. 123<br />
                            33813 Oerlinghausen
                        </p>
                    </section>

                    <section>
                        <p className="mb-4 text-primary dark:text-white font-medium uppercase tracking-widest text-[10px]">Kontakt</p>
                        <p>
                            Telefon: +49 (0) 123 456789<br />
                            E-Mail: info@gibsonvisuals.de
                        </p>
                    </section>

                    <section>
                        <p className="mb-4 text-primary dark:text-white font-medium uppercase tracking-widest text-[10px]">Umsatzsteuer-ID</p>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            DE 123 456 789
                        </p>
                    </section>

                    <section>
                        <p className="mb-4 text-primary dark:text-white font-medium uppercase tracking-widest text-[10px]">Redaktionell verantwortlich</p>
                        <p>
                            Kiara Gibson<br />
                            Bielefelder Str. 123<br />
                            33813 Oerlinghausen
                        </p>
                    </section>
                </div>
            </motion.div>
        </main>
    );
}
