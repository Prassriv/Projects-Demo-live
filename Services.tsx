"use client";

import { motion } from "framer-motion";
import { Smartphone, Wrench, Headphones, Disc, Database, Cpu } from "lucide-react";

const services = [
    {
        icon: Smartphone,
        title: "Smartphone Sales",
        description: "Wide range of latest smartphones from top brands at best prices.",
        color: "text-neon-cyan",
        delay: 0,
    },
    {
        icon: Wrench,
        title: "Repair & Diagnostics",
        description: "Expert diagnosis and repair for all mobile issues.",
        color: "text-neon-purple",
        delay: 0.1,
    },
    {
        icon: Headphones,
        title: "Mobile Accessories",
        description: "Premium cases, chargers, and audio accessories.",
        color: "text-neon-pink",
        delay: 0.2,
    },
    {
        icon: Disc,
        title: "Screen Replacement",
        description: "Original quality screen replacements with warranty.",
        color: "text-neon-green",
        delay: 0.3,
    },
    {
        icon: Cpu,
        title: "Software Installation",
        description: "OS updates, software fixes, and data transfer services.",
        color: "text-blue-400",
        delay: 0.4,
    },
    {
        icon: Database,
        title: "Data Recovery",
        description: "Secure data recovery from damaged or dead devices.",
        color: "text-yellow-400",
        delay: 0.5,
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Comprehensive mobile solutions tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: service.delay }}
                            className="glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-neon-cyan/30"
                        >
                            <div className={`w-14 h-14 rounded-xl glass flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
