import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import MobileCallBar from './components/MobileCallBar';
import Navbar from './components/Navbar';
import RestaurantExperience from './components/RestaurantExperience';
import SignatureDish from './components/SignatureDish';
import WhyChooseUs from './components/WhyChooseUs';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-leaf focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <AboutSection />
        <MenuSection />
        <SignatureDish />
        <WhyChooseUs />
        <RestaurantExperience />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
