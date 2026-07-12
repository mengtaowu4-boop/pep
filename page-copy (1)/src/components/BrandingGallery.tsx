import React, { useState } from 'react';
import { ArrowRight, Type, Sparkles, Cpu, Thermometer, Activity, FileText, Check, Settings2, Layers } from 'lucide-react';
import { BrandConfig } from '../types';

interface BrandingGalleryProps {
  config: BrandConfig;
  setConfig: React.Dispatch<React.SetStateAction<BrandConfig>>;
}

export default function BrandingGallery({ config, setConfig }: BrandingGalleryProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getFormulaColor = () => {
    if (config.formula === 'calm') return '#10b981'; // Emerald
    if (config.formula === 'focus') return '#00c5df'; // GHK-Cu Cyan-Blue
    if (config.formula === 'immunity') return '#8b5cf6'; // Purple
    return '#38bdf8'; // Sky Blue
  };

  const getFormulaLabel = () => {
    if (config.formula === 'calm') return 'EPITHALON';
    if (config.formula === 'focus') return 'GHK-CU';
    if (config.formula === 'immunity') return 'TA1';
    return 'BPC-157';
  };

  return (
    <section id="radian-gallery" className="w-full px-4 md:px-8 max-w-7xl mx-auto my-12 animate-fade-in">
      {/* Pristine Modern Clinical/Industrial Frame Container */}
      <div className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
        
        {/* Subtle background industrial grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        {/* Gallery Title Block */}
        <div className="relative z-10 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-brand-primary uppercase font-bold block mb-2">
              🏭 MANUFACTURING & OEM CAPACITY DISPLAY
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-gray-900 tracking-tight leading-none uppercase">
              High-Capacity B2B Production
            </h2>
            <p className="text-xs text-gray-500 mt-2 font-light">
              Explore our factory-direct bulk supply, custom formulation, and worldwide cold-chain capabilities.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
            <span>GMP CERTIFIED FACILITY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
        
        {/* Responsive Grid System: Desktop 4 Columns */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARD 1: AUTOMATED LYOPHILIZATION PRODUCTION LINE (Spans 3 Columns on lg, 2 on md) */}
          <div 
            className="col-span-1 md:col-span-2 lg:col-span-3 min-h-[340px] bg-gradient-to-br from-[#0c1a20] to-[#040a0c] rounded-2xl overflow-hidden p-8 relative flex flex-col md:flex-row justify-between items-center gap-6 border border-white/10 shadow-lg group"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Left Column: Banner Copy */}
            <div className="flex-1 flex flex-col justify-between h-full z-10 text-white select-none">
              <div className="space-y-4">
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#00c5df] font-semibold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 animate-spin-slow" />
                  AUTOMATED PRODUCTION FACILITY
                </span>
                
                <h3 className="text-2xl md:text-3xl font-display font-black leading-tight tracking-tight uppercase">
                  Lyophilization <br />
                  <span className="text-[#00c5df]">Production Lines</span>
                </h3>
                
                <p className="text-xs text-white/75 max-w-sm font-light leading-relaxed">
                  Our state-of-the-art automatic sterile freeze-drying production line processes over <span className="font-semibold text-white">50,000 vials daily</span>. Cleanroom classification meets Class A (ISO 5) specs to ensure absolute safety and pure peptide structure.
                </p>
              </div>

              {/* Specs Badge */}
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-mono text-white/50">
                <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">STERILITY STATE: 100%</span>
                <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">AUTOMATION INDEX: 0.98</span>
                <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">CAPACITY: 50K/DAY</span>
              </div>
            </div>

            {/* Right Column: Factory Sterile Conveyor Line Visual Mockup */}
            <div className="relative w-full max-w-[240px] h-48 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-inner z-10 bg-[#0a1418] flex flex-col justify-center items-center p-4">
              {/* Futuristic Conveyor belt background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-[size:10px_10px]" />
              <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-4 bg-gradient-to-r from-transparent via-[#00c5df]/10 to-transparent blur-md" />
              
              {/* Conveyor Belt Lane */}
              <div className="w-full h-12 bg-[#122329] border-y border-white/15 relative flex items-center justify-around px-2">
                {/* Rolling guides line */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#00c5df]/20" />
                
                {/* Bottle 1 */}
                <div className="w-5 h-8 bg-white/5 border border-white/20 rounded-sm flex flex-col justify-between items-center pb-0.5 relative animate-pulse">
                  <div className="w-3.5 h-1 bg-[#00c5df] rounded-t-sm" />
                  <div className="w-4 h-2.5 bg-white rounded-[0.5px]" />
                  <div className="w-4 h-2 bg-[#00c5df]/40 rounded-b-sm" />
                </div>

                {/* Bottle 2 (Under active nozzle) */}
                <div className="w-5 h-8 bg-white/5 border border-[#00c5df]/60 rounded-sm flex flex-col justify-between items-center pb-0.5 relative scale-110 shadow-[0_0_12px_rgba(0,197,223,0.3)]">
                  {/* Active fill ray */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1.5px] h-6 bg-gradient-to-b from-[#00c5df] to-transparent animate-bounce" />
                  <div className="w-3.5 h-1 bg-white rounded-t-sm" />
                  <div className="w-4 h-2.5 bg-white rounded-[0.5px] flex items-center justify-center">
                    <span className="text-[2px] text-gray-800 scale-75 font-bold font-mono">GHK</span>
                  </div>
                  <div className="w-4 h-2 bg-[#00c5df]/70 rounded-b-sm" />
                </div>

                {/* Bottle 3 */}
                <div className="w-5 h-8 bg-white/5 border border-white/20 rounded-sm flex flex-col justify-between items-center pb-0.5 relative">
                  <div className="w-3.5 h-1 bg-[#10b981] rounded-t-sm" />
                  <div className="w-4 h-2.5 bg-white rounded-[0.5px]" />
                  <div className="w-4 h-2 bg-[#10b981]/40 rounded-b-sm" />
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-4 flex items-center gap-1.5 text-[8.5px] font-mono text-[#00c5df]">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>ROBOTIC RE-CAP IN PROGRESS...</span>
              </div>
            </div>
          </div>


          {/* CARD 2: BULK RAW PEPTIDE ACTIVE POWDER (Spans 1 Column) */}
          <div 
            className="col-span-1 bg-[#0a1318] rounded-2xl overflow-hidden p-6 relative flex flex-col justify-between items-center border border-white/10 shadow-lg min-h-[340px]"
            style={{ background: 'linear-gradient(135deg, #0e1d23, #04090b)' }}
          >
            <span className="text-[7.5px] font-mono tracking-widest text-[#00c5df] uppercase select-none opacity-80 font-bold flex items-center gap-1">
              <Layers className="w-3 h-3" />
              BULK RAW PEPTIDES (API)
            </span>

            {/* Simulated 3D Laboratory Glass Jar with gleaming powder */}
            <div className="relative w-28 h-36 flex flex-col items-center justify-center my-2">
              <div className="absolute bottom-2 w-20 h-3 bg-black/40 rounded-full blur-sm" />
              
              {/* Glass Powder Container */}
              <div className="relative w-18 h-28 bg-white/5 border border-white/20 rounded-xl overflow-hidden flex flex-col justify-between p-1.5 shadow-xl">
                {/* Gloss highlights */}
                <div className="absolute inset-y-0 left-2 w-1.5 bg-white/10 skew-x-6 pointer-events-none" />
                
                {/* Cap */}
                <div className="w-full h-4 bg-gradient-to-b from-[#2a3c42] to-[#121c1f] rounded-t-lg border-b border-black flex items-center justify-center">
                  <div className="w-12 h-0.5 bg-white/20" />
                </div>

                {/* Sparkling Active Peptide Micro-Powder Cake at the bottom */}
                <div className="w-full h-[52%] bg-gradient-to-t from-[#1b323c] to-[#0d1c22] rounded-b-md relative flex flex-col items-center justify-center border-t border-white/10">
                  {/* Sparkle points inside the powder */}
                  <div className="absolute inset-0 bg-white/[0.08]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '6px 6px' }} />
                  <div className="w-12 h-1.5 bg-white/20 rounded-full blur-[1px] opacity-30 -mt-2" />
                  
                  {/* High purity badge */}
                  <span className="text-[8px] font-mono font-black text-[#00c5df] tracking-tight bg-black/40 px-1.5 py-0.5 rounded border border-[#00c5df]/20 z-10 scale-90">
                    99.8% PURITY
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center pb-1 select-none">
              <h4 className="text-xs font-bold text-white">Active Bulk Powder</h4>
              <p className="text-[9px] text-white/60 mt-0.5">High-Purity API Peptide Ingredient</p>
            </div>
          </div>


          {/* CARD 3: OEM CUSTOM VIAL LABEL PRINTER (Spans 1 Column) - Interactive Brand name preview */}
          <div 
            className="col-span-1 bg-[#0a1318] rounded-2xl overflow-hidden p-6 relative flex flex-col justify-between items-center border border-white/10 shadow-lg min-h-[340px] group"
          >
            <span className="text-[7.5px] font-mono tracking-widest text-[#00c5df] uppercase select-none opacity-80 font-bold flex items-center gap-1">
              <Settings2 className="w-3 h-3" />
              OEM LABEL SERVICE
            </span>

            {/* Simulated customizable vial */}
            <div className="relative w-28 h-36 flex items-center justify-center my-1">
              {/* Shadow */}
              <div className="absolute bottom-1 w-16 h-3 bg-black/40 rounded-full blur-sm" />
              
              {/* Bottle */}
              <div className="relative w-14 h-24 flex flex-col items-center justify-center scale-105">
                {/* Cap */}
                <div 
                  className="w-10 h-3.5 rounded-t-[3px] rounded-b-[1px] border-b border-black/80 shadow transition-colors duration-700" 
                  style={{ background: `linear-gradient(to bottom, ${getFormulaColor()}cc, #11252b, #000000)` }}
                />
                
                {/* Aluminum Seal Crimp */}
                <div className="w-[32px] h-[7px] bg-gradient-to-r from-gray-400 via-gray-100 to-gray-500 border-b border-black/20 -mt-[1px]" />
                
                {/* Neck */}
                <div className="w-5 h-2 bg-white/5 border-x border-white/20 -mt-[1px]" />
                
                {/* Body */}
                <div 
                  className="w-12 h-16 border-x border-b border-white/25 rounded-b-lg shadow-inner overflow-hidden flex flex-col justify-between items-center pb-1 relative transition-all duration-700 bg-white/5"
                >
                  {/* Glass sheen */}
                  <div className="absolute inset-y-0 left-1 w-1 bg-white/10 skew-x-6 pointer-events-none" />
                  
                  {/* Lyophilized powder cake inside */}
                  <div 
                    className="absolute bottom-0.5 inset-x-0.5 h-[30%] rounded-t-md rounded-b-[6px] transition-colors duration-700 opacity-90 shadow-inner"
                    style={{ background: `linear-gradient(135deg, ${getFormulaColor()}dd, #10262c)` }}
                  >
                    <div className="absolute inset-0 bg-white/[0.1] mix-blend-overlay" />
                  </div>

                  {/* Customizable White Label */}
                  <div className="w-[88%] h-7 bg-white rounded-[1.5px] flex flex-col justify-center items-center px-0.5 mt-1 z-10 shadow border border-white">
                    <span className="text-[4.5px] font-sans font-black tracking-widest text-[#0d1e23] truncate max-w-[34px]">
                      {config.mugText.toUpperCase() || 'NEXTGEN'}
                    </span>
                    <span className="text-[3px] font-mono text-gray-500 uppercase tracking-tighter scale-90">
                      {getFormulaLabel()}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Customizer Input Area */}
            <div className="w-full z-10 flex flex-col gap-1.5 px-1">
              <div className="flex items-center gap-1.5 bg-black/45 rounded-md px-2 py-1.5 border border-white/10">
                <Type className="w-3 h-3 text-[#00c5df]" />
                <input 
                  type="text" 
                  maxLength={10}
                  value={config.mugText}
                  onChange={(e) => setConfig(prev => ({ ...prev, mugText: e.target.value }))}
                  placeholder="Type Brand name..."
                  className="bg-transparent border-none text-[9.5px] text-white focus:outline-none focus:ring-0 placeholder-white/30 flex-1 font-mono tracking-wider"
                  title="Enter your custom brand name to preview on label"
                />
              </div>
              <p className="text-[8px] text-white/50 text-center font-mono leading-none">
                Real-Time Custom Label Preview
              </p>
            </div>
          </div>


          {/* CARD 4: COLD-CHAIN LOGISTICS AIR-CARRIER CONTAINER */}
          <div 
            className="col-span-1 bg-[#0a1318] rounded-2xl overflow-hidden p-6 relative flex flex-col justify-between items-center border border-white/10 shadow-lg min-h-[340px] group"
          >
            <span className="text-[7.5px] font-mono tracking-widest text-[#00c5df] uppercase select-none opacity-80 font-bold flex items-center gap-1">
              <Thermometer className="w-3 h-3" />
              GLOBAL COLD-CHAIN DELIVERY
            </span>

            {/* Insulated shipping chest visual */}
            <div className="relative w-32 h-36 flex flex-col items-center justify-center my-2">
              <div className="absolute bottom-2 w-24 h-4 bg-black/40 rounded-full blur-sm" />
              
              {/* Insulated Chest Box */}
              <div className="w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-400 rounded-lg border border-white/40 shadow-xl p-2 relative flex flex-col justify-between transform group-hover:scale-[1.03] transition-transform duration-500">
                {/* Metallic latches */}
                <div className="absolute top-1 left-2 w-3 h-1.5 bg-slate-600 rounded-b-[1px] border border-black/20" />
                <div className="absolute top-1 right-2 w-3 h-1.5 bg-slate-600 rounded-b-[1px] border border-black/20" />
                
                {/* Top Lid line */}
                <div className="w-full h-[3px] bg-slate-500 rounded-t-sm border-b border-black/10 -mt-1" />

                {/* Center logo of Cold Chain / Biohazard or Temp Shield */}
                <div className="my-auto flex flex-col items-center justify-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-[#0a1418] flex items-center justify-center border border-[#00c5df]/30 text-[#00c5df]">
                    <Thermometer className="w-4 h-4 animate-bounce" />
                  </div>
                  {/* Digital Temperature Indicator (Real-Time feel) */}
                  <div className="bg-[#0a1418] px-1.5 py-0.5 rounded border border-white/10 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[7px] font-mono text-emerald-400 font-bold tracking-tight">4.0°C CONST</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[5.5px] text-slate-800 font-mono font-bold border-t border-slate-300 pt-1">
                  <span>FRAGILE - BIO-CARRIER</span>
                  <span>10mL VIALS</span>
                </div>
              </div>
            </div>

            <div className="text-center pb-1 select-none">
              <h4 className="text-xs font-bold text-white">Insulated Bio-Carrier</h4>
              <p className="text-[9px] text-white/60 mt-0.5">Strict Constant-Temperature Airlift</p>
            </div>
          </div>


          {/* CARD 5: HPLC / MS CERTIFICATE ANALYSIS (JANSH COA) */}
          <div 
            className="col-span-1 bg-[#0a1318] rounded-2xl overflow-hidden p-6 relative flex flex-col justify-between items-center border border-white/10 shadow-lg min-h-[340px] md:col-span-1"
          >
            <span className="text-[7.5px] font-mono tracking-widest text-[#00c5df] uppercase select-none opacity-80 font-bold flex items-center gap-1">
              <FileText className="w-3 h-3" />
              QUALITY CERTIFICATE (COA)
            </span>

            {/* HPLC Chromatogram graph display */}
            <div className="my-auto relative flex flex-col items-center justify-center w-28 h-32 rounded-xl bg-[#03080b]/90 border border-white/5 p-2 shadow-inner">
              
              {/* Dynamic Grid graph behind */}
              <div className="absolute inset-1.5 border border-white/5 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:6px_6px] pointer-events-none" />

              {/* Mass Spec Chromatogram Peak curve */}
              <svg viewBox="0 0 100 60" className="w-full h-16 text-[#00c5df] fill-none stroke-current stroke-[1.5]" preserveAspectRatio="none">
                <path d="M5,52 L15,52 L25,52 L35,49 L45,10 L50,5 L55,38 L65,52 L75,52 L85,50 L95,52" strokeLinecap="round" strokeLinejoin="round" />
                {/* 2nd minor peak */}
                <path d="M5,52" />
                {/* Dotted threshold line */}
                <line x1="5" y1="15" x2="95" y2="15" stroke="#ffffff" strokeDasharray="2,2" strokeWidth="0.5" opacity="0.3" />
              </svg>

              <div className="w-full mt-2 border-t border-white/10 pt-1.5 flex flex-col gap-0.5 select-none">
                <div className="flex justify-between items-center text-[7px] font-mono text-white/45">
                  <span>RETENTION TIME:</span>
                  <span className="text-white/80 font-bold">12.42 min</span>
                </div>
                <div className="flex justify-between items-center text-[7px] font-mono text-white/45">
                  <span>HPLC ASSAY:</span>
                  <span className="text-[#00c5df] font-bold">99.88% PASS</span>
                </div>
                <div className="flex justify-between items-center text-[7px] font-mono text-white/45">
                  <span>REPORT ID:</span>
                  <span className="text-white/80 font-bold">JAN-7992X</span>
                </div>
              </div>
            </div>

            <div className="text-center pb-1 select-none">
              <h4 className="text-xs font-bold text-white">Full Batch-by-Batch COA</h4>
              <p className="text-[9px] text-white/60 mt-0.5">Tested by Official JANSH Laboratories</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
