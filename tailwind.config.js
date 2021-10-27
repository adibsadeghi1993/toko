module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "0px",
      sm: "320px",
      md: "700px",
      lg: "1280px",
      xl: "1920px",
    },
    fontFamily: {
      display: ["Vazir"],
      body: ["Vazir"],
    },
    extend: {
      maxWidth: {
        xs: "320px",
        sm: "482px",
        md: "973px",
        lg: "1468px",
      },
      minWidth: {
        xs: "320px",
      },
      height: (theme) => ({
        200: "200%",
      }),
      colors: {
        backgroundPrimary: "#1c345d",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
