import React, { useState } from 'react';
import { Moon, Sun, ArrowRight, CheckCircle2, Globe2, Type, Palette } from 'lucide-react';

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
    editorial: { primary: "'Didot', 'Bodoni MT', 'Playfair Display', serif", secondary: "'Montserrat', sans-serif" },
    heritage: { primary: "'Garamond', 'Baskerville', 'Times New Roman', serif", secondary: "'Avenir', 'Helvetica Neue', sans-serif" },
    artdeco: { primary: "'Futura', 'Trebuchet MS', sans-serif", secondary: "'Space Mono', monospace" },
    modern: { primary: "'Montserrat', 'Helvetica Neue', sans-serif", secondary: "'Avenir', sans-serif" },
    avantgarde: { primary: "'Space Mono', 'Courier New', monospace", secondary: "'Helvetica', sans-serif" },
    gallery: { primary: "'Optima', 'Cinzel', 'Trajan Pro', sans-serif", secondary: "'Avenir', 'Helvetica Neue', sans-serif" }
  };

  interface WordmarkProps { layout?: 'vertical' | 'horizontal' | 'integrated'; className?: string; theme?: keyof typeof fontThemes; integratedElement?: React.ReactNode; }

  const Wordmark: React.FC<WordmarkProps> = ({ layout = 'vertical', className = '', theme = 'editorial', integratedElement }) => {
    const { primary, secondary } = fontThemes[theme];
    if (layout === 'integrated' && integratedElement) return (
      <div className={`flex flex-col items-center mt-6 ${className}`} style={{ fontFamily: secondary }}>
        <div className="text-[0.6rem] tracking-[0.4em] font-light mb-2">THE</div>
        <div className="flex items-center text-4xl sm:text-5xl font-light uppercase tracking-widest" style={{ fontFamily: primary }}>
          <span className="mr-1">M</span><div className="w-10 h-10 sm:w-12 sm:h-12 -mt-2">{integratedElement}</div><span className="ml-1">SAIC</span>
        </div>
        <div className="text-[0.55rem] font-light tracking-[0.3em] mt-3 opacity-60 text-center uppercase">International Bistro + Social</div>
      </div>
    );
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

  const TerrazzoPattern = () => (
    <g stroke={currentBg} strokeWidth="2.5" strokeLinejoin="round">
      <polygon points="-10,-10 40,-5 30,35 -5,25" fill={colors.brass} />
      <polygon points="40,-5 85,-10 70,30 30,35" fill={colors.terracotta} />
      <polygon points="85,-10 110,-10 110,45 80,40 70,30" fill={currentText} opacity={0.8} />
      <polygon points="-5,25 30,35 35,65 -10,70" fill={currentText} opacity={0.4} />
      <polygon points="30,35 70,30 80,40 65,70 35,65" fill={currentText} opacity={0.15} />
      <polygon points="70,30 80,40 110,45 110,80 85,75 65,70" fill={colors.brass} opacity={0.7} />
      <polygon points="-10,70 35,65 45,110 -10,110" fill={colors.terracotta} opacity={0.9} />
      <polygon points="35,65 65,70 55,110 45,110" fill={currentText} opacity={0.9} />
      <polygon points="65,70 85,75 110,80 110,110 55,110" fill={colors.brass} opacity={0.4} />
    </g>
  );

  const SvgWrap = ({ children }: { children: React.ReactNode }) => <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm">{children}</svg>;

  // --- I. HERITAGE & EMBLEM SERIES (1-11) --- //
  const L1 = () => <SvgWrap><circle cx="50" cy="50" r="46" fill="none" stroke={colors.brass} strokeWidth="1" /><circle cx="50" cy="50" r="41" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.4" /><path d="M30 65 L30 35 L50 55 L70 35 L70 65" fill="none" stroke={currentText} strokeWidth="1.5" strokeLinejoin="miter" /><circle cx="50" cy="4" r="1.5" fill={colors.terracotta} /><circle cx="50" cy="96" r="1.5" fill={colors.terracotta} /><circle cx="4" cy="50" r="1" fill={colors.brass} opacity="0.6" /><circle cx="96" cy="50" r="1" fill={colors.brass} opacity="0.6" /></SvgWrap>;
  const L2 = () => { const d = []; for(let i=0; i<40; i++) { const a = Math.random()*Math.PI*2, r = Math.random()*40; d.push(<circle key={i} cx={50+r*Math.cos(a)} cy={50+r*Math.sin(a)} r={Math.random()*1.5+0.5} fill={Math.random()>0.6?colors.brass:(Math.random()>0.5?colors.terracotta:currentText)} opacity={0.8} />); } return <SvgWrap>{d}<circle cx="50" cy="50" r="42" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3" /></SvgWrap>; };
  const L3 = () => <SvgWrap><circle cx="50" cy="50" r="46" fill="none" stroke={colors.brass} strokeWidth="1.5" /><circle cx="50" cy="50" r="41" fill="none" stroke={currentText} strokeWidth="0.5" /><circle cx="50" cy="50" r="32" fill="none" stroke={colors.brass} strokeWidth="0.5" /><path d="M35 60 L35 40 L50 50 L65 40 L65 60" fill="none" stroke={currentText} strokeWidth="2" strokeLinejoin="miter" /><circle cx="50" cy="15" r="2" fill={colors.terracotta} /><circle cx="50" cy="85" r="2" fill={colors.terracotta} /></SvgWrap>;
  const L4 = () => <SvgWrap><circle cx="30" cy="50" r="12" fill="none" stroke={colors.brass} strokeWidth="1.5"/><circle cx="30" cy="50" r="6" fill="none" stroke={currentText} strokeWidth="1"/><line x1="42" y1="50" x2="85" y2="50" stroke={colors.brass} strokeWidth="1.5"/><path d="M65 50 L65 65 L72 65 L72 58 L78 58 L78 65 L85 65 L85 50" fill="none" stroke={currentText} strokeWidth="1.5" strokeLinejoin="miter"/><path d="M26 53 L30 43 L34 53" fill="none" stroke={colors.terracotta} strokeWidth="1.5"/></SvgWrap>;
  const L5 = () => <SvgWrap><path d="M50 15 C20 15 15 45 30 75" fill="none" stroke={colors.brass} strokeWidth="1.5" strokeLinecap="round"/><path d="M50 15 C80 15 85 45 70 75" fill="none" stroke={colors.brass} strokeWidth="1.5" strokeLinecap="round"/><circle cx="25" cy="40" r="2.5" fill={colors.terracotta}/><circle cx="75" cy="40" r="2.5" fill={colors.terracotta}/><circle cx="35" cy="25" r="2.5" fill={colors.terracotta}/><circle cx="65" cy="25" r="2.5" fill={colors.terracotta}/><text x="50" y="60" textAnchor="middle" fill={currentText} fontSize="28" style={{fontFamily: fontThemes.editorial.primary}}>M</text></SvgWrap>;
  const L6 = () => <SvgWrap><path d="M20 70 C20 25 80 25 80 70" fill="none" stroke={colors.brass} strokeWidth="1.5"/><line x1="10" y1="70" x2="90" y2="70" stroke={currentText} strokeWidth="1"/><circle cx="50" cy="22" r="4" fill="none" stroke={colors.terracotta} strokeWidth="1.5"/><path d="M45 45 Q50 35 55 45 T50 60" fill="none" stroke={currentText} strokeWidth="1" opacity="0.6"/></SvgWrap>;
  const L7 = () => <SvgWrap><circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5"/><path d="M30 25 L70 25 L50 55 Z" fill="none" stroke={colors.brass} strokeWidth="1.5"/><line x1="50" y1="55" x2="50" y2="80" stroke={currentText} strokeWidth="1.5"/><line x1="35" y1="80" x2="65" y2="80" stroke={currentText} strokeWidth="1.5" strokeLinecap="round"/><circle cx="50" cy="40" r="3" fill={colors.terracotta}/></SvgWrap>;
  const L8 = () => <SvgWrap><circle cx="50" cy="50" r="46" fill="none" stroke={currentText} strokeWidth="2" /><circle cx="50" cy="50" r="40" fill="none" stroke={colors.brass} strokeWidth="0.5" /><circle cx="50" cy="50" r="30" fill="none" stroke={colors.brass} strokeWidth="0.5" /><path d="M38 60 L38 40 L50 50 L62 40 L62 60" fill="none" stroke={currentText} strokeWidth="1.5" strokeLinejoin="miter" /><path id="seal" d="M50 15 A35 35 0 1 1 49.9 15" fill="none" /><text fontSize="7" fill={colors.terracotta} letterSpacing="4" style={{ fontFamily: fontThemes.modern.secondary }}><textPath href="#seal" startOffset="10%">ESTD</textPath><textPath href="#seal" startOffset="60%">2026</textPath></text></SvgWrap>;
  const L9 = () => <SvgWrap><circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="1.5" /><circle cx="50" cy="50" r="40" fill="none" stroke={currentText} strokeWidth="0.5" /><path d="M10 50 C30 70 70 30 90 50 A40 40 0 0 1 10 50 Z" fill={colors.terracotta} opacity="0.15" /><path d="M10 50 C30 70 70 30 90 50" fill="none" stroke={colors.brass} strokeWidth="1" /><text x="50" y="58" fontSize="24" textAnchor="middle" fill={currentText} style={{ fontFamily: fontThemes.editorial.primary }}>M</text></SvgWrap>;
  const L10 = () => <SvgWrap><polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" fill="none" stroke={colors.brass} strokeWidth="1.5"/><polygon points="35,18 65,18 82,35 82,65 65,82 35,82 18,65 18,35" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.6"/><path d="M35 60 L35 40 L50 50 L65 40 L65 60" fill="none" stroke={currentText} strokeWidth="1.5" strokeLinejoin="miter"/><circle cx="50" cy="25" r="2" fill={colors.terracotta}/><circle cx="50" cy="75" r="2" fill={colors.terracotta}/></SvgWrap>;
  const L11 = () => <SvgWrap><circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.6" /><circle cx="50" cy="50" r="40" fill="none" stroke={colors.brass} strokeWidth="1.5" /><defs><clipPath id="pc2"><circle cx="50" cy="50" r="32" /></clipPath><mask id="cm2"><rect x="0" y="0" width="100" height="100" fill="white" /><circle cx="50" cy="50" r="16" fill="black" /></mask></defs><g clipPath="url(#pc2)"><rect x="0" y="0" width="100" height="100" fill={colors.midnight} opacity="0.1" /><g mask="url(#cm2)"><TerrazzoPattern /></g></g><circle cx="50" cy="50" r="32" fill="none" stroke={colors.brass} strokeWidth="1" /><circle cx="50" cy="50" r="16" fill="none" stroke={colors.brass} strokeWidth="1" /><path d="M46 38 L46 62 M54 38 L54 62" stroke={currentText} strokeWidth="1.5" strokeLinecap="round" /><path d="M44 38 L48 38 M46 38 L46 44" stroke={currentText} strokeWidth="1" /><path d="M54 38 Q57 45 54 50" fill="none" stroke={currentText} strokeWidth="1.5" /><circle cx="20" cy="50" r="2" fill={colors.terracotta} /><circle cx="80" cy="50" r="2" fill={colors.terracotta} /></SvgWrap>;

  // --- II. THE TERRAZZO VANGUARD SERIES (12-19) --- //
  // Note: 12 utilizes 'w-full h-full' instead of SvgWrap to appropriately fill the "O" layout
  const L12 = () => <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm"><defs><clipPath id="shard-wordmark-clip"><circle cx="50" cy="50" r="45" /></clipPath></defs><g clipPath="url(#shard-wordmark-clip)"><TerrazzoPattern /></g></svg>;
  const L13 = () => <SvgWrap><defs><clipPath id="ac1"><path d="M25 90 L25 45 A25 25 0 0 1 75 45 L75 90 Z" /></clipPath></defs><g clipPath="url(#ac1)"><TerrazzoPattern /></g><path d="M25 90 L25 45 A25 25 0 0 1 75 45 L75 90 Z" fill="none" stroke={colors.brass} strokeWidth="2" /></SvgWrap>;
  const L14 = () => <SvgWrap><defs><clipPath id="cqc3"><path d="M30 90 L30 40 A20 20 0 0 1 70 40 L70 90 Z" /></clipPath></defs><path d="M25 90 L25 35 A25 25 0 0 1 75 35 L75 90 Z" fill="none" stroke={colors.brass} strokeWidth="1.5" /><g clipPath="url(#cqc3)"><TerrazzoPattern /></g><path d="M30 90 L30 40 A20 20 0 0 1 70 40 L70 90 Z" fill="none" stroke={currentText} strokeWidth="1" /></SvgWrap>;
  const L15 = () => <SvgWrap><defs><clipPath id="tbc2"><path d="M30 70 L30 50 L70 50 L70 70 Z" /></clipPath></defs><path d="M25 75 L25 35 A25 25 0 0 1 75 35 L75 75 Z" fill="none" stroke={colors.brass} strokeWidth="1.5" /><path d="M30 70 L30 40 A20 20 0 0 1 70 40 L70 70 Z" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.8" /><g clipPath="url(#tbc2)"><TerrazzoPattern /></g><path d="M30 50 Q40 45 50 50 T70 50" fill="none" stroke={colors.brass} strokeWidth="1.5" /><path d="M30 55 Q40 50 50 55 T70 55" fill="none" stroke={colors.terracotta} strokeWidth="1" opacity="0.8" /><circle cx="50" cy="30" r="5" fill="none" stroke={colors.brass} strokeWidth="1.5" /><circle cx="50" cy="30" r="2" fill={colors.terracotta} /></SvgWrap>;
  const L16 = () => <SvgWrap><defs><clipPath id="cl2"><path d="M30 20 L70 20 C70 45, 55 55, 50 55 C45 55, 30 45, 30 20 Z" /></clipPath></defs><g clipPath="url(#cl2)"><TerrazzoPattern /></g><path d="M30 20 L70 20 C70 45, 55 55, 50 55 C45 55, 30 45, 30 20 Z" fill="none" stroke={colors.brass} strokeWidth="1.5" /><line x1="50" y1="55" x2="50" y2="85" stroke={colors.brass} strokeWidth="1.5" /><line x1="35" y1="85" x2="65" y2="85" stroke={currentText} strokeWidth="1" strokeLinecap="round" /><line x1="65" y1="10" x2="45" y2="35" stroke={colors.terracotta} strokeWidth="1" /><circle cx="65" cy="10" r="2.5" fill={colors.terracotta} /><circle cx="50" cy="28" r="2" fill={currentBg} opacity="0.9" /></SvgWrap>;
  const L17 = () => <SvgWrap><defs><clipPath id="fork-ter"><circle cx="50" cy="50" r="45"/></clipPath></defs><g clipPath="url(#fork-ter)"><TerrazzoPattern/></g><circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="1.5"/><rect x="48" y="15" width="4" height="70" fill={currentBg} rx="2"/><path d="M42 15 L42 40 C42 50 58 50 58 40 L58 15" fill="none" stroke={currentBg} strokeWidth="3"/><line x1="42" y1="15" x2="42" y2="40" stroke={colors.brass} strokeWidth="1"/><line x1="50" y1="15" x2="50" y2="45" stroke={colors.brass} strokeWidth="1"/><line x1="58" y1="15" x2="58" y2="40" stroke={colors.brass} strokeWidth="1"/><path d="M42 40 C42 50 58 50 58 40" fill="none" stroke={colors.brass} strokeWidth="1"/><line x1="50" y1="48" x2="50" y2="85" stroke={colors.brass} strokeWidth="1"/></SvgWrap>;
  const L18 = () => <SvgWrap><defs><clipPath id="cqc2"><path d="M25 30 L75 30 C75 50, 55 55, 50 60 C45 55, 25 50, 25 30 Z" /></clipPath></defs><circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" opacity="0.6" /><g clipPath="url(#cqc2)"><TerrazzoPattern /></g><path d="M25 30 L75 30 C75 50, 55 55, 50 60 C45 55, 25 50, 25 30 Z" fill="none" stroke={currentText} strokeWidth="1.5" /><line x1="50" y1="60" x2="50" y2="80" stroke={currentText} strokeWidth="1.5" /><line x1="40" y1="80" x2="60" y2="80" stroke={colors.brass} strokeWidth="1.5" /><circle cx="65" cy="20" r="3" fill={colors.terracotta} /><line x1="65" y1="20" x2="50" y2="40" stroke={colors.terracotta} strokeWidth="1" /></SvgWrap>;
  const L19 = () => <SvgWrap><rect x="25" y="15" width="50" height="70" rx="25" fill="none" stroke={colors.brass} strokeWidth="1.5"/><circle cx="50" cy="40" r="12" fill="none" stroke={colors.terracotta} strokeWidth="1.5"/><path d="M25 60 Q37 50 50 60 T75 60" fill="none" stroke={currentText} strokeWidth="1.5"/><path d="M25 70 Q37 60 50 70 T75 70" fill="none" stroke={currentText} strokeWidth="1.5"/><line x1="50" y1="28" x2="50" y2="15" stroke={colors.terracotta} strokeWidth="1"/></SvgWrap>;

  // --- III. STRUCTURAL ELEGANCE SERIES (20-30) --- //
  const L20 = () => <SvgWrap><circle cx="50" cy="50" r="40" fill={colors.midnight} /><path d="M35 65 L35 35 L50 50 L65 35 L65 65" fill="none" stroke={colors.lightBg} strokeWidth="1.5" strokeLinejoin="round" /><circle cx="50" cy="50" r="48" fill="none" stroke={colors.brass} strokeWidth="0.5" strokeDasharray="2 4" /></SvgWrap>;
  const L21 = () => <SvgWrap><rect x="30" y="20" width="1" height="60" fill={currentText} opacity="0.3" /><rect x="40" y="15" width="1" height="70" fill={currentText} opacity="0.6" /><rect x="50" y="10" width="1.5" height="80" fill={colors.brass} /><rect x="60" y="15" width="1" height="70" fill={currentText} opacity="0.6" /><rect x="70" y="20" width="1" height="60" fill={currentText} opacity="0.3" /><circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="0.5" strokeDasharray="1 3" /></SvgWrap>;
  const L22 = () => <SvgWrap><circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" /><circle cx="65" cy="50" r="30" fill="none" stroke={currentText} strokeWidth="1" opacity="0.5" /><circle cx="75" cy="50" r="15" fill="none" stroke={colors.terracotta} strokeWidth="1.5" /></SvgWrap>;
  const L23 = () => <SvgWrap><path d="M30 20 C30 60, 70 60, 70 20 Z" fill="none" stroke={colors.brass} strokeWidth="1.5" /><line x1="50" y1="52" x2="50" y2="85" stroke={currentText} strokeWidth="1" /><line x1="35" y1="85" x2="65" y2="85" stroke={colors.terracotta} strokeWidth="1.5" /></SvgWrap>;
  const L24 = () => <SvgWrap><path d="M20 90 L20 40 A30 30 0 0 1 80 40 L80 90" fill="none" stroke={currentText} strokeWidth="1" opacity="0.5" /><path d="M35 90 L35 50 A15 15 0 0 1 65 50 L65 90" fill="none" stroke={colors.brass} strokeWidth="1.5" /><line x1="10" y1="90" x2="90" y2="90" stroke={colors.terracotta} strokeWidth="1" /></SvgWrap>;
  const L25 = () => <SvgWrap><circle cx="50" cy="50" r="40" fill="none" stroke={currentText} strokeWidth="0.5" strokeDasharray="2 4" /><polygon points="50,15 55,45 85,50 55,55 50,85 45,55 15,50 45,45" fill="none" stroke={colors.brass} strokeWidth="1.5" /><circle cx="50" cy="50" r="4" fill={colors.terracotta} /></SvgWrap>;
  const L26 = () => <SvgWrap><path d="M20 70 A30 30 0 0 1 80 70" fill="none" stroke={colors.brass} strokeWidth="1.5"/><path d="M30 70 A20 20 0 0 1 70 70" fill="none" stroke={colors.terracotta} strokeWidth="1.5"/><circle cx="50" cy="30" r="4" fill={currentText} opacity="0.8"/><line x1="10" y1="70" x2="90" y2="70" stroke={currentText} strokeWidth="0.5" opacity="0.6"/></SvgWrap>;
  const L27 = () => <SvgWrap><circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="1"/><path d="M35 30 L65 70" stroke={currentText} strokeWidth="1.5" strokeLinecap="round"/><path d="M65 30 L35 70" stroke={currentText} strokeWidth="1.5" strokeLinecap="round"/><circle cx="50" cy="20" r="2" fill={colors.terracotta}/><circle cx="50" cy="80" r="2" fill={colors.terracotta}/><path d="M31 35 L39 27" stroke={currentText} strokeWidth="1.5"/><circle cx="65" cy="30" r="4" fill="none" stroke={currentText} strokeWidth="1.5"/></SvgWrap>;
  const L28 = () => <SvgWrap><circle cx="50" cy="50" r="46" fill="none" stroke={currentText} strokeWidth="0.5"/><circle cx="50" cy="50" r="40" fill="none" stroke={colors.brass} strokeWidth="1.5"/><circle cx="50" cy="50" r="30" fill="none" stroke={currentText} strokeWidth="0.5" strokeDasharray="2 2"/><text x="50" y="58" textAnchor="middle" fill={currentText} fontSize="22" style={{fontFamily: fontThemes.editorial.primary}}>M</text><path id="fs" d="M50 16 A34 34 0 1 1 49.9 16" fill="none" /><text fontSize="6" fill={colors.terracotta} letterSpacing="5" style={{ fontFamily: fontThemes.modern.secondary }}><textPath href="#fs" startOffset="18%">MOSAIC</textPath></text></SvgWrap>;
  const L29 = () => <SvgWrap><circle cx="50" cy="50" r="40" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3" /><circle cx="50" cy="50" r="30" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.6" /><circle cx="50" cy="50" r="20" fill="none" stroke={colors.brass} strokeWidth="1" /><circle cx="50" cy="50" r="10" fill={colors.terracotta} opacity="0.8" /></SvgWrap>;
  const L30 = () => <SvgWrap><circle cx="45" cy="50" r="35" fill="none" stroke={colors.brass} strokeWidth="1.5" /><circle cx="55" cy="50" r="35" fill="none" stroke={currentText} strokeWidth="1" opacity="0.5" /><path d="M50 15 L50 85" stroke={colors.terracotta} strokeWidth="1" strokeDasharray="4 4" /></SvgWrap>;

  // --- IV. MODERN CULINARY SERIES (31-40) --- //
  const L31 = () => <SvgWrap><circle cx="50" cy="50" r="45" fill="none" stroke={colors.brass} strokeWidth="0.5" /><path d="M65 75 L65 55 L75 65 L85 55 L85 75" fill="none" stroke={currentText} strokeWidth="1" strokeLinejoin="miter" /><circle cx="25" cy="35" r="1.5" fill={colors.terracotta} /></SvgWrap>;
  const L32 = () => <SvgWrap><path d="M15 80 L35 20 L50 50 L65 20 L85 80" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.4" /><path d="M20 80 L40 25 L50 55 L60 25 L80 80" fill="none" stroke={colors.brass} strokeWidth="1" /><path d="M25 80 L45 30 L50 60 L55 30 L75 80" fill="none" stroke={colors.terracotta} strokeWidth="1.5" /></SvgWrap>;
  const L33 = () => <SvgWrap><rect x="30" y="20" width="30" height="40" fill={colors.brass} opacity="0.4" /><rect x="40" y="40" width="30" height="40" fill={colors.terracotta} opacity="0.6" /><rect x="20" y="30" width="40" height="30" fill="none" stroke={currentText} strokeWidth="1.5" opacity="0.8" /></SvgWrap>;
  const L34 = () => <SvgWrap><polygon points="50,15 85,30 85,70 50,85 15,70 15,30" fill="none" stroke={colors.brass} strokeWidth="1"/><polygon points="50,15 50,50 85,30" fill={colors.terracotta} opacity="0.8"/><polygon points="15,30 50,50 15,70" fill={currentText} opacity="0.2"/><polygon points="50,50 85,70 50,85" fill={currentText} opacity="0.9"/><path d="M50 50 L50 85" stroke={currentBg} strokeWidth="1.5"/><path d="M50 50 L15 30" stroke={currentBg} strokeWidth="1.5"/><path d="M50 50 L85 30" stroke={currentBg} strokeWidth="1.5"/></SvgWrap>;
  const L35 = () => <SvgWrap><circle cx="45" cy="45" r="35" fill="none" stroke={colors.brass} strokeWidth="1.5" /><circle cx="55" cy="55" r="35" fill="none" stroke={colors.terracotta} strokeWidth="1" opacity="0.8" /><circle cx="50" cy="50" r="45" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.3" /><circle cx="50" cy="50" r="2" fill={currentText} /></SvgWrap>;
  const L36 = () => <SvgWrap><path d="M25 90 L25 40 A25 25 0 0 1 75 40 L75 90" fill="none" stroke={colors.brass} strokeWidth="1.5" /><path d="M35 90 L35 45 A15 15 0 0 1 65 45 L65 90" fill="none" stroke={currentText} strokeWidth="0.5" /><line x1="15" y1="90" x2="85" y2="90" stroke={currentText} strokeWidth="1" /><path d="M45 60 L55 50 M45 50 L55 60" stroke={colors.terracotta} strokeWidth="1.5" strokeLinecap="round" /><circle cx="50" cy="25" r="4" fill={colors.brass} /></SvgWrap>;
  const L37 = () => <SvgWrap><path d="M60 20 A30 30 0 0 1 60 80 A35 35 0 0 0 60 20" fill={colors.brass} opacity="0.8" /><path d="M35 35 L65 35 L50 55 L50 75 M40 75 L60 75" fill="none" stroke={currentText} strokeWidth="1.5" /><line x1="35" y1="35" x2="65" y2="35" stroke={colors.terracotta} strokeWidth="1" /></SvgWrap>;
  const L38 = () => <SvgWrap><path d="M25 70 C25 35, 75 35, 75 70" fill="none" stroke={colors.brass} strokeWidth="1.5" /><line x1="15" y1="70" x2="85" y2="70" stroke={currentText} strokeWidth="1" /><circle cx="50" cy="35" r="3" fill="none" stroke={colors.brass} strokeWidth="1.5" /><path d="M50 10 Q50 20 60 20 Q50 20 50 30 Q50 20 40 20 Q50 20 50 10 Z" fill={colors.terracotta} /></SvgWrap>;
  const L39 = () => <SvgWrap><circle cx="40" cy="50" r="30" fill="none" stroke={colors.brass} strokeWidth="1" /><circle cx="60" cy="50" r="30" fill="none" stroke={currentText} strokeWidth="1" /><path d="M50 22 C60 40 60 60 50 78 C40 60 40 40 50 22 Z" fill={colors.terracotta} opacity="0.8" /></SvgWrap>;
  const L40 = () => <SvgWrap><ellipse cx="50" cy="55" rx="40" ry="15" fill="none" stroke={colors.brass} strokeWidth="1.5" /><ellipse cx="50" cy="57" rx="35" ry="12" fill="none" stroke={currentText} strokeWidth="0.5" opacity="0.5" /><circle cx="60" cy="50" r="4" fill={colors.terracotta} /><path d="M20 55 L20 60 C20 70 50 80 80 60 L80 55" fill="none" stroke={colors.brass} strokeWidth="1" opacity="0.5" /></SvgWrap>;

  const concepts: Array<{ id: number; title: string; desc: string; component: React.ReactNode; layout: 'horizontal' | 'vertical' | 'none' | 'integrated'; fontTheme: keyof typeof fontThemes }> = [
    // 1-11: SECTION I: THE HERITAGE & EMBLEM SERIES
    { id: 1, title: 'The Elegant Monogram', desc: 'Ultra-thin, sophisticated "M" heavily utilizing negative space.', component: <L1 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 2, title: 'The Scattered Mosaic', desc: 'Dozens of distinct, scattered points forming a unified sphere.', component: <L2 />, layout: 'horizontal', fontTheme: 'artdeco' },
    { id: 3, title: 'The Classic Emblem', desc: 'A perfectly balanced, timeless restaurant badge with concentric rings.', component: <L3 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 4, title: 'The Vintage Key', desc: 'A sophisticated antique skeleton key bridging history and modern dining.', component: <L4 />, layout: 'vertical', fontTheme: 'gallery' },
    { id: 5, title: 'The Culinary Wreath', desc: 'Two elegant botanical branches flawlessly framing the brand monogram.', component: <L5 />, layout: 'horizontal', fontTheme: 'heritage' },
    { id: 6, title: 'The Minimalist Cloche', desc: 'A sleek, monoline cloche protecting an abstract spark of flavor.', component: <L6 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 7, title: 'The Monoline Goblet', desc: 'An ultra-refined geometric wine glass intersecting a perfect golden circle.', component: <L7 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 8, title: 'The Stamped Seal', desc: 'A formal, official restaurant seal denoting establishment and uncompromising quality.', component: <L8 />, layout: 'horizontal', fontTheme: 'modern' },
    { id: 9, title: 'The Signet Stone', desc: 'A delicate circular signet ring with a high-end abstract marble fill and floating monogram.', component: <L9 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 10, title: 'The Deco Plaque', desc: 'An octagonal, extremely structured Art Deco border framing an elegant M.', component: <L10 />, layout: 'vertical', fontTheme: 'artdeco' },
    { id: 11, title: 'The Cutout Plate', desc: 'A perfect signet where a central minimalist dining motif is knocked out of the terrazzo core.', component: <L11 />, layout: 'horizontal', fontTheme: 'editorial' },

    // 12-19: SECTION II: THE TERRAZZO VANGUARD SERIES
    { id: 12, title: 'The Shard Wordmark', desc: 'The "O" in MOSAIC is replaced by the beautiful, organic terrazzo sphere.', component: <L12 />, layout: 'integrated', fontTheme: 'editorial' },
    { id: 13, title: 'The Cathedral Shards', desc: 'The historic Cathedral Square archway filled with the stained-glass mosaic.', component: <L13 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 14, title: 'The Cathedral Inlay', desc: 'A meticulously drafted double-arch pillar honoring Cathedral Square with a striking terrazzo inlay.', component: <L14 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 15, title: 'The Monoline Arch', desc: 'A flawless thin-line arch grounding the terrazzo pattern beneath a minimalist star.', component: <L15 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 16, title: 'The Terrazzo Chalice', desc: 'The terrazzo acts as the liquid within a masterful wine glass silhouette.', component: <L16 />, layout: 'vertical', fontTheme: 'gallery' },
    { id: 17, title: 'The Stately Fork', desc: 'A minimalist three-tine fork grounded over the textured mosaic sphere.', component: <L17 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 18, title: 'The Deco Coupe', desc: 'A highly structured Art Deco cocktail glass blending the terrazzo motif with modern bistro elegance.', component: <L18 />, layout: 'horizontal', fontTheme: 'artdeco' },
    { id: 19, title: 'The Ombre Sunrise', desc: 'A stunning arch housing abstract sun and waves, evoking a high-end luxury resort aesthetic.', component: <L19 />, layout: 'vertical', fontTheme: 'modern' },

    // 20-30: SECTION III: STRUCTURAL ELEGANCE SERIES
    { id: 20, title: 'The Perfect Plate', desc: 'Subtle, culinary-focused, and highly elevated Michelin-star feel.', component: <L20 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 21, title: 'The Fluted Glass', desc: 'Inspired by premium fluted bistro glassware and Cathedral organs.', component: <L21 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 22, title: 'The Golden Ratio', desc: 'Mathematical perfection mimicking a finely plated dish using elegant offset rings.', component: <L22 />, layout: 'horizontal', fontTheme: 'gallery' },
    { id: 23, title: 'The Fine Line Chalice', desc: 'A hyper-minimalist abstraction of a wine glass or chalice using only three elegant strokes.', component: <L23 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 24, title: 'The Structural Arch', desc: 'A purely wireframe, highly architectural representation of the Cathedral window.', component: <L24 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 25, title: 'The Culinary Compass', desc: 'A nautical compass aesthetic representing the global, worldly influence of the menu.', component: <L25 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 26, title: 'The Layered Arc', desc: 'Flawlessly curved lines overlapping like stacked porcelain plates.', component: <L26 />, layout: 'vertical', fontTheme: 'avantgarde' },
    { id: 27, title: 'The Crossed Silverware', desc: 'A high-end, extremely minimal fork and knife cross honoring classic dining.', component: <L27 />, layout: 'horizontal', fontTheme: 'editorial' },
    { id: 28, title: 'The Fine Dining Seal', desc: 'Concentric thin rings featuring curved typography for an ultra-premium stamp.', component: <L28 />, layout: 'vertical', fontTheme: 'gallery' },
    { id: 29, title: 'The Resonance Sphere', desc: 'Concentric circles emitting outward, representing the acoustic energy and social buzz of the space.', component: <L29 />, layout: 'vertical', fontTheme: 'modern' },
    { id: 30, title: 'The Eclipse Ring', desc: 'Offset rings creating a stunning crescent moon shape, perfect for the evening lounge identity.', component: <L30 />, layout: 'horizontal', fontTheme: 'artdeco' },

    // 31-40: SECTION IV: MODERN CULINARY SERIES
    { id: 31, title: 'The Empty Canvas', desc: 'A massive, thin circle with a pristine monogram pushed to the edge.', component: <L31 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 32, title: 'The Kinetic M', desc: 'A wireframe monogram that looks as though it is in constant motion and vibration.', component: <L32 />, layout: 'horizontal', fontTheme: 'modern' },
    { id: 33, title: 'Opacity Layers', desc: 'Overlapping transparent polygons simulating layered, colored glass partitions.', component: <L33 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 34, title: 'The Chiaroscuro', desc: 'A play on shadow and depth where the "M" is formed purely in the negative space of a 3D box.', component: <L34 />, layout: 'vertical', fontTheme: 'avantgarde' },
    { id: 35, title: 'The Perfect Loop', desc: 'Two flawless, concentric, overlapping rings. Clean, uninterrupted, infinite social flow.', component: <L35 />, layout: 'horizontal', fontTheme: 'artdeco' },
    { id: 36, title: 'The Arched Window', desc: 'A minimalist Cathedral arch paired with a subtle plate and cutlery. Unmistakably high-end.', component: <L36 />, layout: 'vertical', fontTheme: 'heritage' },
    { id: 37, title: 'The Celestial Bistro', desc: 'A luxurious crescent moon cradling the sheer outline of a wine glass.', component: <L37 />, layout: 'vertical', fontTheme: 'gallery' },
    { id: 38, title: 'The Culinary Spark', desc: 'A four-pointed spark hovering over a perfectly executed minimalist cloche.', component: <L38 />, layout: 'horizontal', fontTheme: 'modern' },
    { id: 39, title: 'The Fine-Dining Intersection', desc: 'Intersecting rings that form a perfect culinary flame or leaf in the central negative space.', component: <L39 />, layout: 'vertical', fontTheme: 'editorial' },
    { id: 40, title: 'The Minimalist Platter', desc: 'An isometric, angled serving platter highlighting a single, intentional point of culinary focus.', component: <L40 />, layout: 'horizontal', fontTheme: 'gallery' }
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out font-sans" style={{ backgroundColor: currentBg, color: currentText, fontFamily: fontThemes.editorial.secondary }}>
      <header className="px-8 py-16 md:py-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-medium tracking-widest uppercase" style={{ borderColor: colors.brass, color: colors.brass }}>
          <Globe2 size={14} /><span>Industry Standard Identity</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8" style={{ fontFamily: fontThemes.editorial.primary }}>
          The Mosaic Concepts
        </h1>
        <p className="max-w-3xl text-lg md:text-xl opacity-70 font-light mb-12 leading-relaxed">
          Exploring 40 meticulously refined, world-class visual identities. Organized sequentially from 1 to 40 across four distinct, ultra-premium stylistic categories perfectly tailored for fine dining.
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

      <section className="px-6 pb-8 max-w-7xl mx-auto">
        <div className="border rounded-xl p-8 md:p-12 transition-colors duration-500" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF' }}>
          <div className="flex items-center gap-3 mb-10 pb-6 border-b" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
            <Type size={20} style={{ color: colors.brass }} /><h2 className="text-xl font-light tracking-widest uppercase">Typography Pairings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(fontThemes).map(([key, theme], idx) => (
              <div key={key} className="flex flex-col">
                <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Pairing 0{idx+1}</span>
                <div className="text-4xl font-light mb-2" style={{ fontFamily: theme.primary }}>Aa</div>
                <h3 className="text-md tracking-wider mb-2 capitalize" style={{ fontFamily: theme.primary }}>{key} Theme</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 max-w-7xl mx-auto">
        <div className="border rounded-xl p-8 md:p-12 transition-colors duration-500" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF' }}>
          <div className="flex items-center gap-3 mb-10 pb-6 border-b" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
            <Palette size={20} style={{ color: colors.brass }} /><h2 className="text-xl font-light tracking-widest uppercase">Elevated Palette: {active.label}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ name: active.names.primary, hex: colors.midnight }, { name: active.names.accent1, hex: colors.brass }, { name: active.names.accent2, hex: colors.terracotta }, { name: active.names.lightBg, hex: colors.lightBg }].map((color) => (
              <div key={color.name} className="flex flex-col group">
                <div className="h-24 w-full rounded-lg mb-4 shadow-sm border transition-transform duration-500 group-hover:scale-[1.02]" style={{ backgroundColor: color.hex, borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }} />
                <h3 className="text-sm font-semibold tracking-wide mb-1">{color.name}</h3><p className="text-[0.65rem] opacity-50 font-mono mb-2">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY I: THE HERITAGE & EMBLEM SERIES (1-11) */}
      <main className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="mb-10 text-center mt-12">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.editorial.primary }}>I. The Heritage & Emblem Series (1-11)</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">Structured badges, elegant crests, vintage keyholes, and perfect symmetry that denote an established, world-class dining destination.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {concepts.slice(0, 11).map((concept) => (
            <div key={concept.id} className="group relative rounded-xl p-8 flex flex-col h-full border transition-all duration-500 hover:shadow-xl overflow-hidden" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF' }}>
              <div className="flex-grow flex flex-col items-center justify-center py-10">
                {concept.layout === 'integrated' ? <Wordmark layout="integrated" theme={concept.fontTheme} integratedElement={concept.component} className="w-full" /> : concept.layout === 'horizontal' ? <div className="flex flex-col xl:flex-row items-center gap-8">{concept.component}<Wordmark layout="horizontal" theme={concept.fontTheme} /></div> : <div className="flex flex-col items-center">{concept.component}<Wordmark layout="vertical" theme={concept.fontTheme} /></div>}
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <div className="flex items-center justify-between mb-2"><span className="text-[0.65rem] font-bold tracking-widest uppercase opacity-40" style={{ color: colors.brass }}>Concept {concept.id}</span><CheckCircle2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.brass }} /></div>
                <h3 className="text-lg tracking-wide mb-2 font-light" style={{ fontFamily: fontThemes[concept.fontTheme].primary }}>{concept.title}</h3>
                <p className="text-xs opacity-60 font-light leading-relaxed">{concept.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CATEGORY II: THE TERRAZZO VANGUARD SERIES (12-19) */}
      <main className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="mb-10 text-center mt-12">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.gallery.primary }}>II. The Terrazzo Vanguard Series (12-19)</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">Inspired directly by your uploaded references. Flawless structural outlines paired with organic, broken-stone terrazzo elements.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {concepts.slice(11, 19).map((concept) => (
            <div key={concept.id} className="group relative rounded-xl p-8 flex flex-col h-full border transition-all duration-500 hover:shadow-xl overflow-hidden" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF' }}>
              <div className="flex-grow flex flex-col items-center justify-center py-10">
                {concept.layout === 'integrated' ? <Wordmark layout="integrated" theme={concept.fontTheme} integratedElement={concept.component} className="w-full" /> : concept.layout === 'horizontal' ? <div className="flex flex-col xl:flex-row items-center gap-8">{concept.component}<Wordmark layout="horizontal" theme={concept.fontTheme} /></div> : <div className="flex flex-col items-center">{concept.component}<Wordmark layout="vertical" theme={concept.fontTheme} /></div>}
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <div className="flex items-center justify-between mb-2"><span className="text-[0.65rem] font-bold tracking-widest uppercase opacity-40" style={{ color: colors.brass }}>Concept {concept.id}</span><CheckCircle2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.brass }} /></div>
                <h3 className="text-lg tracking-wide mb-2 font-light" style={{ fontFamily: fontThemes[concept.fontTheme].primary }}>{concept.title}</h3>
                <p className="text-xs opacity-60 font-light leading-relaxed">{concept.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CATEGORY III: STRUCTURAL ELEGANCE SERIES (20-30) */}
      <main className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="mb-10 text-center mt-12">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.editorial.primary }}>III. Structural Elegance Series (20-30)</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">Clean geometry, minimalist culinary plating elements, celestial inspiration, and extreme fine-dining refinement.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {concepts.slice(19, 30).map((concept) => (
            <div key={concept.id} className="group relative rounded-xl p-8 flex flex-col h-full border transition-all duration-500 hover:shadow-xl overflow-hidden" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF' }}>
              <div className="flex-grow flex flex-col items-center justify-center py-10">
                {concept.layout === 'integrated' ? <Wordmark layout="integrated" theme={concept.fontTheme} integratedElement={concept.component} className="w-full" /> : concept.layout === 'horizontal' ? <div className="flex flex-col xl:flex-row items-center gap-8">{concept.component}<Wordmark layout="horizontal" theme={concept.fontTheme} /></div> : <div className="flex flex-col items-center">{concept.component}<Wordmark layout="vertical" theme={concept.fontTheme} /></div>}
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <div className="flex items-center justify-between mb-2"><span className="text-[0.65rem] font-bold tracking-widest uppercase opacity-40" style={{ color: colors.brass }}>Concept {concept.id}</span><CheckCircle2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.brass }} /></div>
                <h3 className="text-lg tracking-wide mb-2 font-light" style={{ fontFamily: fontThemes[concept.fontTheme].primary }}>{concept.title}</h3>
                <p className="text-xs opacity-60 font-light leading-relaxed">{concept.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CATEGORY IV: MODERN CULINARY SERIES (31-40) */}
      <main className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="mb-10 text-center mt-12">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-3" style={{ fontFamily: fontThemes.editorial.primary }}>IV. Modern Culinary Series (31-40)</h2>
          <p className="text-sm opacity-60 font-light max-w-2xl mx-auto">Pushing the boundaries into modern Michelin-level dining. Isometric platters, intersecting culinary sparks, and architectural precision.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {concepts.slice(30, 40).map((concept) => (
            <div key={concept.id} className="group relative rounded-xl p-8 flex flex-col h-full border transition-all duration-500 hover:shadow-xl overflow-hidden" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', backgroundColor: isDarkMode ? 'rgba(255,255,255,0.01)' : '#FFFFFF' }}>
              <div className="flex-grow flex flex-col items-center justify-center py-10">
                {concept.layout === 'integrated' ? <Wordmark layout="integrated" theme={concept.fontTheme} integratedElement={concept.component} className="w-full" /> : concept.layout === 'horizontal' ? <div className="flex flex-col xl:flex-row items-center gap-8">{concept.component}<Wordmark layout="horizontal" theme={concept.fontTheme} /></div> : <div className="flex flex-col items-center">{concept.component}<Wordmark layout="vertical" theme={concept.fontTheme} /></div>}
              </div>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <div className="flex items-center justify-between mb-2"><span className="text-[0.65rem] font-bold tracking-widest uppercase opacity-40" style={{ color: colors.brass }}>Concept {concept.id}</span><CheckCircle2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.brass }} /></div>
                <h3 className="text-lg tracking-wide mb-2 font-light" style={{ fontFamily: fontThemes[concept.fontTheme].primary }}>{concept.title}</h3>
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
