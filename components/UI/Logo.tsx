
import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", inverted = false }) => {
  // When inverted (e.g. in Footer), the box is currentColor (white) 
  // and the text inside the box must be the dark background color (#020617)
  const innerTextColor = inverted ? "#020617" : "white";

  return (
    <svg 
      viewBox="0 0 450 145" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      preserveAspectRatio="xMinYMid meet"
    >
      {/* Container Box for "SHEER" */}
      <rect x="0" y="10" width="225" height="75" rx="8" fill="currentColor" />
      
      {/* --- "SHEER" TEXT (Inside Box) --- */}
      <g fill={innerTextColor}>
        {/* S - Redrawn for balanced geometry and high-end feel */}
        <path d="M35 32H55V39H41V44H55V63H35V56H49V51H35V32Z" />
        {/* H */}
        <path d="M65 32H72V44H86V32H93V63H86V51H72V63H65V32Z" />
        {/* E */}
        <path d="M103 32V63H128V57H110V51H125V45H110V39H128V33H103V32Z" />
        {/* E */}
        <path d="M138 32V63H163V57H145V51H160V45H145V39H163V33H138V32Z" />
        {/* R */}
        <path d="M173 32V63H180V49H189L197 63H206L196 48C201 47 205 44 205 40V39C205 34 201 32 195 32H173ZM180 38H194C196 38 198 39 198 40V41C198 42 196 43 194 43H180V38Z" />
      </g>

      {/* --- "MEDIA" TEXT (Outside Box) --- */}
      <g fill="currentColor">
        {/* M */}
        <path d="M245 32V63H252V42L263 56L274 42V63H281V32H273L263 43L253 32H245Z" />
        {/* E */}
        <path d="M292 32V63H317V57H300V51H314V45H300V39H317V33H292V32Z" />
        {/* D */}
        <path d="M327 32V63H342C350 63 357 59 357 47V47C357 35 350 32 342 32H327ZM334 38H342C346 38 349 41 349 47V47C349 55 346 58 342 58H334V38Z" />
        {/* I */}
        <path d="M368 32V63H375V32H368Z" />
        {/* A */}
        <path d="M385 32L377 63H384L386 56H400L402 63H409L401 32H385ZM388 49L393 34L398 49H388Z" />
      </g>

      {/* --- JUSTIFIED "PRIVATE LIMITED" SUBTEXT --- */}
      <g fill="currentColor">
        <text 
          x="10" 
          y="125" 
          textLength="395" 
          lengthAdjust="spacing"
          style={{ 
            fontSize: '24px', 
            fontWeight: '900', 
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          PRIVATE LIMITED
        </text>
      </g>
    </svg>
  );
};
