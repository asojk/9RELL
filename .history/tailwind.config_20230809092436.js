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
      'r' : '#ff3333', 'y' : '#ffcc33', 'b' : '#2461ff', 'g' : '#35d55e',
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
    },
    extend: {
      screens: {
        'xs': {'min': '639px'},
      },
      fontFamily: {
        title, h1, h2, h3, h4, h5, h6: ["Poppins", "sans-serif"],
        body, text, a: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(var(--tw-gradient-angle), var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
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