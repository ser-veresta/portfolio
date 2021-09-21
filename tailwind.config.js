module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./styles/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FAF1CA",
          main: "#EBDE9B",
          text: "#4A4737",
          textSecondary: "#B0AB99",
        },
        secondary: {
          main: "#005B48",
        },
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
      minHeight: {
        "1/2": "50vh",
        "2/3": "75vh",
        "4/5": "80vh",
        16: "4rem",
      },
      maxHeight: {
        full_2: "50%",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      borderWidth: ["hover"],
    },
  },
  plugins: [],
};
