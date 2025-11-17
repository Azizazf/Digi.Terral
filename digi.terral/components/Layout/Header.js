import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-primary">
                        Digi.<span className="text-secondary">Terral</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="#accueil" className="text-dark hover:text-primary font-medium transition-colors">
                            Accueil
                        </Link>
                        <Link href="#services" className="text-dark hover:text-primary font-medium transition-colors">
                            Services
                        </Link>
                        <Link href="#competences" className="text-dark hover:text-primary font-medium transition-colors">
                            Compétences
                        </Link>
                        <Link href="#contact" className="text-dark hover:text-primary font-medium transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* CTA Button Desktop */}
                    <div className="hidden md:block">
                        <Link href="#contact" className="btn-primary">
                            Démarrer un projet
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-dark"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="#accueil"
                                className="text-dark hover:text-primary font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Accueil
                            </Link>
                            <Link
                                href="#services"
                                className="text-dark hover:text-primary font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="#competences"
                                className="text-dark hover:text-primary font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Compétences
                            </Link>
                            <Link
                                href="#contact"
                                className="text-dark hover:text-primary font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                href="#contact"
                                className="btn-primary text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Démarrer un projet
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;