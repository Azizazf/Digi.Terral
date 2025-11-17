import { FaCheckCircle, FaMobile, FaCode, FaUsers, FaPenFancy, FaChartBar, FaCloud } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        {
            icon: <FaMobile />,
            title: "Développement Mobile",
            description: "Applications iOS et Android natives et cross-platform"
        },
        {
            icon: <FaCode />,
            title: "Développement Web",
            description: "Sites web modernes, applications web et e-commerce"
        },
        {
            icon: <FaUsers />,
            title: "Community Management",
            description: "Stratégie et gestion de communauté sur les réseaux sociaux"
        },
        {
            icon: <FaPenFancy />,
            title: "Création de Contenu",
            description: "Contenu engageant et programmation pour tous supports"
        },
        {
            icon: <FaChartBar />,
            title: "Analyse & Optimisation",
            description: "Analyse de données et optimisation avec outils IA"
        },
        {
            icon: <FaCloud />,
            title: "Solutions SaaS",
            description: "Développement de plateformes et outils automatisés"
        }
    ];

    return (
        <section id="competences" className="bg-white section-padding">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Compétences & Expertise
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Une combinaison unique de compétences techniques en développement et de stratégies
                            avancées de community management pour offrir des solutions digitales complètes.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Développement d'applications mobiles iOS et Android",
                                "Conception et développement de sites web responsive",
                                "Stratégie et gestion de communauté sur les réseaux sociaux",
                                "Création de contenu engageant et programmation",
                                "Analyse de données et optimisation avec outils IA",
                                "Développement de plateformes SaaS et outils automatisés"
                            ].map((skill, index) => (
                                <div key={index} className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{skill}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="#contact" className="btn-primary">
                                Discutons de votre projet
                            </a>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                        <div className="text-center">
                            <div className="bg-white bg-opacity-20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                                <FaCode className="text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                                Développement + Community Management
                            </h3>
                            <p className="opacity-90">
                                La synergie parfaite entre expertise technique et stratégie d&apos;engagement
                                pour des résultats exceptionnels.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                                    <div className="text-2xl mb-2">{skill.icon}</div>
                                    <h4 className="font-semibold text-sm">{skill.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;


