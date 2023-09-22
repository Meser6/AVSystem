const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://angular-qa-recruitment-app.netlify.app",
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*.spec.js",
    watchForFileChanges: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    screenshotsFolder: "cypress/report/screenshots",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reportTemplate",
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
