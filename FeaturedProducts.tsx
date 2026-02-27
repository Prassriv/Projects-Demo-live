"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: "₹1,59,900",
        category: "Best Sellers",
        brand: "Apple",
        image: "bg-gradient-to-br from-gray-900 to-gray-800",
        specs: ["256GB", "Titanium", "A17 Pro"],
    },
    {
        id: 2,
        name: "Samsung S24 Ultra",
        price: "₹1,29,999",
        category: "Latest",
        brand: "Samsung",
        image: "bg-gradient-to-br from-gray-800 to-gray-700",
        specs: ["512GB", "AI Features", "S-Pen"],
    },
    {
        id: 3,
        name: "OnePlus 12",
        price: "₹64,999",
        category: "Budget",
        brand: "OnePlus",
        image: "bg-gradient-to-br from-green-900 to-green-800",
        specs: ["16GB RAM", "Snapdragon 8 Gen 3"],
    },
    {
        id: 4,
        name: "Pixel 8 Pro",
        price: "₹1,06,999",
        category: "Latest",
        brand: "Google",
        image: "bg-gradient-to-br from-blue-900 to-blue-800",
        specs: ["Tensor G3", "Best Camera"],
    },
    {
        id: 5,
        name: "Nothing Phone (2)",
        price: "₹39,999",
        category: "Budget",
        brand: "Nothing",
        image: "bg-gradient-to-br from-gray-800 to-black",
        specs: ["Glyph Interface", "Unique Design"],
    },
    {
        id: 6,
        name: "Xiaomi 14 Ultra",
        price: "₹99,999",
        category: "Best Sellers",
        brand: "Xiaomi",
        image: "bg-gradient-to-br from-gray-700 to-gray-600",
        specs: ["Leica Optics", "Snapdragon 8 Gen 3"],
    },
];

const filters = ["All", "Best Sellers", "Latest", "Budget"];

const FeaturedProducts = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProducts =
        activeFilter === "All"
            ? products
            : products.filter((p) => p.category === activeFilter);

    return (
        <section id="products" className="py-24 bg-dark-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Smartphones</span>
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                                    ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                                    : "glass text-gray-400 hover:text-white"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={product.id}
                                className="glass rounded-2xl overflow-hidden group hover:border-neon-cyan/50 transition-colors duration-300"
                            >
                                {/* Image Placeholder */}
                                <div className={`h-64 w-full ${product.image} relative group-hover:scale-105 transition-transform duration-500`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white/20 text-4xl font-bold">{product.brand}</span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                        <span className="text-xs text-white">4.8</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                                            <p className="text-neon-cyan font-bold">{product.price}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.specs.map((spec, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={`https://wa.me/919999999999?text=Hi%2C%20I'm%20interested%20in%20buying%20${encodeURIComponent(product.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-neon-cyan hover:to-neon-purple hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                                    >
                                        <ShoppingCart size={18} />
                                        Buy Now
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
