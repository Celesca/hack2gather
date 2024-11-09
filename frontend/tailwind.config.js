/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: 
    {
      colors: 
      {
        'bluebg':'#3A6D8C',
        'skybg':'#6A9AB0',
      },
      backgroundImage: {
        'loginimage': "url('./img/imagelogin.png)"
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

