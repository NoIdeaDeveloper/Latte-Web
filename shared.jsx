// shared.jsx — Logo, Nav, Footer, HouseOutline, MapleLeaf

const MapleLeaf = ({ size = 12, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} aria-hidden="true">
    <path d="M12 2 L13.2 6.8 L17 5 L15.5 9 L20 9.5 L17 12 L21 14 L16 14.8 L17 18 L13 17 L12 22 L11 17 L7 18 L8 14.8 L3 14 L7 12 L4 9.5 L8.5 9 L7 5 L10.8 6.8 Z"/>
  </svg>
);

const HouseOutline = ({ size = 280, dark = false, className = '' }) => {
  const lineColor = dark ? 'var(--cream)' : 'var(--espresso)';
  const accentColor = 'var(--caramel)';
  const uid = `h${dark ? 'd' : 'l'}`;
  return (
    <svg viewBox="0 0 220 200" width={size} height={size * 0.9} className={className} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
          {dark
            ? (<><stop offset="0%" stopColor="rgba(247,244,238,0.05)" /><stop offset="100%" stopColor="rgba(247,244,238,0)" /></>)
            : (<><stop offset="0%" stopColor="rgba(196,165,116,0.14)" /><stop offset="100%" stopColor="rgba(196,165,116,0.02)" /></>)}
        </linearGradient>
        <linearGradient id={`${uid}-wall`} x1="0" y1="0" x2="1" y2="0">
          {dark
            ? (<><stop offset="0%" stopColor="rgba(247,244,238,0.14)" /><stop offset="55%" stopColor="rgba(247,244,238,0.08)" /><stop offset="100%" stopColor="rgba(247,244,238,0.03)" /></>)
            : (<><stop offset="0%" stopColor="rgba(43,34,25,0.10)" /><stop offset="55%" stopColor="rgba(43,34,25,0.05)" /><stop offset="100%" stopColor="rgba(43,34,25,0.02)" /></>)}
        </linearGradient>
        <linearGradient id={`${uid}-roof`} x1="0" y1="0" x2="0" y2="1">
          {dark
            ? (<><stop offset="0%" stopColor="rgba(196,165,116,0.28)" /><stop offset="100%" stopColor="rgba(196,165,116,0.10)" /></>)
            : (<><stop offset="0%" stopColor="rgba(196,165,116,0.42)" /><stop offset="100%" stopColor="rgba(196,165,116,0.18)" /></>)}
        </linearGradient>
        <linearGradient id={`${uid}-glass`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,231,167,0.78)" />
          <stop offset="100%" stopColor="rgba(196,165,116,0.55)" />
        </linearGradient>
        <linearGradient id={`${uid}-door`} x1="0" y1="0" x2="1" y2="0">
          {dark
            ? (<><stop offset="0%" stopColor="rgba(196,165,116,0.4)" /><stop offset="100%" stopColor="rgba(196,165,116,0.22)" /></>)
            : (<><stop offset="0%" stopColor="rgba(43,34,25,0.45)" /><stop offset="100%" stopColor="rgba(43,34,25,0.28)" /></>)}
        </linearGradient>
        <radialGradient id={`${uid}-shadow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="rgba(43,34,25,0.18)" />
          <stop offset="100%" stopColor="rgba(43,34,25,0)" />
        </radialGradient>
        <linearGradient id={`${uid}-brick`} x1="0" y1="0" x2="1" y2="0">
          {dark
            ? (<><stop offset="0%" stopColor="rgba(247,244,238,0.10)" /><stop offset="100%" stopColor="rgba(247,244,238,0.04)" /></>)
            : (<><stop offset="0%" stopColor="rgba(43,34,25,0.22)" /><stop offset="100%" stopColor="rgba(43,34,25,0.10)" /></>)}
        </linearGradient>
        <linearGradient id={`${uid}-stone`} x1="0" y1="0" x2="0" y2="1">
          {dark
            ? (<><stop offset="0%" stopColor="rgba(247,244,238,0.10)" /><stop offset="100%" stopColor="rgba(247,244,238,0.04)" /></>)
            : (<><stop offset="0%" stopColor="rgba(43,34,25,0.16)" /><stop offset="100%" stopColor="rgba(43,34,25,0.08)" /></>)}
        </linearGradient>
        <linearGradient id={`${uid}-leaf`} x1="0" y1="0" x2="0" y2="1">
          {dark
            ? (<><stop offset="0%" stopColor="rgba(196,165,116,0.22)" /><stop offset="100%" stopColor="rgba(196,165,116,0.10)" /></>)
            : (<><stop offset="0%" stopColor="rgba(120,150,90,0.28)" /><stop offset="100%" stopColor="rgba(120,150,90,0.14)" /></>)}
        </linearGradient>
      </defs>

      {/* Soft ground shadow */}
      <ellipse cx="110" cy="184" rx="104" ry="9" pathLength="1" fill={`url(#${uid}-shadow)`} data-fill />
      {/* Sky wash */}
      <rect x="0" y="0" width="220" height="200" pathLength="1" fill={`url(#${uid}-sky)`} data-fill />

      {/* Clouds (light mode) / stars (dark mode) */}
      {dark ? (<>
        <circle cx="32" cy="30" r="0.9" fill="var(--cream)" opacity="0.7" />
        <circle cx="48" cy="20" r="0.7" fill="var(--cream)" opacity="0.5" />
        <circle cx="188" cy="26" r="0.8" fill="var(--cream)" opacity="0.6" />
        <circle cx="200" cy="42" r="0.6" fill="var(--cream)" opacity="0.4" />
        <circle cx="18" cy="50" r="0.6" fill="var(--cream)" opacity="0.4" />
      </>) : (<>
        <ellipse cx="32" cy="34" rx="14" ry="5" fill="var(--cream)" opacity="0.55" />
        <ellipse cx="40" cy="30" rx="10" ry="4.5" fill="var(--cream)" opacity="0.5" />
        <ellipse cx="188" cy="30" rx="16" ry="5" fill="var(--cream)" opacity="0.55" />
        <ellipse cx="196" cy="36" rx="11" ry="4" fill="var(--cream)" opacity="0.45" />
      </>)}

      {/* Ground line */}
      <line x1="14" y1="184" x2="206" y2="184" pathLength="1" stroke={accentColor} strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      {/* Grass tufts */}
      <path d="M24 184 l2 -5 m-1 5 l3 -4 m0 4 l2 -5" stroke={lineColor} strokeWidth="0.6" opacity="0.3" fill="none" pathLength="1" />
      <path d="M196 184 l2 -5 m-1 5 l3 -4 m0 4 l2 -5" stroke={lineColor} strokeWidth="0.6" opacity="0.3" fill="none" pathLength="1" />
      <path d="M80 184 l2 -4 m1 4 l-2 -4 m3 4 l1 -5" stroke={lineColor} strokeWidth="0.5" opacity="0.25" fill="none" pathLength="1" />
      <path d="M150 184 l2 -4 m1 4 l-2 -4 m3 4 l1 -5" stroke={lineColor} strokeWidth="0.5" opacity="0.25" fill="none" pathLength="1" />

      {/* Foundation (stone texture) */}
      <rect x="46" y="168" width="128" height="16" rx="2" pathLength="1" fill={`url(#${uid}-stone)`} data-fill stroke={lineColor} strokeWidth="1.5" opacity="0.6" />
      <line x1="48" y1="174" x2="172" y2="174" pathLength="1" stroke={lineColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="64" y1="168" x2="64" y2="174" stroke={lineColor} strokeWidth="0.4" opacity="0.25" pathLength="1" />
      <line x1="86" y1="168" x2="86" y2="174" stroke={lineColor} strokeWidth="0.4" opacity="0.25" pathLength="1" />
      <line x1="118" y1="168" x2="118" y2="174" stroke={lineColor} strokeWidth="0.4" opacity="0.25" pathLength="1" />
      <line x1="146" y1="168" x2="146" y2="174" stroke={lineColor} strokeWidth="0.4" opacity="0.25" pathLength="1" />
      <line x1="56" y1="174" x2="56" y2="184" stroke={lineColor} strokeWidth="0.4" opacity="0.25" pathLength="1" />
      <line x1="92" y1="174" x2="92" y2="184" stroke={lineColor} strokeWidth="0.4" opacity="0.25" pathLength="1" />
      <line x1="132" y1="174" x2="132" y2="184" stroke={lineColor} strokeWidth="0.4" opacity="0.25" pathLength="1" />
      <line x1="164" y1="174" x2="164" y2="184" stroke={lineColor} strokeWidth="0.4" opacity="0.25" pathLength="1" />

      {/* Walls with shading */}
      <rect x="50" y="48" width="120" height="122" rx="2" pathLength="1" fill={`url(#${uid}-wall)`} data-fill stroke={lineColor} strokeWidth="2" />
      {/* Corner boards (vertical trim at wall corners) */}
      <line x1="50" y1="48" x2="50" y2="170" stroke={lineColor} strokeWidth="1.4" opacity="0.55" pathLength="1" />
      <line x1="170" y1="48" x2="170" y2="170" stroke={lineColor} strokeWidth="1.4" opacity="0.55" pathLength="1" />
      {/* Water table (horizontal trim at wall base) */}
      <line x1="50" y1="165" x2="170" y2="165" stroke={lineColor} strokeWidth="1.2" opacity="0.45" pathLength="1" />
      {/* Siding courses (denser) */}
      {[60,72,84,96,108,120,132,144,156].map(y => (
        <line key={y} x1="50" y1={y} x2="170" y2={y} pathLength="1" stroke={lineColor} strokeWidth="0.45" opacity="0.16" />
      ))}

      {/* Roof: gable + overhang */}
      <path d="M22 58 L110 10 L198 58 Z" pathLength="1" fill={`url(#${uid}-roof)`} data-fill stroke={lineColor} strokeWidth="2" strokeLinejoin="round" />
      <line x1="26" y1="56" x2="194" y2="56" pathLength="1" stroke={lineColor} strokeWidth="1" opacity="0.35" />
      <line x1="24" y1="58" x2="196" y2="58" pathLength="1" stroke={lineColor} strokeWidth="0.8" opacity="0.4" />
      {/* Shingle courses — left slope (denser) */}
      {[['30','54','50','44'],['52','44','72','34'],['74','34','94','24'],['96','24','108','18']].map((s,i) => (
        <line key={`ls${i}`} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} pathLength="1" stroke={lineColor} strokeWidth="0.55" opacity="0.3" />
      ))}
      {/* Shingle courses — right slope (denser) */}
      {[['190','54','170','44'],['168','44','148','34'],['146','34','126','24'],['124','24','112','18']].map((s,i) => (
        <line key={`rs${i}`} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} pathLength="1" stroke={lineColor} strokeWidth="0.55" opacity="0.3" />
      ))}
      {/* Ridge cap */}
      <line x1="106" y1="10" x2="114" y2="10" pathLength="1" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      {/* Gable vent (louvered triangle) */}
      <path d="M104 50 L116 50 L112 42 L108 42 Z" pathLength="1" fill="none" stroke={lineColor} strokeWidth="0.8" opacity="0.4" />
      <line x1="106" y1="46" x2="114" y2="46" stroke={lineColor} strokeWidth="0.4" opacity="0.3" pathLength="1" />
      <line x1="106" y1="48" x2="114" y2="48" stroke={lineColor} strokeWidth="0.4" opacity="0.3" pathLength="1" />

      {/* Dormer on right roof slope */}
      <path d="M150 44 L156 36 L168 44 Z" pathLength="1" fill={`url(#${uid}-roof)`} data-fill stroke={lineColor} strokeWidth="0.9" />
      <rect x="153" y="44" width="9" height="8" rx="0.5" pathLength="1" fill={`url(#${uid}-glass)`} data-fill stroke={lineColor} strokeWidth="0.8" />
      <line x1="157.5" y1="44" x2="157.5" y2="52" stroke={lineColor} strokeWidth="0.4" opacity="0.4" pathLength="1" />

      {/* Chimney with brick gradient */}
      <rect x="150" y="18" width="14" height="42" rx="1" pathLength="1" fill={`url(#${uid}-brick)`} data-fill stroke={lineColor} strokeWidth="1.5" />
      <rect x="148" y="16" width="18" height="4" rx="1" pathLength="1" fill={`url(#${uid}-brick)`} data-fill stroke={lineColor} strokeWidth="1.5" />
      <rect x="149" y="20" width="16" height="2" rx="0.5" fill="none" stroke={lineColor} strokeWidth="0.5" opacity="0.4" pathLength="1" />
      <rect x="154" y="16" width="6" height="3" rx="0.5" fill="none" stroke={lineColor} strokeWidth="0.5" opacity="0.4" pathLength="1" />
      {/* Chimney brick courses (offset pattern) */}
      {[24,30,36,42,48,54].map((y,i) => (
        <g key={`cb${i}`}>
          <line x1="150" y1={y} x2="164" y2={y} stroke={lineColor} strokeWidth="0.4" opacity="0.28" pathLength="1" />
          {i % 2 === 0 ? (
            <line x1="157" y1={y} x2="157" y2={y+6} stroke={lineColor} strokeWidth="0.3" opacity="0.22" pathLength="1" />
          ) : (
            <>
              <line x1="153" y1={y} x2="153" y2={y+6} stroke={lineColor} strokeWidth="0.3" opacity="0.22" pathLength="1" />
              <line x1="161" y1={y} x2="161" y2={y+6} stroke={lineColor} strokeWidth="0.3" opacity="0.22" pathLength="1" />
            </>
          )}
        </g>
      ))}

      {/* Chimney smoke */}
      <path d="M157 14 Q161 8 157 2 Q153 -4 157 -10" pathLength="1" fill="none" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M163 10 Q167 4 163 -2 Q159 -8 163 -14" pathLength="1" fill="none" stroke={accentColor} strokeWidth="1" strokeLinecap="round" opacity="0.25" />

      {/* Downspout on right wall corner */}
      <line x1="168" y1="58" x2="168" y2="168" stroke={lineColor} strokeWidth="1" opacity="0.35" pathLength="1" />
      <rect x="166.5" y="168" width="3" height="6" rx="0.5" fill="none" stroke={lineColor} strokeWidth="0.6" opacity="0.35" pathLength="1" />

      {/* Upper-floor windows with full trim + shutters */}
      {[62, 130].map(x => (
        <g key={`uw${x}`}>
          <rect x={x-3} y="61" width="34" height="34" rx="1.5" fill="none" stroke={lineColor} strokeWidth="1" opacity="0.45" pathLength="1" />
          <rect x={x} y="64" width="28" height="28" rx="1" pathLength="1" fill={`url(#${uid}-glass)`} data-fill stroke={lineColor} strokeWidth="1.2" />
          <line x1={x+14} y1="64" x2={x+14} y2="92" stroke={lineColor} strokeWidth="0.7" opacity="0.5" pathLength="1" />
          <line x1={x} y1="78" x2={x+28} y2="78" stroke={lineColor} strokeWidth="0.7" opacity="0.5" pathLength="1" />
          <line x1={x-4} y1="93" x2={x+32} y2="93" stroke={lineColor} strokeWidth="1.2" opacity="0.55" pathLength="1" />
          {/* Shutters */}
          <rect x={x-8} y="64" width="5" height="28" rx="0.5" fill={`url(#${uid}-door)`} data-fill stroke={lineColor} strokeWidth="0.6" opacity="0.5" />
          <line x1={x-7} y1="68" x2={x-4} y2="68" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x-7} y1="74" x2={x-4} y2="74" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x-7} y1="80" x2={x-4} y2="80" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x-7} y1="86" x2={x-4} y2="86" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <rect x={x+28} y="64" width="5" height="28" rx="0.5" fill={`url(#${uid}-door)`} data-fill stroke={lineColor} strokeWidth="0.6" opacity="0.5" />
          <line x1={x+29} y1="68" x2={x+32} y2="68" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x+29} y1="74" x2={x+32} y2="74" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x+29} y1="80" x2={x+32} y2="80" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x+29} y1="86" x2={x+32} y2="86" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
        </g>
      ))}

      {/* Lower-floor windows with trim + shutters + flower boxes */}
      {[62, 130].map(x => (
        <g key={`lw${x}`}>
          <rect x={x-3} y="115" width="34" height="40" rx="1.5" fill="none" stroke={lineColor} strokeWidth="1" opacity="0.45" pathLength="1" />
          <rect x={x} y="118" width="28" height="34" rx="1" pathLength="1" fill={`url(#${uid}-glass)`} data-fill stroke={lineColor} strokeWidth="1.2" />
          <line x1={x+14} y1="118" x2={x+14} y2="152" stroke={lineColor} strokeWidth="0.7" opacity="0.5" pathLength="1" />
          <line x1={x} y1="129" x2={x+28} y2="129" stroke={lineColor} strokeWidth="0.6" opacity="0.4" pathLength="1" />
          <line x1={x} y1="141" x2={x+28} y2="141" stroke={lineColor} strokeWidth="0.6" opacity="0.4" pathLength="1" />
          <line x1={x-4} y1="153" x2={x+32} y2="153" stroke={lineColor} strokeWidth="1.2" opacity="0.55" pathLength="1" />
          {/* Shutters */}
          <rect x={x-8} y="118" width="5" height="34" rx="0.5" fill={`url(#${uid}-door)`} data-fill stroke={lineColor} strokeWidth="0.6" opacity="0.5" />
          <line x1={x-7} y1="124" x2={x-4} y2="124" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x-7} y1="131" x2={x-4} y2="131" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x-7} y1="138" x2={x-4} y2="138" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x-7} y1="145" x2={x-4} y2="145" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <rect x={x+28} y="118" width="5" height="34" rx="0.5" fill={`url(#${uid}-door)`} data-fill stroke={lineColor} strokeWidth="0.6" opacity="0.5" />
          <line x1={x+29} y1="124" x2={x+32} y2="124" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x+29} y1="131" x2={x+32} y2="131" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x+29} y1="138" x2={x+32} y2="138" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          <line x1={x+29} y1="145" x2={x+32} y2="145" stroke={lineColor} strokeWidth="0.3" opacity="0.3" pathLength="1" />
          {/* Flower box */}
          <rect x={x-2} y="155" width="32" height="5" rx="0.5" fill={`url(#${uid}-stone)`} data-fill stroke={lineColor} strokeWidth="0.6" opacity="0.5" />
          <circle cx={x+4} cy="153" r="1.2" fill={accentColor} opacity="0.65" />
          <circle cx={x+10} cy="152" r="1" fill={accentColor} opacity="0.55" />
          <circle cx={x+16} cy="153" r="1.2" fill={accentColor} opacity="0.65" />
          <circle cx={x+22} cy="152" r="1" fill={accentColor} opacity="0.55" />
        </g>
      ))}

      {/* Front door: transom + sidelights + double door */}
      <rect x="93" y="98" width="38" height="74" rx="2" fill="none" stroke={lineColor} strokeWidth="1" opacity="0.45" pathLength="1" />
      <rect x="98" y="99" width="28" height="6" rx="0.5" pathLength="1" fill={`url(#${uid}-glass)`} data-fill stroke={lineColor} strokeWidth="0.8" />
      <line x1="105" y1="99" x2="105" y2="105" stroke={lineColor} strokeWidth="0.3" opacity="0.4" pathLength="1" />
      <line x1="112" y1="99" x2="112" y2="105" stroke={lineColor} strokeWidth="0.3" opacity="0.4" pathLength="1" />
      <line x1="119" y1="99" x2="119" y2="105" stroke={lineColor} strokeWidth="0.3" opacity="0.4" pathLength="1" />
      <rect x="95" y="106" width="4" height="64" rx="0.5" pathLength="1" fill={`url(#${uid}-glass)`} data-fill stroke={lineColor} strokeWidth="0.6" />
      <rect x="125" y="106" width="4" height="64" rx="0.5" pathLength="1" fill={`url(#${uid}-glass)`} data-fill stroke={lineColor} strokeWidth="0.6" />
      <rect x="98" y="106" width="28" height="64" rx="1.5" pathLength="1" fill={`url(#${uid}-door)`} data-fill stroke={lineColor} strokeWidth="1.5" />
      <line x1="112" y1="108" x2="112" y2="168" stroke={lineColor} strokeWidth="1" opacity="0.4" pathLength="1" />
      <rect x="100" y="110" width="9" height="12" rx="0.5" fill="none" stroke={lineColor} strokeWidth="0.5" opacity="0.35" pathLength="1" />
      <rect x="115" y="110" width="9" height="12" rx="0.5" fill="none" stroke={lineColor} strokeWidth="0.5" opacity="0.35" pathLength="1" />
      <rect x="100" y="126" width="9" height="12" rx="0.5" fill="none" stroke={lineColor} strokeWidth="0.5" opacity="0.35" pathLength="1" />
      <rect x="115" y="126" width="9" height="12" rx="0.5" fill="none" stroke={lineColor} strokeWidth="0.5" opacity="0.35" pathLength="1" />
      <rect x="100" y="142" width="9" height="12" rx="0.5" fill="none" stroke={lineColor} strokeWidth="0.5" opacity="0.35" pathLength="1" />
      <rect x="115" y="142" width="9" height="12" rx="0.5" fill="none" stroke={lineColor} strokeWidth="0.5" opacity="0.35" pathLength="1" />
      <circle cx="116" cy="136" r="1.4" fill={accentColor} opacity="0.85" />
      <circle cx="108" cy="136" r="1.4" fill={accentColor} opacity="0.85" />
      <circle cx="112" cy="120" r="1.8" fill="none" stroke={accentColor} strokeWidth="0.6" opacity="0.5" pathLength="1" />
      <line x1="91" y1="98" x2="133" y2="98" stroke={lineColor} strokeWidth="1.4" opacity="0.5" pathLength="1" />

      {/* Front steps (two tiers) */}
      <rect x="90" y="170" width="44" height="6" rx="1" pathLength="1" fill={`url(#${uid}-stone)`} data-fill stroke={lineColor} strokeWidth="0.8" opacity="0.6" />
      <rect x="86" y="176" width="52" height="8" rx="1" pathLength="1" fill={`url(#${uid}-stone)`} data-fill stroke={lineColor} strokeWidth="0.8" opacity="0.6" />
      <line x1="112" y1="184" x2="112" y2="196" stroke={accentColor} strokeWidth="1.2" strokeDasharray="4 4" opacity="0.4" pathLength="1" />
      <rect x="104" y="170" width="16" height="2.5" rx="0.5" fill="none" stroke={accentColor} strokeWidth="0.5" opacity="0.4" pathLength="1" />

      {/* Foundation shrubs (organic, layered) */}
      <path d="M14 184 Q14 158 28 158 Q42 158 42 184 Z" pathLength="1" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.8" opacity="0.6" />
      <path d="M178 184 Q178 158 192 158 Q206 158 206 184 Z" pathLength="1" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.8" opacity="0.6" />
      <circle cx="22" cy="170" r="2.5" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.4" opacity="0.4" />
      <circle cx="32" cy="166" r="2.8" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.4" opacity="0.4" />
      <circle cx="38" cy="172" r="2.2" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.4" opacity="0.4" />
      <circle cx="184" cy="170" r="2.5" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.4" opacity="0.4" />
      <circle cx="192" cy="166" r="2.8" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.4" opacity="0.4" />
      <circle cx="200" cy="172" r="2.2" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.4" opacity="0.4" />
      <circle cx="20" cy="166" r="0.7" fill={lineColor} opacity="0.3" />
      <circle cx="28" cy="162" r="0.7" fill={lineColor} opacity="0.3" />
      <circle cx="36" cy="168" r="0.7" fill={lineColor} opacity="0.3" />
      <circle cx="186" cy="166" r="0.7" fill={lineColor} opacity="0.3" />
      <circle cx="194" cy="162" r="0.7" fill={lineColor} opacity="0.3" />
      <circle cx="202" cy="168" r="0.7" fill={lineColor} opacity="0.3" />

      {/* Small tree on left (trunk + canopy) */}
      <path d="M8 184 L8 168 Q7 164 9 162 Q12 160 10 156 Q8 152 11 150" fill="none" stroke={lineColor} strokeWidth="1.4" opacity="0.55" pathLength="1" />
      <circle cx="9" cy="150" r="9" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.7" opacity="0.55" />
      <circle cx="5" cy="146" r="5" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.5" opacity="0.45" />
      <circle cx="13" cy="148" r="5" fill={`url(#${uid}-leaf)`} data-fill stroke={lineColor} strokeWidth="0.5" opacity="0.45" />
      <circle cx="6" cy="148" r="0.6" fill={lineColor} opacity="0.3" />
      <circle cx="10" cy="144" r="0.6" fill={lineColor} opacity="0.3" />
      <circle cx="14" cy="150" r="0.6" fill={lineColor} opacity="0.3" />
      <circle cx="8" cy="152" r="0.6" fill={lineColor} opacity="0.3" />
    </svg>
  );
};

const HouseIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 10L12 3l9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const Logo = ({ size = 26, dark = false }) => (
  <a href="#/" className="logo" style={{ fontSize: size }}>
    <span className="logo-mark"><HouseIcon size={size * 1.1} /></span>
    <span>Good Bones</span>
  </a>
);

const NAV_ITEMS = [
  { href: '#/services', label: 'Services' },
  { href: '#/pricing', label: 'Pricing' },
  { href: '#/about', label: 'About' },
  { href: '#/blog', label: 'Journal' },
  { href: '#/faq', label: 'FAQ' },
  { href: '#/contact', label: 'Contact' },
];

const Nav = ({ route }) => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [underline, setUnderline] = React.useState(null);
  const navLinksRef = React.useRef(null);
  const ctaMagnetRef = React.useRef(null);

  React.useEffect(() => {
    setOpen(false);
    document.body.classList.remove('menu-open');
  }, [route]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); document.body.classList.remove('menu-open'); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Focus trap: when the mobile menu is open, keep Tab focus inside it.
  React.useEffect(() => {
    if (!open) return;
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    const selector = 'a[href], button:not([disabled])';
    const onKeydown = (e) => {
      if (e.key !== 'Tab') return;
      const focusable = Array.from(menu.querySelectorAll(selector)).filter(el => el.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeydown);
    // Move focus into the menu on open
    const firstLink = menu.querySelector(selector);
    if (firstLink) firstLink.focus();
    return () => document.removeEventListener('keydown', onKeydown);
  }, [open]);

  React.useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 100;
        setScrolled(prev => prev === isScrolled ? prev : isScrolled);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const updateUnderline = React.useCallback((e) => {
    const link = e.target.closest('a');
    if (!link) { setUnderline(null); return; }
    const navRect = navLinksRef.current.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setUnderline({ left: linkRect.left - navRect.left, width: linkRect.width });
  }, []);
  const clearUnderline = React.useCallback(() => setUnderline(null), []);

  const handleMagneticMove = React.useCallback((e) => {
    const el = ctaMagnetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);
  const handleMagneticLeave = React.useCallback(() => {
    if (ctaMagnetRef.current) ctaMagnetRef.current.style.transform = 'translate(0, 0)';
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className="nav">
        <div className="nav-inner">
          <Logo size={scrolled ? 22 : 26} />
          <div ref={navLinksRef} className="nav-links"
               onMouseMove={updateUnderline}
               onMouseLeave={clearUnderline}>
            {underline && (
              <div className="nav-underline" style={{ left: underline.left, width: underline.width }} />
            )}
            {NAV_ITEMS.map(item => {
              const isActive = route === item.href.slice(2);
              return (
                <a key={item.href} href={item.href}
                   className={isActive ? 'active' : ''}
                   aria-current={isActive ? 'page' : undefined}>
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="nav-cta">
            <div ref={ctaMagnetRef} onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}
                 style={{ transition: 'transform 0.2s ease-out' }}>
              <a href="#/contact" className="btn btn-primary">
                Start a project →
              </a>
            </div>
            <button
              className="menu-btn"
              onClick={() => {
                const next = !open;
                setOpen(next);
                document.body.classList.toggle('menu-open', next);
              }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span />
            </button>
          </div>
        </div>
      </nav>
      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        {NAV_ITEMS.map(item => {
          const isActive = route === item.href.slice(2);
          return (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}
               className={isActive ? 'active' : ''}
               aria-current={isActive ? 'page' : undefined}
               tabIndex={open ? 0 : -1}>
              {item.label}
            </a>
          );
        })}
        <a href="#/contact" onClick={() => setOpen(false)}
           tabIndex={open ? 0 : -1}
           style={{ marginTop: 16, color: 'var(--caramel-deep)' }}>
          Start a project →
        </a>
      </div>
    </>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <span className="logo" style={{ color: 'var(--cream)', fontSize: 30, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="logo-mark"><HouseIcon size={33} /></span>
            <span>Good Bones</span>
          </span>
          <p style={{ marginTop: 18, opacity: 0.75, fontSize: 14, maxWidth: 280 }}>
            A one-person Canadian studio that designs, builds, and looks after websites for small businesses. Solid foundations, beautiful results — built in Edmonton, end to end.
          </p>
          <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--caramel)' }}>
            <MapleLeaf size={14} color="var(--maple)" />
            Proudly Canadian
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#/services">Web Design</a></li>
            <li><a href="#/services">Site Care</a></li>
            <li><a href="#/services">Hosting</a></li>
            <li><a href="#/pricing">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4>Studio</h4>
          <ul>
            <li><a href="#/about">About</a></li>
            <li><a href="#/blog">Journal</a></li>
            <li><a href="#/faq">FAQ</a></li>
            <li><a href="#/contact">Contact</a></li>
            <li><a href="#/privacy">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h4>Reach Out</h4>
          <ul>
            <li><a href="mailto:hello@goodbonesweb.ca">hello@goodbonesweb.ca</a></li>
            <li>Edmonton, AB</li>
            <li>Open Mon–Fri</li>
            <li>9am – 5pm MT</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Good Bones Web. All rights reserved.</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          Built in Canada, end to end <MapleLeaf size={12} color="var(--caramel)" />
        </span>
      </div>
    </div>
  </footer>
);

export { Logo, Nav, Footer, HouseOutline, HouseIcon, MapleLeaf, NAV_ITEMS, TiltCard, CountOnView };

// ── New interactive components ──────────────────────────────────────────────────

const TiltCard = ({ children, className = '', ...props }) => {
  const ref = React.useRef(null);
  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0 });

  const onMouseMove = React.useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ ry: x * 8, rx: -y * 8 });
  }, []);
  const onMouseLeave = React.useCallback(() => setTilt({ rx: 0, ry: 0 }), []);

  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return <div className={className} {...props}>{children}</div>;
  }

  const { style: userStyle, ...rest } = props;
  return (
    <div ref={ref} className={`tilt-card ${className}`}
         onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
         style={{ ...userStyle, transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
         {...rest}>
      {children}
    </div>
  );
};

const CountOnView = ({ target, suffix = '', duration = 2000, style }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const decimals = target % 1 !== 0;
        const animate = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = eased * target;
          setCount(decimals ? val : Math.round(val));
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(target);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  const decimals = target % 1 !== 0;
  const display = decimals ? count.toFixed(1) : Math.round(count);

  return (
    <span ref={ref} className="serif" style={style}>
      {display}{suffix}
    </span>
  );
};

// ── Scroll-reveal engine ─────────────────────────────────────────────────────
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
    }),
    { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
  );

  function observe() {
    document.querySelectorAll('.reveal:not(.revealed), .reveal-stagger:not(.revealed)')
      .forEach(el => io.observe(el));
  }

  const root = document.getElementById('root');
  if (root) new MutationObserver(observe).observe(root, { childList: true });

  window.addEventListener('hashchange', () =>
    requestAnimationFrame(() => requestAnimationFrame(observe))
  );
}());

// ── Global button ripple ─────────────────────────────────────────────────────
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    if (prefersReduced) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    btn.appendChild(ripple);
    const cleanup = () => ripple.remove();
    ripple.addEventListener('animationend', cleanup);
    setTimeout(cleanup, 700);
  });
}());
