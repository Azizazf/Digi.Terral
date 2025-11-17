import { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Sections/Hero';
import Services from '../components/Sections/Services';
import Skills from '../components/Sections/Skills';
import CTA from '../components/Sections/CTA';
import Contact from '../components/Sections/Contact';

export default function Home() {
    useEffect(() => {
        // Initialisation des animations AOS (à installer séparément)
        if (typeof window !== 'undefined') {
            import('aos').then((AOS) => {
                AOS.init({
                    duration: 1000,
                    once: true,
                    offset: 100,
                });
            });
        }
    }, []);

    return (
        <Layout>
            <Hero />
            <Services />
            <Skills />
            <CTA />
            <Contact />
        </Layout>
    );
}