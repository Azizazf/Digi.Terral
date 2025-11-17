import Link from 'next/link';

const Hero = () => {
    return (
        <section id="accueil" className="bg-gradient-to-br from-primary to-blue-900 text-white section-padding">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        La Terrasse Digitale
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                        Solutions de Marketing et Engagement Numérique combinant développement web
                        et community management pour propulser votre présence en ligne.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#contact" className="btn-primary">
                            Démarrer un projet
                        </Link>
                        <Link href="#services" className="btn-outline">
                            Découvrir nos services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;