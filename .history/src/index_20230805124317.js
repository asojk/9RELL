import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

import About from './Pages/about';
import Faq from './Pages/faq';
import Home from './Pages/home';
import Maintenance from './Pages/maintenance';
import NewRoof from './Pages/new-roof';
import Projects from './Pages/projects';
import Press from './Pages/Press';
import Products from './Pages/products';
import Repair from './Pages/repair';
import Replacement from './Pages/replacement';
import Warranty from './Pages/warranty';
import Footer from './Components/hoc/footer';
import BgTwo from './Components/hoc/bgTwo.js';
import './global.css';
import FloatingBottomNav from './Components/hoc/menus';
import { Helmet } from 'react-helmet';

const App = () => {
	const location = useLocation();

	return (
		<>
    <Helmet>
    <script defer data-site="main.dgvdpi10356da.amplifyapp.com" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>
    </Helmet>
      <BgTwo />
      <AnimatePresence wait>
      <motion.div
        key={Router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
      >
      <FloatingBottomNav />
				<Routes key={location.key}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/faq' element={<Faq />} />
					<Route path='/new-roof' element={<NewRoof />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/press' element={<Press />} />
					<Route path='/products' element={<Products />} />
					<Route path='/repair' element={<Repair />} />
					<Route path='/replacement' element={<Replacement />} />
					<Route path='/warranty' element={<Warranty />} />
					<Route path='/maintenance' element={<Maintenance />} />
				</Routes>
      </motion.div>
			</AnimatePresence>
			<Footer />
		</>
	);
};

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app')
);
