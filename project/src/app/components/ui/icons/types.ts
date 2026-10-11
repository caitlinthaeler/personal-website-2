import React from 'react';
import type { IconName } from './iconMap';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export interface SimpleIconProps extends IconProps {
  name: IconName;
}

export type SimpleIcon = {
  title: string;
  slug: string;
  hex: string;
  source?: string;
  svg?: string;
  path: string;
};