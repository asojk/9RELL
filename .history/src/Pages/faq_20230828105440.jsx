import React from 'react';
import AccordionS from '../Faq/accordions';
import { TabsFAQ } from '../Faq/TabsFaq';


export default function Faq() {
	return (
<><div className='pt-64'><TabsFAQ /></div>
<div className='relative z-10 max-w-screen-xl px-8 py-32 mx-auto sm:px-10 lg:flex lg:items-center lg:px-12'>

<AccordionS />
</div></>
	);
}
