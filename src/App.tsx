import React, { useState } from 'react';
import { Moon, Sun, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';

// Moved outside to prevent nested component recreation and clear strict ESLint rules
const fontThemes = {
  editorial: { primary: "'Didot', 'Bodoni MT', 'Playfair Display', serif", secondary: "'Montserrat', sans-serif" }
};

interface WordmarkProps { layout?: 'vertical' | 'horizontal'; className?: string; theme?: keyof typeof fontThemes; }

const Wordmark: React.FC<WordmarkProps> = ({ layout = 'vertical', className = '', theme = 'editorial' }) => {
  const { primary, secondary } = fontThemes[theme];
  if (layout === 'horizontal') return (
    <div className={`flex flex-col justify-center ${className}`} style={{ fontFamily: secondary }}>
      <div className="flex items-baseline space-x-2 mb-1"><span className="text-sm tracking-[0.3em] font-light">THE</span><span className="text-4xl tracking-widest font-light uppercase" style={{ fontFamily: primary }}>MOSAIC</span></div>
      <span className="text-[0.55rem] tracking-[0.3em] uppercase opacity-60">International Bistro + Social</span>
    </div>
  );
  return (
    <div className={`flex flex-col items-center mt-6 ${className}`} style={{ fontFamily: secondary }}>
      <div className="text-[0.6rem] tracking-[0.4em] font-light mb-2">THE</div>
      <div className="text-4xl sm:text-5xl tracking-[0.15em] font-light uppercase" style={{ fontFamily: primary }}>MOSAIC</div>
      <div className="text-[0.55rem] font-light tracking-[0.3em] mt-3 opacity-60 text-center uppercase">International Bistro + Social</div>
    </div>
  );
};

const SvgWrap = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm">{children}</svg>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeScheme, setActiveScheme] = useState<'midnight' | 'emerald' | 'onyx' | 'crimson' | 'cobalt'>('midnight');

  const allSchemes = {
    midnight: {
      id: 'midnight', label: 'Midnight Brass', primary: '#1A2430', accent1: '#C5A059', accent2: '#A85A46', darkBg: '#12171E', lightBg: '#F7F5F0',
      names: { primary: 'Midnight Navy', accent1: 'Burnished Brass', accent2: 'Terracotta', lightBg: 'Warm Sand' },
      desc: { primary: 'Deep, mysterious background.', accent1: 'Premium metallic accent.', accent2: 'Warm culinary earth tone.', lightBg: 'Clean, elegant canvas.' }
    },
    crimson: {
      id: 'crimson', label: 'Crimson Velvet', primary: '#2A0800', accent1: '#D4AF37', accent2: '#E37A5E', darkBg: '#1A0500', lightBg: '#FDFBF7',
      names: { primary: 'Deep Burgundy', accent1: 'Champagne Gold', accent2: 'Dusty Rose', lightBg: 'Pearl White' },
      desc: { primary: 'Rich, passionate dining atmosphere.', accent1: 'Elegant, celebratory metallic.', accent2: 'Soft, inviting floral accent.', lightBg: 'Pristine, warm gallery canvas.' }
    },
    emerald: {
      id: 'emerald', label: 'Emerald Noir', primary: '#0F291E', accent1: '#D4AF37', accent2: '#722F37', darkBg: '#0A1C14', lightBg: '#FAF9F6',
      names: { primary: 'Emerald Noir', accent1: 'Champagne Gold', accent2: 'Bordeaux Red', lightBg: 'Parchment' },
      desc: { primary: 'Classic, old-world bistro depth.', accent1: 'Luxurious and refined metallic.', accent2: 'Rich, wine-inspired accent.', lightBg: 'Soft, classic off-white.' }
    },
    onyx: {
      id: 'onyx', label: 'Onyx & Copper', primary: '#1C1C1E', accent1: '#B87333', accent2: '#5C747A', darkBg: '#121214', lightBg: '#F4F4F2',
      names: { primary: 'Onyx Black', accent1: 'Warm Copper', accent2: 'Slate Blue', lightBg: 'Ivory Ash' },
      desc: { primary: 'Industrial, chic, modern depth.', accent1: 'Warm, inviting metallic.', accent2: 'Cool, sophisticated contrast.', lightBg: 'Crisp, contemporary canvas.' }
    },
    cobalt: {
      id: 'cobalt', label: 'Cobalt Slate', primary: '#152238', accent1: '#BCC6CC', accent2: '#C15438', darkBg: '#0D1524', lightBg: '#F4F6F8',
      names: { primary: 'Deep Cobalt', accent1: 'Warm Platinum', accent2: 'Rust Orange', lightBg: 'Ice White' },
      desc: { primary: 'Modern, tailored sophistication.', accent1: 'Sleek, architectural metallic.', accent2: 'Vibrant, energetic pop.', lightBg: 'Crisp, contemporary gallery wall.' }
    }
  };

  const active = allSchemes[activeScheme];
  const colors = { midnight: active.primary, brass: active.accent1, terracotta: active.accent2, darkBg: active.darkBg, lightBg: active.lightBg, darkText: active.primary, lightText: active.lightBg };
  const currentBg = isDarkMode ? colors.darkBg : colors.lightBg;
  const currentText = isDarkMode ? colors.lightText : colors.darkText;

  // --- FINAL VARIATIONS --- //
  // Refactored as standard JSX variables instead of nested functional components to satisfy strict Vercel ESLint builds

  // Variation 1: The Direct Request (M centered vertically, dot kept in original top-left spot)
  const var1 = (
    <SvgWrap>
      <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 65 60 L 65 40 L 75 50 L 85 40 L 85 60" fill="none" stroke={currentText} strokeWidth="1" strokeLinejoin="miter" />
      <circle cx="25" cy="35" r="1.5" fill={colors.terracotta} />
    </SvgWrap>
  );

  // Variation 2: True Symmetry (M centered, dot dropped to center left to perfectly balance it)
  const var2 = (
    <SvgWrap>
      <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 65 60 L 65 40 L 75 50 L 85 40 L 85 60" fill="none" stroke={currentText} strokeWidth="1" strokeLinejoin="miter" />
      <circle cx="25" cy="50" r="1.5" fill={colors.terracotta} />
    </SvgWrap>
  );

  // Variation 3: The Edge Lock (M centered and pushed to overlap the ring)
  const var3 = (
    <SvgWrap>
      <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 70 60 L 70 40 L 80 50 L 90 40 L 90 60" fill="none" stroke={currentText} strokeWidth="1" strokeLinejoin="miter" />
      <circle cx="20" cy="50" r="1.5" fill={colors.terracotta} />
    </SvgWrap>
  );

  // Variation 4: The Delicate Scale (M centered, scaled down slightly, thinner line weight)
  const var4 = (
    <SvgWrap>
      <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 70 57.5 L 70 42.5 L 77.5 50 L 85 42.5 L 85 57.5" fill="none" stroke={currentText} strokeWidth="0.75" strokeLinejoin="miter" />
      <circle cx="25" cy="50" r="1" fill={colors.terracotta} />
    </SvgWrap>
  );

  // Variation 5: The Dual Anchor (Two dots representing Bistro + Social)
  const var5 = (
    <SvgWrap>
      <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 65 60 L 65 40 L 75 50 L 85 40 L 85 60" fill="none" stroke={currentText} strokeWidth="1" strokeLinejoin="miter" />
      <circle cx="25" cy="45" r="1.5" fill={colors.terracotta} />
      <circle cx="25" cy="55" r="1.5" fill={colors.terracotta} />
    </SvgWrap>
  );

  // Variation 6: The Open Boundary (Gap in the ring where the M sits)
  const var6 = (
    <SvgWrap>
      {/* Circle with a precise gap on the right side */}
      <path d="M 81.8 18.2 A 45 45 0 1 0 81.8 81.8" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 70 60 L 70 40 L 80 50 L 90 40 L 90 60" fill="none" stroke={currentText} strokeWidth="1.25" strokeLinejoin="miter" />
      <circle cx="25" cy="50" r="1.5" fill={colors.terracotta} />
    </SvgWrap>
  );

  // NEW Variation 7: The Open Anchor (Combines the gap of Var 6 and the two dots of Var 5)
  const var7 = (
    <SvgWrap>
      {/* Circle with gap on the right */}
      <path d="M 81.8 18.2 A 45 45 0 1 0 81.8 81.8" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 70 60 L 70 40 L 80 50 L 90 40 L 90 60" fill="none" stroke={currentText} strokeWidth="1.25" strokeLinejoin="miter" />
      <circle cx="25" cy="45" r="1.5" fill={colors.terracotta} />
      <circle cx="25" cy="55" r="1.5" fill={colors.terracotta} />
    </SvgWrap>
  );

  // NEW Variation 8: The Dual Threshold (Gap on both sides, perfectly balanced)
  const var8 = (
    <SvgWrap>
      {/* Top arc */}
      <path d="M 18.2 18.2 A 45 45 0 0 1 81.8 18.2" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      {/* Bottom arc */}
      <path d="M 18.2 81.8 A 45 45 0 0 0 81.8 81.8" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      {/* M perfectly centered on the right threshold */}
      <path d="M 70 60 L 70 40 L 80 50 L 90 40 L 90 60" fill="none" stroke={currentText} strokeWidth="1.25" strokeLinejoin="miter" />
      {/* Single dot perfectly centered on the left threshold */}
      <circle cx="25" cy="50" r="1.5" fill={colors.terracotta} />
    </SvgWrap>
  );

  const concepts: Array<{ id: number; title: string; desc: string; component: React.ReactNode; layout: 'horizontal' | 'vertical'; }> = [
    { 
      id: 1, 
      title: 'Variation 01: Direct Adjustment', 
      desc: 'The exact Empty Canvas design requested. The "M" is shifted up to sit evenly in the middle of the right side, while the accent dot remains in its original upper-left position.', 
      component: var1, 
      layout: 'vertical' 
    },
    { 
      id: 2, 
      title: 'Variation 02: True Symmetry', 
      desc: 'The "M" is perfectly centered on the right, and the terracotta dot is dropped to sit perfectly centered on the left, creating flawless horizontal balance.', 
      component: var2, 
      layout: 'vertical' 
    },
    { 
      id: 3, 
      title: 'Variation 03: The Edge Lock', 
      desc: 'The "M" is centered vertically but pushed further to the right so its outer stem gracefully intersects the brass boundary ring.', 
      component: var3, 
      layout: 'vertical' 
    },
    { 
      id: 4, 
      title: 'Variation 04: The Delicate Scale', 
      desc: 'The "M" is vertically centered but scaled down slightly with a thinner stroke, increasing the negative space for an ultra-premium, minimalist feel.', 
      component: var4, 
      layout: 'vertical' 
    },
    { 
      id: 5, 
      title: 'Variation 05: The Dual Anchor', 
      desc: 'Maintains the symmetry of Variation 2, but introduces a second terracotta dot. The two dots elegantly symbolize the dual nature of the brand: "Bistro" and "Social".', 
      component: var5, 
      layout: 'vertical' 
    },
    { 
      id: 6, 
      title: 'Variation 06: The Open Boundary', 
      desc: 'The brass ring intentionally breaks to allow the "M" to sit on the threshold. This subtle opening symbolizes an inclusive, welcoming environment—"Milwaukee\'s living room".', 
      component: var6, 
      layout: 'vertical' 
    },
    { 
      id: 7, 
      title: 'Variation 07: The Open Anchor', 
      desc: 'Combines the best of Variations 5 and 6. Features the intentional boundary gap on the right for the monogram, seamlessly paired with the dual terracotta dots on the left.', 
      component: var7, 
      layout: 'vertical' 
    },
    { 
      id: 8, 
      title: 'Variation 08: The Dual Threshold', 
      desc: 'The brass ring is opened on both sides—creating perfect negative space symmetry. The monogram anchors the right threshold, while the terracotta dot anchors the left.', 
      component: var8, 
      layout: 'vertical' 
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out font-sans" style={{ backgroundColor: currentBg, color: currentText, fontFamily: fontThemes.editorial.secondary }}>
      <header className="px-8 py-16 md:py-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-medium tracking-widest uppercase" style={{ borderColor: colors.brass, color: colors.brass }}>
          <Globe2 size={14} /><span>Final Client Selection</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8" style={{ fontFamily: fontThemes.editorial.primary }}>
          The Empty Canvas
        </h1>
        <p className="max-w-3xl text-lg md:text-xl opacity-70 font-light mb-12 leading-relaxed">
          Removing all distractions to focus exclusively on your favorite concept. Here are eight micro-adjustments exploring exactly what it looks like to perfect the centered monogram.
        </p>
        <div className="flex flex-col items-center gap-6">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="flex items-center space-x-3 px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-80 border" style={{ backgroundColor: isDarkMode ? 'transparent' : currentText, color: isDarkMode ? currentText : currentBg, borderColor: currentText }}>
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}<span>Switch to {isDarkMode ? 'Day' : 'Night'} Mode</span>
          </button>
          <div className="flex flex-wrap justify-center gap-3">
            {(Object.keys(allSchemes) as Array<keyof typeof allSchemes>).map((key) => {
              const scheme = allSchemes[key];
              return (
                <button key={scheme.id} onClick={() => setActiveScheme(key as keyof typeof allSchemes)} className={`flex items-center space-x-2 px-5 py-2 rounded-full text-[0.65rem] font-bold tracking-widest uppercase transition-all duration-300 border ${activeScheme === key ? 'opacity-100 scale-105 shadow-md' : 'opacity-40 hover:opacity-80'}`} style={{ backgroundColor: activeScheme === key ? currentText : 'transparent', color: activeScheme === key ? currentBg : currentText, borderColor: currentText }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: scheme.accent1 }}></span><span>{scheme.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* FINAL VARIATIONS GRID */}
      <main className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {concepts.map((concept) => (
            <div key={concept.id} className="group relative rounded-xl p-8 flex flex-col h-full border transition-all duration-500 hover:shadow-2xl overflow-hidden ring-1" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.02)' : '#FAFAFA', boxShadow: isDarkMode ? '0 0 20px rgba(197,160,89,0.1)' : '0 0 20px rgba(0,0,0,0.05)' }}>
              <div className="flex-grow flex flex-col items-center justify-center py-8">
                {concept.layout === 'horizontal' ? (
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                    {concept.component}
                    <Wordmark layout="horizontal" />
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    {concept.component}
                    <Wordmark layout="vertical" />
                  </div>
                )}
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase opacity-40" style={{ color: colors.brass }}>Option 0{concept.id}</span>
                  <CheckCircle2 size={16} className="opacity-100 transition-opacity" style={{ color: colors.brass }} />
                </div>
                <h3 className="text-lg tracking-wide mb-2 font-light" style={{ fontFamily: fontThemes.editorial.primary }}>{concept.title}</h3>
                <p className="text-xs opacity-60 font-light leading-relaxed">{concept.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t py-16 text-center" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
        <p className="font-light tracking-widest uppercase text-[0.65rem] opacity-50 flex items-center justify-center gap-2">Designed for The Mosaic LLC <ArrowRight size={12}/> 2026</p>
      </footer>
    </div>
  );
}
