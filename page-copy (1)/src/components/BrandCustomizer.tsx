import React from 'react';
import { Sparkles, Eye, Palette, Zap, Compass, ShieldAlert } from 'lucide-react';
import { BrandConfig, BottleColor, FormulaType } from '../types';

interface BrandCustomizerProps {
  config: BrandConfig;
  setConfig: React.Dispatch<React.SetStateAction<BrandConfig>>;
}

const FORMULAS = [
  {
    id: 'focus' as FormulaType,
    name: 'GHK-Cu (Copper Peptide)',
    desc: 'Specialized micro-encapsulated delivery system to intensely repair cellular damage with outstanding anti-inflammatory and collagen regeneration capabilities.',
    bgClass: 'from-[#0b242e] to-[#040c10]',
    primaryColor: '#0a212a',
    pillColor: '#00c5df', // Cyan
    starColor: '#e0f7fa',
    pillBg: 'bg-cyan-400/80',
    accentText: 'PREMIUM ACTIVE COPPER PEPTIDE COMPLEX',
    bottleTint: 'rgba(10, 33, 42, 0.45)',
    cas: '49557-75-7',
    mw: '340.38 g/mol',
    labelName: 'GHK-CU',
    features: [
      'Repair damaged skin',
      'Reduce fine lines and anti-aging',
      'Soothe skin and relieve inflammation',
      'Promote collagen regeneration',
      'Brighten dull skin',
      'Speed up wound healing'
    ]
  },
  {
    id: 'energy' as FormulaType,
    name: 'Tirzepatide (TIRZ)',
    desc: 'Dual GIP/GLP-1 receptor agonist, regulating cell metabolic cycles, stimulating deep cellular regeneration, and scientifically accelerating tissue repair.',
    bgClass: 'from-[#1b3d46] to-[#0d1e22]',
    primaryColor: '#1a3d46',
    pillColor: '#38bdf8', // Blue-cyan
    starColor: '#ffffff',
    pillBg: 'bg-sky-400/80',
    accentText: 'BIOMIMETIC CELLULAR RECONSTRUCTION PEPTIDE',
    bottleTint: 'rgba(26, 61, 70, 0.45)',
    cas: '2023788-19-2',
    mw: '4813.52 g/mol',
    labelName: 'TR (TIRZ)',
    features: [
      'Dual GIP/GLP-1 receptor activation',
      'Stimulate deep cellular energy recovery',
      'Accelerate tissue and skin structure repair',
      'Regulate cell metabolic rejuvenation cycle',
      'Promote deep hydration and elasticity'
    ]
  },
  {
    id: 'calm' as FormulaType,
    name: 'Retatrutide (RETA)',
    desc: 'Triple receptor agonist (GIP/GLP-1/GCG) activating comprehensive metabolic pathways to synergistically rebuild cellular vitality.',
    bgClass: 'from-[#1a3a2a] to-[#0c1c14]',
    primaryColor: '#1a3a2a',
    pillColor: '#34d399', // Mint green
    starColor: '#d1fae5',
    pillBg: 'bg-emerald-400/80',
    accentText: 'NEURO-RELAXING ACUTE WRINKLE INHIBITOR',
    bottleTint: 'rgba(26, 58, 42, 0.45)',
    cas: '2381089-83-2',
    mw: '4731.33 g/mol',
    labelName: 'RT (RETA)',
    features: [
      'Triple receptor agonist (GIP/GLP-1/GCG)',
      'Maximize skin cell vitalization pathways',
      'Synergistic cell energy reconstruction',
      'Strengthen deep dermal lipid barriers',
      'Re-activate slow microcirculation cycles'
    ]
  },
  {
    id: 'immunity' as FormulaType,
    name: 'MOTS-c (Mitochondrial Peptide)',
    desc: 'Highly active mitochondrial-derived peptide promoting systemic metabolic balance, mitochondrial biogenesis, and microcirculation.',
    bgClass: 'from-[#2e1d3c] to-[#170e1e]',
    primaryColor: '#2e1d3c',
    pillColor: '#a78bfa', // Purple
    starColor: '#f5f3ff',
    pillBg: 'bg-violet-400/80',
    accentText: 'MITOCHONDRIAL ENERGY CHAIN RESCUE PEPTIDE',
    bottleTint: 'rgba(46, 29, 60, 0.45)',
    cas: '1627580-64-6',
    mw: '2174.61 g/mol',
    labelName: 'MOTS-C',
    features: [
      'Promote cellular metabolic homeostasis',
      'Induce mitochondrial biogenesis',
      'Rebuild healthy vascular microcirculation',
      'Accelerate dynamic DNA repair responses',
      'Reverse chronological senescence markers'
    ]
  }
];

