import { useState } from 'react';
import { Moon, Sun, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';

// --- STRICT MODE COMPLIANCE ---
// All functional components moved OUTSIDE the main App export to prevent 
// React unmounted nested component errors and Vercel/Vite strict-lint failures.

const fontThemes = {
  editorial: { primary: "'Didot', 'Bodoni MT', 'Playfair Display', serif", secondary: "'Montserrat', sans-serif" }
};

interface LogoProps {
  textCol: string;
  brassCol: string;
  accentCol: string;
}

// The Chosen Design: Variation 01 (Empty Canvas, Centered M, Top-Left Dot)
const CanvasLogo = ({ textCol, brassCol, accentCol }: LogoProps) => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-sm">
    {/* Minimalist Brass Ring */}
    <circle cx="50" cy="50" r="45" fill="none" stroke={brassCol} strokeWidth="0.5" />
    {/* Vertically Centered M */}
    <path d="M 65 60 L 65 40 L 75 50 L 85 40 L 85 60" fill="none" stroke={textCol} strokeWidth="1" strokeLinejoin="miter" />
    {/* Original Upper-Left Accent Anchor */}
    <circle cx="25" cy="35" r="1.5" fill={accentCol} />
  </svg>
);

interface WordmarkProps {
  layout?: 'vertical' | 'horizontal';
  className?: string;
  textCol: string;
}

const Wordmark = ({ layout = 'vertical', className = '', textCol }: WordmarkProps) => {
  const { primary, secondary } = fontThemes.editorial;
  
  if (layout === 'horizontal') {
    return (
      <div className={`flex flex-col justify-center ${className}`} style={{ fontFamily: secondary, color: textCol }}>
        <div className="flex items-baseline space-x-2 mb-1">
          <span className="text-sm tracking-[0.3em] font-light">THE</span>
          <span className="text-4xl tracking-widest font-light uppercase" style={{ fontFamily: primary }}>MOSAIC</span>
        </div>
        <span className="text-[0.55rem] tracking-[0.3em] uppercase opacity-60">International Bistro + Social</span>
      </div>
    );
  }
  
  return (
    <div className={`flex flex-col items-center mt-6 ${className}`} style={{ fontFamily: secondary, color: textCol }}>
      <div className="text-[0.6rem] tracking-[0.4em] font-light mb-2">THE</div>
      <div className="text-4xl sm:text-5xl tracking-[0.15em] font-light uppercase" style={{ fontFamily: primary }}>MOSAIC</div>
      <div className="text-[0.55rem] font-light tracking-[0.3em] mt-3 opacity-60 text-center uppercase">International Bistro + Social</div>
    </div>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Exact 3 color pairings requested by the client, locked to the signature brass
  const colorways = [
    {
      id: 'midnight',
      title: 'Option 1: Midnight & Brass',
      desc: 'Your current favorite. A deep, elegant navy background paired flawlessly with burnished brass and a warm terracotta accent.',
      darkBg: '#12171E', lightBg: '#F7F5F0',
      brass: '#C5A059', accent: '#A85A46',
      darkText: '#1A2430', lightText: '#F7F5F0'
    },
    {
      id: 'velvet',
      title: 'Option 2: Crimson Velvet & Brass',
      desc: 'Rich, passionate, and atmospheric. A deep burgundy velvet canvas highlighting the brilliant brass linework.',
      darkBg: '#1A0500', lightBg: '#FDFBF7',
      brass: '#C5A059', accent: '#E37A5E',
      darkText: '#2A0800', lightText: '#FDFBF7'
    },
    {
      id: 'onyx',
      title: 'Option 3: Onyx & Brass',
      desc: 'Industrial, chic, and incredibly modern. True onyx black providing the absolute highest contrast for the brass monogram.',
      darkBg: '#121214', lightBg: '#F4F4F2',
      brass: '#C5A059', accent: '#5C747A',
      darkText: '#1C1C1E', lightText: '#F4F4F2'
    }
  ];

  // Base page colors for the UI wrapping the cards
  const pageBg = isDarkMode ? '#0A0A0A' : '#EAEAEA';
  const pageText = isDarkMode ? '#FAFAFA' : '#111111';

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out font-sans" style={{ backgroundColor: pageBg, color: pageText, fontFamily: fontThemes.editorial.secondary }}>
      <header className="px-8 py-16 md:py-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-medium tracking-widest uppercase" style={{ borderColor: 'rgba(197,160,89,0.5)', color: '#C5A059' }}>
          <Globe2 size={14} /><span>Final Color Comparison</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8" style={{ fontFamily: fontThemes.editorial.primary }}>
          The Empty Canvas
        </h1>
        <p className="max-w-3xl text-lg md:text-xl opacity-70 font-light mb-12 leading-relaxed">
          You've selected the perfect mark. Below is Variation 01 (Empty Canvas, Centered Monogram) showcased in your favorite Midnight pairing, alongside the requested Crimson Velvet and Onyx alternatives.
        </p>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="flex items-center space-x-3 px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-80 border" 
          style={{ backgroundColor: isDarkMode ? 'transparent' : pageText, color: isDarkMode ? pageText : pageBg, borderColor: pageText }}
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}<span>Switch to {isDarkMode ? 'Day' : 'Night'} Environments</span>
        </button>
      </header>

      <main className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {colorways.map((cw) => {
            // Determine active colors for this specific card based on the global light/dark toggle
            const cardBg = isDarkMode ? cw.darkBg : cw.lightBg;
            const cardText = isDarkMode ? cw.lightText : cw.darkText;

            return (
              <div 
                key={cw.id} 
                className="group relative rounded-xl flex flex-col h-full transition-all duration-500 hover:shadow-2xl overflow-hidden border" 
                style={{ 
                  backgroundColor: cardBg, 
                  borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  boxShadow: isDarkMode ? '0 10px 40px rgba(0,0,0,0.5)' : '0 10px 40px rgba(0,0,0,0.05)' 
                }}
              >
                {/* Visual Lockup */}
                <div className="flex-grow flex flex-col items-center justify-center py-16 px-8">
                  <CanvasLogo textCol={cardText} brassCol={cw.brass} accentCol={cw.accent} />
                  <Wordmark textCol={cardText} layout="vertical" />
                </div>

                {/* Information Footer */}
                <div className="mt-auto px-8 py-8 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <CheckCircle2 size={20} className="opacity-100 transition-opacity" style={{ color: cw.brass }} />
                    <div className="flex space-x-2">
                      <div className="w-5 h-5 rounded-full border shadow-sm" style={{ backgroundColor: cardBg, borderColor: 'rgba(128,128,128,0.2)' }} title="Background" />
                      <div className="w-5 h-5 rounded-full border shadow-sm" style={{ backgroundColor: cw.brass, borderColor: 'rgba(128,128,128,0.2)' }} title="Brass Core" />
                      <div className="w-5 h-5 rounded-full border shadow-sm" style={{ backgroundColor: cw.accent, borderColor: 'rgba(128,128,128,0.2)' }} title="Accent Dot" />
                    </div>
                  </div>
                  <h3 className="text-xl tracking-wide mb-3 font-light" style={{ color: cardText, fontFamily: fontThemes.editorial.primary }}>
                    {cw.title}
                  </h3>
                  <p className="text-sm opacity-70 font-light leading-relaxed" style={{ color: cardText }}>
                    {cw.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="border-t py-16 text-center" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.1)' }}>
        <p className="font-light tracking-widest uppercase text-[0.65rem] opacity-50 flex items-center justify-center gap-2">
          Designed for The Mosaic LLC <ArrowRight size={12}/> 2026
        </p>
      </footer>
    </div>
  );
}
