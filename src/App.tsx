import { useState } from 'react';
import { Moon, Sun, ArrowRight, CheckCircle2, Type } from 'lucide-react';

// --- SHARED BRAND COLORS ---
const colors = {
  velvet: '#1A0500',
  brass: '#C5A059',
  blush: '#E37A5E',
  cream: '#FDFBF7',
  ink: '#2A0800',
};

// --- TYPESCRIPT INTERFACES ---
interface CanvasLogoProps {
  textCol: string;
  brassCol: string;
  accentCol: string;
  className?: string;
}

interface WordmarkProps {
  layout?: 'vertical' | 'horizontal';
  primaryFont: string;
  secondaryFont: string;
  textCol: string;
  className?: string;
}

// --- REUSABLE COMPONENTS ---
const CanvasLogo = ({ textCol, brassCol, accentCol, className = "w-24 h-24" }: CanvasLogoProps) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="45" fill="none" stroke={brassCol} strokeWidth="0.75" />
    <path d="M 65 60 L 65 40 L 75 50 L 85 40 L 85 60" fill="none" stroke={textCol} strokeWidth="1.5" strokeLinejoin="miter" />
    <circle cx="25" cy="35" r="2" fill={accentCol} />
  </svg>
);

const Wordmark = ({ layout = 'vertical', primaryFont, secondaryFont, textCol, className = '' }: WordmarkProps) => {
  if (layout === 'horizontal') {
    return (
      <div className={`flex flex-col justify-center ${className}`} style={{ color: textCol }}>
        <div className="text-4xl sm:text-5xl tracking-[0.15em] mb-1" style={{ fontFamily: primaryFont }}>
          MOSAIC
        </div>
        <span className="text-[0.6rem] tracking-[0.25em] uppercase opacity-70" style={{ fontFamily: secondaryFont }}>
          International Bistro + Social
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center mt-6 ${className}`} style={{ color: textCol }}>
      <div className="text-4xl sm:text-5xl tracking-[0.15em] uppercase" style={{ fontFamily: primaryFont }}>
        MOSAIC
      </div>
      <div className="text-[0.55rem] tracking-[0.25em] mt-3 opacity-70 text-center uppercase" style={{ fontFamily: secondaryFont }}>
        International Bistro + Social
      </div>
    </div>
  );
};

export default function TypographyDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentBg = isDarkMode ? colors.velvet : colors.cream;
  const currentText = isDarkMode ? colors.cream : colors.ink;
  const currentCardBg = isDarkMode ? 'rgba(255,255,255,0.03)' : '#FFFFFF';
  const currentBorder = isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

  // --- TYPOGRAPHY PAIRINGS ---
  const fontOptions = [
    {
      id: 1,
      title: 'The Baseline (Original)',
      desc: 'The original pairing. Playfair brings high-contrast luxury, while Montserrat grounds it with geometric, modern readability.',
      primary: { name: 'Playfair Display', css: "'Playfair Display', serif" },
      secondary: { name: 'Montserrat', css: "'Montserrat', sans-serif" }
    },
    {
      id: 2,
      title: 'The Classic Editorial',
      desc: 'Bodoni is the quintessential fashion-house font. Paired with Jost, it feels incredibly bespoke, sharp, and high-end.',
      primary: { name: 'Bodoni Moda', css: "'Bodoni Moda', serif" },
      secondary: { name: 'Jost', css: "'Jost', sans-serif" }
    },
    {
      id: 3,
      title: 'The Artisan',
      desc: 'Cormorant features beautiful, sweeping curves and a slightly larger, airier feel. Lato provides a warm, semi-rounded modern contrast.',
      primary: { name: 'Cormorant Garamond', css: "'Cormorant Garamond', serif" },
      secondary: { name: 'Lato', css: "'Lato', sans-serif" }
    },
    {
      id: 4,
      title: 'The Contemporary',
      desc: 'Prata offers softer, teardrop terminals for a highly elegant look. Lexend provides an ultra-clean, wide stance for the sub-font.',
      primary: { name: 'Prata', css: "'Prata', serif" },
      secondary: { name: 'Lexend', css: "'Lexend', sans-serif" }
    },
    {
      id: 5,
      title: 'The Crisp Minimalist',
      desc: 'Lustria brings robust, clean Roman proportions. Questrial is a beautiful, full-circle sans-serif that aligns perfectly with the logo ring.',
      primary: { name: 'Lustria', css: "'Lustria', serif" },
      secondary: { name: 'Questrial', css: "'Questrial', sans-serif" }
    },
    {
      id: 6,
      title: 'The Modern Gallery',
      desc: 'Cinzel provides sharp, classical proportions with a contemporary edge, while Raleway offers a beautifully balanced, elegant sans-serif finish.',
      primary: { name: 'Cinzel', css: "'Cinzel', serif" },
      secondary: { name: 'Raleway', css: "'Raleway', sans-serif" }
    },
    {
      id: 7,
      title: 'The Heritage',
      desc: 'Lora brings a warm, approachable, and highly readable serif texture, contrasted by Inter\'s purely neutral and modern geometric spacing.',
      primary: { name: 'Lora', css: "'Lora', serif" },
      secondary: { name: 'Inter', css: "'Inter', sans-serif" }
    },
    {
      id: 8,
      title: 'The Avant-Garde',
      desc: 'DM Serif Display brings massive contrast and high-fashion drama. Outfit supports it with wide, welcoming, and ultra-modern geometric lines.',
      primary: { name: 'DM Serif Display', css: "'DM Serif Display', serif" },
      secondary: { name: 'Outfit', css: "'Outfit', sans-serif" }
    },
    {
      id: 9,
      title: 'The Roman Classic',
      desc: 'Marcellus offers flared serifs inspired by classic Roman inscriptions. Jura complements it with an elegant, subtly squared technological sans.',
      primary: { name: 'Marcellus', css: "'Marcellus', serif" },
      secondary: { name: 'Jura', css: "'Jura', sans-serif" }
    },
    {
      id: 10,
      title: 'The Sophisticate',
      desc: 'Gilda Display is a high-contrast serif that feels incredibly luxurious and bespoke. Manrope pairs with it as an articulate, sleek modern sans.',
      primary: { name: 'Gilda Display', css: "'Gilda Display', serif" },
      secondary: { name: 'Manrope', css: "'Manrope', sans-serif" }
    }
  ];

  return (
    <>
      <style>
        {`
          /* Import all 10 curated Google Fonts for testing */
          @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,600&family=Cinzel:wght@400;600&family=Cormorant+Garamond:wght@400;600&family=DM+Serif+Display&family=Gilda+Display&family=Inter:wght@300;400&family=Jost:wght@300;400;500&family=Jura:wght@300;400;500&family=Lato:wght@300;400&family=Lexend:wght@300;400&family=Lora:wght@400;600&family=Lustria&family=Manrope:wght@300;400&family=Marcellus&family=Montserrat:wght@300;400;500&family=Outfit:wght@300;400&family=Playfair+Display:wght@400;600&family=Prata&family=Questrial&family=Raleway:wght@300;400;500&display=swap');
        `}
      </style>

      <div 
        className="min-h-screen transition-colors duration-500 ease-in-out font-sans"
        style={{ backgroundColor: currentBg, color: currentText }}
      >
        {/* Header */}
        <header className="px-8 py-12 md:py-20 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border mb-6 text-sm font-semibold tracking-wider uppercase" style={{ borderColor: currentBorder }}>
            <Type size={16} />
            <span>Typography Refinement</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Font Explorations
          </h1>
          <p className="max-w-2xl text-lg md:text-xl opacity-80 font-medium mb-10 leading-relaxed">
            We have stripped "THE" from the lockup for a stronger, more iconic presence. Below are 10 curated serif/sans-serif pairings that maintain our upscale, editorial aesthetic.
          </p>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center space-x-3 px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg border"
            style={{ backgroundColor: isDarkMode ? colors.ink : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : colors.ink, borderColor: currentBorder }}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>Preview in {isDarkMode ? 'Light' : 'Velvet'} Environment</span>
          </button>
        </header>

        {/* Grid Showcase */}
        <main className="px-6 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {fontOptions.map((opt) => (
              <div 
                key={opt.id}
                className="group relative rounded-3xl p-8 flex flex-col h-full border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                style={{ borderColor: currentBorder, backgroundColor: currentCardBg }}
              >
                {/* Logo Display Area */}
                <div className="flex-grow flex flex-col items-center justify-center py-12 relative">
                  <CanvasLogo textCol={currentText} brassCol={colors.brass} accentCol={colors.blush} className="w-24 h-24 sm:w-28 sm:h-28 relative z-10" />
                  
                  <Wordmark 
                    layout="vertical" 
                    textCol={currentText} 
                    primaryFont={opt.primary.css} 
                    secondaryFont={opt.secondary.css} 
                    className="relative z-10"
                  />
                </div>

                {/* Description Area */}
                <div className="mt-8 pt-6 border-t" style={{ borderColor: currentBorder }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs tracking-widest font-bold opacity-50 uppercase">Option 0{opt.id}</span>
                    <CheckCircle2 size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.brass }} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{opt.title}</h3>
                  
                  <div className="flex flex-col space-y-2 mb-5">
                    <div className="flex items-center text-sm">
                      <span className="w-20 opacity-60 font-medium">Primary:</span>
                      <span className="font-bold tracking-wide" style={{ fontFamily: opt.primary.css }}>{opt.primary.name}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="w-20 opacity-60 font-medium">Sub-font:</span>
                      <span className="font-bold tracking-wide" style={{ fontFamily: opt.secondary.css }}>{opt.secondary.name}</span>
                    </div>
                  </div>

                  <p className="text-sm opacity-70 leading-relaxed font-medium">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t py-12 text-center" style={{ borderColor: currentBorder }}>
          <p className="font-bold tracking-wider uppercase text-sm opacity-60 flex items-center justify-center gap-2">
            Designed for Mosaic LLC <ArrowRight size={14}/> 2026
          </p>
        </footer>
      </div>
    </>
  );
}
