module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#14b8a6",

          secondary: "#38bdf8",

          accent: "#6ee7b7",

          neutral: "#d1d5db",

          "base-100": "#f3f4f6",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
