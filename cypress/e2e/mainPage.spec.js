import MainPage from "../support/pages/mainPage";

beforeEach(() => {
  cy.visit("/");
});

describe("Main page", () => {
  describe("Resources", () => {
    [
      ["lernAngular", "angular.io/tutorial"],
      ["cliDpcumentation", "angular.io/cli"],
      ["angularBlog", "blog.angular.io/"],
      ["angularDevTools", "angular.io/guide/devtools"],
    ].forEach(([tabText, url]) => {
      it(`Click at ${tabText} tab should lead to ${url} page`, () => {
        cy.openInTheSameTab(MainPage.resources[tabText]);

        cy.url().should("include", url);
      });
    });
  });
  describe("Next steps", () => {
    [
      ["newComponent", "ng generate component xyz"],
      ["angularMaterial", "ng add @angular/material"],
      ["addPWASupport", "ng add @angular/pwa"],
      ["addDependency", "ng add _____"],
      ["runAndWatchTests", "ng test"],
      ["buildForProduction", "ng build"],
    ].forEach(([tabText, terminalMessage]) => {
      it(`Click at ${tabText} tab should show '${terminalMessage}' script at terminal`, () => {
        MainPage.nextSteps[tabText].click();

        MainPage.nextSteps.terminal
          .invoke("text")
          .should("eq", terminalMessage);
      });
    });
  });
  describe("Icon near footer", () => {
    [
      ["animations", "angular.io/guide/animations"],
      ["cli", "angular.io/cli"],
      // Minified React error #425 ["meetup", "meetup.com/find/?keywords=angular"],
      ["discord", "discord.com/invite/angular"],
    ].forEach(([icon, url]) => {
      it(`Click at ${icon} icon should lead to ${url} page`, () => {
        cy.ignoreCrossOrginError();
        cy.openInTheSameTab(MainPage.iconsNearFooter[icon]);

        cy.url().should("include", url);
      });
    });
  });
});
