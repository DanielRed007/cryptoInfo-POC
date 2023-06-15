import React, { FC, ReactElement, ReactNode } from 'react';
import Chip from '@mui/material/Chip';

interface CustomTagProps{
    size: any;
    variant: any;
    label: string;
    showIcon?: boolean;
    icon?: ReactElement;
}

export const CustomTag: FC<CustomTagProps> = ({ size, variant, label, showIcon, icon }) => {
  return (
    <Chip size={size} icon={showIcon ? icon : <></>} label={label} variant={variant} />
  );
}