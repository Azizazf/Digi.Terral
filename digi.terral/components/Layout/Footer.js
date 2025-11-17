import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Digi.<span className="text-secondary">Terral</span>
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            La Terrasse Digitale - Solutions de Marketing et Engagement Numérique
                            combinant développement web et community management.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FaFacebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Agence Web & Engagement</Link></li>
                            <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Optimisation Digitale</Link></li>
                            <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Outil SaaS de Gestion</Link></li>
                            <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Plateformes Communautaires</Link></li>
                            <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Transformation PME</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
                        <ul className="space-y-2">
                            <li><Link href="#accueil" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#competences" className="text-gray-300 hover:text-white transition-colors">Compétences</Link></li>
                            <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>contact@digiterral.com</li>
                            <li>+221 78 115 73 77</li>
                            <li>Dakar, Sénégal</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Digi.Terral - Tous droits réservés</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;