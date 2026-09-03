import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ToolsSection from '../components/ToolsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <ToolsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    )
}