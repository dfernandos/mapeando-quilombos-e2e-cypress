const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://mapeando-quilombos.netlify.app/',
    browser: "chrome",
    chromeWebSecurity: false,
    env: {
      CYPRESS_PASSWORD_ADMIN: process.env.CYPRESS_PASSWORD_ADMIN,
      CYPRESS_EMAIL_ADMIN: process.env.CYPRESS_EMAIL_ADMIN,
    }
    
  },
});

