const withImages = require('next-images');
module.exports = withImages({
  esModule: true,
  inlineImageLimit: false,
  webpack(config, options) {
    return config
  }
})