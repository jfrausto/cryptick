const withImages = require('next-images');
module.exports = withImages({
  esModule: true,
  inlineImageLimit: false,
  images: {
    disableStaticImages: true
  },
  webpack(config, options) {
    return config
  }
})