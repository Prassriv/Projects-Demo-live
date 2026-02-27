"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Us</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We'd love to hear from you. Drop by our store or send us a message.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass p-6 rounded-2xl">
                                <MapPin className="text-neon-cyan mb-4" size={24} />
                                <h4 className="text-white font-bold mb-2">Address</h4>
                                <p className="text-gray-400">Siwan, Bihar 841226</p>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <Phone className="text-neon-purple mb-4" size={24} />
                                <h4 className="text-white font-bold mb-2">Phone</h4>
                                <p className="text-gray-400">+91 99999 99999</p>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <Mail className="text-neon-pink mb-4" size={24} />
                                <h4 className="text-white font-bold mb-2">Email</h4>
                                <p className="text-gray-400">contact@neweramobile.com</p>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <Clock className="text-neon-green mb-4" size={24} />
                                <h4 className="text-white font-bold mb-2">Timing</h4>
                                <p className="text-gray-400">10:00 AM - 9:00 PM</p>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[300px] rounded-2xl overflow-hidden glass border border-white/10 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.697662768565!2d84.3542!3d26.2243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992f92a35555555%3A0x5555555555555555!2sSiwan%2C%20Bihar%20841226!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-8 rounded-3xl border border-white/10"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                    placeholder="Your Phone Number"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
