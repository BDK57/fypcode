/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'mainColor':"#d5af80",
        'secColor':"#2f4d4b",
        'secColor-800':"#2f4d4bd9",
        
        
        'textColor':"#132743",
        'paraColor':"#3f464b"

      },
    },
  },
  plugins: [],
}
