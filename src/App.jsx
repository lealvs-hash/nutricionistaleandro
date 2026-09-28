import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsRibbon from './components/StatsRibbon';
import InteractiveQuiz from './components/InteractiveQuiz';
import About from './components/About';
import GeriatricsSection from './components/GeriatricsSection';
import WeightLossSection from './components/WeightLossSection';
import SportsSection from './components/SportsSection';
import IsakSection from './components/IsakSection';
import ServiceModes from './components/ServiceModes';
import Methodology from './components/Methodology';
import Plans from './components/Plans';
import LocationSection from './components/LocationSection';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import InstagramCta from './components/InstagramCta';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleScrollToQuiz = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-surface selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onOpenBooking={() => setIsBookingOpen(true)} 
          onScrollToQuiz={handleScrollToQuiz} 
        />

        <StatsRibbon />

        <InteractiveQuiz />

        <About onOpenBooking={() => setIsBookingOpen(true)} />

        <GeriatricsSection onOpenBooking={() => setIsBookingOpen(true)} />

        <WeightLossSection onOpenBooking={() => setIsBookingOpen(true)} />

        <SportsSection onOpenBooking={() => setIsBookingOpen(true)} />

        <IsakSection onOpenBooking={() => setIsBookingOpen(true)} />

        <ServiceModes onOpenBooking={() => setIsBookingOpen(true)} />

        <Methodology onOpenBooking={() => setIsBookingOpen(true)} />

        <Plans onOpenBooking={() => setIsBookingOpen(true)} />

        <LocationSection />

        <Testimonials />

        <Faq />

        <InstagramCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Overlays & Floats */}
      <FloatingWhatsapp />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}
