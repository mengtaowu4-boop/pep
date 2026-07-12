import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ContentSectionProps {
  onContactClick: () => void;
}

export default function ContentSection({ onContactClick }: ContentSectionProps) {
  return (
    <section id="radian-content" className="w-full py-16 px-4 md:px-8 max-w-4xl mx-auto animate-fade-in">
      
      {/* Main Headline */}
      <div className="text-center md:text-left mb-10">
        <h2 className="text-2xl md:text-3xl font-display font-black text-gray-900 tracking-tight leading-tight">
          Looking for a Reliable Peptide Manufacturer in China? Let’s Grow Together! 🤝
        </h2>
        <p className="text-sm md:text-base text-gray-600 font-light mt-4 leading-relaxed max-w-3xl">
          We support global distributors and wholesalers with factory-direct, premium-grade peptides built to scale your business.
        </p>
      </div>

      {/* Core Question & Feature Section */}
      <div className="mt-12">
        <div className="border-b border-gray-150 pb-3 mb-8">
          <h3 className="text-lg font-bold text-gray-900 font-display tracking-tight flex items-center gap-2 justify-center md:justify-start">
            Why Partner With Us?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-5 bg-white rounded-xl border border-gray-100 hover:border-brand-primary/20 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold">✅</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  100% Factory-Direct Supply
                </h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  Guaranteed stock availability & seamless logistical continuity.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-white rounded-xl border border-gray-100 hover:border-brand-primary/20 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold">✅</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Aggressive Wholesale Margins
                </h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  Competitive pricing structures to give you a massive market advantage.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-white rounded-xl border border-gray-100 hover:border-brand-primary/20 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold">✅</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Gold-Standard Quality Control
                </h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  Full batch-to-batch traceability with official JANSH COA reports.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5 bg-white rounded-xl border border-gray-100 hover:border-brand-primary/20 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold">✅</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Flexible Bulk & Custom Orders
                </h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  Scalable production tailored to your brand’s specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Closing / Call to Action Box */}
      <div className="mt-12 p-6 bg-brand-primary/[0.02] rounded-xl border border-brand-primary/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <span className="text-xl">📧</span>
            <h4 className="text-sm font-bold text-gray-900 font-display">
              Partner with strength.
            </h4>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed max-w-xl">
            Contact us today to request our catalog, pricing sheets, or sample batches!
          </p>
        </div>
        <button
          onClick={onContactClick}
          className="bg-brand-primary hover:bg-brand-medium text-white text-xs font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer shrink-0 flex items-center gap-2"
        >
          <span>WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
}
