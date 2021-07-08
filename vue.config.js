module.exports = {
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    devServer: {
      port: 80,
      watchOptions: {
        poll: true,
      },
    },
  }
}
