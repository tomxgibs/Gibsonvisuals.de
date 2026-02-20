"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  { id: "couple", title: "Paare", img: "/images/Josha_Anso-42.jpg" },
  { id: "maternity", title: "Schwangerschaft", img: "/images/Annika_Josua_Babybauch-19.jpg" },
  { id: "portrait", title: "Portrait", img: "/images/Luise-4.jpg" },
  { id: "wedding", title: "Hochzeiten", img: "/images/Trauung-102.jpg" },
  { id: "newborn", title: "Newborn", img: "/images/AlessandroElia-80.jpg" },
  { id: "family", title: "Familien", img: "/images/Famillien/FamilieHermann-21.1.jpg" },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6 md:py-16">
      {/* Grid: Forced 2 columns on small screens, 3 on Large */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="group"
          >
            <Link href={`/portfolio/${category.id}`} className="block overflow-hidden relative aspect-[4/5] bg-neutral-100">
              <Image
                src={category.img}
                alt={category.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                priority={index < 4}
              />
            </Link>
            <div className="mt-4 md:mt-8 text-center uppercase tracking-[0.2em]">
              <Link href={`/portfolio/${category.id}`} className="inline-block">
                <h3 className="text-[10px] md:text-xs font-sans font-normal text-black hover:opacity-50 transition-opacity">
                  {category.title}
                </h3>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
