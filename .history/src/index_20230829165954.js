import React from "react";
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
//import './output.css';
//import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './Components/hoc/oNav.jsx';
import * as Swetrix from 'swetrix';

import * as THREE from 'three';

var SEPARATION = 50,
	AMOUNTX = 60,
	AMOUNTY = 30;

var container;
var camera, scene, renderer;
/*

if (window.WebGLRenderingContext){
	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	}
else {
	renderer = new THREE.CanvasRenderer();
	}
*/

var particles,
	particle,
	count = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
	container = document.createElement('div');
	document.body.appendChild(container);
	if (container) {
		container.className += container.className ? ' waves' : 'waves';
	}

	camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.y = 180; //changes how far back you can see i.e the particles towards horizon
	camera.position.z = 20; //This is how close or far the particles are seen

	camera.rotation.x = 0.35;

	scene = new THREE.Scene();

	particles = new Array();

	var PI2 = Math.PI * 2;
	var material = new THREE.SpriteCanvasMaterial({
		color: 0xffffff, //changes color of particles
		program: function (context) {
			context.beginPath();
			context.arc(0, 0, 0.5, 0, PI2, true);
			context.fill();
		},
	});

	var i = 0;

	for (var ix = 0; ix < AMOUNTX; ix++) {
		for (var iy = 0; iy < AMOUNTY; iy++) {
			particle = particles[i++] = new THREE.Sprite(material);
			particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
			particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION - 10);
			scene.add(particle);
		}
	}

	renderer = new THREE.CanvasRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	//renderer.setClearColor( 0xEAEBE5, 1);
	renderer.setClearColor(0x000000, 1);
	container.appendChild(renderer.domElement);

	window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);

	render();
}

function render() {
	var i = 0;

	for (var ix = 0; ix < AMOUNTX; ix++) {
		for (var iy = 0; iy < AMOUNTY; iy++) {
			particle = particles[i++];
			particle.position.y = Math.sin((ix + count) * 0.5) * 15 + Math.sin((iy + count) * 0.5) * 15;
			particle.scale.x = particle.scale.y =
				(Math.sin((ix + count) * 0.5) + 2) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
		}
	}

	renderer.render(scene, camera);

	// This increases or decreases speed
	count += 0.05;
}

const App = () => {
  Swetrix.init('gsutkQff6JRb');
	Swetrix.trackViews();
	const location = useLocation();

	return (

      <><BgTwo /><AnimatePresence wait>
      <motion.div key={Router.route} initial="initialState" animate="animateState"
        exit="exitState" className="base-page-size" transition={{ duration: 0.75, }}
        variants={{
          initialState: { opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", },
          animateState: { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", },
          exitState: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)", },
        }}>
        <Navbar />
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
        <Footer />
      </motion.div>
    </AnimatePresence></>
	);
};

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app')
);
