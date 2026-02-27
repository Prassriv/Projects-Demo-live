"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "#products" },
        { name: "Services", href: "#services" },
        { name: "Offers", href: "#offers" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass py-3" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <ShoppingBag className="w-8 h-8 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300" />
                            <div className="absolute inset-0 bg-neon-cyan/20 blur-lg rounded-full group-hover:bg-neon-purple/20 transition-colors duration-300" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                            NewEraMobile
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 text-sm font-medium tracking-wide relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20shop%20for%20a%20new%20smartphone"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-medium hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-shadow duration-300"
                        >
                            Shop Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 text-lg font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20shop%20for%20a%20new%20smartphone"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-medium text-center block"
                            >
                                Shop Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
