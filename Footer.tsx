import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple mb-6">
                            NewEraMobile
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Your trusted destination for next-gen smartphones and premium accessories. Experience the future of mobile technology today.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "Products", "Services", "Offers", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
                        <ul className="space-y-4">
                            {[
                                "Smartphone Sales",
                                "Repair & Diagnostics",
                                "Mobile Accessories",
                                "Screen Replacement",
                                "Data Recovery",
                            ].map((item) => (
                                <li key={item} className="text-gray-400">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-neon-cyan shrink-0" />
                                <span>Siwan, Bihar 841226</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-neon-cyan shrink-0" />
                                <span>+91 99999 99999</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-neon-cyan shrink-0" />
                                <span>contact@neweramobile.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500">
                        © {new Date().getFullYear()} NewEraMobile. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
