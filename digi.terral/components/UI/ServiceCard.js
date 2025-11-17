const ServiceCard = ({ icon, title, description, delay }) => {
    return (
        <div
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="text-primary text-3xl mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

export default ServiceCard;