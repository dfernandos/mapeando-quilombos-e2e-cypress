const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://mapeando-quilombos.netlify.app/',
    browser: "chrome",
    chromeWebSecurity: false
  },
});
