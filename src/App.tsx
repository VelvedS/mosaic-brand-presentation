import React, { useState } from 'react';
import { Moon, Sun, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';

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

  const SvgWrap = ({ children }: { children: React.ReactNode }) => <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm">{children}</svg>;

  // --- I. THE FAVORITES (Originals) --- //
  const L2 = () => {
    const d: React.ReactElement[] = [];
    for(let i=0; i<40; i++) {
      const a = Math.random()*Math.PI*2, r = Math.random()*40;
      d.push(<circle key={i} cx={50+r*Math.cos(a)} cy={50+r*Math.sin(a)} r={Math.random()*1.5+0.5} fill={Math.random()>0.6?colors.brass:(Math.random()>0.5?colors.terracotta:currentText)} opacity={0.8} />);
    }
    return <SvgWrap>{d}<circle cx="50" cy="50" r="42" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3" /></SvgWrap>;
  };

  const L31 = () => (
    <SvgWrap>
      <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 65 75 L 65 55 L 75 65 L 85 55 L 85 75" fill="none" stroke={currentText} strokeWidth="1" strokeLinejoin="miter" />
      <circle cx="25" cy="35" r="1.5" fill={colors.terracotta} />
    </SvgWrap>
  );

  const L20 = () => (
    <SvgWrap>
      <circle cx="50" cy="50" r="40" fill={colors.midnight} />
      <path d="M 35 65 L 35 35 L 50 50 L 65 35 L 65 65" fill="none" stroke={colors.lightBg} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="48" fill="none" stroke={colors.brass} strokeWidth="0.5" strokeDasharray="2 4" />
    </SvgWrap>
  );

  const L21 = () => (
    <SvgWrap>
      <rect x="30" y="20" width="1" height="60" fill={currentText} opacity="0.3" />
      <rect x="40" y="15" width="1" height="70" fill={currentText} opacity="0.6" />
      <rect x="50" y="10" width="1.5" height="80" fill={colors.brass} />
      <rect x="60" y="15" width="1" height="70" fill={currentText} opacity="0.6" />
      <rect x="70" y="20" width="1" height="60" fill={currentText} opacity="0.3" />
      <circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="0.5" strokeDasharray="1 3" />
    </SvgWrap>
  );

  // --- II. THE FUSIONS (Meshed Concepts) --- //

  const Mesh1 = () => {
    const dots: React.ReactElement[] = [];
    for(let i=0; i<45; i++) {
       const a = Math.random() * Math.PI * 2;
       const r = Math.random() * 42;
       dots.push(<circle key={i} cx={50+r*Math.cos(a)} cy={50+r*Math.sin(a)} r={Math.random()*1.5+0.5} fill={Math.random()>0.5?colors.brass:colors.terracotta} opacity={Math.random()*0.8 + 0.2} />);
    }
    return (
      <SvgWrap>
        <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
        {dots}
        <path d="M 65 75 L 65 45 L 80 60 L 95 45 L 95 75" fill="none" stroke={currentText} strokeWidth="1.5" strokeLinejoin="miter" />
      </SvgWrap>
    );
  };

  const Mesh2 = () => {
    const dots: React.ReactElement[] = [];
    for(let i=0; i<60; i++) {
       const a = Math.random() * Math.PI * 2;
       const r = Math.random() * 42;
       const cx = 50 + r * Math.cos(a);
       const cy = 50 + r * Math.sin(a);
       const opacityMult = Math.max(0.1, 1.2 - (cx / 100));
       dots.push(<circle key={i} cx={cx} cy={cy} r={Math.random()*1.5+0.5} fill={Math.random()>0.5?colors.brass:colors.terracotta} opacity={(Math.random()*0.8 + 0.2) * opacityMult} />);
    }
    return (
      <SvgWrap>
        <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
        {dots}
        <ellipse cx="50" cy="55" rx="42" ry="8" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3" transform="rotate(-20 50 55)" />
        <path d="M 5 75 L 5 45 L 20 60 L 35 45 L 35 75" fill="none" stroke={currentText} strokeWidth="1.5" strokeLinejoin="miter" />
      </SvgWrap>
    );
  };

  const Mesh3 = () => {
    const nodes = [[30, 40], [45, 25], [65, 35], [55, 60], [35, 70]];
    const dots: React.ReactElement[] = [];
    for(let i=0; i<20; i++) {
       const a = Math.random() * Math.PI * 2;
       const r = Math.random() * 40;
       dots.push(<circle key={`star${i}`} cx={50+r*Math.cos(a)} cy={50+r*Math.sin(a)} r={0.8} fill={colors.brass} opacity="0.8" />);
    }
    return (
      <SvgWrap>
        <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" />
        <path d="M 30 40 L 45 25 L 65 35 L 55 60 L 35 70 Z" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3" />
        <path d="M 45 25 L 55 60" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3" />
        {nodes.map((pt, i) => (
          <circle key={`node${i}`} cx={pt[0]} cy={pt[1]} r={2} fill={colors.terracotta} />
        ))}
        {dots}
        <path d="M 70 80 L 70 60 L 80 70 L 90 60 L 90 80" fill="none" stroke={currentText} strokeWidth="1.5" strokeLinejoin="miter" />
      </SvgWrap>
    );
  };

  const Mesh4 = () => (
    <SvgWrap>
      <path d="M 20 90 L 20 40 A 30 30 0 0 1 80 40 L 80 90" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <line x1="10" y1="90" x2="90" y2="90" stroke={currentText} strokeWidth="1" />
      <path d="M 30 75 L 50 60 L 70 75" fill="none" stroke={colors.terracotta} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M 30 85 L 50 70 L 70 85" fill="none" stroke={colors.terracotta} strokeWidth="1.5" strokeLinejoin="round" opacity="0.5" />
      <path d="M 40 50 L 40 30 L 50 40 L 60 30 L 60 50" fill="none" stroke={currentText} strokeWidth="1.5" strokeLinejoin="miter" />
    </SvgWrap>
  );

  const Mesh5 = () => (
    <SvgWrap>
      <circle cx="50" cy="50" r="42" fill={colors.midnight} />
      <circle cx="50" cy="50" r="48" fill="none" stroke={colors.brass} strokeWidth="0.5" strokeDasharray="2 4" />
      <g opacity="0.6">
        <rect x="25" y="15" width="1" height="70" fill={colors.brass} />
        <rect x="35" y="10" width="1" height="80" fill={colors.brass} />
        <rect x="45" y="5" width="1" height="90" fill={colors.terracotta} />
        <rect x="55" y="5" width="1" height="90" fill={colors.terracotta} />
        <rect x="65" y="10" width="1" height="80" fill={colors.brass} />
        <rect x="75" y="15" width="1" height="70" fill={colors.brass} />
      </g>
      <path d="M 30 65 L 30 35 L 50 50 L 70 35 L 70 65" fill="none" stroke={colors.lightBg} strokeWidth="1.5" strokeLinejoin="round" />
    </SvgWrap>
  );

  const Mesh6 = () => (
    <SvgWrap>
      <circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="40" fill={colors.midnight} opacity="0.9" />
      <defs>
        <clipPath id="innerPlate"><circle cx="50" cy="50" r="40" /></clipPath>
      </defs>
      <g clipPath="url(#innerPlate)">
        <line x1="20" y1="10" x2="20" y2="90" stroke={colors.brass} strokeWidth="1.5" opacity="0.4" />
        <line x1="30" y1="10" x2="30" y2="90" stroke={colors.brass} strokeWidth="1.5" opacity="0.6" />
        <line x1="40" y1="10" x2="40" y2="90" stroke={colors.brass} strokeWidth="1.5" opacity="0.8" />
        <line x1="50" y1="10" x2="50" y2="90" stroke={colors.terracotta} strokeWidth="2" />
        <line x1="60" y1="10" x2="60" y2="90" stroke={colors.brass} strokeWidth="1.5" opacity="0.8" />
        <line x1="70" y1="10" x2="70" y2="90" stroke={colors.brass} strokeWidth="1.5" opacity="0.6" />
        <line x1="80" y1="10" x2="80" y2="90" stroke={colors.brass} strokeWidth="1.5" opacity="0.4" />
        <path d="M 30 65 L 30 35 L 50 50 L 70 35 L 70 65" fill="none" stroke={colors.midnight} strokeWidth="5" strokeLinejoin="round" />
        <path d="M 30 65 L 30 35 L 50 50 L 70 35 L 70 65" fill="none" stroke={colors.lightBg} strokeWidth="1.5" strokeLinejoin="round" />
      </g>
    </SvgWrap>
  );

  const Mesh7 = () => (
    <SvgWrap>
      <circle cx="50" cy="50" r="44" fill={colors.midnight} stroke={colors.brass} strokeWidth="1" />
      {[...Array(24)].map((_, i) => (
        <line key={`sunburst${i}`} x1="50" y1="50" x2={50 + 38 * Math.cos((i * 15 * Math.PI) / 180)} y2={50 + 38 * Math.sin((i * 15 * Math.PI) / 180)} stroke={colors.brass} strokeWidth="0.5" opacity="0.3" />
      ))}
      <circle cx="50" cy="50" r="12" fill={currentBg} stroke={colors.terracotta} strokeWidth="1" />
      <path d="M 44 54 L 44 46 L 50 50 L 56 46 L 56 54" fill="none" stroke={currentText} strokeWidth="1" strokeLinejoin="miter" />
    </SvgWrap>
  );

  const Mesh8 = () => (
    <SvgWrap>
      <circle cx="50" cy="50" r="45" fill={colors.midnight} />
      {[...Array(36)].map((_, i) => {
        const angle = i * 10 * Math.PI / 180;
        return <line key={`flute${i}`} x1={50 + 38 * Math.cos(angle)} y1={50 + 38 * Math.sin(angle)} x2={50 + 45 * Math.cos(angle)} y2={50 + 45 * Math.sin(angle)} stroke={colors.brass} strokeWidth="1.5" opacity="0.8" />;
      })}
      <circle cx="50" cy="50" r="36" fill="none" stroke={currentBg} strokeWidth="2" />
      <circle cx="50" cy="50" r="34" fill="none" stroke={colors.brass} strokeWidth="0.5" />
      <path d="M 40 55 L 40 40 L 50 50 L 60 40 L 60 55" fill="none" stroke={colors.lightBg} strokeWidth="2" strokeLinejoin="round" />
    </SvgWrap>
  );

  const concepts: Array<{ id: number | string; title: string; desc: string; component: React.ReactNode; layout: 'horizontal' | 'vertical'; }> = [
    { id: 2,    title: 'Concept 02: Scattered Mosaic',       desc: 'The original favorite: Dozens of distinct, scattered points forming a unified sphere.',                                                                                         component: <L2 />,    layout: 'vertical' },
    { id: 31,   title: 'Concept 31: Empty Canvas',           desc: 'The original favorite: A massive, thin circle with a pristine monogram pushed to the edge.',                                                                                    component: <L31 />,   layout: 'vertical' },
    { id: 20,   title: 'Concept 20: Perfect Plate',          desc: 'The original favorite: Subtle, culinary-focused, and highly elevated Michelin-star feel.',                                                                                      component: <L20 />,   layout: 'vertical' },
    { id: 21,   title: 'Concept 21: Fluted Glass',           desc: 'The original favorite: Inspired by premium fluted bistro glassware and Cathedral organs.',                                                                                      component: <L21 />,   layout: 'vertical' },
    { id: 'F1', title: 'Fusion 1: The Stardust Canvas',      desc: 'Meshing 2 & 31. The massive canvas ring holds elegant scattered dots inside, while the signature monogram rests beautifully on the right boundary.',                           component: <Mesh1 />, layout: 'vertical' },
    { id: 'F2', title: 'Fusion 2: The Orbital Monogram',     desc: 'Meshing 2 & 31. Mirroring the elegance of Fusion 1, the monogram anchors the left boundary. The twist: an ethereal celestial orbit sweeps through the stardust.',             component: <Mesh2 />, layout: 'vertical' },
    { id: 'F3', title: 'Fusion 3: The Constellation Canvas', desc: 'Meshing 2 & 31. The vast empty canvas houses a delicate, connected network of stardust—evoking a global constellation—anchored by an elegant edge monogram.',                  component: <Mesh3 />, layout: 'vertical' },
    { id: 'F4', title: 'Fusion 4: The Horizon Weaver',       desc: 'An architectural archway housing a delicate, woven chevron motif that represents the connection of diverse cultures.',                                                          component: <Mesh4 />, layout: 'vertical' },
    { id: 'F5', title: 'Fusion 5: The Fluted Midnight Plate',desc: 'Meshing 20 & 21. The dark plate is overlaid with striking architectural flutes, allowing the plate monogram to shine through.',                                                 component: <Mesh5 />, layout: 'vertical' },
    { id: 'F6', title: 'Fusion 6: The Etched Glass Plate',   desc: 'Meshing 20 & 21. The plate is constructed entirely out of fluted glass, with the monogram elegantly etched into the negative space.',                                          component: <Mesh6 />, layout: 'vertical' },
    { id: 'F7', title: 'Fusion 7: The Etched Sunburst',      desc: 'Meshing 20 & 21. A midnight plate with exquisite radiating flutes echoing a luxury watch face, centered on the signature M.',                                                  component: <Mesh7 />, layout: 'vertical' },
    { id: 'F8', title: 'Fusion 8: The Fluted Rim',           desc: 'Meshing 20 & 21. A dark, moody plate elevated by a textured, fluted glass rim, framing an exquisite minimalist monogram at its core.',                                        component: <Mesh8 />, layout: 'vertical' },
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out font-sans" style={{ backgroundColor: currentBg, color: currentText, fontFamily: fontThemes.editorial.secondary }}>
      <header className="px-8 py-16 md:py-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-medium tracking-widest uppercase" style={{ borderColor: colors.brass, color: colors.brass }}>
          <Globe2 size={14} /><span>The Final Curation</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8" style={{ fontFamily: fontThemes.editorial.primary }}>
          The Mosaic Fusions
        </h1>
        <p className="max-w-3xl text-lg md:text-xl opacity-70 font-light mb-12 leading-relaxed">
          Stripping away the noise to focus exclusively on your favorites. Showcasing Concepts 2, 31, 20, and 21—followed immediately by our pristine, fully detailed fusions.
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

      {/* CATEGORY I: THE ORIGINALS */}
      <main className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="mb-10 text-center mt-6">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.editorial.primary }}>I. The Originals</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">The unedited favorites pulled directly from the previous library.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {concepts.slice(0, 4).map((concept) => (
            <div key={concept.id} className="group relative rounded-xl p-8 flex flex-col h-full border transition-all duration-500 hover:shadow-xl overflow-hidden" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF' }}>
              <div className="flex-grow flex flex-col items-center justify-center py-10">
                <div className="flex flex-col items-center">
                  {concept.component}
                  <Wordmark layout="vertical" />
                </div>
              </div>
              <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <h3 className="text-lg tracking-wide mb-2 font-light" style={{ fontFamily: fontThemes.editorial.primary }}>{concept.title}</h3>
                <p className="text-xs opacity-60 font-light leading-relaxed">{concept.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CATEGORY II: THE FUSIONS */}
      <main className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="mb-10 text-center mt-12">
          <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full border mb-4 text-[0.65rem] font-bold tracking-widest uppercase" style={{ color: colors.terracotta, borderColor: colors.terracotta }}>
            <CheckCircle2 size={12} /><span>New Designs</span>
          </div>
          <h2 className="text-3xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.editorial.primary }}>II. The Fusions</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">High-fidelity pristine options tailored to absolute Michelin-star perfection.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.slice(4).map((concept) => (
            <div key={concept.id} className="group relative rounded-xl p-12 flex flex-col h-full border transition-all duration-500 hover:shadow-2xl overflow-hidden ring-1" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.02)' : '#FAFAFA', boxShadow: isDarkMode ? '0 0 20px rgba(197,160,89,0.1)' : '0 0 20px rgba(0,0,0,0.05)' }}>
              <div className="flex-grow flex flex-col items-center justify-center py-10">
                <div className="flex flex-col items-center">
                  {concept.component}
                  <Wordmark layout="vertical" />
                </div>
              </div>
              <div className="mt-8 pt-8 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase opacity-40" style={{ color: colors.brass }}>{concept.id}</span>
                  <CheckCircle2 size={16} className="opacity-100 transition-opacity" style={{ color: colors.brass }} />
                </div>
                <h3 className="text-xl tracking-wide mb-2 font-light" style={{ fontFamily: fontThemes.editorial.primary }}>{concept.title}</h3>
                <p className="text-sm opacity-60 font-light leading-relaxed">{concept.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t py-16 text-center" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
        <p className="font-light tracking-widest uppercase text-[0.65rem] opacity-50 flex items-center justify-center gap-2">Designed for The Mosaic LLC <ArrowRight size={12} /> 2026</p>
      </footer>
    </div>
  );
}
