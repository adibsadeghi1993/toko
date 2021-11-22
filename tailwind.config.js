module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
      display: ["IRANSans_FaNum", "cursive"],
      body: ["IRANSans_FaNum", "cursive"],
    },
    extend: {
      borderRadius: {
        r30: "1.875rem",
      },
      transitionDelay: {
        0.3: "0.3ms",
      },
      fontSize: {
        thead: [
          "10.4px",
          {
            lineHeight: "15.6px",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        otherCaption: [
          "17px",
          {
            lineHeight: "25.5px",
            fontWeight: "600",
          },
        ],
        bodyTable: [
          "13px",
          {
            lineHeight: "19.5px",
            fontWeight: "400",
          },
        ],
      },
      spacing: {
        "1-5": "1.500px",
        72: "72px",
        30: "30px",
        100: "100px",
        250: "250px",
        78: "78px",
        "200-1": "200px",
        90: "90px",
        15: "15px",
        // 5: "5px",
        40: "40px",
      },
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
        orange: "#fb6340",
        primary: {
          background: "#1c345d",
          color: "#32325d",
        },
        secondary: {
          background: "#5e72e4",
          color: "#32325d",
        },
        error: {
          background: "#f44336",
        },
        success: {
          background: "#2dce89",
          color: "#2dce89",
        },
        info: {
          background: "#00bcd4",
          color: "#ffffff",
        },
        other: {
          color: "#5e72e4",
          bgGrayActiveItem: "#f6f9fc",
          labelColor: "#525f7f",
          muted: "#8898aa",
          borderColor: "#e9ecef",
          colorDay: "#2ab6b6",
          colorTitleCard: "#11cdef",
          linkHover: "#9c27b0",
          navLink: "rgba(0, 0, 0, .6)",
          borderPagination: "#dee2e6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
