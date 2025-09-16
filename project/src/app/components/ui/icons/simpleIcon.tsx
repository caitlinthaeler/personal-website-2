import React from 'react';
import { iconMap, type IconName } from './iconMap';

interface SimpleIconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const SimpleIcon: React.FC<SimpleIconProps> = ({ 
  name, 
  size = 24, 
  color,
  className = '',
  title,
  onClick,
  style,
}) => {
  const icon = iconMap[name];
  
  if (!icon) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  const iconColor = color || `#${icon.hex}`;
  const iconTitle = title || icon.title;
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };
  
  const svgProps = {
    role: "img" as const,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: iconColor,
    className: `simple-icon ${className}`.trim(),
    style: onClick ? { cursor: 'pointer', ...style } : style,
    'aria-label': iconTitle,
    ...(onClick && { 
      onClick,
      tabIndex: 0,
      onKeyDown: handleKeyDown,
      role: "button" as const,
    })
  };

  return (
    <svg {...svgProps}>
      <title>{iconTitle}</title>
      <path d={icon.path} />
    </svg>
  );
};