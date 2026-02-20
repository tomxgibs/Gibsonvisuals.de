"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CategoryData {
    id: string;
    title: string;
    displayTitle: string;
    img: string;
}

const categoryDetails: Record<string, CategoryData & { images: string[] }> = {
    couple: {
        id: "couple",
        title: "Paare",
        displayTitle: "Paare",
        img: "/images/Josha_Anso-42.jpg",
        images: [
            "/images/Paare/Melody_Thomas-39.jpg", "/images/Paare/Malin_Milan-12.jpg", "/images/Paare/Malin_Milan-2.jpg",
            "/images/Paare/Josha_Anso-50.jpg", "/images/Paare/Josha_Anso-44.jpg", "/images/Paare/Jasmina_Eric-1.jpg",
            "/images/Paare/Melody_Thomas-12.jpg", "/images/Paare/678A1723.jpg", "/images/Paare/678A1858.jpg",
            "/images/Paare/Jasmina_Eric-4.jpg", "/images/Paare/Josha_Anso-42.jpg", "/images/Paare/678A2176.jpg",
            "/images/Paare/Evelyn_Calvin-8.jpg", "/images/Paare/Jasmina_Eric-7.jpg", "/images/Paare/Malin_Milan-15.jpg",
            "/images/Paare/Melody_Thomas-14.jpg", "/images/Paare/Melody_Thomas-28.jpg", "/images/Paare/678A2016.jpg",
            "/images/Paare/Evelyn_Calvin-14.jpg", "/images/Paare/Jasmina_Eric-30.jpg", "/images/Paare/Jasmina_Eric-24.jpg",
            "/images/Paare/Evelyn_Calvin-15.jpg", "/images/Paare/Jasmina_Eric-32.jpg", "/images/Paare/Jasmin_Pascal-28.jpg",
            "/images/Paare/Jasmin_Pascal-8.jpg", "/images/Paare/Evelyn_Calvin-12.jpg", "/images/Paare/Jasmina_Eric-20.jpg",
            "/images/Paare/Jasmina_Eric-34.jpg", "/images/Paare/Josha_Anso-20.jpg", "/images/Paare/Evelyn_Calvin-21.jpg",
            "/images/Paare/Jasmina_Eric-10.jpg", "/images/Paare/Jasmin_Pascal-22.jpg", "/images/Paare/Jasmina_Eric-39.jpg",
            "/images/Paare/Melody_Thomas-47.jpg", "/images/Paare/Melody_Thomas-7.jpg", "/images/Paare/678A1758.jpg",
            "/images/Paare/Melody_Thomas-50.jpg", "/images/Paare/Melody_Thomas-2.jpg", "/images/Paare/Jasmin_Pascal-31.jpg",
            "/images/Paare/678A1833.jpg", "/images/Paare/Jasmin_Pascal-18.jpg", "/images/Paare/Melody_Thomas-1.jpg",
            "/images/Paare/678A2082.jpg", "/images/Paare/Evelyn_Calvin-30.jpg", "/images/Paare/Jasmina_Eric-15.jpg",
            "/images/Paare/Evelyn_Calvin-25.jpg", "/images/Paare/Melody_Thomas-42.jpg", "/images/Paare/Melody_Thomas-19.jpg",
            "/images/Paare/678A2147.jpg", "/images/Paare/678A2153.jpg", "/images/Paare/678A2185.jpg",
            "/images/Paare/Evelyn_Calvin-4.jpg", "/images/Paare/Malin_Milan-25.jpg", "/images/Paare/Melody_Thomas-30.jpg",
            "/images/Paare/Evelyn_Calvin-6.jpg", "/images/Paare/Malin_Milan-26.jpg", "/images/Paare/Josha_Anso-49.jpg",
            "/images/Paare/Evelyn_Calvin-2.jpg", "/images/Paare/678A1663.jpg", "/images/Paare/Malin_Milan-23.jpg",
            "/images/Paare/Melody_Thomas-22.jpg", "/images/Paare/678A1858_2.jpg"
        ]
    },
    maternity: {
        id: "maternity",
        title: "Schwangerschaft",
        displayTitle: "Schwangerschaft",
        img: "/images/Annika_Josua_Babybauch-19.jpg",
        images: [
            "/images/Schwangerschaft/Nasti_Daniel-6.jpg", "/images/Schwangerschaft/FamilieRempel-41.jpg",
            "/images/Schwangerschaft/Annika_Josua_Babybauch-17.jpg", "/images/Schwangerschaft/FamilieRempel-8.jpg",
            "/images/Schwangerschaft/FamilieRempel-56.jpg", "/images/Schwangerschaft/Nasti_Daniel-30.jpg",
            "/images/Schwangerschaft/Nasti_Daniel-25.jpg", "/images/Schwangerschaft/Lisa_Lukas-8.jpg",
            "/images/Schwangerschaft/FamilieRempel-47.jpg", "/images/Schwangerschaft/FamilieRempel-53.jpg",
            "/images/Schwangerschaft/Nasti_Daniel-35.jpg", "/images/Schwangerschaft/Nasti_Daniel-34.jpg",
            "/images/Schwangerschaft/Annika_Josua_Babybauch-11.jpg", "/images/Schwangerschaft/Annika_Josua_Babybauch-13.jpg",
            "/images/Schwangerschaft/FamilieRempel-50.jpg", "/images/Schwangerschaft/Nasti_Daniel-22.jpg",
            "/images/Schwangerschaft/Nasti_Daniel-37.jpg", "/images/Schwangerschaft/Lisa_Lukas-28.jpg",
            "/images/Schwangerschaft/FamilieRempel-36.jpg", "/images/Schwangerschaft/FamilieRempel-22.jpg",
            "/images/Schwangerschaft/FamilieRempel-23.jpg", "/images/Schwangerschaft/Lisa_Lukas-29.jpg",
            "/images/Schwangerschaft/FamilieZagorny-34.jpg", "/images/Schwangerschaft/FamilieZagorny-36.jpg",
            "/images/Schwangerschaft/Lisa-17.jpg", "/images/Schwangerschaft/FamilieRempel-34.jpg",
            "/images/Schwangerschaft/FamilieRempel-20.jpg", "/images/Schwangerschaft/FamilieZagorny-37.jpg",
            "/images/Schwangerschaft/FamilieZagorny-27.jpg", "/images/Schwangerschaft/Jessi_Jeff-14.jpg",
            "/images/Schwangerschaft/FamilieZagorny-24_2.jpg", "/images/Schwangerschaft/FamilieZagorny-26.jpg",
            "/images/Schwangerschaft/FamilieRempel-33.jpg",
            "/images/Schwangerschaft/Jessi_Jeff-17.jpg", "/images/Schwangerschaft/Lisa_Lukas-38.jpg",
            "/images/Schwangerschaft/FamilieZagorny-19.jpg", "/images/Schwangerschaft/FamilieZagorny-14.jpg",
            "/images/Schwangerschaft/Jessi_Jeff-33.jpg", "/images/Schwangerschaft/Jessi_Jeff-32.jpg",
            "/images/Schwangerschaft/FamilieZagorny-4.jpg", "/images/Schwangerschaft/FamilieZagorny-15.jpg",
            "/images/Schwangerschaft/Jessi_Jeff-25.jpg", "/images/Schwangerschaft/Jessi_Jeff-37.jpg",
            "/images/Schwangerschaft/Lisa_Lukas-7.jpg", "/images/Schwangerschaft/Nasti_Daniel-12.jpg",
            "/images/Schwangerschaft/Jessi_Jeff-51.jpg", "/images/Schwangerschaft/Lisa_Lukas-4.jpg",
            "/images/Schwangerschaft/Nasti_Daniel-38.jpg", "/images/Schwangerschaft/Jessi_Jeff-46.jpg",
            "/images/Schwangerschaft/Annika_Josua_Babybauch-7.jpg", "/images/Schwangerschaft/Lisa_Lukas-5.jpg",
            "/images/Schwangerschaft/Lisa_Lukas-1.jpg", "/images/Schwangerschaft/Annika_Josua_Babybauch-31.jpg",
            "/images/Schwangerschaft/Annika_Josua_Babybauch-3.jpg", "/images/Schwangerschaft/Nasti_Daniel-29.jpg",
            "/images/Schwangerschaft/Nasti_Daniel-32_2.jpg", "/images/Schwangerschaft/Annika_Josua_Babybauch-32.jpg",
            "/images/Schwangerschaft/Nasti_Daniel-17.jpg", "/images/Schwangerschaft/Annika_Josua_Babybauch-33.jpg"
        ]
    },
    portrait: {
        id: "portrait",
        title: "Portrait",
        displayTitle: "Portrait",
        img: "/images/Luise-4.jpg",
        images: [
            "/images/Portrait/FabiennePortrait-44.jpg", "/images/Portrait/JoshaPortrait3.jpg", "/images/Portrait/Finja-39.jpg",
            "/images/Portrait/Rebecca-26.jpg", "/images/Portrait/Finja-10.jpg", "/images/Portrait/A7_06144.jpg",
            "/images/Portrait/Luise-17.jpg", "/images/Portrait/A7_08072SW.jpg", "/images/Portrait/Luise-12.jpg",
            "/images/Portrait/A7_06194.jpg", "/images/Portrait/FabiennePortraitN-45.jpg", "/images/Portrait/A7_06183.jpg",
            "/images/Portrait/A7_06196.jpg", "/images/Portrait/Luise-10.jpg", "/images/Portrait/Josha_Anso-2.jpg",
            "/images/Portrait/FabiennePortrait-30.jpg", "/images/Portrait/A7_06326.jpg", "/images/Portrait/A7_06097.jpg",
            "/images/Portrait/A7_06309.jpg", "/images/Portrait/FabiennePortraitN-31.jpg", "/images/Portrait/Lisa-35.jpg",
            "/images/Portrait/A7_06299.jpg", "/images/Portrait/Luise-8.jpg", "/images/Portrait/Finja-5.jpg",
            "/images/Portrait/JoshaPortrait.jpg", "/images/Portrait/Luise-21.jpg", "/images/Portrait/Finja-18.jpg",
            "/images/Portrait/Rebecca-5.jpg", "/images/Portrait/A7_06205.jpg", "/images/Portrait/Finja-32.jpg",
            "/images/Portrait/JoshaPortrait8.jpg"
        ]
    },
    wedding: {
        id: "wedding",
        title: "Hochzeiten",
        displayTitle: "Hochzeiten",
        img: "/images/Trauung-102.jpg",
        images: [
            "/images/Hochzeiten/Trauung-124.jpg", "/images/Hochzeiten/Shooting-4.jpg", "/images/Hochzeiten/FirstLook-15.jpg",
            "/images/Hochzeiten/SneakPeak-7.jpg", "/images/Hochzeiten/Trauung-122.jpg", "/images/Hochzeiten/FirstLook-6.2.jpg",
            "/images/Hochzeiten/FirstLook-41.5.jpg", "/images/Hochzeiten/Shooting-38.jpg", "/images/Hochzeiten/A7_06552.jpg",
            "/images/Hochzeiten/FirstLook-51_2.jpg", "/images/Hochzeiten/GettingReady-44.1.jpg", "/images/Hochzeiten/Trauung-121.jpg",
            "/images/Hochzeiten/L_A-129.jpg", "/images/Hochzeiten/Trauung-76.jpg", "/images/Hochzeiten/Trauung-62.jpg",
            "/images/Hochzeiten/GettingReady-33_2.jpg", "/images/Hochzeiten/Braut-1.jpg", "/images/Hochzeiten/GettingReady-29.jpg",
            "/images/Hochzeiten/L_A-13.jpg", "/images/Hochzeiten/GettingReady-28.jpg", "/images/Hochzeiten/GettingReady-14.jpg",
            "/images/Hochzeiten/Trauung-145.jpg", "/images/Hochzeiten/Braut-10.jpg", "/images/Hochzeiten/Feier-118.jpg",
            "/images/Hochzeiten/GettingReady-24.1.jpg", "/images/Hochzeiten/Feier-16.jpg", "/images/Hochzeiten/Shooting-65.jpg",
            "/images/Hochzeiten/Shooting-71.jpg", "/images/Hochzeiten/GettingReady-38.jpg", "/images/Hochzeiten/GettingReady-34.jpg",
            "/images/Hochzeiten/FirstLook-54.jpg", "/images/Hochzeiten/GettingReady-21.jpg", "/images/Hochzeiten/GettingReady-35.jpg",
            "/images/Hochzeiten/Shooting-68.jpg", "/images/Hochzeiten/FirstLook-81.jpg", "/images/Hochzeiten/FirstLook-43.jpg",
            "/images/Hochzeiten/Michèle_Julian-59.jpg", "/images/Hochzeiten/Shooting-47.jpg", "/images/Hochzeiten/FirstLook-3.jpg",
            "/images/Hochzeiten/GettingReady-33.jpg", "/images/Hochzeiten/GettingReady-25.jpg", "/images/Hochzeiten/GettingReady-30.jpg",
            "/images/Hochzeiten/Trauung-90.jpg", "/images/Hochzeiten/Feier-160.jpg", "/images/Hochzeiten/Trauung-112.jpg",
            "/images/Hochzeiten/J23A0203SW.jpg", "/images/Hochzeiten/FirstLook-35.jpg", "/images/Hochzeiten/Trauung-107.jpg",
            "/images/Hochzeiten/Feier-205.jpg", "/images/Hochzeiten/Trauung-103.jpg", "/images/Hochzeiten/FirstLook-18.jpg",
            "/images/Hochzeiten/Feier-54.jpg", "/images/Hochzeiten/Shooting-33.jpg", "/images/Hochzeiten/A7_06377.jpg",
            "/images/Hochzeiten/Trauung-42.jpg", "/images/Hochzeiten/Trauung-56.jpg", "/images/Hochzeiten/FirstLook-26.jpg",
            "/images/Hochzeiten/L_A-121.jpg", "/images/Hochzeiten/SneakPeak-8.jpg", "/images/Hochzeiten/Feier-80.jpg"
        ]
    },
    newborn: {
        id: "newborn",
        title: "Newborn",
        displayTitle: "Newborn",
        img: "/images/AlessandroElia-80.jpg",
        images: [
            "/images/Newborn/AlessandroElia-9.jpg", "/images/Newborn/AlessandroElia-80.jpg", "/images/Newborn/Kiano-29.jpg",
            "/images/Newborn/Klippenstein-17.jpg", "/images/Newborn/Kiano-14.jpg", "/images/Newborn/AlessandroElia-52.jpg",
            "/images/Newborn/Kiano-38.jpg", "/images/Newborn/Klippenstein-13.jpg", "/images/Newborn/AlessandroElia-93.jpg",
            "/images/Newborn/AlessandroElia-22.jpg", "/images/Newborn/Josua-11.jpg", "/images/Newborn/Josua-2.jpg",
            "/images/Newborn/Josua-3.jpg", "/images/Newborn/Josua-28.jpg", "/images/Newborn/Josua-7.jpg",
            "/images/Newborn/Josua-6.jpg", "/images/Newborn/AlessandroElia-24.jpg", "/images/Newborn/AlessandroElia-26.jpg",
            "/images/Newborn/Josua-4.jpg", "/images/Newborn/AlessandroElia-29.jpg", "/images/Newborn/Josua-24.jpg",
            "/images/Newborn/Josua-19.jpg", "/images/Newborn/Josua-21.jpg", "/images/Newborn/AlessandroElia-39.jpg",
            "/images/Newborn/Kiano-47.jpg", "/images/Newborn/AlessandroElia-49.jpg", "/images/Newborn/Kiano-22.jpg",
            "/images/Newborn/Kiano-25.jpg", "/images/Newborn/Kiano-19.jpg", "/images/Newborn/Klippenstein-26.jpg"
        ]
    },
    family: {
        id: "family",
        title: "Familien",
        displayTitle: "Familien",
        img: "/images/Famillien/FamilieHermann-21.1.jpg",
        images: [
            "/images/Famillien/FamilieHermann-1.jpg", "/images/Famillien/FamilieHermann-10.1.jpg", "/images/Famillien/FamilieHermann-10.jpg",
            "/images/Famillien/FamilieHermann-11.1.jpg", "/images/Famillien/FamilieHermann-11.2.jpg", "/images/Famillien/FamilieHermann-11.3.jpg",
            "/images/Famillien/FamilieHermann-11.4..jpg", "/images/Famillien/FamilieHermann-11.jpg", "/images/Famillien/FamilieHermann-12.jpg",
            "/images/Famillien/FamilieHermann-13.1.jpg", "/images/Famillien/FamilieHermann-13.jpg", "/images/Famillien/FamilieHermann-14.jpg",
            "/images/Famillien/FamilieHermann-15.jpg", "/images/Famillien/FamilieHermann-16.1.jpg", "/images/Famillien/FamilieHermann-16.jpg",
            "/images/Famillien/FamilieHermann-17.jpg", "/images/Famillien/FamilieHermann-18.1.jpg", "/images/Famillien/FamilieHermann-18.jpg",
            "/images/Famillien/FamilieHermann-19.1.jpg", "/images/Famillien/FamilieHermann-19.jpg", "/images/Famillien/FamilieHermann-2.jpg",
            "/images/Famillien/FamilieHermann-20.1.jpg", "/images/Famillien/FamilieHermann-20.2.jpg", "/images/Famillien/FamilieHermann-20.jpg",
            "/images/Famillien/FamilieHermann-21.1.jpg", "/images/Famillien/FamilieHermann-21.jpg", "/images/Famillien/FamilieHermann-22.jpg",
            "/images/Famillien/FamilieHermann-23.jpg", "/images/Famillien/FamilieHermann-24.jpg", "/images/Famillien/FamilieHermann-25.1.jpg",
            "/images/Famillien/FamilieHermann-25.jpg", "/images/Famillien/FamilieHermann-26.1.jpg", "/images/Famillien/FamilieHermann-26.2.jpg",
            "/images/Famillien/FamilieHermann-26.3.jpg", "/images/Famillien/FamilieHermann-27.1.jpg", "/images/Famillien/FamilieHermann-27.2.jpg",
            "/images/Famillien/FamilieHermann-27.jpg", "/images/Famillien/FamilieHermann-28.1.jpg", "/images/Famillien/FamilieHermann-28.2.jpg",
            "/images/Famillien/FamilieHermann-3.jpg", "/images/Famillien/FamilieHermann-30.jpg", "/images/Famillien/FamilieHermann-31.jpg",
            "/images/Famillien/FamilieHermann-32.jpg", "/images/Famillien/FamilieHermann-33.jpg", "/images/Famillien/FamilieHermann-34.jpg",
            "/images/Famillien/FamilieHermann-35.jpg", "/images/Famillien/FamilieHermann-36.jpg", "/images/Famillien/FamilieHermann-37.jpg",
            "/images/Famillien/FamilieHermann-38.jpg", "/images/Famillien/FamilieHermann-39.jpg", "/images/Famillien/FamilieHermann-4.1.jpg",
            "/images/Famillien/FamilieHermann-4.jpg", "/images/Famillien/FamilieHermann-40.jpg", "/images/Famillien/FamilieHermann-5.jpg",
            "/images/Famillien/FamilieHermann-6.1.jpg", "/images/Famillien/FamilieHermann-6.jpg", "/images/Famillien/FamilieHermann-7.jpg",
            "/images/Famillien/FamilieHermann-8.jpg", "/images/Famillien/FamilieHermann-9.1.jpg", "/images/Famillien/FamilieHermann-9.jpg"
        ]
    },
};

