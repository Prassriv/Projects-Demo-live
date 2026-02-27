"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Wrench, Headphones } from "lucide-react";

const features = [
    {
        icon: Smartphone,
        title: "Latest Devices",
        description: "Access to the newest flagship smartphones from top global brands.",
        color: "text-neon-cyan",
    },
    {
        icon: ShieldCheck,
        title: "Genuine Products",
        description: "100% authentic products with official manufacturer warranty.",
        color: "text-neon-purple",
    },
    {
        icon: Wrench,
        title: "Expert Repairs",
        description: "Certified technicians for quick and reliable device repairs.",
        color: "text-neon-pink",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Dedicated customer support to assist you with any queries.",
        color: "text-neon-green",
    },
];

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">NewEraMobile</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        NewEraMobile is a trusted local smartphone and accessories shop offering the latest mobile phones, best prices, reliable repairs, smart accessories, and personalised customer support.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-full glass flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
