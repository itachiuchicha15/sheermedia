
import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", inverted = false }) => {
  // Inner text color for the boxed "SHEER" part
  const innerTextColor = inverted ? "#020617" : "white";

  return (
    <svg 
      viewBox="0 0 400 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      preserveAspectRatio="xMinYMid meet"
    >
      {/* Container Box for "SHEER" - Proportions tuned to brand */}
      <rect x="0" y="20" width="165" height="65" rx="4" fill="currentColor" />
      
      {/* --- "SHEER" TEXT (Inside Box) --- */}
      <text 
        x="12" 
        y="68" 
        fill={innerTextColor}
        style={{ 
          fontSize: '48px', 
          fontWeight: '900', 
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.04em'
        }}
      >
        SHEER
      </text>

      {/* --- "MEDIA" TEXT (Outside Box) --- */}
      <text 
        x="180" 
        y="68" 
        fill="currentColor"
        style={{ 
          fontSize: '48px', 
          fontWeight: '900', 
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.04em'
        }}
      >
        MEDIA
      </text>

      {/* --- JUSTIFIED "PRIVATE LIMITED" SUBTEXT --- */}
      <text 
        x="0" 
        y="120" 
        fill="currentColor"
        textLength="350" 
        lengthAdjust="spacing"
        style={{ 
          fontSize: '24px', 
          fontWeight: '900', 
          fontFamily: 'Inter, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}
      >
        PRIVATE LIMITED
      </text>
    </svg>
  );
};
