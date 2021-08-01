const path = require("path");
const webpackConfig = require("../webpack.config");

module.exports = {
  stories: [
    // "../src/**/*.stories.mdx",
    // "../src/**/*.stories.@(jsx)",
    "../src/**/*.stories.@(js|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: webpackConfig.module.rules },
    };
  },
};
