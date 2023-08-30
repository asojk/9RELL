import React from 'react';
import AccordionS from '../Layout/accordions';

import { TabsFAQ } from '../Components/hoc/TabsFaq';

export default function Faq() {
	return (
		<div className='relative pt-32 pb-16'>

      <TabsFAQ />
      <AccordionS />
      
        </div>
  );
}