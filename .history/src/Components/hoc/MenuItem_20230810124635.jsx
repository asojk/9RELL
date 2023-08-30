import react from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const MenuItem = ({to, title, icon}) => (
	<Link to={to}>
		<motion.li variants={itemVariants} className='p-2'>
			<button className='flex items-center px-5 py-2 cursor-pointer md:py-4 rounded-xl bg-custom/30 hover:border-s-2'>
				<span className='col-span-1'>{icon}</span>
				<span className='text-xs text-l1 md:text-lg'>{title}</span>
			</button>
		</motion.li>
	</Link>
);

export default MenuItem;


<ul className="space-y-1.5">
<li>
	<a className="flex items-center gap-x-3 py-2 px-2.5 bg-d5 text-sm text-l1 rounded-md hover:bg-d9 " href="#">
	Dashboard
	</a>
</li>
<li><a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-l1 rounded-md hover:bg-d5" href="#">

	Users
</a></li>
<li><a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-l1 rounded-md hover:bg-d5" href="#">

	Account
</a></li>
<li><a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-l1 rounded-md hover:bg-d5" href="#">

	Projects
</a></li>
<li><a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-l1 rounded-md hover:bg-d5" href="#">

	Calendar
</a></li>
<li><a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-l1 rounded-md hover:bg-d5" href="#">

	Documentation
</a></li>
</ul>