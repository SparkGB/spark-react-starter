const CracoAlias = require("craco-alias");
const cracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: cracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from jsconfig
        baseUrl: "./src"
      }
    }
  ],
}