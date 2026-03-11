import React, { useState } from 'react';
import { Moon, Sun, ArrowRight, CheckCircle2, Globe2, Type, Palette } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Core Brand Colors based on the provided image and business plan
  const colors = {
    teal: '#255855',
    orange: '#CD6B32',
    gold: '#ECA843',
    brown: '#7C3A2B',
    darkBg: '#0f2926',
    lightBg: '#F9F8F6',
    darkText: '#333333',
    lightText: '#F1EDE4',
  };

  const currentBg = isDarkMode ? colors.darkBg : colors.lightBg;
  const currentText = isDarkMode ? colors.lightText : colors.darkText;

  interface WordmarkProps {
    layout?: 'vertical' | 'horizontal' | 'inline' | 'none';
    className?: string;
  }

  // Reusable Wordmark Component to keep typography consistent
  const Wordmark: React.FC<WordmarkProps> = ({ layout = 'vertical', className = '' }) => {
    if (layout === 'horizontal') {
      return (
        <div className={`flex flex-col justify-center ${className}`}>
          <div className="flex items-end leading-none mb-1">
            <span className="text-sm font-bold tracking-widest mr-2 pb-1">THE</span>
            <span className="text-4xl font-extrabold tracking-tight">MOSAIC</span>
          </div>
          <span className="text-[0.6rem] font-bold tracking-[0.2em] opacity-80 uppercase">
            International Bistro + Social
          </span>
        </div>
      );
    }

    if (layout === 'inline') {
      return (
        <div className={`flex items-center space-x-3 ${className}`}>
          <span className="text-3xl font-extrabold tracking-tight">THE MOSAIC</span>
        </div>
      );
    }

    // Default Vertical Layout (matches reference image)
    return (
      <div className={`flex flex-col items-center mt-4 ${className}`}>
        <div className="relative w-full flex justify-center">
          <div className="absolute left-0 top-1 text-sm font-bold tracking-wider">THE</div>
          <div className="text-5xl font-extrabold tracking-tight ml-8">MOSAIC</div>
        </div>
        <div className="text-xs font-bold tracking-[0.2em] mt-2 opacity-80 text-center uppercase">
          International Bistro + Social
        </div>
      </div>
    );
  };

  // --- SVG ICON CONCEPTS --- //

  // 1. The Exact Recreation
  const Logo1 = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-sm">
      <clipPath id="globeClip">
        <circle cx="50" cy="50" r="48" />
      </clipPath>
      <g clipPath="url(#globeClip)">
        {/* Background Colored Blocks */}
        <rect x="0" y="0" width="35" height="35" fill={colors.gold} />
        <rect x="35" y="0" width="30" height="35" fill={colors.teal} />
        <rect x="65" y="0" width="35" height="35" fill={colors.orange} />
        
        <rect x="0" y="35" width="35" height="30" fill={colors.brown} />
        <rect x="35" y="35" width="30" height="30" fill={colors.gold} />
        <rect x="65" y="35" width="35" height="30" fill={colors.brown} />
        
        <rect x="0" y="65" width="35" height="35" fill={colors.orange} />
        <rect x="35" y="65" width="30" height="35" fill={colors.teal} />
        <rect x="65" y="65" width="35" height="35" fill={colors.gold} />
      </g>
      
      {/* Thick Grid Lines acting as "grout" */}
      <circle cx="50" cy="50" r="48" fill="none" stroke={currentText} strokeWidth="3.5" />
      <path d="M 50 2 L 50 98" stroke={currentText} strokeWidth="3.5" />
      <path d="M 2 50 L 98 50" stroke={currentText} strokeWidth="3.5" />
      <path d="M 28 8 Q 40 50 28 92" fill="none" stroke={currentText} strokeWidth="3.5" />
      <path d="M 72 8 Q 60 50 72 92" fill="none" stroke={currentText} strokeWidth="3.5" />
      <path d="M 8 28 Q 50 40 92 28" fill="none" stroke={currentText} strokeWidth="3.5" />
      <path d="M 8 72 Q 50 60 92 72" fill="none" stroke={currentText} strokeWidth="3.5" />
    </svg>
  );

  // 2. The Horizon (Minimalist Half-Globe)
  const Logo2 = () => (
    <svg viewBox="0 0 100 60" className="w-24 h-16 sm:w-32 sm:h-20 drop-shadow-sm">
      <clipPath id="horizonClip">
        <path d="M 10 55 A 40 40 0 0 1 90 55 Z" />
      </clipPath>
      <g clipPath="url(#horizonClip)">
        <rect x="10" y="0" width="40" height="55" fill={colors.teal} />
        <rect x="50" y="0" width="40" height="55" fill={colors.orange} />
        <circle cx="50" cy="55" r="25" fill={colors.gold} />
      </g>
      <path d="M 10 55 A 40 40 0 0 1 90 55 Z" fill="none" stroke={currentText} strokeWidth="4" />
      <path d="M 50 15 L 50 55" stroke={currentText} strokeWidth="4" />
      <path d="M 22 35 Q 50 45 78 35" fill="none" stroke={currentText} strokeWidth="4" />
      <path d="M 0 55 L 100 55" stroke={currentText} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );

  // 3. Cathedral Square (Stained Glass Arch)
  const Logo3 = () => (
    <svg viewBox="0 0 100 120" className="w-20 h-24 sm:w-24 sm:h-28 drop-shadow-sm">
      <clipPath id="archClip">
        <path d="M 20 60 L 20 110 L 80 110 L 80 60 A 30 30 0 0 0 20 60 Z" />
      </clipPath>
      <g clipPath="url(#archClip)">
        <polygon points="20,60 50,30 80,60 50,90" fill={colors.teal} />
        <polygon points="20,60 50,90 20,110" fill={colors.gold} />
        <polygon points="80,60 80,110 50,90" fill={colors.orange} />
        <polygon points="20,110 80,110 50,90" fill={colors.brown} />
      </g>
      <path d="M 20 60 L 20 110 L 80 110 L 80 60 A 30 30 0 0 0 20 60 Z" fill="none" stroke={currentText} strokeWidth="4" />
      <path d="M 20 60 L 80 60" stroke={currentText} strokeWidth="4" />
      <path d="M 50 30 L 50 110" stroke={currentText} strokeWidth="4" />
      <path d="M 20 60 L 50 90 L 80 60" fill="none" stroke={currentText} strokeWidth="4" />
    </svg>
  );

  // 4. The Mosaic Shield (New Crest)
  const Logo4 = () => (
    <svg viewBox="0 0 100 120" className="w-24 h-28 sm:w-28 sm:h-32 drop-shadow-sm">
      <clipPath id="shieldClip">
        <path d="M 10 10 L 90 10 L 90 60 Q 90 110 50 110 Q 10 110 10 60 Z" />
      </clipPath>
      <g clipPath="url(#shieldClip)">
        <rect x="10" y="10" width="40" height="40" fill={colors.teal} />
        <rect x="50" y="10" width="40" height="40" fill={colors.orange} />
        <rect x="10" y="50" width="40" height="60" fill={colors.gold} />
        <rect x="50" y="50" width="40" height="60" fill={colors.brown} />
        
        <path d="M 50 10 L 50 110" stroke={currentText} strokeWidth="4" />
        <path d="M 10 50 L 90 50" stroke={currentText} strokeWidth="4" />
      </g>
      <path d="M 10 10 L 90 10 L 90 60 Q 90 110 50 110 Q 10 110 10 60 Z" fill="none" stroke={currentText} strokeWidth="4" />
    </svg>
  );

  // 5. Convergence (Overlapping Cultures)
  const Logo5 = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-sm">
      <circle cx="40" cy="40" r="28" fill={colors.teal} opacity="0.8" style={{ mixBlendMode: 'multiply' }} />
      <circle cx="60" cy="40" r="28" fill={colors.gold} opacity="0.8" style={{ mixBlendMode: 'multiply' }} />
      <circle cx="50" cy="60" r="28" fill={colors.orange} opacity="0.8" style={{ mixBlendMode: 'multiply' }} />
      
      {/* Overlaid minimal globe lines */}
      <circle cx="50" cy="46" r="40" fill="none" stroke={currentText} strokeWidth="2" />
      <path d="M 50 6 L 50 86" stroke={currentText} strokeWidth="2" />
      <path d="M 10 46 L 90 46" stroke={currentText} strokeWidth="2" />
    </svg>
  );

  // 6. The Modern 'M' (Mosaic Lettermark)
  const Logo6 = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-sm">
      <clipPath id="mClip">
        <path d="M 10 90 L 10 20 L 50 60 L 90 20 L 90 90 L 70 90 L 70 45 L 50 65 L 30 45 L 30 90 Z" />
      </clipPath>
      <g clipPath="url(#mClip)">
        <rect x="0" y="0" width="50" height="100" fill={colors.teal} />
        <rect x="50" y="0" width="50" height="100" fill={colors.orange} />
        <polygon points="10,20 50,60 90,20" fill={colors.gold} />
        <polygon points="30,45 50,65 70,45 50,90" fill={colors.brown} />
      </g>
      <path d="M 10 90 L 10 20 L 50 60 L 90 20 L 90 90 L 70 90 L 70 45 L 50 65 L 30 45 L 30 90 Z" fill="none" stroke={currentText} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );

  // 7. The Global Pitch (Abstract Soccer/Sports nod)
  const Logo7 = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-sm">
      <circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="3" strokeDasharray="8 4" />
      <circle cx="50" cy="50" r="30" fill="none" stroke={currentText} strokeWidth="2" />
      <path d="M 20 50 Q 50 10 80 50 Q 50 90 20 50 Z" fill={colors.teal} opacity="0.9" />
      <path d="M 50 20 Q 90 50 50 80 Q 10 50 50 20 Z" fill={colors.orange} opacity="0.8" style={{ mixBlendMode: 'multiply' }} />
      <circle cx="50" cy="50" r="8" fill={colors.gold} />
    </svg>
  );

  // 8. Abstract Table (Bistro/Gathering focus)
  const Logo8 = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-sm">
      {/* Seats */}
      <circle cx="50" cy="15" r="8" fill={colors.teal} />
      <circle cx="85" cy="50" r="8" fill={colors.gold} />
      <circle cx="50" cy="85" r="8" fill={colors.orange} />
      <circle cx="15" cy="50" r="8" fill={colors.brown} />
      
      {/* Table */}
      <circle cx="50" cy="50" r="24" fill="none" stroke={currentText} strokeWidth="4" />
      <path d="M 38 38 L 62 62" stroke={currentText} strokeWidth="3" />
      <path d="M 62 38 L 38 62" stroke={currentText} strokeWidth="3" />
    </svg>
  );

  // 9. The Compass (Travel / Global motif)
  const Logo9 = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-sm">
      <circle cx="50" cy="50" r="40" fill="none" stroke={currentText} strokeWidth="2" />
      <polygon points="50,5 58,42 95,50 58,58 50,95 42,58 5,50 42,42" fill={currentText} />
      <polygon points="50,5 50,50 5,50 42,42" fill={colors.gold} />
      <polygon points="50,5 95,50 50,50 58,42" fill={colors.teal} />
      <polygon points="50,95 50,50 95,50 58,58" fill={colors.orange} />
      <polygon points="50,95 5,50 50,50 42,58" fill={colors.brown} />
    </svg>
  );

  // 10. Typographic Integration ('O' as the mosaic)
  const Logo10 = () => (
    <div className="flex flex-col items-center mt-6">
      <div className="text-sm font-bold tracking-widest mb-1">THE</div>
      <div className="flex items-center text-4xl sm:text-5xl font-extrabold tracking-tight">
        <span>M</span>
        <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-12 sm:h-12 mx-1 animate-spin-slow" style={{ animationDuration: '20s' }}>
          <circle cx="50" cy="50" r="45" fill={colors.teal} />
          <path d="M 50 5 L 95 50 L 50 95 L 5 50 Z" fill={colors.gold} />
          <path d="M 50 5 L 50 95" stroke={currentBg} strokeWidth="6" />
          <path d="M 5 50 L 95 50" stroke={currentBg} strokeWidth="6" />
        </svg>
        <span>SAIC</span>
      </div>
      <div className="text-[0.55rem] sm:text-xs font-bold tracking-[0.2em] mt-3 opacity-80 uppercase">
        International Bistro + Social
      </div>
    </div>
  );

  // 11. The Cornerstone (Isometric Mosaic)
  const Logo11 = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-sm">
      {/* Top Face */}
      <polygon points="50,15 80,30 50,45 20,30" fill={colors.gold} />
      {/* Left Face */}
      <polygon points="20,30 50,45 50,80 20,65" fill={colors.teal} />
      {/* Right Face */}
      <polygon points="50,45 80,30 80,65 50,80" fill={colors.orange} />
      
      {/* Mosaic Grid Lines */}
      <path d="M 50 15 L 50 80" stroke={currentText} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 20 30 L 50 45 L 80 30" fill="none" stroke={currentText} strokeWidth="3" strokeLinejoin="round" />
      
      {/* Inner Sub-tiles */}
      <path d="M 35 22.5 L 35 72.5" stroke={currentText} strokeWidth="2" opacity="0.6" />
      <path d="M 65 22.5 L 65 72.5" stroke={currentText} strokeWidth="2" opacity="0.6" />
      <path d="M 20 47.5 L 50 62.5 L 80 47.5" fill="none" stroke={currentText} strokeWidth="2" opacity="0.6" />
      <path d="M 35 37.5 L 65 22.5" fill="none" stroke={currentText} strokeWidth="2" opacity="0.6" />
      <path d="M 35 22.5 L 65 37.5" fill="none" stroke={currentText} strokeWidth="2" opacity="0.6" />
      
      {/* Cube Outline */}
      <polygon points="50,15 80,30 80,65 50,80 20,65 20,30" fill="none" stroke={currentText} strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );

  // 12. The Elegant Serif (Upscale Dining)
  const Logo12 = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm">
         {/* Abstract elegant mark */}
         <path d="M 40 5 L 75 40 L 40 75 L 5 40 Z" fill="none" stroke={colors.gold} strokeWidth="2" />
         <path d="M 40 15 L 65 40 L 40 65 L 15 40 Z" fill="none" stroke={colors.orange} strokeWidth="1.5" />
         <circle cx="40" cy="40" r="8" fill={colors.teal} />
      </svg>
      <div className="text-center" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        <div className="text-sm tracking-[0.3em] mb-2 font-bold" style={{ color: colors.gold }}>THE</div>
        <div className="text-4xl sm:text-5xl tracking-widest uppercase" style={{ color: currentText }}>Mosaic</div>
        <div className="text-[0.6rem] tracking-[0.2em] mt-3 uppercase font-bold" style={{ color: colors.orange }}>Bistro + Social</div>
      </div>
    </div>
  );

  // 13. The Navigator's Sphere (Armillary)
  const Logo13 = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-sm">
      {/* Outer framing ring */}
      <circle cx="50" cy="50" r="46" fill="none" stroke={currentText} strokeWidth="1.5" strokeDasharray="4 4" />
      {/* Prime Meridian */}
      <circle cx="50" cy="50" r="38" fill="none" stroke={colors.teal} strokeWidth="3" />
      
      {/* Ecliptic and Equator orbits */}
      <ellipse cx="50" cy="50" rx="38" ry="12" fill="none" stroke={colors.orange} strokeWidth="3" transform="rotate(-30 50 50)" />
      <ellipse cx="50" cy="50" rx="38" ry="12" fill="none" stroke={colors.gold} strokeWidth="3" transform="rotate(30 50 50)" />
      <ellipse cx="50" cy="50" rx="38" ry="6" fill="none" stroke={colors.brown} strokeWidth="2" />
      
      {/* Central Axis */}
      <path d="M 50 4 L 50 96" stroke={currentText} strokeWidth="4" strokeLinecap="round" />
      
      {/* Celestial body / core */}
      <circle cx="50" cy="50" r="8" fill={currentBg} stroke={currentText} strokeWidth="3" />
      <circle cx="50" cy="50" r="3" fill={colors.teal} />
      
      {/* Pivot nodes */}
      <circle cx="50" cy="12" r="4" fill={colors.gold} />
      <circle cx="50" cy="88" r="4" fill={colors.orange} />
    </svg>
  );

  // 14. The Cathedral Archway (Architectural Awning)
  const Logo14 = () => (
    <svg viewBox="0 0 120 100" className="w-28 h-24 sm:w-36 sm:h-28 drop-shadow-sm">
      {/* Architectural Archway */}
      <path d="M 20 90 L 20 50 A 40 40 0 0 1 100 50 L 100 90" fill="none" stroke={colors.teal} strokeWidth="8" />
      <path d="M 12 90 L 108 90" stroke={colors.brown} strokeWidth="4" />
      
      {/* Inner Mosaic Pattern */}
      <path d="M 28 90 L 28 50 A 32 32 0 0 1 92 50 L 92 90 Z" fill={colors.gold} opacity="0.15" />
      
      {/* Doorway / Inner Arch */}
      <path d="M 40 90 L 40 60 A 20 20 0 0 1 80 60 L 80 90" fill="none" stroke={colors.orange} strokeWidth="4" />
      <circle cx="60" cy="50" r="8" fill={colors.teal} />
    </svg>
  );

  // 15. The Cathedral Lantern (Bistro lighting)
  const Logo15 = () => (
    <svg viewBox="0 0 100 120" className="w-20 h-24 sm:w-24 sm:h-28 drop-shadow-md">
      {/* Lantern Handle */}
      <path d="M 40 20 C 40 5, 60 5, 60 20" fill="none" stroke={currentText} strokeWidth="3" />
      
      {/* Lantern Cap */}
      <path d="M 30 35 L 50 15 L 70 35 Z" fill={colors.brown} stroke={currentText} strokeWidth="2" strokeLinejoin="round" />
      
      {/* Glowing Stained Glass Panes */}
      <polygon points="35,35 65,35 60,90 40,90" fill={colors.gold} opacity="0.3" />
      <polygon points="40,35 50,35 50,90 45,90" fill={colors.orange} opacity="0.7" />
      <polygon points="50,35 60,35 55,90 50,90" fill={colors.teal} opacity="0.7" />
      
      {/* Lantern Frame */}
      <polygon points="35,35 65,35 60,90 40,90" fill="none" stroke={currentText} strokeWidth="4" strokeLinejoin="round" />
      <path d="M 40 90 L 60 90 L 65 105 L 35 105 Z" fill={colors.brown} stroke={currentText} strokeWidth="3" strokeLinejoin="round" />
      
      {/* Frame Crossbars */}
      <path d="M 38 60 L 62 60" stroke={currentText} strokeWidth="3" />
      <path d="M 50 35 L 50 90" stroke={currentText} strokeWidth="3" />
    </svg>
  );

  const concepts = [
    {
      id: 1,
      title: 'The Original Recreation',
      desc: 'An exact, pixel-perfect, scalable vector recreation of the reference image provided, incorporating the fixed typo and premium color palette.',
      component: <Logo1 />,
      layout: 'vertical'
    },
    {
      id: 2,
      title: 'The New Horizon',
      desc: 'A horizontal lockup framing the globe as a rising sun. Perfect for signage and menus, emphasizing the dawn of a new cultural renaissance in Milwaukee.',
      component: <Logo2 />,
      layout: 'horizontal'
    },
    {
      id: 3,
      title: 'Cathedral Glass',
      desc: 'A direct nod to the Cathedral Square location. Blends the stained-glass archways of historic architecture with the mosaic globe concept.',
      component: <Logo3 />,
      layout: 'vertical'
    },
    {
      id: 4,
      title: 'The Mosaic Shield',
      desc: 'A classic crest design reimagined with the brand\'s signature mosaic blocks. It conveys an established, premium identity suitable for uniforms and official branding.',
      component: <Logo4 />,
      layout: 'vertical'
    },
    {
      id: 5,
      title: 'Cultural Convergence',
      desc: 'Overlapping translucent circles represent the seamless blending of cultures, music, and sports mentioned in the business plan.',
      component: <Logo5 />,
      layout: 'horizontal'
    },
    {
      id: 6,
      title: 'The Modern Monogram',
      desc: 'A highly structured, architectural "M" built from mosaic tiles. Conveys the sophisticated, upscale interior remodel planned for the space.',
      component: <Logo6 />,
      layout: 'vertical'
    },
    {
      id: 7,
      title: 'The Global Pitch',
      desc: 'A subtle homage to the international sports and soccer identity. Geometric patterns echo a soccer ball while maintaining an abstract, high-end look.',
      component: <Logo7 />,
      layout: 'vertical'
    },
    {
      id: 8,
      title: 'The Global Table',
      desc: 'An abstract, overhead view of a bistro table surrounded by diverse seats. Reinforces the mission of being "Milwaukee\'s living room".',
      component: <Logo8 />,
      layout: 'horizontal'
    },
    {
      id: 9,
      title: 'The Explorer\'s Compass',
      desc: 'Combines the mosaic styling with a traditional compass rose. A metaphor for global discovery, travel, and the international menus.',
      component: <Logo9 />,
      layout: 'vertical'
    },
    {
      id: 10,
      title: 'The Typographic Mark',
      desc: 'A clean, modern typographic approach where the "O" becomes the mosaic symbol. Highly legible and perfectly adapted for digital UI.',
      component: <Logo10 />,
      layout: 'none'
    },
    {
      id: 11,
      title: 'The Cornerstone',
      desc: 'An isometric 3D mosaic cube representing the business plan\'s vision of being the "cornerstone" of Milwaukee\'s cultural renaissance.',
      component: <Logo11 />,
      layout: 'vertical'
    },
    {
      id: 12,
      title: 'The Elegant Serif',
      desc: 'A departure from the geometric modernism. This concept introduces an elegant serif typography and delicate linework for a highly upscale, fine-dining aesthetic.',
      component: <Logo12 />,
      layout: 'none'
    },
    {
      id: 13,
      title: 'The Navigator\'s Sphere',
      desc: 'A sophisticated departure from the traditional globe, inspired by the armillary spheres of ancient explorers. It evokes worldly discovery, premium craftsmanship, and an elevated international atmosphere.',
      component: <Logo13 />,
      layout: 'vertical'
    },
    {
      id: 14,
      title: 'The Cathedral Archway',
      desc: 'Directly inspired by the physical storefront and the 1900s historic architecture of Cathedral Square. Welcoming, grounded, and physically rooted in Milwaukee.',
      component: <Logo14 />,
      layout: 'vertical'
    },
    {
      id: 15,
      title: 'The Cathedral Lantern',
      desc: 'Inspired by European bistro lighting and the historic streets of Cathedral Square. A welcoming lantern utilizing the signature mosaic colors as illuminated stained-glass panes.',
      component: <Logo15 />,
      layout: 'vertical'
    }
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-500 ease-in-out font-sans"
      style={{ backgroundColor: currentBg, color: currentText }}
    >
      {/* Header */}
      <header className="px-8 py-12 md:py-20 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border mb-6 text-sm font-semibold tracking-wider uppercase" style={{ borderColor: currentText }}>
          <Globe2 size={16} />
          <span>Brand Identity Presentation</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          The Mosaic Concepts
        </h1>
        <p className="max-w-2xl text-lg md:text-xl opacity-80 font-medium mb-10 leading-relaxed">
          Exploring 15 unique visual identities for Milwaukee's premier international gathering place. Inspired by the Cathedral Square heritage, global cuisine, and the unifying power of sports.
        </p>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex items-center space-x-3 px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg"
          style={{ backgroundColor: currentText, color: currentBg }}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span>Preview {isDarkMode ? 'Light' : 'Dark'} Environment</span>
        </button>
      </header>

      {/* Typography Showcase */}
      <section className="px-6 pb-8 max-w-7xl mx-auto">
        <div className="border rounded-3xl p-8 md:p-12 transition-colors duration-500" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.02)' : '#FFFFFF' }}>
          <div className="flex items-center gap-3 mb-8">
            <Type size={24} style={{ color: colors.orange }} />
            <h2 className="text-2xl font-bold tracking-tight">Brand Typography Options</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Primary Font */}
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-4">Primary Brand Font</span>
              <div className="text-5xl font-extrabold tracking-tight mb-2 font-sans">Aa</div>
              <h3 className="text-xl font-bold mb-1 font-sans">Geometric Sans</h3>
              <p className="text-sm opacity-70 mb-4">Used for the primary "MOSAIC" logomark. Clean, legible, and highly modern.</p>
              <div className="text-sm opacity-60 font-medium tracking-wide">
                A B C D E F G H I J K L M <br />
                a b c d e f g h i j k l m <br />
                0 1 2 3 4 5 6 7 8 9
              </div>
            </div>

            {/* Serif Font */}
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-4">Upscale Alternative</span>
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Aa</div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Elegant Serif</h3>
              <p className="text-sm opacity-70 mb-4">Reserved for elevated fine-dining concepts (Concept 12) and formal menus.</p>
              <div className="text-sm opacity-60 italic tracking-wide" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                A B C D E F G H I J K L M <br />
                a b c d e f g h i j k l m <br />
                0 1 2 3 4 5 6 7 8 9
              </div>
            </div>

            {/* Monospace Font */}
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-4">Secondary/Accent Font</span>
              <div className="text-5xl font-bold mb-2 font-mono">Aa</div>
              <h3 className="text-xl font-bold mb-1 font-mono">Technical Mono</h3>
              <p className="text-sm opacity-70 mb-4">Used for sub-branding, timestamps, and travel motifs (Concept 11).</p>
              <div className="text-sm opacity-60 tracking-wider font-mono">
                A B C D E F G H I J K L M <br />
                a b c d e f g h i j k l m <br />
                0 1 2 3 4 5 6 7 8 9
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Showcase */}
      <section className="px-6 pb-16 max-w-7xl mx-auto">
        <div className="border rounded-3xl p-8 md:p-12 transition-colors duration-500" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.02)' : '#FFFFFF' }}>
          <div className="flex items-center gap-3 mb-8">
            <Palette size={24} style={{ color: colors.teal }} />
            <h2 className="text-2xl font-bold tracking-tight">Brand Color Palette</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Deep Teal', hex: colors.teal },
              { name: 'Warm Orange', hex: colors.orange },
              { name: 'Mustard Gold', hex: colors.gold },
              { name: 'Earthy Brown', hex: colors.brown }
            ].map((color) => (
              <div key={color.name} className="flex flex-col group">
                <div 
                  className="h-32 w-full rounded-2xl mb-4 shadow-sm border transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ backgroundColor: color.hex, borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }}
                />
                <h3 className="text-lg font-bold mb-1">{color.name}</h3>
                <p className="text-sm opacity-60 font-mono">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Showcase */}
      <main className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {concepts.map((concept) => (
            <div 
              key={concept.id}
              className="group relative rounded-3xl p-8 flex flex-col h-full border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              style={{ 
                borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.02)' : '#FFFFFF'
              }}
            >
              {/* Logo Display Area */}
              <div className="flex-grow flex flex-col items-center justify-center py-12">
                {concept.layout === 'horizontal' ? (
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {concept.component}
                    <Wordmark layout="horizontal" />
                  </div>
                ) : concept.layout === 'vertical' ? (
                  <div className="flex flex-col items-center">
                    {concept.component}
                    <Wordmark layout="vertical" />
                  </div>
                ) : (
                  <div className="flex justify-center w-full">
                    {concept.component}
                  </div>
                )}
              </div>

              {/* Description Area */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold opacity-50">Concept {concept.id < 10 ? `0${concept.id}` : concept.id}</span>
                  <CheckCircle2 size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.orange }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{concept.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  {concept.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 text-center" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
        <p className="font-bold tracking-wider uppercase text-sm opacity-60 flex items-center justify-center gap-2">
          Designed for The Mosaic LLC by Agency 6 <ArrowRight size={14}/> 2026
        </p>
      </footer>
    </div>
  );
}
