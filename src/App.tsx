import React, { useState } from 'react';
import { Moon, Sun, ArrowRight, CheckCircle2, Globe2, Type, Palette } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeScheme, setActiveScheme] = useState<'midnight' | 'emerald' | 'onyx' | 'crimson' | 'cobalt'>('midnight');

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
    },
    crimson: {
      id: 'crimson',
      label: 'Crimson Velvet',
      primary: '#2A0800', // Deep Burgundy
      accent1: '#D4AF37', // Champagne Gold
      accent2: '#E37A5E', // Dusty Rose
      darkBg: '#1A0500',
      lightBg: '#FDFBF7',
      names: { primary: 'Deep Burgundy', accent1: 'Champagne Gold', accent2: 'Dusty Rose', lightBg: 'Pearl White' },
      desc: { primary: 'Rich, passionate dining atmosphere.', accent1: 'Elegant, celebratory metallic.', accent2: 'Soft, inviting floral accent.', lightBg: 'Pristine, warm gallery canvas.' }
    },
    cobalt: {
      id: 'cobalt',
      label: 'Cobalt Slate',
      primary: '#152238', // Deep Cobalt
      accent1: '#BCC6CC', // Warm Platinum
      accent2: '#C15438', // Rust Orange
      darkBg: '#0D1524',
      lightBg: '#F4F6F8',
      names: { primary: 'Deep Cobalt', accent1: 'Warm Platinum', accent2: 'Rust Orange', lightBg: 'Ice White' },
      desc: { primary: 'Modern, tailored sophistication.', accent1: 'Sleek, architectural metallic.', accent2: 'Vibrant, energetic pop.', lightBg: 'Crisp, contemporary gallery wall.' }
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
    avantgarde: { primary: "'Space Mono', 'Courier New', monospace", secondary: "'Helvetica', sans-serif" },
    gallery: { primary: "'Optima', 'Cinzel', 'Trajan Pro', sans-serif", secondary: "'Avenir', 'Helvetica Neue', sans-serif" }
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

  // --- SVG ICON CONCEPTS (42 DESIGNS) --- //

  // PART 1: THE SIMPLE & ELEVATED SERIES (1-15)
  const Logo1 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="46" fill="none" stroke={colors.brass} strokeWidth="1" />
      <circle cx="50" cy="50" r="41" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.4" />
      <path d="M 30 65 L 30 35 L 50 55 L 70 35 L 70 65" fill="none" stroke={currentText} strokeWidth="1.5" strokeLinejoin="miter" />
      <circle cx="50" cy="4" r="1.5" fill={colors.terracotta} />
      <circle cx="50" cy="96" r="1.5" fill={colors.terracotta} />
      <circle cx="4" cy="50" r="1" fill={colors.brass} opacity="0.6" />
      <circle cx="96" cy="50" r="1" fill={colors.brass} opacity="0.6" />
    </svg>
  );
  const Logo2 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 10 50 C 10 20, 90 20, 90 50 C 90 80, 10 80, 10 50 Z" fill="none" stroke={colors.brass} strokeWidth="1" />
      <path d="M 30 50 C 30 10, 70 90, 70 50" fill="none" stroke={currentText} strokeWidth="1" />
      <path d="M 70 50 C 70 10, 30 90, 30 50" fill="none" stroke={currentText} strokeWidth="1" />
    </svg>
  );
  const Logo3 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="40" fill={colors.midnight} />
      <path d="M 35 65 L 35 35 L 50 50 L 65 35 L 65 65" fill="none" stroke={colors.lightBg} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="48" fill="none" stroke={colors.brass} strokeWidth="0.5" strokeDasharray="2 4" />
    </svg>
  );
  const Logo4 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <rect x="30" y="20" width="2" height="60" fill={colors.terracotta} />
      <rect x="49" y="10" width="2" height="80" fill={colors.brass} />
      <rect x="68" y="30" width="2" height="40" fill={colors.sage} />
      <circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="0.5" />
    </svg>
  );
  const Logo5 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 25 90 L 25 50 A 25 25 0 0 1 75 50 L 75 90" fill="none" stroke={currentText} strokeWidth="1" />
      <path d="M 35 90 L 35 50 A 15 15 0 0 1 65 50 L 65 90" fill="none" stroke={colors.brass} strokeWidth="1" />
      <circle cx="50" cy="35" r="3" fill={colors.terracotta} />
    </svg>
  );
  const Logo6 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <rect x="25" y="30" width="1.5" height="50" fill={currentText} />
      <rect x="37.5" y="45" width="1.5" height="35" fill={colors.brass} />
      <rect x="50" y="60" width="1.5" height="20" fill={colors.terracotta} />
      <rect x="62.5" y="45" width="1.5" height="35" fill={colors.brass} />
      <rect x="75" y="30" width="1.5" height="50" fill={currentText} />
    </svg>
  );
  const Logo7 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <polygon points="50,10 80,40 60,90 20,60" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <polygon points="50,15 75,42 58,85 25,58" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.5" />
      <circle cx="50" cy="50" r="2" fill={colors.terracotta} />
    </svg>
  );
  const Logo8 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="40" cy="50" r="30" fill="none" stroke={colors.brass} strokeWidth="1" />
      <circle cx="60" cy="50" r="30" fill="none" stroke={currentText} strokeWidth="1" />
      <path d="M 50 22 L 50 78" stroke={colors.terracotta} strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
  const Logo9 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 10 60 L 90 60" stroke={currentText} strokeWidth="1" />
      <path d="M 20 60 A 30 30 0 0 1 80 60" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <circle cx="50" cy="60" r="2" fill={colors.terracotta} />
    </svg>
  );
  const Logo10 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 50 15 Q 50 50 85 50 Q 50 50 50 85 Q 50 50 15 50 Q 50 50 50 15 Z" fill="none" stroke={colors.brass} strokeWidth="1" />
      <circle cx="50" cy="50" r="32" fill="none" stroke={currentText} strokeWidth="0.5" strokeDasharray="3 5" />
      <circle cx="50" cy="50" r="2" fill={colors.terracotta} />
    </svg>
  );
  const Logo11 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 50 10 A 40 40 0 0 1 90 50 A 25 25 0 0 1 65 75 A 15 15 0 0 1 50 60 A 5 5 0 0 1 55 55" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <path d="M 20 90 L 20 20 L 50 50 L 80 20 L 80 90" fill="none" stroke={currentText} strokeWidth="1" opacity="0.5" strokeLinejoin="miter" />
    </svg>
  );
  const Logo12 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <line x1="20" y1="45" x2="70" y2="45" stroke={currentText} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="55" x2="80" y2="55" stroke={colors.brass} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="85" cy="45" r="2" fill={colors.terracotta} />
    </svg>
  );
  const Logo13 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <rect x="30" y="20" width="1" height="60" fill={currentText} opacity="0.3" />
      <rect x="40" y="15" width="1" height="70" fill={currentText} opacity="0.6" />
      <rect x="50" y="10" width="1.5" height="80" fill={colors.brass} />
      <rect x="60" y="15" width="1" height="70" fill={currentText} opacity="0.6" />
      <rect x="70" y="20" width="1" height="60" fill={currentText} opacity="0.3" />
      <circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="0.5" strokeDasharray="1 3" />
    </svg>
  );
  const Logo14 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 65 75 L 65 55 L 75 65 L 85 55 L 85 75" fill="none" stroke={currentText} strokeWidth="1" strokeLinejoin="miter" />
      <circle cx="25" cy="35" r="1.5" fill={colors.terracotta} />
    </svg>
  );
  const Logo15 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 20 50 C 20 20, 50 20, 50 50 C 50 80, 80 80, 80 50 C 80 20, 50 20, 50 50 C 50 80, 20 80, 20 50" fill="none" stroke={colors.brass} strokeWidth="1" />
      <circle cx="50" cy="50" r="3" fill={colors.terracotta} />
    </svg>
  );

  // PART 2: THE DEEPER MEANING SERIES (16-30)
  const Logo16 = () => (
    <svg viewBox="0 0 120 120" className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-sm">
      <circle cx="60" cy="60" r="54" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3" />
      <circle cx="60" cy="60" r="50" fill="none" stroke={colors.brass} strokeWidth="1" />
      <path id="languageCircle" d="M 60 16 A 44 44 0 1 1 59.9 16" fill="none" />
      <text fontSize="5.5" fontStyle="normal" fill={currentText} letterSpacing="3" className="uppercase opacity-70" style={{ fontFamily: fontThemes.modern.secondary }}>
        <textPath href="#languageCircle" startOffset="0%">
          MOSAICO • MOSAÏQUE • MOSAIK • モザイク • فسيفساء • MOSAICO • 
        </textPath>
      </text>
      <circle cx="60" cy="60" r="34" fill="none" stroke={colors.brass} strokeWidth="0.5" strokeDasharray="2 4" />
      <circle cx="60" cy="60" r="28" fill="none" stroke={currentText} strokeWidth="1" opacity="0.8" />
      <text x="60" y="68" fontSize="24" textAnchor="middle" fill={currentText} style={{ fontFamily: fontThemes.editorial.primary }} letterSpacing="1">M</text>
      <path d="M 40 60 L 80 60" stroke={colors.terracotta} strokeWidth="0.5" opacity="0.8" />
      <circle cx="60" cy="10" r="1.5" fill={colors.terracotta} />
      <circle cx="60" cy="110" r="1.5" fill={colors.terracotta} />
      <circle cx="10" cy="60" r="1.5" fill={colors.brass} />
      <circle cx="110" cy="60" r="1.5" fill={colors.brass} />
    </svg>
  );
  const Logo17 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="15" fill="none" stroke={colors.brass} strokeWidth="1" />
      <path d="M 50 10 L 50 30 M 50 70 L 50 90 M 10 50 L 30 50 M 70 50 L 90 50" stroke={currentText} strokeWidth="1" />
      <path d="M 22 22 L 36 36 M 78 78 L 64 64 M 78 22 L 64 36 M 22 78 L 36 64" stroke={colors.terracotta} strokeWidth="1" />
      <circle cx="50" cy="50" r="3" fill={currentText} />
    </svg>
  );
  const Logo18 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 20 20 L 80 80 M 20 50 L 80 50 M 20 80 L 80 20 M 50 20 L 50 80" stroke={currentText} strokeWidth="0.5" opacity="0.3" />
      <path d="M 35 20 L 80 65 M 20 35 L 65 80 M 65 20 L 20 65 M 80 35 L 35 80" stroke={colors.brass} strokeWidth="1" />
      <rect x="35" y="35" width="30" height="30" fill="none" stroke={colors.terracotta} strokeWidth="1" transform="rotate(45 50 50)" />
    </svg>
  );
  const Logo19 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="0.5" />
      <polygon points="50,10 55,45 90,50 55,55 50,90 45,55 10,50 45,45" fill="none" stroke={colors.brass} strokeWidth="1" />
      <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke={currentText} strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
  const Logo20 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="4" fill={colors.brass} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <path key={angle} d={`M 50 50 L 50 5`} stroke={currentText} strokeWidth="1" opacity={0.6} transform={`rotate(${angle} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="25" fill="none" stroke={colors.terracotta} strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  );
  const Logo21 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="40" fill="none" stroke={currentText} strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke={colors.brass} strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={currentText} strokeWidth="1" opacity="0.5" />
      <path d="M 50 10 L 50 90" stroke={colors.brass} strokeWidth="1" />
    </svg>
  );
  const Logo22 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 30 50 C 30 20, 70 20, 70 50 C 70 80, 30 80, 30 50 Z" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <path d="M 50 30 C 80 30, 80 70, 50 70 C 20 70, 20 30, 50 30 Z" fill="none" stroke={currentText} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="2" fill={colors.terracotta} />
    </svg>
  );
  const Logo23 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 20 50 Q 50 10 80 50 Q 50 90 20 50" fill="none" stroke={currentText} strokeWidth="0.5" />
      <path d="M 30 50 Q 50 20 70 50 Q 50 80 30 50" fill="none" stroke={colors.brass} strokeWidth="1" />
      <path d="M 40 50 Q 50 35 60 50 Q 50 65 40 50" fill="none" stroke={colors.terracotta} strokeWidth="0.5" />
      <circle cx="50" cy="50" r="2" fill={currentText} />
    </svg>
  );
  const Logo24 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="45" cy="50" r="25" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <path d="M 55 25 A 25 25 0 0 1 55 75 A 30 30 0 0 0 55 25 Z" fill={currentText} opacity="0.8" />
      <path d="M 10 50 L 90 50" stroke={currentText} strokeWidth="0.5" strokeDasharray="2 4" />
    </svg>
  );
  const Logo25 = () => {
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
  const Logo26 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="50" r="40" fill="none" stroke={currentText} strokeWidth="1" />
      <circle cx="50" cy="50" r="30" fill="none" stroke={colors.brass} strokeWidth="0.5" strokeDasharray="4 4" />
      <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke={currentText} strokeWidth="0.5" opacity="0.5" />
      <path d="M 20 20 L 80 80" stroke={colors.terracotta} strokeWidth="1" />
      <circle cx="80" cy="80" r="2" fill={currentText} />
      <circle cx="50" cy="50" r="3" fill={colors.brass} />
    </svg>
  );
  const Logo27 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="50" cy="40" r="25" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <circle cx="35" cy="65" r="25" fill="none" stroke={currentText} strokeWidth="1" opacity="0.7" />
      <circle cx="65" cy="65" r="25" fill="none" stroke={colors.terracotta} strokeWidth="1" opacity="0.7" />
      <path d="M 50 48 L 56 60 L 44 60 Z" fill={currentText} opacity="0.8" />
    </svg>
  );
  const Logo28 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="30" cy="40" r="4" fill={colors.terracotta} />
      <circle cx="30" cy="40" r="15" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <circle cx="30" cy="40" r="30" fill="none" stroke={currentText} strokeWidth="1" opacity="0.7" />
      <circle cx="30" cy="40" r="50" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.4" />
      <path d="M 70 80 L 70 60 L 80 70 L 90 60 L 90 80" fill="none" stroke={colors.brass} strokeWidth="1.5" strokeLinejoin="miter" />
    </svg>
  );
  const Logo29 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 50 15 A 35 35 0 1 1 25 25" fill="none" stroke={currentText} strokeWidth="2" strokeLinecap="round" />
      <path d="M 20 30 A 35 35 0 0 1 60 12" fill="none" stroke={colors.brass} strokeWidth="1" strokeLinecap="round" />
      <path d="M 50 40 L 50 60 M 40 50 L 60 50" stroke={colors.terracotta} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
  const Logo30 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <ellipse cx="50" cy="70" rx="30" ry="8" fill="none" stroke={currentText} strokeWidth="0.5" />
      <path d="M 50 20 L 50 70" stroke={colors.brass} strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 50 10 L 55 25 L 70 30 L 55 35 L 50 50 L 45 35 L 30 30 L 45 25 Z" fill="none" stroke={colors.terracotta} strokeWidth="1" />
    </svg>
  );

  // PART 3: THE AVANT-GARDE GALLERY SERIES (31-42)
  const Logo31 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <polygon points="30,20 60,20 50,80 20,80" fill="none" stroke={colors.brass} strokeWidth="1"/>
      <polygon points="50,20 80,20 70,80 40,80" fill={colors.terracotta} opacity="0.15"/>
      <polygon points="50,20 80,20 70,80 40,80" fill="none" stroke={colors.terracotta} strokeWidth="1" opacity="0.8"/>
      <polygon points="40,40 70,40 60,100 30,100" fill="none" stroke={currentText} strokeWidth="1" opacity="0.6"/>
      <circle cx="50" cy="50" r="2" fill={currentText} />
    </svg>
  );
  const Logo32 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 10 50 Q 30 20 50 50 T 90 50" fill="none" stroke={colors.brass} strokeWidth="0.75" />
      <path d="M 10 50 Q 30 30 50 50 T 90 50" fill="none" stroke={currentText} strokeWidth="0.75" opacity="0.7" />
      <path d="M 10 50 Q 30 40 50 50 T 90 50" fill="none" stroke={colors.terracotta} strokeWidth="0.75" opacity="0.8" />
      <path d="M 10 50 Q 30 80 50 50 T 90 50" fill="none" stroke={colors.brass} strokeWidth="0.75" />
      <path d="M 10 50 Q 30 70 50 50 T 90 50" fill="none" stroke={currentText} strokeWidth="0.75" opacity="0.7" />
      <path d="M 10 50 Q 30 60 50 50 T 90 50" fill="none" stroke={colors.terracotta} strokeWidth="0.75" opacity="0.8" />
    </svg>
  );
  const Logo33 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <ellipse cx="50" cy="50" rx="40" ry="40" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3"/>
      <ellipse cx="50" cy="50" rx="28" ry="40" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.6"/>
      <ellipse cx="50" cy="50" rx="16" ry="40" fill="none" stroke={colors.brass} strokeWidth="1" opacity="0.9"/>
      <ellipse cx="50" cy="50" rx="4" ry="40" fill="none" stroke={colors.terracotta} strokeWidth="1.5" />
      <line x1="50" y1="5" x2="50" y2="95" stroke={currentText} strokeWidth="0.5"/>
    </svg>
  );
  const Logo34 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <polygon points="50,15 85,30 85,70 50,85 15,70 15,30" fill="none" stroke={colors.brass} strokeWidth="1"/>
      <polygon points="50,15 50,50 85,30" fill={colors.terracotta} opacity="0.8"/>
      <polygon points="15,30 50,50 15,70" fill={currentText} opacity="0.2"/>
      <polygon points="50,50 85,70 50,85" fill={currentText} opacity="0.9"/>
      <path d="M 50 50 L 50 85" stroke={currentBg} strokeWidth="1.5"/>
      <path d="M 50 50 L 15 30" stroke={currentBg} strokeWidth="1.5"/>
      <path d="M 50 50 L 85 30" stroke={currentBg} strokeWidth="1.5"/>
    </svg>
  );
  const Logo35 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 10 30 C 40 10, 60 50, 90 30" fill="none" stroke={colors.brass} strokeWidth="1" />
      <path d="M 10 40 C 40 20, 60 60, 90 40" fill="none" stroke={currentText} strokeWidth="0.75" opacity="0.7"/>
      <path d="M 10 50 C 40 30, 60 70, 90 50" fill="none" stroke={colors.terracotta} strokeWidth="0.75" opacity="0.9"/>
      <path d="M 10 60 C 40 40, 60 80, 90 60" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.5"/>
      <path d="M 10 70 C 40 50, 60 90, 90 70" fill="none" stroke={colors.brass} strokeWidth="0.5" opacity="0.6"/>
    </svg>
  );
  const Logo36 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      {[...Array(12)].map((_, i) => (
         <ellipse key={i} cx="50" cy="50" rx="35" ry="8" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.4" transform={`rotate(${i * 15} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="14" fill={currentBg} stroke={colors.brass} strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="3" fill={colors.terracotta}/>
    </svg>
  );
  const Logo37 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <polygon points="50,15 85,75 15,75" fill="none" stroke={colors.brass} strokeWidth="1.5"/>
      <polygon points="50,25 75,70 25,70" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.6"/>
      <polygon points="50,35 65,65 35,65" fill="none" stroke={colors.terracotta} strokeWidth="1"/>
      <line x1="50" y1="15" x2="50" y2="35" stroke={currentText} strokeWidth="0.5" opacity="0.5"/>
      <line x1="15" y1="75" x2="35" y2="65" stroke={currentText} strokeWidth="0.5" opacity="0.5"/>
      <line x1="85" y1="75" x2="65" y2="65" stroke={currentText} strokeWidth="0.5" opacity="0.5"/>
    </svg>
  );
  const Logo38 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <line x1="20" y1="80" x2="35" y2="30" stroke={currentText} strokeWidth="0.5" opacity="0.6"/>
      <line x1="35" y1="30" x2="50" y2="60" stroke={colors.brass} strokeWidth="1.5"/>
      <line x1="50" y1="60" x2="65" y2="30" stroke={colors.brass} strokeWidth="1.5"/>
      <line x1="65" y1="30" x2="80" y2="80" stroke={currentText} strokeWidth="0.5" opacity="0.6"/>
      <line x1="35" y1="30" x2="65" y2="30" stroke={currentText} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5"/>
      <line x1="20" y1="80" x2="80" y2="80" stroke={colors.terracotta} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5"/>
      <circle cx="20" cy="80" r="2.5" fill={colors.terracotta}/>
      <circle cx="35" cy="30" r="3.5" fill={currentText}/>
      <circle cx="50" cy="60" r="3" fill={colors.brass}/>
      <circle cx="65" cy="30" r="3.5" fill={currentText}/>
      <circle cx="80" cy="80" r="2.5" fill={colors.terracotta}/>
    </svg>
  );
  const Logo39 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <circle cx="45" cy="50" r="30" fill="none" stroke={currentText} strokeWidth="1.5" opacity="0.8"/>
      <circle cx="55" cy="50" r="30" fill="none" stroke={colors.brass} strokeWidth="1"/>
      <path d="M 45 20 A 30 30 0 0 1 45 80 A 30 30 0 0 0 45 20" fill={colors.terracotta} opacity="0.85"/>
    </svg>
  );
  const Logo40 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <polygon points="50,10 70,40 50,90 30,40" fill="none" stroke={currentText} strokeWidth="1.5"/>
      <line x1="50" y1="10" x2="50" y2="90" stroke={colors.brass} strokeWidth="1.5"/>
      <line x1="30" y1="40" x2="70" y2="40" stroke={currentText} strokeWidth="0.5" opacity="0.5"/>
      <polygon points="50,10 70,40 50,90" fill={colors.brass} opacity="0.1"/>
      <polygon points="30,40 50,90 50,40" fill={colors.terracotta} opacity="0.15"/>
    </svg>
  );
  const Logo41 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <path d="M 20 50 Q 50 20 80 50 Q 50 80 20 50" fill="none" stroke={colors.brass} strokeWidth="1.5"/>
      <path d="M 30 50 Q 50 30 70 50 Q 50 70 30 50" fill="none" stroke={currentText} strokeWidth="1" opacity="0.7"/>
      <circle cx="50" cy="50" r="6" fill={colors.terracotta}/>
      <line x1="5" y1="50" x2="95" y2="50" stroke={currentText} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5"/>
      <line x1="50" y1="5" x2="50" y2="95" stroke={currentText} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5"/>
    </svg>
  );
  const Logo42 = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
      <rect x="25" y="25" width="50" height="50" fill="none" stroke={currentText} strokeWidth="0.5" transform="rotate(45 50 50)" opacity="0.6"/>
      <rect x="35" y="35" width="30" height="30" fill="none" stroke={colors.brass} strokeWidth="1.5" transform="rotate(45 50 50)"/>
      <circle cx="50" cy="50" r="5" fill={colors.terracotta}/>
      <line x1="50" y1="5" x2="50" y2="25" stroke={currentText} strokeWidth="1"/>
      <line x1="50" y1="75" x2="50" y2="95" stroke={currentText} strokeWidth="1"/>
      <line x1="5" y1="50" x2="25" y2="50" stroke={currentText} strokeWidth="1"/>
      <line x1="75" y1="50" x2="95" y2="50" stroke={currentText} strokeWidth="1"/>
    </svg>
  );

  const concepts: Array<{ id: number; title: string; desc: string; component: React.ReactNode; layout: 'horizontal' | 'vertical' | 'none'; fontTheme: keyof typeof fontThemes }> = [
    // Simple Series (1-15)
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
    { id: 11, title: 'The Golden Spiral', desc: 'Mathematical perfection. A delicate Fibonacci spiral intersecting a subtle "M". Unbelievably refined and visually harmonious.', component: <Logo11 />, layout: 'horizontal', fontTheme: 'avantgarde' },
    { id: 12, title: 'The Parallel Horizon', desc: 'Two stacked, off-center lines representing an elegant table setting or horizon. The ultimate expression of "less is more".', component: <Logo12 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 13, title: 'The Fluted Glass', desc: 'Vertical lines inspired by premium fluted bistro glassware and the historic Cathedral organs, fading beautifully at the edges.', component: <Logo13 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 14, title: 'The Empty Canvas', desc: 'A massive, thin circle with a tiny, pristine monogram pushed to the edge. Embraces extreme negative space for a gallery-like feel.', component: <Logo14 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 15, title: 'The Eternal Flow', desc: 'Extremely avant-garde. An unbroken infinity-ribbon defying rigid geometry. It flows like luxury fashion or evening conversation.', component: <Logo15 />, layout: 'horizontal', fontTheme: 'artdeco' },
    
    // Deeper Meaning Series (16-30)
    { id: 16, title: 'The Lingua Franca', desc: 'Directly from your feedback: The word "Mosaic" translated into French, German, Japanese, and Arabic, forming a unified global circle.', component: <Logo16 />, layout: 'none', fontTheme: 'editorial' },
    { id: 17, title: 'The Gathering Table', desc: 'An abstract, overhead view of paths converging at a round table. A subtle nod to the "living room" community aspect of the business plan.', component: <Logo17 />, layout: 'horizontal', fontTheme: 'modern' },
    { id: 18, title: 'Woven Tapestry', desc: 'Different geometric threads crossing over one another to weave a unified fabric. Symbolizes the blending of global cultures.', component: <Logo18 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 19, title: 'The Compass Rose', desc: 'A deeply meaningful symbol of travel, direction, and worldly origin, executed in a refined, high-end nautical aesthetic.', component: <Logo19 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 20, title: 'The Convergence', desc: 'Eight lines arriving from all directions to meet at a central, golden focal point. Represents Cathedral Square as the meeting place.', component: <Logo20 />, layout: 'horizontal', fontTheme: 'artdeco' },
    { id: 21, title: 'The Meridian Globe', desc: 'A sophisticated, abstract take on the globe using only delicate meridian lines, stripping away the bulky "clipart" map shapes.', component: <Logo21 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 22, title: 'The Cultural Knot', desc: 'Inspired by global knotwork (Celtic, Asian, Nordic). Two endless loops entwined, representing inseparable human connection.', component: <Logo22 />, layout: 'horizontal', fontTheme: 'heritage' },
    { id: 23, title: 'The Human Element', desc: 'Lines that mimic both a topographical map and a human fingerprint. A meaningful reminder that the food and music are rooted in people.', component: <Logo23 />, layout: 'vertical', fontTheme: 'avantgarde' },
    { id: 24, title: 'Day & Night', desc: 'Overlapping phases of the sun and moon. Meaningfully visualizes the transition from daytime Bistro to evening Social lounge.', component: <Logo24 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 25, title: 'The True Mosaic', desc: 'Instead of blocky tiles, a true mosaic of dozens of distinct, scattered points coming together to form a unified sphere.', component: <Logo25 />, layout: 'horizontal', fontTheme: 'artdeco' },
    { id: 26, title: 'The Astrolabe', desc: 'Concentric circles and precise celestial markings. A nod to timeless navigation and the international, worldly aspect of the menu.', component: <Logo26 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 27, title: 'The Venn Tapestry', desc: 'Three intersecting rings representing food, drink, and social life, forming a unified, central "shard" in the negative space.', component: <Logo27 />, layout: 'horizontal', fontTheme: 'artdeco' },
    { id: 28, title: 'The Ripple Effect', desc: 'Concentric ripples radiating from a single terracotta drop. Showcases how a single great space can influence the entire culture around it.', component: <Logo28 />, layout: 'vertical', fontTheme: 'avantgarde' },
    { id: 29, title: 'The Fragmented Enso', desc: 'A deconstructed, perfect circle. Represents the organic, ever-evolving nature of culinary arts and human social connection.', component: <Logo29 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 30, title: 'The Zenith', desc: 'Completely outside the box. An abstract table setting perspective suspended beneath a geometric, culinary spark.', component: <Logo30 />, layout: 'vertical', fontTheme: 'avantgarde' },

    // Avant-Garde Gallery Series (31-42)
    { id: 31, title: 'The Isometric Monolith', desc: 'Overlapping transparent polygons simulating layered, fluted glass. Extremely modern, architectural, and deeply sophisticated.', component: <Logo31 />, layout: 'vertical', fontTheme: 'gallery' },
    { id: 32, title: 'Acoustic Resonance', desc: 'Fine, intersecting wave lines representing the social and music aspect. High-class audio-visual vibe, like a luxury sound system.', component: <Logo32 />, layout: 'horizontal', fontTheme: 'gallery' },
    { id: 33, title: 'The Kinetic Sphere', desc: 'A wireframe sphere made of offset ellipses. Very tech-meets-luxury, breaking away entirely from traditional static logos.', component: <Logo33 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 34, title: 'The Chiaroscuro', desc: 'A play on shadow, light, and depth using an optical illusion where the \'M\' is formed purely in the negative space of a 3D box.', component: <Logo34 />, layout: 'vertical', fontTheme: 'gallery' },
    { id: 35, title: 'Ethereal Silk', desc: 'Wavy, parallel contour lines that look like draped fabric or topography. Flows beautifully and feels extremely high-fashion.', component: <Logo35 />, layout: 'horizontal', fontTheme: 'gallery' },
    { id: 36, title: 'Radial Guilloché', desc: 'A complex, overlapping geometric mandala. Emulates the extreme precision found on luxury watch faces or bespoke currency.', component: <Logo36 />, layout: 'vertical', fontTheme: 'gallery' },
    { id: 37, title: 'The Impossible Triangle', desc: 'A Penrose triangle crafted from incredibly thin, elegant lines. Represents a space that defies expectations and traditional boundaries.', component: <Logo37 />, layout: 'vertical', fontTheme: 'avantgarde' },
    { id: 38, title: 'The Constellation', desc: 'A network of fine dots and connecting nodes forming an abstract, celestial "M". Highlights the connectivity of the social space.', component: <Logo38 />, layout: 'horizontal', fontTheme: 'gallery' },
    { id: 39, title: 'Celestial Eclipse', desc: 'Overlapping, offset wireframe rings creating a stunning crescent moon shape in the void. Speaks to the evening atmosphere.', component: <Logo39 />, layout: 'vertical', fontTheme: 'gallery' },
    { id: 40, title: 'The Apex', desc: 'An extruded, isometric pyramid viewed from above, using varying opacities. Striking, bold, and entirely conceptual.', component: <Logo40 />, layout: 'vertical', fontTheme: 'gallery' },
    { id: 41, title: 'The Lens Refraction', desc: 'Intersecting curves creating an optical lens effect. Symbolizes bringing global culture perfectly into focus in Milwaukee.', component: <Logo41 />, layout: 'horizontal', fontTheme: 'gallery' },
    { id: 42, title: 'The Suspended Core', desc: 'Concentric geometric shapes (square, diamond, circle) precisely suspended by architectural tethers. Pure modern art gallery exhibit.', component: <Logo42 />, layout: 'vertical', fontTheme: 'gallery' }
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
          Exploring 42 entirely new, elevated visual identities. Moving away from literal illustrations, we are focusing on three distinct directions: <strong className="font-semibold">hyper-minimalist elegance</strong>, <strong className="font-semibold">deeper symbolism</strong>, and <strong className="font-semibold">avant-garde conceptual art</strong>.
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
                  onClick={() => setActiveScheme(key as keyof typeof allSchemes)}
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Theme 1 */}
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Pairing 01: Editorial</span>
              <div className="text-4xl font-light mb-2" style={{ fontFamily: fontThemes.editorial.primary }}>Aa</div>
              <h3 className="text-md tracking-wider mb-2" style={{ fontFamily: fontThemes.editorial.primary }}>Didot + Sans</h3>
              <p className="text-xs opacity-60 font-light leading-relaxed">High-contrast, high-fashion serif. Instantly communicates fine dining.</p>
            </div>

            {/* Theme 2 */}
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Pairing 02: Heritage</span>
              <div className="text-4xl font-light mb-2" style={{ fontFamily: fontThemes.heritage.primary }}>Aa</div>
              <h3 className="text-md tracking-wider mb-2" style={{ fontFamily: fontThemes.heritage.primary }}>Garamond + Avenir</h3>
              <p className="text-xs opacity-60 font-light leading-relaxed">A softer, more historic serif honoring the 1900s architecture. Warm and established.</p>
            </div>

            {/* Theme 3 */}
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Pairing 03: Art Deco</span>
              <div className="text-4xl font-light mb-2 uppercase" style={{ fontFamily: fontThemes.artdeco.primary }}>Aa</div>
              <h3 className="text-md tracking-wider mb-2 uppercase" style={{ fontFamily: fontThemes.artdeco.primary }}>Futura + Mono</h3>
              <p className="text-xs opacity-60 font-light leading-relaxed">A geometric, uppercase styling that nods to the roaring 20s social clubs.</p>
            </div>

            {/* Theme 4 */}
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Pairing 04: Modern</span>
              <div className="text-4xl font-light mb-2" style={{ fontFamily: fontThemes.modern.primary }}>Aa</div>
              <h3 className="text-md tracking-wider mb-2" style={{ fontFamily: fontThemes.modern.primary }}>Pure Geometric</h3>
              <p className="text-xs opacity-60 font-light leading-relaxed">A completely sans-serif approach. Highly legible and aggressively modern.</p>
            </div>

            {/* Theme 5 */}
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Pairing 05: Gallery</span>
              <div className="text-4xl font-light mb-2 uppercase" style={{ fontFamily: fontThemes.gallery.primary }}>Aa</div>
              <h3 className="text-md tracking-wider mb-2 uppercase" style={{ fontFamily: fontThemes.gallery.primary }}>Optima / Cinzel</h3>
              <p className="text-xs opacity-60 font-light leading-relaxed">A breathtaking, high-end display sans-serif. Distinctly museum-quality and architectural.</p>
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

      {/* Grid Showcase - Part 3 (Moved to Top) */}
      <main className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.gallery.primary }}>I. The Avant-Garde Gallery Series</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">Extremely out of the box. Conceptual art relying on optical illusions, kinetic wireframes, and architectural intersections to create unprecedented, high-end luxury emblems.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {concepts.slice(30, 42).map((concept) => (
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

      {/* Grid Showcase - Part 1 (Moved to Middle) */}
      <main className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="mb-10 text-center mt-12">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.editorial.primary }}>II. The Simple & Elevated Series</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">Hyper-minimalist concepts relying on elegant proportions, very thin lines, and negative space to convey a high-end, established presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {concepts.slice(0, 15).map((concept) => (
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

      {/* Grid Showcase - Part 2 (Moved to Bottom) */}
      <main className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="mb-10 text-center mt-12">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.editorial.primary }}>III. The Deeper Meaning Series</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">Thoughtful, symbolic designs exploring global convergence, human connection, and culture without relying on literal "clipart" imagery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {concepts.slice(15, 30).map((concept) => (
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
