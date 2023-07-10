/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./manage-landing-page/*html'],
  theme: {
    screens:{
      sm: '350px',
      md: '768px',
      sm: '976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue:'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray:'hsl(0, 0%, 98%)'
      },

      fontSize: {
        sm: ['16px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },

      fontFamily: {
        
        sansSerif: ['Be Vietnam Pro', 'sans-serif']
        // Add more custom font families
      },

      fontWeight: {
        extralight: '200',
        normal: '400',
        medium: '500',
        bold: '700',
      }

    },
  },
  plugins: [],
}

