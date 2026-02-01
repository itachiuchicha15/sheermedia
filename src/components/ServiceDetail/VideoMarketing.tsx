
import React from 'react';
import { ServiceLayout } from './ServiceLayout';
import { SERVICES_SECTION } from '../../constants';

export const VideoMarketingPage: React.FC<{ onBack: () => void; onContactClick: () => void }> = ({ onBack, onContactClick }) => {
  const data = SERVICES_SECTION.items.find(s => s.slug === 'personalized-video')!;
  return (
    <ServiceLayout 
      {...data as any} 
      onBack={onBack} 
      onContactClick={onContactClick} 
    />
  );
};
