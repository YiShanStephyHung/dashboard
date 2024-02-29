module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
  publicPath: "./",
  devServer: {
    port: 8080, //端口號
    host: "localhost", //主機名
    https: false, //協議
    open: true, //啟動時是否自動打開瀏覽器
    // 開發環境代理配置
    proxy: {
      // [process.env.VUE_APP_BASE_API]: {
      //   //代理別人
      //   target: process.env.VUE_APP_SERVICE_URL, //被代理
      //   ws: true, //proxy websockets
      //   changeOrigin: true, //啟動代理
      // },
    },
  },
  transpileDependencies: ["quasar"],
};