export default function BrandCustomizer({ config, setConfig }: BrandCustomizerProps) {
  const currentFormula = FORMULAS.find(f => f.id === config.formula) || FORMULAS[0];

  const handleFormulaChange = (id: FormulaType) => {
    let bottleColor: BottleColor = 'teal';
    if (id === 'calm') bottleColor = 'emerald';
    if (id === 'focus') bottleColor = 'amber';
    if (id === 'immunity') bottleColor = 'cobalt';
    
    setConfig(prev => ({
      ...prev,
      formula: id,
      bottleColor
    }));
  };

  return (
    <section id="radian-customizer" className="w-full py-8 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Description Title of Gallery section */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest font-semibold text-brand-medium/80 font-mono">PEPTIDE FACTORY</span>
        <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 tracking-tight">Peptide Factory Product Samples</h2>
      </div>

      <div 
        className="w-full rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-700 relative min-h-[600px] flex flex-col justify-between p-6 md:p-8"
        style={{ background: `radial-gradient(circle at top right, rgba(255,255,255,0.05), transparent), linear-gradient(135deg, ${currentFormula.primaryColor}df, #050a0b)` }}
      >
        {/* Subtle background waves */}
        <div className="absolute inset-0 opacity-15 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1000 1000" className="w-full h-full text-brand-pastel" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M-100,500 C150,300 350,700 600,500 C850,300 1050,700 1200,500" />
            <path d="M-100,600 C150,400 350,800 600,600 C850,400 1050,800 1200,600" />
            <path d="M-100,400 C150,200 350,600 600,400 C850,200 1050,600 1200,400" />
          </svg>
        </div>

        {/* Sparkles / Stars in background */}
        <div className="absolute top-24 right-16 animate-pulse-slow pointer-events-none">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-brand-pastel/30" fill="currentColor">
            <path d="M12,2L14.5,9.5L22,12L14.5,14.5L12,22L9.5,14.5L2,12L9.5,9.5L12,2Z" />
          </svg>
        </div>
        <div className="absolute bottom-28 left-12 opacity-40 animate-float pointer-events-none">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-pastel/20" fill="currentColor">
            <path d="M12,2L14.5,9.5L22,12L14.5,14.5L12,22L9.5,14.5L2,12L9.5,9.5L12,2Z" />
          </svg>
        </div>

        {/* Floating Formula Selector Buttons on Top of Image */}
        <div className="w-full z-20 flex flex-wrap justify-center gap-2.5 mb-6">
          {FORMULAS.map((formula) => {
            const isActive = config.formula === formula.id;
            return (
              <button
                key={formula.id}
                onClick={() => handleFormulaChange(formula.id)}
                className={`px-4 py-2.5 rounded-full border text-[11px] font-bold transition-all duration-300 flex items-center gap-2 backdrop-blur-md cursor-pointer ${
                  isActive
                    ? 'border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 scale-[1.02]'
                    : 'border-white/5 bg-white/5 text-white/60 hover:border-white/15 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: formula.pillColor }} />
                <span>{formula.name.split(' (')[0]}</span>
                {isActive && <Sparkles className="w-3 h-3 text-amber-400 animate-pulse-slow" />}
              </button>
            );
          })}
        </div>

        {/* Central Products Container */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 z-10 my-4 w-full">
          <div 
            className="relative w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between p-5 md:p-6 select-none transition-all duration-700 bg-[#020709]"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #0b1d26 0%, #03080b 100%)'
            }}
          >
            {/* Dynamic Icy/Crystalline Landscape SVG Background (High-Fidelity 3D Low-Poly look) */}
            <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
              <svg viewBox="0 0 500 500" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                  {/* Glowing core and volumetric light behind the bottle */}
                  <radialGradient id="vial-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00c5df" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#008ca0" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#020709" stopOpacity="0" />
                  </radialGradient>

                  {/* Crystal face gradients */}
                  <linearGradient id="crystal-blue-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3e4a" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#081a22" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#02080c" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="crystal-blue-2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#02080c" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#132f3c" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#316e84" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="crystal-cyan-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00c5df" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#005d6b" stopOpacity="0.1" />
                  </linearGradient>
                  
                  {/* Subtle ice cracks */}
                  <linearGradient id="crystal-crack" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Back Light Source */}
                <circle cx="250" cy="280" r="160" fill="url(#vial-glow)" />

                {/* Left Side Icy Crystal Obelisks (Multiple overlapping facets) */}
                <g id="left-crystals">
                  {/* Deep Background Shard */}
                  <polygon points="0,500 0,220 50,300 70,500" fill="url(#crystal-blue-1)" />
                  <polygon points="50,300 0,220 30,210 50,300" fill="url(#crystal-blue-2)" />
                  <line x1="50" y1="300" x2="30" y2="210" stroke="#00c5df" strokeWidth="0.5" strokeOpacity="0.4" />

                  {/* Midground Shard */}
                  <polygon points="20,500 30,190 90,320 60,500" fill="url(#crystal-blue-1)" />
                  <polygon points="90,320 30,190 75,170 90,320" fill="url(#crystal-blue-2)" />
                  <polygon points="75,170 90,320 120,400 95,500" fill="url(#crystal-blue-1)" />
                  <line x1="90" y1="320" x2="75" y2="170" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.5" />
                  
                  {/* Sharp Front Left Shard */}
                  <polygon points="-10,500 15,260 65,340 30,500" fill="url(#crystal-cyan-highlight)" opacity="0.3" />
                  <polygon points="40,500 80,240 145,390 100,500" fill="url(#crystal-blue-1)" />
                  <polygon points="145,390 80,240 125,220 145,390" fill="url(#crystal-blue-2)" />
                  <line x1="145" y1="390" x2="125" y2="220" stroke="#00c5df" strokeWidth="0.75" strokeOpacity="0.6" />
                </g>

                {/* Right Side Icy Crystal Obelisks */}
                <g id="right-crystals">
                  {/* Deep Background Shard */}
                  <polygon points="500,500 500,200 440,290 410,500" fill="url(#crystal-blue-1)" />
                  <polygon points="440,290 500,200 470,180 440,290" fill="url(#crystal-blue-2)" />
                  <line x1="440" y1="290" x2="470" y2="180" stroke="#00c5df" strokeWidth="0.5" strokeOpacity="0.4" />

                  {/* Midground Shard */}
                  <polygon points="480,500 450,140 390,300 420,500" fill="url(#crystal-blue-1)" />
                  <polygon points="390,300 450,140 410,120 390,300" fill="url(#crystal-blue-2)" />
                  <polygon points="410,120 390,300 360,380 380,500" fill="url(#crystal-blue-1)" />
                  <line x1="390" y1="300" x2="410" y2="120" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.5" />

                  {/* Front Right Big Shard */}
                  <polygon points="510,500 400,210 340,360 410,500" fill="url(#crystal-blue-1)" />
                  <polygon points="340,360 400,210 360,195 340,360" fill="url(#crystal-blue-2)" />
                  <line x1="340" y1="360" x2="360" y2="195" stroke="#00c5df" strokeWidth="0.75" strokeOpacity="0.6" />
                </g>

                {/* Ground Crushed Ice Foreground Rocks */}
                <g id="foreground-ice">
                  <polygon points="0,500 120,440 210,470 250,500 0,500" fill="#040e13" stroke="#102f3c" strokeWidth="0.5" />
                  <polygon points="500,500 380,430 290,460 250,500 500,500" fill="#030b0f" stroke="#102f3c" strokeWidth="0.5" />
                  
                  {/* Bright Sharp Ground Shard Left */}
                  <polygon points="50,500 130,410 180,500" fill="url(#crystal-blue-2)" />
                  <polygon points="130,410 180,500 220,500 130,410" fill="url(#crystal-blue-1)" />
                  <line x1="130" y1="410" x2="180" y2="500" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />

                  {/* Bright Sharp Ground Shard Right */}
                  <polygon points="450,500 370,410 320,500" fill="url(#crystal-blue-2)" />
                  <polygon points="370,410 320,500 280,500 370,410" fill="url(#crystal-blue-1)" />
                  <line x1="370" y1="410" x2="320" y2="500" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
                </g>

                {/* Sparkling floating tiny ice crystals */}
                <g id="floating-dust" opacity="0.6">
                  <polygon points="120,280 123,285 120,290 117,285" fill="#ffffff" opacity="0.5" />
                  <polygon points="380,260 382,263 380,266 378,263" fill="#ffffff" opacity="0.4" />
                  <polygon points="140,180 144,181 140,182 136,181" fill="#00c5df" opacity="0.6" />
                  <polygon points="340,320 342,321 340,322 338,321" fill="#00c5df" opacity="0.5" />
                  <polygon points="210,190 212,192 210,194 208,192" fill="#ffffff" opacity="0.3" />
                </g>
              </svg>
            </div>

            {/* 1. Header Slogan (Matches the poster text exactly) */}
            <div className="relative z-10 w-full text-center mt-2 flex flex-col items-center">
              <h3 className="text-white text-[25px] md:text-[30px] font-[900] tracking-wider uppercase leading-none font-sans drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                BUILT FOR SERIOUS WORK
              </h3>
              <p className="text-[8px] md:text-[9.5px] text-white/90 font-sans font-bold tracking-[0.25em] uppercase mt-2 drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
                NO SHORTCUTS. NO COMPROMISES.
              </p>
            </div>

            {/* 2. Standalone Central Penicillin Vial Mockup (Centered & Perfectly Scaled) */}
            <div className="relative z-10 w-full flex justify-center items-center h-52 md:h-56 -my-2">
              <div className="relative w-28 h-[180px] flex flex-col items-center justify-center scale-110">
                {/* Real-time ambient backdrop glow shadow */}
                <div className="absolute bottom-2 w-16 h-4 bg-black/40 rounded-full blur-sm" />

                {/* 2A. Dark Cylindrical Flip-Off Cap */}
                <div className="relative w-14 h-[20px] z-30 bg-gradient-to-b from-[#1b2b30] via-[#091113] to-[#020506] rounded-t-[5px] rounded-b-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.7)] border-b border-black/80 overflow-hidden flex flex-col justify-between">
                  <div className="h-[1.2px] bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
                  {/* Flip-off circular mark */}
                  <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-7 h-1.5 rounded-full border border-white/15 bg-black/15 flex items-center justify-center">
                    <span className="text-[2.5px] font-sans text-white/30 scale-75 uppercase leading-none font-bold">FLIP OFF</span>
                  </div>
                  <div className="absolute top-0 right-2 w-1.5 h-full bg-white/5 pointer-events-none" />
                  <div className="h-[1px] bg-white/10" />
                </div>

                {/* 2B. Aluminum Crimp Seal */}
                <div className="relative w-[52px] h-[13px] z-20 bg-gradient-to-r from-gray-500 via-gray-100 to-gray-600 border-b border-black/30 shadow-md flex flex-col justify-between overflow-hidden -mt-[1px]">
                  <div className="h-[0.8px] bg-white/40" />
                  <div className="absolute top-0 left-1/4 w-2 h-full bg-white/15 skew-x-6" />
                  <div className="h-[0.8px] bg-black/15" />
                </div>

                {/* 2C. Transparent Glass Neck with rubber stopper */}
                <div className="relative w-9 h-2.5 z-10 bg-white/5 border-x border-white/20 flex justify-center -mt-[1px]">
                  <div className="absolute top-0 left-0.5 w-0.5 h-full bg-white/20" />
                  <div className="absolute top-0 right-0.5 w-0.5 h-full bg-white/10" />
                  {/* Internal grey stopper stem */}
                  <div className="w-5.5 h-full bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 rounded-b-[1px] border-x border-black/25 opacity-90 shadow-inner" />
                </div>

                {/* 2D. Glass Shoulders */}
                <div className="relative w-20 h-3 z-10 overflow-hidden -mt-[1px]">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white/5 fill-current stroke-white/20 stroke-[0.8px]">
                    <polygon points="18,0 82,0 100,100 0,100" />
                  </svg>
                  <div className="absolute top-0 left-2 w-2 h-full bg-white/10 skew-x-12" />
                </div>

                {/* 2E. Main Glass Cylinder Body */}
                <div className="relative w-20 h-[104px] -mt-[1px] z-10 bg-white/5 border-x border-b border-white/20 rounded-b-[1rem] shadow-[0_10px_25px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between items-center pb-3">
                  {/* Glass reflections & sheen */}
                  <div className="absolute top-0 left-2 w-3 h-full bg-gradient-to-r from-white/15 to-transparent skew-x-3 pointer-events-none" />
                  <div className="absolute top-0 right-2.5 w-1 h-full bg-gradient-to-r from-transparent to-white/10 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />

                  {/* Vacuum Sterile Lyophilized Powder Cake (无菌真空冻干粉饼) inside the vial */}
                  <div 
                    className="absolute bottom-1 inset-x-1 h-[32%] rounded-t-[10px] rounded-b-[12px] flex items-center justify-center transition-all duration-700 overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.3),inset_0_3px_6px_rgba(255,255,255,0.4)]"
                    style={{
                      background: `linear-gradient(135deg, ${currentFormula.pillColor}dd, ${currentFormula.primaryColor}cc, #04090b)`
                    }}
                  >
                    {/* Porous Lyophilized texture overlay */}
                    <div className="absolute inset-0 bg-white/[0.12] mix-blend-overlay opacity-80" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '2.5px 2.5px' }} />
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-white/25 blur-[0.5px]" />
                    <div className="w-8 h-1.5 bg-black/15 rounded-full blur-[1px] -mt-3 opacity-40" />
                  </div>

                  {/* Matte White Wrap-around Bottle Label */}
                  <div className="absolute top-3 w-[91%] h-[58px] bg-white rounded-[1.5px] flex flex-col justify-between items-center p-1 z-20 border border-white/95 shadow-[inset_3px_0_4px_-3px_rgba(0,0,0,0.15),inset_-3px_0_4px_-3px_rgba(0,0,0,0.15),0_2px_5px_-1px_rgba(0,0,0,0.25)]">
                    
                    {/* Brand Double Helix Logo in circle */}
                    <div className="flex flex-col items-center mt-0.5 leading-none">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#03131a] flex items-center justify-center shadow-inner">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" strokeWidth="2.5">
                          <path d="M4.5,7.5 C8,7.5 8,16.5 12,16.5 C16,16.5 16,7.5 19.5,7.5" stroke={currentFormula.pillColor} />
                          <path d="M4.5,16.5 C8,16.5 8,7.5 12,7.5 C16,7.5 16,16.5 19.5,16.5" stroke={currentFormula.pillColor} opacity="0.6" />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center mt-0.5 scale-90">
                        <span className="text-[3px] font-sans font-bold tracking-[0.2em]" style={{ color: currentFormula.pillColor }}>NEXTGEN</span>
                        <span className="text-[3.8px] font-sans font-black tracking-[0.06em] text-[#0d1e23] -mt-0.5">PEPTIDES</span>
                      </div>
                    </div>

                    {/* Central Product Name (Matches user's image exactly) */}
                    <div className="w-full text-center my-0.5">
                      <h4 className="text-[8px] font-sans font-black tracking-tight text-[#0d1e23] uppercase leading-none">
                        {currentFormula.labelName}
                      </h4>
                    </div>

                    {/* Bottom Fine Print */}
                    <div className="w-full border-t border-gray-100 pt-0.5 text-center">
                      <span className="text-[2.5px] font-mono text-gray-400 font-bold tracking-wider uppercase leading-none block">
                        STERILE VIAL • 10mg
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* 3. Footer Fine Print FDA warning & Double-Helix Emblem */}
            <div className="relative z-10 w-full flex items-center gap-2 border-t border-white/5 pt-2 mt-auto">
              {/* Custom circle double-helix logo in bottom-left */}
              <div className="w-5 h-5 rounded-full border border-[#00c5df]/30 bg-[#020d11]/80 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(0,197,223,0.2)]">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" strokeWidth="2.5">
                  <path d="M4.5,7.5 C8,7.5 8,16.5 12,16.5 C16,16.5 16,7.5 19.5,7.5" stroke="#00c5df" />
                  <path d="M4.5,16.5 C8,16.5 8,7.5 12,7.5 C16,7.5 16,16.5 19.5,16.5" stroke="#00c5df" opacity="0.6" />
                </svg>
              </div>
              <p className="text-[5.5px] md:text-[6px] text-white/40 leading-snug font-sans text-left tracking-normal select-text">
                The products referenced in this advertisement have not been evaluated by the U.S. Food and Drug Administration. All materials are sold strictly for laboratory research and in-vitro testing purposes only and are not intended for human or animal consumption, medical, diagnostic, or therapeutic use. No claims are made regarding safety or efficacy. Information provided is for scientific discussion only and does not constitute medical advice.
              </p>
            </div>
          </div>


          {/* Bottom Regulatory / Research Disclaimer Text */}
          <div className="w-full max-w-xl flex items-start gap-2.5 mt-4 select-text px-2">
            <span className="text-[9px] font-mono font-bold bg-white/10 text-white/40 px-1.5 py-0.5 rounded border border-white/5 shrink-0">DISCLAIMER</span>
            <p className="text-[7.5px] md:text-[8px] text-white/40 leading-[1.4] font-sans text-left font-light">
              The products referenced in this advertisement have not been evaluated by the U.S. Food and Drug Administration. All materials are sold strictly for laboratory research and in-vitro testing purposes only and are not intended for human or animal consumption, medical, diagnostic, or therapeutic use. No claims are made regarding safety or efficacy. Information provided is for scientific discussion only and does not constitute medical advice.
            </p>
          </div>
        </div>

        {/* Bottom Overlay Info Panel */}
        <div className="w-full z-20 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-end mt-4">
          
          {/* Active Formula Info Box */}
          <div className="flex-1 max-w-xl bg-black/35 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: currentFormula.pillColor }} />
                <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest font-mono">ACTIVE MOLECULAR FORMULA</span>
              </div>
              <h4 className="text-xs md:text-sm font-bold text-white font-display mb-1 flex items-center gap-1.5">
                {currentFormula.name}
              </h4>
              <p className="text-[11px] text-white/75 leading-relaxed font-sans mb-3">
                {currentFormula.desc}
              </p>

              {currentFormula.features && (
                <div className="mt-3.5 pt-3.5 border-t border-white/5">
                  <span className="text-[8.5px] font-bold text-white/40 uppercase tracking-widest font-mono block mb-2">TARGETED EFFICACY & BENEFITS</span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
                    {currentFormula.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[10px] text-white/85">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: currentFormula.pillColor }} />
                        <span className="font-sans font-light tracking-wide leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="mt-4 border-t border-white/5 pt-2 text-[8.5px] font-mono text-white/40 tracking-wider">
              {currentFormula.accentText}
            </div>
          </div>

          {/* Quick Stats / Specs Section */}
          <div className="flex-shrink-0 w-full md:w-64 bg-black/25 backdrop-blur-md border border-white/5 p-4 rounded-xl flex flex-col gap-2">
            <span className="text-[8.5px] font-semibold text-white/40 uppercase tracking-widest font-mono">PEPTIDE SPECIFICATION LOG</span>
            
            <div className="grid grid-cols-2 gap-2 text-[9.5px] font-mono">
              <div className="flex flex-col">
                <span className="text-white/30 text-[8px]">CONTAINER:</span>
                <span className="text-white/80 font-semibold mt-0.5">Penicillin Vial</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/30 text-[8px]">PHYSICAL FORM:</span>
                <span className="text-white/80 font-semibold mt-0.5">Vacuum Lyophilized Cake</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/30 text-[8px]">EMBLEM:</span>
                <span className="text-white/80 font-semibold mt-0.5">Micro-Embossed Foil</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/30 text-[8px]">GLASS QUALITY:</span>
                <span className="text-white/80 font-semibold capitalize mt-0.5">Schott Neutral Type I</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
