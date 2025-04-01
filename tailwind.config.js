/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '96vh': '96vh',
      },
      backgroundImage: {
        'hero-pattern': "url('https://preprodtsbstorage.blob.core.windows.net/cms/uploads/36_Holiday_Dashboard_05_1_eaa2feb94e.png')",
        'hero-pattern2': "url('https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Banner_Background_2256x488_1_0c34e62d77.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

