import React, { useState } from 'react';
import { Moon, Sun, ArrowRight, CheckCircle2, Globe2, Type, Palette } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeScheme, setActiveScheme] = useState<'midnight' | 'emerald' | 'onyx'>('midnight');

  // NEW SOPHISTICATED BRAND COLOR SCHEMES
  const allSchemes = {
    midnight: {
      id: 'midnight',
      label: 'Midnight Brass',
      primary: '#1A2430', // Deep Navy
      accent1: '#C5A059', // Brass
      accent2: '#A85A46', // Terracotta
      darkBg: '#12171E',
      lightBg: '#F7F5F0',
      names: { primary: 'Midnight Navy', accent1: 'Burnished Brass', accent2: 'Terracotta', lightBg: 'Warm Sand' },
      desc: { primary: 'Deep, mysterious background.', accent1: 'Premium metallic accent.', accent2: 'Warm culinary earth tone.', lightBg: 'Clean, elegant canvas.' }
    },
    emerald: {
      id: 'emerald',
      label: 'Emerald Noir',
      primary: '#0F291E', // Emerald Noir
      accent1: '#D4AF37', // Champagne Gold
      accent2: '#722F37', // Bordeaux Red
      darkBg: '#0A1C14',
      lightBg: '#FAF9F6',
      names: { primary: 'Emerald Noir', accent1: 'Champagne Gold', accent2: 'Bordeaux Red', lightBg: 'Parchment' },
      desc: { primary: 'Classic, old-world bistro depth.', accent1: 'Luxurious and refined metallic.', accent2: 'Rich, wine-inspired accent.', lightBg: 'Soft, classic off-white.' }
    },
    onyx: {
      id: 'onyx',
      label: 'Onyx & Copper',
      primary: '#1C1C1E', // Onyx
      accent1: '#B87333', // Copper
      accent2: '#5C747A', // Slate Blue
      darkBg: '#121214',
      lightBg: '#F4F4F2',
      names: { primary: 'Onyx Black', accent1: 'Warm Copper', accent2: 'Slate Blue', lightBg: 'Ivory Ash' },
      desc: { primary: 'Industrial, chic, modern depth.', accent1: 'Warm, inviting metallic.', accent2: 'Cool, sophisticated contrast.', lightBg: 'Crisp, contemporary canvas.' }
    }
  };

  const active = allSchemes[activeScheme];

  // Map the active scheme to the existing color variables so the SVGs don't break
  const colors = {
    midnight: active.primary,
    brass: active.accent1,
    terracotta: active.accent2,
    sage: '#6B7A68', // Kept as fallback if needed
    darkBg: active.darkBg,
    lightBg: active.lightBg,
    darkText: active.primary,
    lightText: active.lightBg,
  };

  const currentBg = isDarkMode ? colors.darkBg : colors.lightBg;
  const currentText = isDarkMode ? colors.lightText : colors.darkText;

  // NEW FONT THEMES FOR VARIABILITY
  const fontThemes = {
    editorial: { primary: "'Didot', 'Bodoni MT', 'Playfair Display', serif", secondary: "'Montserrat', sans-serif" },
    heritage: { primary: "'Garamond', 'Baskerville', 'Times New Roman', serif", secondary: "'Avenir', 'Helvetica Neue', sans-serif" },
    artdeco: { primary: "'Futura', 'Trebuchet MS', sans-serif", secondary: "'Space Mono', monospace" },
    modern: { primary: "'Montserrat', 'Helvetica Neue', sans-serif", secondary: "'Avenir', sans-serif" },
    avantgarde: { primary: "'Space Mono', 'Courier New', monospace", secondary: "'Helvetica', sans-serif" }
  };

  interface WordmarkProps {
    layout?: 'vertical' | 'horizontal' | 'inline' | 'none';
    className?: string;
    theme?: keyof typeof fontThemes;
  }

  // Refined, more elegant Wordmark Component with dynamic typography
  const Wordmark: React.FC<WordmarkProps> = ({ layout = 'vertical', className = '', theme = 'editorial' }) => {
    const { primary, secondary } = fontThemes[theme];

    if (layout === 'horizontal') {
      return (
        <div className={`flex flex-col justify-center ${className}`} style={{ fontFamily: secondary }}>
          <div className="flex items-baseline space-x-2 mb-1">
            <span className="text-sm tracking-[0.3em] font-light">THE</span>
            <span className="text-4xl tracking-widest font-light uppercase" style={{ fontFamily: primary }}>MOSAIC</span>
          </div>
          <span className="text-[0.55rem] tracking-[0.3em] uppercase opacity-60">
            International Bistro + Social
          </span>
        </div>
      );
    }

    if (layout === 'inline') {
      return (
        <div className={`flex items-center space-x-3 ${className}`} style={{ fontFamily: secondary }}>
          <span className="text-2xl tracking-widest font-light uppercase" style={{ fontFamily: primary }}>THE MOSAIC</span>
        </div>
      );
    }

    // Default Vertical Layout
    return (
      <div className={`flex flex-col items-center mt-6 ${className}`} style={{ fontFamily: secondary }}>
        <div className="text-[0.6rem] tracking-[0.4em] font-light mb-2">THE</div>
        <div className="text-4xl sm:text-5xl tracking-[0.15em] font-light uppercase" style={{ fontFamily: primary }}>
          MOSAIC
        </div>
        <div className="text-[0.55rem] font-light tracking-[0.3em] mt-3 opacity-60 text-center uppercase">
          International Bistro + Social
        </div>
      </div>
    );
  };

  // --- SVG ICON CONCEPTS (20 NEW DESIGNS) --- //

  // PART 1: THE SIMPLE & ELEVATED SERIES (1-10)
  
  // 1. The Elegant Monogram (Ultra-thin, sophisticated M)
  const Logo1 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      {/* Outer and Inner sophisticated rings */}
      <circle cx="50" cy="50" r="46" fill="none" stroke={colors.brass} strokeWidth="1" />
      <circle cx="50" cy="50" r="41" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.4" />
      
      {/* The 'M' properly scaled and centered inside */}
      <path d="M 30 65 L 30 35 L 50 55 L 70 35 L 70 65" fill="none" stroke={currentText} strokeWidth="1.5" strokeLinejoin="miter" />
      
      {/* Delicate cardinal accents */}
      <circle cx="50" cy="4" r="1.5" fill={colors.terracotta} />
      <circle cx="50" cy="96" r="1.5" fill={colors.terracotta} />
      <circle cx="4" cy="50" r="1" fill={colors.brass} opacity="0.6" />
      <circle cx="96" cy="50" r="1" fill={colors.brass} opacity="0.6" />
    </svg>
  );

  // 2. The Golden Thread (A continuous, minimal line)
  const Logo2 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 10 50 C 10 20, 90 20, 90 50 C 90 80, 10 80, 10 50 Z" fill="none" stroke={colors.brass} strokeWidth="1" />
      <path d="M 30 50 C 30 10, 70 90, 70 50" fill="none" stroke={currentText} strokeWidth="1" />
      <path d="M 70 50 C 70 10, 30 90, 30 50" fill="none" stroke={currentText} strokeWidth="1" />
    </svg>
  );

  // 3. The Perfect Plate (Minimalist negative space)
  const Logo3 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="40" fill={colors.midnight} />
      <path d="M 35 65 L 35 35 L 50 50 L 65 35 L 65 65" fill="none" stroke={colors.lightBg} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="48" fill="none" stroke={colors.brass} strokeWidth="0.5" strokeDasharray="2 4" />
    </svg>
  );

  // 4. The Three Pillars (Food, Culture, Connection)
  const Logo4 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <rect x="30" y="20" width="2" height="60" fill={colors.terracotta} />
      <rect x="49" y="10" width="2" height="80" fill={colors.brass} />
      <rect x="68" y="30" width="2" height="40" fill={colors.sage} />
      <circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="0.5" />
    </svg>
  );

  // 5. The Cathedral Arch Outline
  const Logo5 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 25 90 L 25 50 A 25 25 0 0 1 75 50 L 75 90" fill="none" stroke={currentText} strokeWidth="1" />
      <path d="M 35 90 L 35 50 A 15 15 0 0 1 65 50 L 65 90" fill="none" stroke={colors.brass} strokeWidth="1" />
      <circle cx="50" cy="35" r="3" fill={colors.terracotta} />
    </svg>
  );

  // 6. The Staggered Pillars (Architectural 'M')
  const Logo6 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <rect x="25" y="30" width="1.5" height="50" fill={currentText} />
      <rect x="37.5" y="45" width="1.5" height="35" fill={colors.brass} />
      <rect x="50" y="60" width="1.5" height="20" fill={colors.terracotta} />
      <rect x="62.5" y="45" width="1.5" height="35" fill={colors.brass} />
      <rect x="75" y="30" width="1.5" height="50" fill={currentText} />
    </svg>
  );

  // 7. The Glass Shard (Abstract, singular tile)
  const Logo7 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <polygon points="50,10 80,40 60,90 20,60" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <polygon points="50,15 75,42 58,85 25,58" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.5" />
      <circle cx="50" cy="50" r="2" fill={colors.terracotta} />
    </svg>
  );

  // 8. Bistro & Social (The Overlap)
  const Logo8 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="40" cy="50" r="30" fill="none" stroke={colors.brass} strokeWidth="1" />
      <circle cx="60" cy="50" r="30" fill="none" stroke={currentText} strokeWidth="1" />
      <path d="M 50 22 L 50 78" stroke={colors.terracotta} strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );

  // 9. The Global Horizon
  const Logo9 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 10 60 L 90 60" stroke={currentText} strokeWidth="1" />
      <path d="M 20 60 A 30 30 0 0 1 80 60" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <circle cx="50" cy="60" r="2" fill={colors.terracotta} />
    </svg>
  );

  // 10. The Evening Star (Fine Dining Spark)
  const Logo10 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 50 15 Q 50 50 85 50 Q 50 50 50 85 Q 50 50 15 50 Q 50 50 50 15 Z" fill="none" stroke={colors.brass} strokeWidth="1" />
      <circle cx="50" cy="50" r="32" fill="none" stroke={currentText} strokeWidth="0.5" strokeDasharray="3 5" />
      <circle cx="50" cy="50" r="2" fill={colors.terracotta} />
    </svg>
  );

  // PART 2: THE DEEPER MEANING SERIES (11-20)

  // 11. The Lingua Franca (Client's Idea: "Mosaic" in multiple languages forming a circle) - REDESIGNED
  const Logo11 = () => (
    <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-sm">
      {/* Outer elegant framing rings */}
      <circle cx="60" cy="60" r="54" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3" />
      <circle cx="60" cy="60" r="50" fill="none" stroke={colors.brass} strokeWidth="1" />
      
      {/* The Text Path Ring */}
      <path id="languageCircle" d="M 60 16 A 44 44 0 1 1 59.9 16" fill="none" />
      <text fontSize="5.5" fontStyle="normal" fill={currentText} letterSpacing="3" className="uppercase opacity-70" style={{ fontFamily: fontThemes.modern.secondary }}>
        <textPath href="#languageCircle" startOffset="0%">
          MOSAICO • MOSAÏQUE • MOSAIK • モザイク • فسيفساء • MOSAICO • 
        </textPath>
      </text>
      
      {/* Inner framing */}
      <circle cx="60" cy="60" r="34" fill="none" stroke={colors.brass} strokeWidth="0.5" strokeDasharray="2 4" />
      <circle cx="60" cy="60" r="28" fill="none" stroke={currentText} strokeWidth="1" opacity="0.8" />
      
      {/* Centerpiece: Elegant M with a delicate horizontal strike */}
      <text x="60" y="68" fontSize="24" textAnchor="middle" fill={currentText} style={{ fontFamily: fontThemes.editorial.primary }} letterSpacing="1">M</text>
      <path d="M 40 60 L 80 60" stroke={colors.terracotta} strokeWidth="0.5" opacity="0.8" />
      
      {/* Subtle corner compass marks */}
      <circle cx="60" cy="10" r="1.5" fill={colors.terracotta} />
      <circle cx="60" cy="110" r="1.5" fill={colors.terracotta} />
      <circle cx="10" cy="60" r="1.5" fill={colors.brass} />
      <circle cx="110" cy="60" r="1.5" fill={colors.brass} />
    </svg>
  );

  // 12. The Gathering Table (Overhead abstraction of people converging)
  const Logo12 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="15" fill="none" stroke={colors.brass} strokeWidth="1" />
      <path d="M 50 10 L 50 30 M 50 70 L 50 90 M 10 50 L 30 50 M 70 50 L 90 50" stroke={currentText} strokeWidth="1" />
      <path d="M 22 22 L 36 36 M 78 78 L 64 64 M 78 22 L 64 36 M 22 78 L 36 64" stroke={colors.terracotta} strokeWidth="1" />
      <circle cx="50" cy="50" r="3" fill={currentText} />
    </svg>
  );

  // 13. Woven Tapestry (Different threads making one fabric)
  const Logo13 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 20 20 L 80 80 M 20 50 L 80 50 M 20 80 L 80 20 M 50 20 L 50 80" stroke={currentText} strokeWidth="0.5" opacity="0.3" />
      <path d="M 35 20 L 80 65 M 20 35 L 65 80 M 65 20 L 20 65 M 80 35 L 35 80" stroke={colors.brass} strokeWidth="1" />
      <rect x="35" y="35" width="30" height="30" fill="none" stroke={colors.terracotta} strokeWidth="1" transform="rotate(45 50 50)" />
    </svg>
  );

  // 14. The Compass Rose (Travel, Direction, Origin)
  const Logo14 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="0.5" />
      <polygon points="50,10 55,45 90,50 55,55 50,90 45,55 10,50 45,45" fill="none" stroke={colors.brass} strokeWidth="1" />
      <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke={currentText} strokeWidth="0.5" opacity="0.5" />
    </svg>
  );

  // 15. The Convergence (Many paths leading to one center)
  const Logo15 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="4" fill={colors.brass} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <path key={angle} d={`M 50 50 L 50 5`} stroke={currentText} strokeWidth="1" opacity={0.6} transform={`rotate(${angle} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="25" fill="none" stroke={colors.terracotta} strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  );

  // 16. The Abstract Meridian Globe (A sophisticated take on the world)
  const Logo16 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="40" fill="none" stroke={currentText} strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke={colors.brass} strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={currentText} strokeWidth="1" opacity="0.5" />
      <path d="M 50 10 L 50 90" stroke={colors.brass} strokeWidth="1" />
    </svg>
  );

  // 17. The Cultural Knot (Inseparable connections)
  const Logo17 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 30 50 C 30 20, 70 20, 70 50 C 70 80, 30 80, 30 50 Z" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <path d="M 50 30 C 80 30, 80 70, 50 70 C 20 70, 20 30, 50 30 Z" fill="none" stroke={currentText} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="2" fill={colors.terracotta} />
    </svg>
  );

  // 18. The Human Element (Topography / Fingerprint)
  const Logo18 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 20 50 Q 50 10 80 50 Q 50 90 20 50" fill="none" stroke={currentText} strokeWidth="0.5" />
      <path d="M 30 50 Q 50 20 70 50 Q 50 80 30 50" fill="none" stroke={colors.brass} strokeWidth="1" />
      <path d="M 40 50 Q 50 35 60 50 Q 50 65 40 50" fill="none" stroke={colors.terracotta} strokeWidth="0.5" />
      <circle cx="50" cy="50" r="2" fill={currentText} />
    </svg>
  );

  // 19. Day & Night (Bistro & Social transition)
  const Logo19 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="45" cy="50" r="25" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <path d="M 55 25 A 25 25 0 0 1 55 75 A 30 30 0 0 0 55 25 Z" fill={currentText} opacity="0.8" />
      <path d="M 10 50 L 90 50" stroke={currentText} strokeWidth="0.5" strokeDasharray="2 4" />
    </svg>
  );

  // 20. The Scattered Mosaic (Many unique pieces forming a sphere)
  const Logo20 = () => {
    const dots = [];
    for(let i=0; i<40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 40;
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      const color = Math.random() > 0.6 ? colors.brass : (Math.random() > 0.5 ? colors.terracotta : currentText);
      dots.push(<circle key={i} cx={x} cy={y} r={Math.random() * 1.5 + 0.5} fill={color} opacity={0.8} />);
    }
    return (
      <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
        {dots}
        <circle cx="50" cy="50" r="42" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3" />
      </svg>
    );
  };

  // 21. The Golden Spiral (Mathematical perfection)
  const Logo21 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 50 10 A 40 40 0 0 1 90 50 A 25 25 0 0 1 65 75 A 15 15 0 0 1 50 60 A 5 5 0 0 1 55 55" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <path d="M 20 90 L 20 20 L 50 50 L 80 20 L 80 90" fill="none" stroke={currentText} strokeWidth="1" opacity="0.5" strokeLinejoin="miter" />
    </svg>
  );

  // 22. The Parallel Horizon (Ultimate less-is-more)
  const Logo22 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <line x1="20" y1="45" x2="70" y2="45" stroke={currentText} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="55" x2="80" y2="55" stroke={colors.brass} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="85" cy="45" r="2" fill={colors.terracotta} />
    </svg>
  );

  // 23. The Fluted Glass (Bistro architecture)
  const Logo23 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <rect x="30" y="20" width="1" height="60" fill={currentText} opacity="0.3" />
      <rect x="40" y="15" width="1" height="70" fill={currentText} opacity="0.6" />
      <rect x="50" y="10" width="1.5" height="80" fill={colors.brass} />
      <rect x="60" y="15" width="1" height="70" fill={currentText} opacity="0.6" />
      <rect x="70" y="20" width="1" height="60" fill={currentText} opacity="0.3" />
      <circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="0.5" strokeDasharray="1 3" />
    </svg>
  );

  // 24. The Empty Canvas (Extreme negative space)
  const Logo24 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 65 75 L 65 55 L 75 65 L 85 55 L 85 75" fill="none" stroke={currentText} strokeWidth="1" strokeLinejoin="miter" />
      <circle cx="25" cy="35" r="1.5" fill={colors.terracotta} />
    </svg>
  );

  // 25. The Astrolabe (Celestial Navigation)
  const Logo25 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="40" fill="none" stroke={currentText} strokeWidth="1" />
      <circle cx="50" cy="50" r="30" fill="none" stroke={colors.brass} strokeWidth="0.5" strokeDasharray="4 4" />
      <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke={currentText} strokeWidth="0.5" opacity="0.5" />
      <path d="M 20 20 L 80 80" stroke={colors.terracotta} strokeWidth="1" />
      <circle cx="80" cy="80" r="2" fill={currentText} />
      <circle cx="50" cy="50" r="3" fill={colors.brass} />
    </svg>
  );

  // 26. The Venn Tapestry (Food, Drink, Social)
  const Logo26 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="40" r="25" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <circle cx="35" cy="65" r="25" fill="none" stroke={currentText} strokeWidth="1" opacity="0.7" />
      <circle cx="65" cy="65" r="25" fill="none" stroke={colors.terracotta} strokeWidth="1" opacity="0.7" />
      <path d="M 50 48 L 56 60 L 44 60 Z" fill={currentText} opacity="0.8" />
    </svg>
  );

  // 27. The Ripple Effect (Cultural Impact)
  const Logo27 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="30" cy="40" r="4" fill={colors.terracotta} />
      <circle cx="30" cy="40" r="15" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <circle cx="30" cy="40" r="30" fill="none" stroke={currentText} strokeWidth="1" opacity="0.7" />
      <circle cx="30" cy="40" r="50" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.4" />
      <path d="M 70 80 L 70 60 L 80 70 L 90 60 L 90 80" fill="none" stroke={colors.brass} strokeWidth="1.5" strokeLinejoin="miter" />
    </svg>
  );

  // 28. The Fragmented Enso (Organic Evolution)
  const Logo28 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 50 15 A 35 35 0 1 1 25 25" fill="none" stroke={currentText} strokeWidth="2" strokeLinecap="round" />
      <path d="M 20 30 A 35 35 0 0 1 60 12" fill="none" stroke={colors.brass} strokeWidth="1" strokeLinecap="round" />
      <path d="M 50 40 L 50 60 M 40 50 L 60 50" stroke={colors.terracotta} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  const concepts: Array<{ id: number; title: string; desc: string; component: React.ReactNode; layout: 'horizontal' | 'vertical' | 'none'; fontTheme: keyof typeof fontThemes }> = [
    // Simple Series
    { id: 1, title: 'The Elegant Monogram', desc: 'An ultra-thin, sophisticated "M". Relies entirely on elegant proportions and negative space, completely avoiding cartoonish thickness.', component: <Logo1 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 2, title: 'The Golden Thread', desc: 'A continuous, minimal line shaping an abstract sphere. Represents connection and continuity in the cleanest way possible.', component: <Logo2 />, layout: 'horizontal', fontTheme: 'artdeco' },
    { id: 3, title: 'The Perfect Plate', desc: 'A minimalist negative space design. Subtle, culinary-focused, and highly elevated. Looks like a Michelin-star stamp.', component: <Logo3 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 4, title: 'The Three Pillars', desc: 'Three elegant lines representing Food, Culture, and Connection. Extremely simple, architectural, and modern.', component: <Logo4 />, layout: 'horizontal', fontTheme: 'modern' },
    { id: 5, title: 'The Cathedral Arch', desc: 'A hyper-minimalist outline of Cathedral Square\'s historic archways. Grounded in your location but stripped of all literal clutter.', component: <Logo5 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 6, title: 'The Staggered Pillars', desc: 'Five delicate vertical lines that implicitly form the shape of an "M" through their varying heights. A sophisticated nod to architecture.', component: <Logo6 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 7, title: 'The Glass Shard', desc: 'Rather than a full mosaic, this focuses on a single, beautifully cut geometric shard of glass or brass.', component: <Logo7 />, layout: 'vertical', fontTheme: 'avantgarde' },
    { id: 8, title: 'Bistro & Social', desc: 'The overlap. Two perfect circles intersecting to create a third space. Represents the dual nature of your day-to-night business.', component: <Logo8 />, layout: 'horizontal', fontTheme: 'heritage' },
    { id: 9, title: 'The Global Horizon', desc: 'The simplest abstraction of a rising sun over the horizon. Represents the dawn of a new cultural hub in Milwaukee.', component: <Logo9 />, layout: 'vertical', fontTheme: 'artdeco' },
    { id: 10, title: 'The Evening Star', desc: 'A sophisticated four-pointed star representing the evening social lounge and the highest standard of culinary excellence.', component: <Logo10 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 11, title: 'The Golden Spiral', desc: 'Mathematical perfection. A delicate Fibonacci spiral intersecting a subtle "M". Unbelievably refined and visually harmonious.', component: <Logo21 />, layout: 'horizontal', fontTheme: 'avantgarde' },
    { id: 12, title: 'The Parallel Horizon', desc: 'Two stacked, off-center lines representing an elegant table setting or horizon. The ultimate expression of "less is more".', component: <Logo22 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 13, title: 'The Fluted Glass', desc: 'Vertical lines inspired by premium fluted bistro glassware and the historic Cathedral organs, fading beautifully at the edges.', component: <Logo23 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 14, title: 'The Empty Canvas', desc: 'A massive, thin circle with a tiny, pristine monogram pushed to the edge. Embraces extreme negative space for a gallery-like feel.', component: <Logo24 />, layout: 'vertical', fontTheme: 'editorial' },
    
    // Deeper Meaning Series
    { id: 15, title: 'The Lingua Franca', desc: 'Directly from your feedback: The word "Mosaic" translated into French, German, Japanese, and Arabic, forming a unified global circle.', component: <Logo11 />, layout: 'none', fontTheme: 'editorial' },
    { id: 16, title: 'The Gathering Table', desc: 'An abstract, overhead view of paths converging at a round table. A subtle nod to the "living room" community aspect of the business plan.', component: <Logo12 />, layout: 'horizontal', fontTheme: 'modern' },
    { id: 17, title: 'Woven Tapestry', desc: 'Different geometric threads crossing over one another to weave a unified fabric. Symbolizes the blending of global cultures.', component: <Logo13 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 18, title: 'The Compass Rose', desc: 'A deeply meaningful symbol of travel, direction, and worldly origin, executed in a refined, high-end nautical aesthetic.', component: <Logo14 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 19, title: 'The Convergence', desc: 'Eight lines arriving from all directions to meet at a central, golden focal point. Represents Cathedral Square as the meeting place.', component: <Logo15 />, layout: 'horizontal', fontTheme: 'artdeco' },
    { id: 20, title: 'The Meridian Globe', desc: 'A sophisticated, abstract take on the globe using only delicate meridian lines, stripping away the bulky "clipart" map shapes.', component: <Logo16 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 21, title: 'The Cultural Knot', desc: 'Inspired by global knotwork (Celtic, Asian, Nordic). Two endless loops entwined, representing inseparable human connection.', component: <Logo17 />, layout: 'horizontal', fontTheme: 'heritage' },
    { id: 22, title: 'The Human Element', desc: 'Lines that mimic both a topographical map and a human fingerprint. A meaningful reminder that the food and music are rooted in people.', component: <Logo18 />, layout: 'vertical', fontTheme: 'avantgarde' },
    { id: 23, title: 'Day & Night', desc: 'Overlapping phases of the sun and moon. Meaningfully visualizes the transition from daytime Bistro to evening Social lounge.', component: <Logo19 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 24, title: 'The True Mosaic', desc: 'Instead of blocky tiles, a true mosaic of dozens of distinct, scattered points coming together to form a unified sphere.', component: <Logo20 />, layout: 'horizontal', fontTheme: 'artdeco' },
    { id: 25, title: 'The Astrolabe', desc: 'Concentric circles and precise celestial markings. A nod to timeless navigation and the international, worldly aspect of the menu.', component: <Logo25 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 26, title: 'The Venn Tapestry', desc: 'Three intersecting rings representing food, drink, and social life, forming a unified, central "shard" in the negative space.', component: <Logo26 />, layout: 'horizontal', fontTheme: 'artdeco' },
    { id: 27, title: 'The Ripple Effect', desc: 'Concentric ripples radiating from a single terracotta drop. Showcases how a single great space can influence the entire culture around it.', component: <Logo27 />, layout: 'vertical', fontTheme: 'avantgarde' },
    { id: 28, title: 'The Fragmented Enso', desc: 'A deconstructed, perfect circle. Represents the organic, ever-evolving nature of culinary arts and human social connection.', component: <Logo28 />, layout: 'vertical', fontTheme: 'modern' }
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-500 ease-in-out font-sans"
      style={{ backgroundColor: currentBg, color: currentText, fontFamily: fontThemes.editorial.secondary }}
    >
      {/* Header */}
      <header className="px-8 py-16 md:py-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-medium tracking-widest uppercase" style={{ borderColor: colors.brass, color: colors.brass }}>
          <Globe2 size={14} />
          <span>Refined Brand Identity</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8" style={{ fontFamily: fontThemes.editorial.primary }}>
          The Mosaic Concepts
        </h1>
        <p className="max-w-3xl text-lg md:text-xl opacity-70 font-light mb-12 leading-relaxed">
          Exploring 28 entirely new, elevated visual identities. Moving away from literal illustrations, we are focusing on two distinct directions: <strong className="font-semibold">hyper-minimalist elegance</strong> and <strong className="font-semibold">thoughtful, deeper symbolism.</strong>
        </p>

        {/* Theme Toggle */}
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center space-x-3 px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-80 border"
            style={{ backgroundColor: isDarkMode ? 'transparent' : currentText, color: isDarkMode ? currentText : currentBg, borderColor: currentText }}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span>Switch to {isDarkMode ? 'Day' : 'Night'} Mode</span>
          </button>

          {/* Color Scheme Toggles */}
          <div className="flex flex-wrap justify-center gap-3">
            {(Object.keys(allSchemes) as Array<keyof typeof allSchemes>).map((key) => {
              const scheme = allSchemes[key];
              return (
                <button
                  key={scheme.id}
                  onClick={() => setActiveScheme(key)}
                  className={`flex items-center space-x-2 px-5 py-2 rounded-full text-[0.65rem] font-bold tracking-widest uppercase transition-all duration-300 border ${
                    activeScheme === key ? 'opacity-100 scale-105 shadow-md' : 'opacity-40 hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: activeScheme === key ? currentText : 'transparent',
                    color: activeScheme === key ? currentBg : currentText,
                    borderColor: currentText
                  }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: scheme.accent1 }}></span>
                  <span>{scheme.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Typography Showcase */}
      <section className="px-6 pb-8 max-w-7xl mx-auto">
        <div className="border rounded-xl p-8 md:p-12 transition-colors duration-500" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF' }}>
          <div className="flex items-center gap-3 mb-10 pb-6 border-b" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
            <Type size={20} style={{ color: colors.brass }} />
            <h2 className="text-xl font-light tracking-widest uppercase">Typography Pairings Explored</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Theme 1 */}
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Pairing 01: Editorial</span>
              <div className="text-4xl font-light mb-2" style={{ fontFamily: fontThemes.editorial.primary }}>Aa</div>
              <h3 className="text-md tracking-wider mb-2" style={{ fontFamily: fontThemes.editorial.primary }}>Didot + Sans</h3>
              <p className="text-xs opacity-60 font-light leading-relaxed">High-contrast, high-fashion serif paired with a clean geometric sans. Instantly communicates fine dining.</p>
            </div>

            {/* Theme 2 */}
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Pairing 02: Heritage</span>
              <div className="text-4xl font-light mb-2" style={{ fontFamily: fontThemes.heritage.primary }}>Aa</div>
              <h3 className="text-md tracking-wider mb-2" style={{ fontFamily: fontThemes.heritage.primary }}>Garamond + Avenir</h3>
              <p className="text-xs opacity-60 font-light leading-relaxed">A softer, more historic serif honoring the 1900s Cathedral Square architecture. Warm and established.</p>
            </div>

            {/* Theme 3 */}
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Pairing 03: Art Deco</span>
              <div className="text-4xl font-light mb-2 uppercase" style={{ fontFamily: fontThemes.artdeco.primary }}>Aa</div>
              <h3 className="text-md tracking-wider mb-2 uppercase" style={{ fontFamily: fontThemes.artdeco.primary }}>Futura + Mono</h3>
              <p className="text-xs opacity-60 font-light leading-relaxed">A geometric, uppercase-heavy styling that nods to the roaring 20s and the golden age of social clubs.</p>
            </div>

            {/* Theme 4 */}
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Pairing 04: Modern</span>
              <div className="text-4xl font-light mb-2" style={{ fontFamily: fontThemes.modern.primary }}>Aa</div>
              <h3 className="text-md tracking-wider mb-2" style={{ fontFamily: fontThemes.modern.primary }}>Pure Geometric</h3>
              <p className="text-xs opacity-60 font-light leading-relaxed">A completely sans-serif approach. Highly legible, unpretentious, and aggressively modern.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Showcase */}
      <section className="px-6 pb-16 max-w-7xl mx-auto">
        <div className="border rounded-xl p-8 md:p-12 transition-colors duration-500" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF' }}>
          <div className="flex items-center gap-3 mb-10 pb-6 border-b" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
            <Palette size={20} style={{ color: colors.brass }} />
            <h2 className="text-xl font-light tracking-widest uppercase">Elevated Palette: {active.label}</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: active.names.primary, hex: colors.midnight, desc: active.desc.primary },
              { name: active.names.accent1, hex: colors.brass, desc: active.desc.accent1 },
              { name: active.names.accent2, hex: colors.terracotta, desc: active.desc.accent2 },
              { name: active.names.lightBg, hex: colors.lightBg, desc: active.desc.lightBg }
            ].map((color) => (
              <div key={color.name} className="flex flex-col group">
                <div 
                  className="h-24 w-full rounded-lg mb-4 shadow-sm border transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.hex, borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }}
                />
                <h3 className="text-sm font-semibold tracking-wide mb-1">{color.name}</h3>
                <p className="text-[0.65rem] opacity-50 font-mono mb-2">{color.hex}</p>
                <p className="text-xs opacity-60 font-light leading-snug">{color.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Showcase - Part 1 */}
      <main className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.editorial.primary }}>I. The Simple & Elevated Series</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">Hyper-minimalist concepts relying on elegant proportions, very thin lines, and negative space to convey a high-end, established presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {concepts.slice(0, 14).map((concept) => (
            <div 
              key={concept.id}
              className="group relative rounded-xl p-8 flex flex-col h-full border transition-all duration-500 hover:shadow-xl overflow-hidden"
              style={{ 
                borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF'
              }}
            >
              <div className="flex-grow flex flex-col items-center justify-center py-10">
                {concept.layout === 'horizontal' ? (
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                    {concept.component}
                    <Wordmark layout="horizontal" theme={concept.fontTheme} />
                  </div>
                ) : concept.layout === 'vertical' ? (
                  <div className="flex flex-col items-center">
                    {concept.component}
                    <Wordmark layout="vertical" theme={concept.fontTheme} />
                  </div>
                ) : (
                  <div className="flex justify-center w-full">
                    {concept.component}
                  </div>
                )}
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase opacity-40">Concept {concept.id < 10 ? `0${concept.id}` : concept.id}</span>
                  <CheckCircle2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.brass }} />
                </div>
                <h3 className="text-lg tracking-wide mb-2 font-light" style={{ fontFamily: fontThemes[concept.fontTheme].primary }}>{concept.title}</h3>
                <p className="text-xs opacity-60 font-light leading-relaxed">
                  {concept.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Grid Showcase - Part 2 */}
      <main className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="mb-10 text-center mt-12">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.editorial.primary }}>II. The Deeper Meaning Series</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">Thoughtful, symbolic designs exploring global convergence, human connection, and culture without relying on literal "clipart" imagery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {concepts.slice(14, 28).map((concept) => (
            <div 
              key={concept.id}
              className="group relative rounded-xl p-8 flex flex-col h-full border transition-all duration-500 hover:shadow-xl overflow-hidden"
              style={{ 
                borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF'
              }}
            >
              <div className="flex-grow flex flex-col items-center justify-center py-10">
                {concept.layout === 'horizontal' ? (
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                    {concept.component}
                    <Wordmark layout="horizontal" theme={concept.fontTheme} />
                  </div>
                ) : concept.layout === 'vertical' ? (
                  <div className="flex flex-col items-center">
                    {concept.component}
                    <Wordmark layout="vertical" theme={concept.fontTheme} />
                  </div>
                ) : (
                  <div className="flex justify-center w-full">
                    {concept.component}
                  </div>
                )}
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase opacity-40">Concept {concept.id < 10 ? `0${concept.id}` : concept.id}</span>
                  <CheckCircle2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.brass }} />
                </div>
                <h3 className="text-lg tracking-wide mb-2 font-light" style={{ fontFamily: fontThemes[concept.fontTheme].primary }}>{concept.title}</h3>
                <p className="text-xs opacity-60 font-light leading-relaxed">
                  {concept.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-16 text-center" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
        <p className="font-light tracking-widest uppercase text-[0.65rem] opacity-50 flex items-center justify-center gap-2">
          Designed for The Mosaic LLC <ArrowRight size={12}/> 2026
        </p>
      </footer>
    </div>
  );
}
