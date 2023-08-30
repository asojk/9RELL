/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      'r' : '#ff3333', 'yw' : '#ffcc33', 'blue-500' : '#2461ff', 'g' : '#35d55e',
      'd9' : '#050404', 'd8' : '#090908', 'd7' : '#141211', 'd6' : '#1d1c19',
      'd5' : '#272521', 'd4' : '#312e29', 'd3' : '#3b3732', 'd2' : '#44403a', 'd1' : '#4e4942',
      'm9' : '#58534a', 'm8' : '#625c53', 'm7' : '#6c655b', 'm6' : '#756e63',
      'm5' : '#7f776b', 'm4' : '#898074', 'm3' : '#91897d', 'm2' : '#9a9287', 'm1' : '#a29b91',
      'l9' : '#aaa49b', 'l8' : '#b2ada4', 'l7' : '#bbb6ae', 'l6' : '#c3bfb8',
      'l5' : '#cbc7c2', 'l4' : '#d3d0cb', 'l3' : '#dcd9d5', 'l2' : '#e8e6e4', 'l1' : '#f3f3f1',
      'yx' : '#fff1c9', 'y0' : '#ffeebb',
      'y1' : '#ffebad', 'y2' : '#ffe7a0', 'y3' : '#ffe492', 'y4' : '#ffe085', 'y5' : '#ffdd77',
      'y6' : '#ffda69', 'y7' : '#ffd65c', 'y8' : '#ffd34e', 'y9' : '#ffcf41',
      'rl' : '#ff6666', 'rA' : '#f03d3d',
      'rd1' : '#c62d2d', 'rd2' : '#8e2828', 'rd3' : '#562323',
      'bl1' : '#c8d7ff', 'bl2' : '#91b0ff', 'bl3' : '#5a88ff',
      'bd2' : '#2250c6', 'bd3' : '#203f8e', 'bd4' : '#111827',
      'gl' : '#9aeaae', 'gd' : '#27a74e', 'gd2' : '#29793e',
      'w2' : '#e9e9eb', 'w3' : '#ccc', 'w4' : '#b2b2b2',
      'b1' : '#808080', 'b2' : '#51515a', 'b3' : '#292929', 'b4' : '#1e1e1e', 'b5' : '#111',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
    },
    linearBorderGradients: theme => ({
      colors: theme('colors'),
    }),
    extend: {
      screens: {
        'xs': {'min': '639px'},
      },
      boxShadow: {
        'sm': '0 35px 10px -1px rgba(250, 250, 250, 1)',
        'md': '0 35px 20px -3px rgba(250, 250, 250, 1)',
        'xl': '0 35px 40px -10px rgba(250, 250, 250, 1)',
        '3xl': '0 35px 60px -15px rgba(250, 250, 250, 1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        title: ["Poppins", "sans-serif"],
        h1: ["Poppins", "sans-serif"],
        h2: ["Poppins", "sans-serif"],
        h3: ["Poppins", "sans-serif"],
        h4: ["Poppins", "sans-serif"],
        h5: ["Poppins", "sans-serif"],
        h6: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        text: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(var(--tw-gradient-angle), var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      shadow: {
        filter: "invert",
      },
      backdropFilter: {
        blur: "blur(12px)",
        saturate: "saturate(84%)",
      },
      backgroundColor: {
        "custom-color": "hsla(0, 0%, 100%, 0.02)",
        custom: "hsla(0, 0%, 0%, 0.60)",
      },
      borderColor: {
        "custom-border-color": "hsla(0, 0%, 100%, 0.125)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        'btn-anim1': {
          '0%': { left: '-100%' },
          '50%': { left: '100%' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'btn-anim1': 'btn-anim1 2s linear infinite',
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
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
    require('tailwindcss-border-gradients')(),
  ],
  daisyui: {
    themes: [ "dark" ],
    colors: {
    },
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true,
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, 
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};