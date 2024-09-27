/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      sans: ['Arial', 'sans-serif'],  // Default sans-serif font
      serif: ['Georgia', 'serif'],     // Default serif font
      mono: ['Courier New', 'monospace'], // Default monospace font
      custom: ['"Times New Roman"', 'serif'], // Custom font example
      helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'], // Custom Helvetica
      verdana: ['Verdana', 'Geneva', 'sans-serif'], // Custom Verdana
      impact: ['Impact', 'sans-serif'], // Custom Impact
      cursive: ['"Brush Script MT"', 'cursive'], // Custom Cursive
      palatino: ['Palatino', 'serif'],  // Palatino
      tahoma: ['Tahoma', 'sans-serif'], // Tahoma
      arial: ['Arial', 'sans-serif'],   // Arial
      comic: ['"Comic Sans MS"', 'cursive'], // Comic Sans
      georgia: ['Georgia', 'serif'],    // Georgia
      arvo: ['Arvo', 'serif'],          // Arvo
      droid: ['"Droid Sans"', 'sans-serif'], // Droid Sans
      montserrat: ['Montserrat', 'sans-serif'], // Montserrat
      openSans: ['"Open Sans"', 'sans-serif'], // Open Sans
      roboto: ['"Roboto"', 'sans-serif'], // Roboto
      oswald: ['Oswald', 'sans-serif'],  // Oswald
      cabin: ['Cabin', 'sans-serif'],    // Cabin
      poppins: ['Poppins', 'sans-serif'], // Poppins
      lora: ['Lora', 'serif'],            // Lora
      raleway: ['Raleway', 'sans-serif'], // Raleway
      times: ['"Times New Roman"', 'serif'], // Times New Roman
      sublime: ['"Sublime Text"', 'monospace'], // Sublime Text
      nunito: ['Nunito', 'sans-serif'],   // Nunito
      sourceSans: ['"Source Sans Pro"', 'sans-serif'], // Source Sans Pro
      dosis: ['Dosis', 'sans-serif'],      // Dosis
    },},
  },
  plugins: [],
}