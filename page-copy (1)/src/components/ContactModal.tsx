import React, { useState } from 'react';
import { X, MessageSquare, Phone, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [whatsappNumber, setWhatsappNumber] = useState('+852 6991 0346'); // Preconfigured default WhatsApp number, editable by user
  const [prefilledMsg, setPrefilledMsg] = useState('Hello, I am very interested in your high-purity GHK-Cu and other custom peptides. Please send over your wholesale catalog and ODM/OEM pricing sheets.');

  if (!isOpen) return null;

  const getWhatsappUrl = () => {
    // Standard WhatsApp link format
    const cleanNum = whatsappNumber.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(prefilledMsg);
    return `https://wa.me/${cleanNum}?text=${encodedText}`;
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
         className="absolute inset-0 bg-brand-dark/40 backdrop-blur-md transition-opacity"
         onClick={handleClose}
      />

      {/* Modal Content Card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-lg w-full overflow-hidden z-10 relative flex flex-col max-h-[90vh] transition-all transform scale-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-col">
            <h3 className="text-base font-bold text-gray-900 tracking-tight font-display">Get Leo Partnership Details</h3>
            <span className="text-[10px] text-gray-500 font-mono tracking-wider mt-0.5">PEPTIDE BUSINESS INQUIRY</span>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-gray-200/50 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto max-h-[70vh] space-y-4">
          <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-emerald-800 font-display">Connect Directly on WhatsApp (WS)</h4>
              <p className="text-[11px] text-emerald-700/80 leading-relaxed mt-0.5">
                Click the button below to start a secure conversation instantly on WhatsApp with our dedicated technical and wholesale account executives.
              </p>
            </div>
          </div>

          <div className="space-y-3.5 bg-gray-50/50 p-4 rounded-xl border border-gray-150">
            <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase font-semibold">Configure Destination WhatsApp Number</span>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider font-mono">Your Recipient WhatsApp Number *</label>
              <input 
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="Country code + phone, e.g. +852 6991 0346"
                className="bg-white border border-gray-200 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all placeholder-gray-400 font-mono"
              />
              <span className="text-[9px] text-gray-400">(Inquiries from buyers will automatically route to this number)</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider font-mono">Pre-filled Greeting Message</label>
              <textarea 
                rows={3}
                value={prefilledMsg}
                onChange={(e) => setPrefilledMsg(e.target.value)}
                placeholder="e.g. Hello, I am interested in custom peptide manufacturing..."
                className="bg-white border border-gray-200 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all placeholder-gray-400 resize-none font-sans"
              />
            </div>
          </div>

          {/* Direct Action Link */}
          <a 
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-xl py-3.5 px-4 font-semibold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Open WhatsApp Live Chat Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <div className="text-center text-[10px] text-gray-400 font-mono mt-2">
            SECURE REDIRECT • ENCRYPTED COMMUNICATION
          </div>
        </div>

      </div>
    </div>
  );
}