const categoryOrder = ["couple", "maternity", "portrait", "wedding", "newborn", "family"];

export default function PortfolioDetail() {
    const { id } = useParams();
    const categoryId = typeof id === "string" ? id : "couple";
    const data = categoryDetails[categoryId] || categoryDetails.couple;

    const currentIndex = categoryOrder.indexOf(categoryId);
    const nextCategoryId = categoryOrder[(currentIndex + 1) % categoryOrder.length];
    const nextCategory = categoryDetails[nextCategoryId];

    // Use actual images from the category data without forcing aspect ratio
    const galleryItems = data.images.map((img, i) => {
        return {
            src: img,
            id: i,
        };
    });

    return (
        <main className="max-w-7xl mx-auto px-6 pb-24 w-full">
            {/* Title Section: Simplified */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="text-center mb-16 mt-12 md:mt-24"
            >
                <h1 className="text-black">
                    {data.displayTitle}
                </h1>
                <div className="w-12 h-px bg-black/10 mx-auto mt-8" />
            </motion.div>

            {/* Grid: Forced minimum 2 columns on mobile */}
            <div className="columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-10px" }}
                        transition={{ duration: 0.8, delay: (index % 3) * 0.05 }}
                        className="break-inside-avoid relative overflow-hidden bg-neutral-100"
                    >
                        <div className="relative w-full pointer-events-none">
                            <Image
                                src={item.src}
                                alt={`${data.title} sample ${item.id + 1}`}
                                width={800}
                                height={1200}
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="w-full h-auto"
                                priority={index < 4}
                                loading={index >= 4 ? "lazy" : undefined}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Navigation: High Contrast, Simplified */}
            <div className="mt-32 border-t border-black/5 pt-16 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[11px] tracking-[0.25em] font-sans uppercase text-black w-full gap-10">
                <Link
                    href="/"
                    className="flex items-center space-x-3 hover:opacity-40 transition-opacity group font-normal"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={1} />
                    <span>Portfolio</span>
                </Link>

                <div className="hidden md:flex items-center space-x-6 text-[9px] opacity-50">
                    <div className="w-12 h-px bg-current" />
                    <span>{currentIndex + 1} / 06</span>
                    <div className="w-12 h-px bg-current" />
                </div>

                <Link
                    href={`/portfolio/${nextCategoryId}`}
                    className="flex items-center space-x-3 hover:opacity-40 transition-opacity group font-normal"
                >
                    <span>Nächste Kategorie</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1} />
                </Link>
            </div>
        </main>
    );
}
