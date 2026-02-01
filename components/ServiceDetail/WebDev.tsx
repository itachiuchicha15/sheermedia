
import React from 'react';
import { ServiceLayout } from './ServiceLayout';
import { SERVICES_SECTION } from '../../constants';

export const WebDevPage: React.FC<{ onBack: () => void; onContactClick: () => void }> = ({ onBack, onContactClick }) => {
  const data = SERVICES_SECTION.items.find(s => s.slug === 'web-development')!;
  return (
    <ServiceLayout 
      {...data as any} 
      onBack={onBack} 
      onContactClick={onContactClick} 
    />
  );
};
