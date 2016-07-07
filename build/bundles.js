module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text",
        "[*/**/*.js]",
        "*/**/*.html!text",
        "*/**/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia": {
      "includes": [
      "aurelia-animator-css",
      "aurelia-bootstrapper",
      "aurelia-fetch-client",
      "aurelia-framework",
      "aurelia-history-browser",
      "aurelia-loader-default",
      "aurelia-logging-console",
      "aurelia-polyfills",
      "aurelia-router",
      "aurelia-templating-binding",
      "aurelia-templating-resources",
      "aurelia-templating-router",
      "bootstrap",      
      "bootstrap/css/bootstrap.css!text",
      "fetch",
      "font-awesome",
      "jquery",
      "text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};
