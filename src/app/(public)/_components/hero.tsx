"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import doctorImg from "../../../../public/doctor-hero.png";

export function Hero() {
    return (
        <section className="relative bg-green-50 py-20 overflow-hidden">

            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-1/4 left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-30 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-100 rounded-full opacity-20 animate-pulse-slow delay-1000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <main className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                    <motion.article
                        className="text-center lg:text-left space-y-8"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600 animate-gradient-smooth">
                            Conecte-se com os melhores <br className="hidden sm:inline" /> profissionais da saúde
                        </h1>

                        <p className="text-gray-700 text-xl max-w-xl mx-auto lg:mx-0">
                            Plataforma completa para encontrar clínicas e agilizar seu atendimento com poucos cliques.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block"
                        >
                            <Link href="/clinicas-page" target="_blank" rel="noopener noreferrer">
                                <Button className="relative text-lg px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl transition-all duration-300">
                                    <span className="absolute inset-0 rounded-full opacity-30 blur-md bg-gradient-to-r from-white/40 via-white/10 to-white/0 animate-glow" />
                                    <span className="relative z-10">Encontre uma clínica</span>
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.article>
                    <motion.div
                        className="hidden lg:flex justify-center relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="drop-shadow-2xl relative"
                        >
                            <Image
                                src={doctorImg}
                                alt="Profissional da saúde"
                                className="max-w-md w-full h-auto block"
                                priority
                                style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 20%)' }}
                            />

                        </motion.div>
                    </motion.div>
                </main>
            </div>
        </section>
    );
}