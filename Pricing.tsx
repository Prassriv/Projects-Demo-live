"use client";

import { motion } from "framer-motion";
import { Check, CreditCard, Gift, Percent } from "lucide-react";

const offers = [
    {
        title: "Student Special",
        discount: "10% OFF",
        description: "Valid on all accessories and repairs with valid student ID.",
        icon: Percent,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Exchange Offer",
        discount: "Up to ₹20,000",
        description: "Exchange your old smartphone and get instant value deduction.",
        icon: Gift,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Zero Cost EMI",
        discount: "0% Interest",
        description: "Available on all flagship devices with leading credit cards.",
        icon: CreditCard,
        color: "from-orange-500 to-red-500",
    },
];

const Pricing = () => {
    return (
        <section id="offers" className="py-24 bg-dark-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Offers</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Unbeatable deals and flexible payment options just for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${offer.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                            <div className="relative glass p-8 rounded-2xl h-full border border-white/5 group-hover:border-white/20 transition-colors">
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${offer.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                                    <offer.icon size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                                <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${offer.color} mb-4`}>
                                    {offer.discount}
                                </div>
                                <p className="text-gray-400 mb-6">
                                    {offer.description}
                                </p>

                                <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white font-medium">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* EMI Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px]" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Easy EMI Options Available
                            </h3>
                            <p className="text-gray-400 max-w-xl">
                                Don't let budget hold you back. We offer flexible EMI plans with Bajaj Finserv, HDFC, and other leading partners.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium">
                                Bajaj Finserv
                            </div>
                            <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium">
                                HDFC Bank
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
