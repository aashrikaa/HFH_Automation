const { defineConfig } = require("cypress");
require("cypress-dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.baseUrl || "https://health-from-home.vercel.app/auth",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    env: require("./.cypress.env.json"),
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
