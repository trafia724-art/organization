import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light-surface text-light-on-surface font-body">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
