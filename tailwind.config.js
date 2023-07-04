/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1537px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#0052cc",
        "header-text": "#ccdae7",
        "para-text": "#a7b5c4",
        green: "#3aecba",
        blue: "#4036be",
        orange: "#a84b05",
        bg: "#0d1117",
        "acc-bg": "#171e25",
        "acc-at-bg": "#222d3b",

        white: "#fff",

        
      },
      fontFamily: {
        head: ["Inter", "sans-serif"],
        para: ["Lato", "sans-serif"],
      },

      backgroundImage: {
        "home-gradient":
          "radial-gradient(circle farthest-corner at -55% -20%, #0d1117 36%, rgba(13, 17, 23, 0) 48%), radial-gradient(circle farthest-corner at -25% 150%, #0d1117 45%, rgba(13, 17, 23, 0) 89%), radial-gradient(circle farthest-corner at -25% -100%, rgba(13, 17, 23, 0) 55%, rgba(13, 17, 23, 0.28) 65%, rgba(13, 17, 23, 0) 68%), radial-gradient(circle farthest-corner at -33% -75%, #1f00cc 48%, rgba(131, 5, 49, 0) 56%), radial-gradient(circle farthest-side at 0% -50%, rgba(13, 17, 23, 0) 64%, rgba(1, 2, 36, 0.4) 69%, rgba(13, 17, 23, 0) 81%), radial-gradient(circle farthest-corner at 0% -50%, rgba(13, 17, 23, 0) 33%, #1f00cc 51%, rgba(13, 17, 23, 0) 72%)",
        "home-text-gradient":
          "linear-gradient(207deg, #e23b3b 23%, #6668eb 87%)",
        "blue-gradient":
          "radial-gradient(circle at 11% 32%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 5%,transparent 5%, transparent 95%),radial-gradient(circle at 89% 30%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 5%,transparent 5%, transparent 95%),radial-gradient(circle at 76% 90%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 83% 14%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 62% 81%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 34% 3%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 19% 1%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 48% 14%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 54% 23%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 10% 37%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 4%,transparent 4%, transparent 96%),linear-gradient(271deg, rgb(49,179,236),rgb(82,74,221))",
        help1:
          "radial-gradient(circle at center left, rgb(185,251,192),rgb(82,182,154))",
        help2:
          "radial-gradient(circle at 70% 18%, hsla(126,0%,77%,0.05) 0%, hsla(126,0%,77%,0.05) 41%,transparent 41%, transparent 100%),radial-gradient(circle at 6% 94%, hsla(126,0%,77%,0.05) 0%, hsla(126,0%,77%,0.05) 52%,transparent 52%, transparent 100%),radial-gradient(circle at 93% 63%, hsla(126,0%,77%,0.05) 0%, hsla(126,0%,77%,0.05) 85%,transparent 85%, transparent 100%),radial-gradient(circle at 5% 85%, hsla(126,0%,77%,0.05) 0%, hsla(126,0%,77%,0.05) 8%,transparent 8%, transparent 100%),radial-gradient(circle at 49% 93%, hsla(126,0%,77%,0.05) 0%, hsla(126,0%,77%,0.05) 37%,transparent 37%, transparent 100%),linear-gradient(45deg, rgb(15, 5, 113),rgb(191, 90, 222));",
        help3:
          "radial-gradient(circle at 40% 91%, rgba(251, 251, 251,0.04) 0%, rgba(251, 251, 251,0.04) 50%,rgba(229, 229, 229,0.04) 50%, rgba(229, 229, 229,0.04) 100%),radial-gradient(circle at 66% 97%, rgba(36, 36, 36,0.04) 0%, rgba(36, 36, 36,0.04) 50%,rgba(46, 46, 46,0.04) 50%, rgba(46, 46, 46,0.04) 100%),radial-gradient(circle at 86% 7%, rgba(40, 40, 40,0.04) 0%, rgba(40, 40, 40,0.04) 50%,rgba(200, 200, 200,0.04) 50%, rgba(200, 200, 200,0.04) 100%),radial-gradient(circle at 15% 16%, rgba(99, 99, 99,0.04) 0%, rgba(99, 99, 99,0.04) 50%,rgba(45, 45, 45,0.04) 50%, rgba(45, 45, 45,0.04) 100%),radial-gradient(circle at 75% 99%, rgba(243, 243, 243,0.04) 0%, rgba(243, 243, 243,0.04) 50%,rgba(37, 37, 37,0.04) 50%, rgba(37, 37, 37,0.04) 100%),linear-gradient(250deg, rgb(34, 222, 237),rgb(250,210,225));",
          'help': 'radial-gradient(circle farthest-corner at 0% -50%, hsla(0, 0%, 100%, 0) 3%, #079de0 44%, hsla(0, 0%, 100%, 0) 72%), radial-gradient(circle farthest-corner at 50% 100%, #a355ee, #3077eb)',

        "line-gradient":
          "repeating-linear-gradient(90deg, hsla(15,0%,62%,0.05) 0px, hsla(15,0%,62%,0.05) 1px,transparent 1px, transparent 104px),repeating-linear-gradient(0deg, hsla(15,0%,62%,0.05) 0px, hsla(15,0%,62%,0.05) 1px,transparent 1px, transparent 104px),repeating-linear-gradient(0deg, rgba(0,209,255, 0.25) 0px, rgba(0,209,255, 0.25) 1px,transparent 1px, transparent 52px),repeating-linear-gradient(90deg, rgba(0,209,255, 0.25) 0px, rgba(0,209,255, 0.25) 1px,transparent 1px, transparent 52px),linear-gradient(0deg, rgb(13,17,23),rgb(13,17,23));",

        'overlay':
          "radial-gradient(circle at  center, transparent 0%, #0d1117 70%)",
          'why-bg': 'linear-gradient(180deg, #0d1117 7%, rgba(13, 17, 23, 0) 20%), radial-gradient(circle farthest-side at -25% 150%, #0d1117 48%, rgba(13, 17, 23, 0) 65%), radial-gradient(circle farthest-corner at -25% -125%, rgba(13, 17, 23, 0) 50%, #0d1117 70%, rgba(13, 17, 23, 0) 72%), radial-gradient(circle farthest-corner at 0% -50%, #0d1117 32%, hsla(0, 0%, 100%, 0) 62%), radial-gradient(circle farthest-side at 0% -25%, #007252 50%, rgba(13, 17, 23, 0) 72%), radial-gradient(circle farthest-corner at 50% -100%, #05f 26%, rgba(13, 17, 23, 0) 72%)',

          'why': 'linear-gradient(405deg, rgb(128,237,153),rgb(87,204,153),rgb(255,214,10))',
          'why2': 'linear-gradient(111deg, rgb(32, 218, 233),rgb(255,77,109))',
          'whyus': 'linear-gradient(37deg, rgb(255,159,28),rgb(254,198,1))',
          'popular': 'radial-gradient(circle farthest-corner at 50% 50%, #0a2a88, #0d1117 75%)',
      },

      gridTemplateRows: {
        // Simple 8 row grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
// radial-gradient(circle, rgba(131,58,180,0.022934173669467817) 61%, rgba(23,30,37,1) 99%, rgba(252,176,69,0) 100%)
