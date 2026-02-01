
import React from 'react';
import { ServiceLayout } from './ServiceLayout';
import { SERVICES_SECTION } from '../../constants';

export const MarketResearchPage: React.FC<{ onBack: () => void; onContactClick: () => void }> = ({ onBack, onContactClick }) => {
  const data = SERVICES_SECTION.items.find(s => s.slug === 'market-research')!;
  return (
    <ServiceLayout 
      {...data as any} 
      onBack={onBack} 
      onContactClick={onContactClick} 
      colorScheme="violet"
    />
  );
};
