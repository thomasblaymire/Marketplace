const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const next_config = {
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.watchOptions.poll = 300;

    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
};

module.exports = withCSS(withSass(next_config));
