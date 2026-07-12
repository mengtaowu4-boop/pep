import React, { useState } from 'react';
import { BrandConfig, UserInteractionState } from './types';
import Header from './components/Header';
import BrandCustomizer from './components/BrandCustomizer';
import ContentSection from './components/ContentSection';
import BrandingGallery from './components/BrandingGallery';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  // Brand Configuration State (Formula & Mug print)
  const [config, setConfig] = useState<BrandConfig>({
    bottleColor: 'amber',
    formula: 'focus',
    mugText: 'LEO'
  });

  // User Interaction State (Likes, Saves, Follow)
  const [interaction, setInteraction] = useState<UserInteractionState>({
    liked: false,
    likesCount: 312,
    saved: false,
    following: false
  });

  // Contact Modal Toggle
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContact = () => setContactModalOpen(true);
  const handleCloseContact = () => setContactModalOpen(false);

  return (
    <div id="app-root" className="min-h-screen bg-white text-gray-800 antialiased font-sans selection:bg-brand-pastel selection:text-brand-dark transition-all duration-300">
      
      {/* 1. Header with follow/like state managers */}
      <Header 
        interaction={interaction}
        setInteraction={setInteraction}
        onContactClick={handleOpenContact}
      />

      <main className="pb-16">
        
        {/* 2. Brand Customizer (Interactive Supplement mockup and configurations) */}
        <BrandCustomizer 
          config={config}
          setConfig={setConfig}
        />

        {/* 3. Text content describing concept and guidelines */}
        <ContentSection 
          onContactClick={handleOpenContact}
        />

        {/* 4. Branding Gallery Grid (Beige container with banner, box, bag, mug, star) */}
        <BrandingGallery 
          config={config}
          setConfig={setConfig}
        />

      </main>

      {/* 5. Footer */}
      <Footer 
        onContactClick={handleOpenContact}
      />

      {/* 6. High-end contact modal overlay */}
      <ContactModal 
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
      />

      {/* 7. Floating WhatsApp lead generator widget */}
      <WhatsAppFloatingButton 
        onContactClick={handleOpenContact}
      />

    </div>
  );
}
