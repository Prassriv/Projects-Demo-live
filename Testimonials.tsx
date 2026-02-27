"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Kumar",
        role: "Tech Enthusiast",
        content: "Best smartphone shop in Siwan! Got my iPhone 15 Pro at a great price. The staff is very knowledgeable and helpful.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    },
    {
        name: "Priya Singh",
        role: "Student",
        content: "Amazing service! They fixed my broken screen in just 2 hours. Highly recommended for quick repairs.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
        name: "Amit Patel",
        role: "Business Owner",
        content: "I buy all my office phones from NewEraMobile. Genuine products and excellent after-sales support.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    },
    {
        name: "Sneha Gupta",
        role: "Photographer",
        content: "Got the S24 Ultra for my photography work. The camera is stunning, and the deal I got here was unbeatable.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Stories</span>
                    </h2>
                </div>

                {/* Marquee Effect */}
                <div className="relative w-full overflow-hidden mask-gradient">
                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-[350px] glass p-8 rounded-2xl border border-white/5 flex-shrink-0"
                            >
                                <Quote className="text-neon-cyan mb-4 opacity-50" size={32} />
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full bg-white/10"
                                    />
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-neon-purple">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
