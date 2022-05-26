module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#63CE93",

          secondary: "#434343",

          accent: "#6ee7b7",

          neutral: "#dedede",

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
