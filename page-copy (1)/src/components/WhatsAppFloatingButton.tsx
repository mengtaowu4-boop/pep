import React from 'react';
import { MessageSquare } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  onContactClick: () => void;
}

export default function WhatsAppFloatingButton({ onContactClick }: WhatsAppFloatingButtonProps) {
  // Default WhatsApp link action
  const handleDirectWA = () => {
    const defaultNumber = '85269910346';
    const msg = encodeURIComponent('Hello, I am very interested in your high-purity GHK-Cu and other custom peptides. Please send over your wholesale catalog and ODM/OEM pricing sheets.');
    window.open(`https://wa.me/${defaultNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Main Floating Circle Button - Opens WhatsApp directly */}
      <button
        onClick={handleDirectWA}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer pointer-events-auto relative group"
        title="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
        </span>
        
        <MessageSquare className="w-6 h-6 fill-white group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  );
}

