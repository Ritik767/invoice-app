/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0C0E16',
        secondary:'#1E2139',
        primaryBtn:'#7C5DFA',
        hoverBtn:'#9277FF',
        primaryInput:'#252945',
        secondaryInput:'#141625',
        delBtn:'#EC5757',
        hoverDelBtn:'#FF7777',
        editBtn:'#1E2139',
        discardBtn:'#F8F8FB',
        whiteeText:'#DFE3FA',
      },
      typography:{
        Spartan:'Spartan',
      }
    },
  },
  plugins: [],
}

