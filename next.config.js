// const withImages = require("next-images");
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [{loader: 'url-loader'}],
      type: "javascript/auto"
    });

    return config;
  }
};