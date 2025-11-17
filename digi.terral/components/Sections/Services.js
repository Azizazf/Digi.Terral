import ServiceCard from '../UI/ServiceCard';
import {
    FaUsers,
    FaChartLine,
    FaRobot,
    FaHashtag,
    FaBuilding,
    FaCalendarAlt,
    FaEuroSign,
    FaUserTie
} from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaUsers />,
            title: "Agence Web & Engagement Communautaire",
            description: "Conception d'identités visuelles, création et gestion de blogs, sites web, programmation de contenu et gestion d'engagement communautaire."
        },
        {
            icon: <FaChartLine />,
            title: "Optimisation Digitale",
            description: "Conseil stratégique pour sites web et réseaux sociaux, utilisation d'outils d'analyse IA pour des stratégies de contenu efficaces."
        },
        {
            icon: <FaRobot />,
            title: "Outil Automatisé de Gestion (SaaS)",
            description: "Plateforme pour modérer, répondre et gérer le contenu avec intégration facile vers CMS et boutiques en ligne."
        },
        {
            icon: <FaHashtag />,
            title: "Plateformes pour Communautés de Niches",
            description: "Réseaux sociaux spécialisés pour artistes, développeurs, entrepreneurs favorisant une interaction ciblée et authentique."
        },
        {
            icon: <FaBuilding />,
            title: "Transformation Digitale des PME",
            description: "Création de sites web, gestion de communautés en ligne, packs complets d'identité visuelle et marketing digital."
        },
        {
            icon: <FaCalendarAlt />,
            title: "Solutions pour Événements",
            description: "Gestion intégrée des inscriptions, engagement avant/après événement et contenu exclusif pour événements."
        },
        {
            icon: <FaEuroSign />,
            title: "Offres Low-Cost",
            description: "Sites web, applications et gestion des réseaux sociaux à prix accessible pour tous les budgets."
        },
        {
            icon: <FaUserTie />,
            title: "Social Branding & Influenceurs",
            description: "Accompagnement pour influenceurs pour maximiser visibilité et engagement, gestion de communautés et développement web."
        }
    ];

    return (
        <section id="services" className="bg-light section-padding">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="section-title">Nos Services</h2>
                    <p className="section-subtitle">
                        Une approche intégrée qui combine expertise technique et stratégie d&apos;engagement pour des résultats optimaux.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;