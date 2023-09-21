/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Barlow', 'Barlow Condensed', 'sans-serif'],
      serif: ['Bellefair', 'serif']
    },
    extend: {
      colors: {
        darkBlue: '#0B0D17',
        skyBlue: '#D0D6F9'
      },
      fontSize: {
        '5xl': '150px',
        '4xl': '100px',
        '3xl': '56px',
        '2xl': '34px',
        xl: '28px',
        base: '18px',
        sm: '16px'
      },
      backgroundImage: {
        bgHomeDesktop: "url('/src/assets/home/background-home-desktop.jpg')",
        bgHomeTablet: "url('/src/assets/home/background-home-tablet.jpg')",
        bgHomeMobile: "url('/src/assets/home/background-home-mobile.jpg')",
        bgCrewDesktop: "url('/src/assets/crew/background-crew-desktop.jpg')",
        bgCrewTablet: "url('/src/assets/crew/background-crew-tablet.jpg')",
        bgCrewMobile: "url('/src/assets/crew/background-crew-mobile.jpg')",
        bgDestinationDesktop: "url('/src/assets/destination/background-destination-desktop.jpg')",
        bgDestinationTablet: "url('/src/assets/destination/background-destination-tablet.jpg')",
        bgDestinationMobile: "url('/src/assets/destination/background-destination-mobile.jpg')",
        bgTechDesktop: "url('/src/assets/technology/background-technology-desktop.jpg')",
        bgTechTablet: "url('/src/assets/technology/background-technology-tablet.jpg')",
        bgTechMobile: "url('/src/assets/technology/background-technology-mobile.jpg')"
      },
      screens: {
        '2xl': '1440px'
      }
    }
  },
  plugins: []
}
