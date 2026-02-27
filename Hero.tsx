"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-neon-cyan/30 text-neon-cyan mb-6"
                        >
                            <Sparkles size={16} />
                            <span className="text-sm font-medium tracking-wide">
                                The Future of Mobile Technology
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Next-Gen</span>
                            <br /> Smartphone Store
                        </h1>

                        <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                            Experience the latest in mobile innovation. From flagship devices to premium accessories, we bring the future to your fingertips.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20shop%20for%20a%20new%20smartphone"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-shadow duration-300 flex items-center gap-2 group"
                            >
                                Shop Now
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button className="px-8 py-4 rounded-full glass text-white font-bold text-lg hover:bg-white/10 transition-colors duration-300">
                                View Latest Offers
                            </button>
                        </div>
                    </motion.div>

                    {/* Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px] hidden lg:flex items-center justify-center"
                    >
                        {/* Abstract Phone Representation */}
                        <div className="relative w-[300px] h-[600px] bg-dark-800 rounded-[3rem] border-4 border-dark-700 shadow-2xl animate-float z-20 overflow-hidden">
                            {/* Screen Content */}
                            <div className="absolute inset-2 bg-dark-900 rounded-[2.5rem] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20" />
                                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

                                {/* Apps Grid */}
                                <div className="grid grid-cols-4 gap-4 p-6 mt-12">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="aspect-square rounded-2xl bg-white/10 backdrop-blur-md" />
                                    ))}
                                </div>
                            </div>

                            {/* Notch */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-30" />
                        </div>

                        {/* Back Phone (Parallax) */}
                        <div className="absolute top-10 -right-12 w-[280px] h-[560px] bg-dark-800 rounded-[3rem] border-4 border-dark-700 shadow-xl animate-float opacity-50 z-10 rotate-12" style={{ animationDelay: "1s" }}>
                            <div className="absolute inset-2 bg-dark-900 rounded-[2.5rem] bg-gradient-to-br from-neon-purple/20 to-neon-pink/20" />
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-1/4 -left-12 w-20 h-20 glass rounded-2xl animate-float delay-700 flex items-center justify-center">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <div className="absolute bottom-1/4 -right-8 w-16 h-16 glass rounded-full animate-float delay-500 flex items-center justify-center">
                            <span className="text-2xl">⚡</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
