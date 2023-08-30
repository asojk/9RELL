/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	},
	theme: {
		colors: {
			transparent: 'transparent', current: 'currentColor',
			black: colors.black, white: colors.white, gray: colors.gray, emerald: colors.emerald,
			indigo: colors.indigo, violet: colors.violet, slate: colors.slate, yellow: colors.yellow,
			r: '#ff3333', yw: '#ffcc33', g: '#35d55e', blue: { 500: '#2461ff' },
			d9: '#050404', d8: '#090908', d7: '#141211', d6: '#1d1c19', d5: '#272521', d4: '#312e29', d3: '#3b3732', d2: '#44403a', d1: '#4e4942',
			m9: '#58534a', m8: '#625c53', m7: '#6c655b', m6: '#756e63', m5: '#7f776b', m4: '#898074', m3: '#91897d', m2: '#9a9287', m1: '#a29b91',
			l9: '#aaa49b', l8: '#b2ada4', l7: '#bbb6ae', l6: '#c3bfb8', l5: '#cbc7c2', l4: '#d3d0cb', l3: '#dcd9d5', l2: '#e8e6e4', l1: '#f3f3f1',
			yx: '#fff1c9', y0: '#ffeebb',
			y1: '#ffebad', y2: '#ffe7a0', y3: '#ffe492', y4: '#ffe085', y5: '#ffdd77', y6: '#ffda69', y7: '#ffd65c', y8: '#ffd34e', y9: '#ffcf41',
			rl: '#ff6666', rA: '#f03d3d', rd1: '#c62d2d', rd2: '#8e2828', rd3: '#562323',
			bl1: '#c8d7ff', bl2: '#91b0ff', bl3: '#5a88ff', bd2: '#2250c6', bd3: '#203f8e', bd4: '#111827',
			gl: '#9aeaae', gd: '#27a74e', gd2: '#29793e',
			w2: '#e9e9eb', w3: '#ccc', w4: '#b2b2b2',
			b1: '#808080', b2: '#51515a', b3: '#292929', b4: '#1e1e1e', b5: '#111',
			d71: '#3c3a39', d72: '#686665', d73: '#989695', d74: '#cbc9c8',
		},
		extend: {
			screens: {
				xs: { min: '638px' },
			},
			boxShadow: {
				sm: '0 6px 10px -1px rgba(250, 250, 250, 1)',
				md: '0 12px 20px -3px rgba(250, 250, 250, 1)',
				lg: '0 12px 20px -3px rgba(250, 250, 250, 1)',
				xl: '0 28px 40px -10px rgba(250, 250, 250, 1)',
				'2xl': '0 28px 40px -10px rgba(250, 250, 250, 1)', '3xl': '0 35px 60px -15px rgba(250, 250, 250, 1)',
				'soft-xxs': '0 1px 5px 1px #ddd', 'soft-xs': '0 3px 5px -1px rgba(0,0,0,.09),0 2px 3px -1px rgba(0,0,0,.07)', 'soft-sm': '0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)', 'soft-md': '0 4px 7px -1px rgba(0,0,0,.11),0 2px 4px -1px rgba(0,0,0,.07)', 'soft-lg': '0 2px 12px 0 rgba(0,0,0,.16)', 'soft-xl': '0 20px 27px 0 rgba(0,0,0,.05)', 'soft-2xl': '0 .3125rem .625rem 0 rgba(0,0,0,.12)', 'soft-3xl': '0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				title: ['Poppins', 'sans-serif'],
				h1: ['Poppins', 'sans-serif'],
				h2: ['Poppins', 'sans-serif'],
				h3: ['Poppins', 'sans-serif'],
				h4: ['Poppins', 'sans-serif'],
				h5: ['Poppins', 'sans-serif'],
				h6: ['Poppins', 'sans-serif'],
				body: ['Poppins', 'sans-serif'],
				text: ['Poppins', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-linear': 'linear-gradient(var(--tw-gradient-angle), var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
			},
			backdropFilter: {
				blur: 'blur(12px)',
				saturate: 'saturate(84%)',
			},
			backgroundColor: {
				'custom-color': 'hsla(0, 0%, 100%, 0.02)',
				custom: 'hsla(0, 0%, 0%, 0.60)',
			},
			keyframes: {
				'fade-in': {
					from: { opacity: 0, transform: 'translateY(100%)' },
					to: { opacity: 1, transform: 'translateY(0)' },
				},
				'fade-out': {
					from: { opacity: 1, transform: 'translateY(0)' },
					to: { opacity: 0, transform: 'translateY(-100%)' },
				},
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	variants: {
		extend: {
			scale: ['group-hover'], // enable group-hover variant for scale utility
			backgroundImage: ['hover', 'focus'], // enable hover and focus variants for backgroundImage utility
			gradientColorStops: ['hover', 'focus'], // enable hover and focus variants for gradientColorStops utility
		},
	},
	plugins: [require('daisyui'), require('@tailwindcss/forms')],
	daisyui: {
		themes: ['dark'],
		darkTheme: 'dark', // name of one of the included themes for dark mode
		base: true,
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
	},
};