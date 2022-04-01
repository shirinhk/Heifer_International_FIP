const API_URL = "http://portfolio-back.test/api/donate";

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/sass/vars.scss";
            @import "@/assets/sass/reset.scss";
            @import "@/assets/sass/main.scss";
          `,
      },
    },
  },

  devServer: {
    proxy: {
      "/donate": {
        target: `${API_URL}`,
        changeOrigin: true,
        pathRewrite: { "^/donate": "" },
      },
    },
  },
};
