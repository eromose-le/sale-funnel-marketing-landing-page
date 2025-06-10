import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,hbs}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: {
          lighter: "#F9FBFF",
          light: "#EBF8FF",
          main: "#0356B2",
          dark: "#001C50",
          contrastText: "#FFFFFF",
        },
        secondary: {
          lighter: "#E4E7F1",
          light: "#B3C1DB",
          main: "#002F86",
          dark: "#00215E",
          contrastText: "#FFFFFF",
        },
        success: {
          lighter: "#F3FEF7",
          light: "#DFFFE9",
          main: "#038A30",
          dark: "#024518",
        },
        danger: {
          lighter: "#FFF3F4",
        },
        maize: {
          lighter: "#FFFAEF",
        },
        purple: {
          lighter: "#E9EFFF",
          light: "#F2DDFF",
        },
        link: {
          light: "#D9E8FF",
        },
        common: {
          black: "#000000",
          white: "#FFFFFF",
        },
        text: {
          primary: "rgba(0,0,0,0.87)",
          secondary: "rgba(0,0,0,0.6)",
          disabled: "rgba(0,0,0,0.38)",
        },
        background: {
          main: "rgba(248, 250, 247, 1)",
          paper: "#FFFFFF",
          disabled: "rgba(255, 255, 255, 0.12)",
        },
        divider: "rgba(0,0,0,0.12)",
      },
      backgroundColor: {
        main: "rgba(248, 250, 247, 1)",
        paper: "#FFFFFF",
        disabled: "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        "publc-sans": ["Public Sans", "sans-serif"],
        gelica: ["gelica", "sans-serif", "-apple-system", "BlinkMacSystemFont"],
      },
      backgroundImage: {},
      zIndex: {
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const publicSans = theme("fontFamily.publc-sans");
      addComponents(
        {
          ".text-h1": {
            // fontFamily: publicSans,
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "6rem",
            lineHeight: 1.167,
          },
          ".text-h2": {
            // fontFamily: publicSans,
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "3.75rem",
            lineHeight: 1.2,
          },
          ".text-h3": {
            // fontFamily: publicSans,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "3rem",
            lineHeight: 1.167,
          },
          ".text-h4": {
            // fontFamily: publicSans,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "2.125rem",
            lineHeight: 1.235,
          },
          ".text-h5": {
            // fontFamily: publicSans,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "1.5rem",
            lineHeight: 1.334,
          },
          ".text-h6": {
            // fontFamily: publicSans,
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1.25rem",
            lineHeight: 1.6,
          },
          ".text-body1": {
            // fontFamily: publicSans,
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1rem",
          },
          ".text-body2": {
            // fontFamily: publicSans,
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "0.875rem",
          },
        },
        ["responsive", "hover"]
      );
    }),
  ],
};
