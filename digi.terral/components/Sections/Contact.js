import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear status when user starts typing again
        if (submitStatus.message) {
            setSubmitStatus({ type: '', message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // Configuration EmailJS - À remplacer avec vos propres IDs
            const serviceID = 'service_8zz0p7r';
            const templateID = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            // Envoi de l'email via EmailJS
            const result = await emailjs.send(
                serviceID,
                templateID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Digi.Terral',
                    reply_to: formData.email,
                },
                publicKey
            );

            if (result.text === 'OK') {
                setSubmitStatus({
                    type: 'success',
                    message: 'Message envoyé avec succès ! Nous vous contacterons dans les plus brefs délais.'
                });
                
                // Reset du formulaire
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement par email.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Fonction pour copier l'email dans le clipboard
    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('contact@digiterral.com');
            alert('Email copié dans le presse-papier !');
        } catch (err) {
            console.error('Erreur lors de la copie:', err);
        }
    };

    return (
        <section id="contact" className="bg-light section-padding">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="section-title">Contactez-nous</h2>
                    <p className="section-subtitle">
                        Discutons de votre projet et voyons comment nous pouvons vous aider à réussir.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-6">Informations de contact</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <FaEnvelope className="text-secondary mt-1 mr-4 text-xl" />
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <div className="flex items-center gap-2">
                                        <p className="text-gray-600">contact@digiterral.com</p>
                                        <button
                                            onClick={copyEmailToClipboard}
                                            className="text-primary hover:text-secondary text-sm ml-2 underline"
                                        >
                                            Copier
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FaPhone className="text-secondary mt-1 mr-4 text-xl" />
                                <div>
                                    <h4 className="font-semibold">Téléphone</h4>
                                    <p className="text-gray-600">+221 78 115 73 77</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-secondary mt-1 mr-4 text-xl" />
                                <div>
                                    <h4 className="font-semibold">Adresse</h4>
                                    <p className="text-gray-600">Dakar, Sénégal</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="font-semibold text-primary mb-4">Suivez-nous</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                                    <FaLinkedin />
                                </a>
                                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        {/* Status Message */}
                        {submitStatus.message && (
                            <div className={`mb-6 p-4 rounded-lg ${
                                submitStatus.type === 'success' 
                                    ? 'bg-green-100 text-green-700 border border-green-200' 
                                    : 'bg-red-100 text-red-700 border border-red-200'
                            }`}>
                                <div className="flex items-center">
                                    {submitStatus.type === 'success' ? (
                                        <FaCheckCircle className="mr-2 flex-shrink-0" />
                                    ) : (
                                        <FaExclamationTriangle className="mr-2 flex-shrink-0" />
                                    )}
                                    <span>{submitStatus.message}</span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2">
                                        Nom complet <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-gray-700 mb-2">
                                    Sujet <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                                    isSubmitting 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-secondary hover:bg-green-600 transform hover:-translate-y-1 hover:shadow-lg'
                                } text-white`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Envoi en cours...
                                    </div>
                                ) : (
                                    'Envoyer le message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;