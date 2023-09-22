import GlobalElements from "./pages/globalElements";

Cypress.Commands.add("visitPage", (pageName) => {
  cy.fixture("pages").then((pages) => {
    cy.visit(pages[pageName]);
  });
  cy.checkLoading();
});

Cypress.Commands.add("openInTheSameTab", (element) => {
  element.invoke("removeAttr", "target").click();
});

Cypress.Commands.add("websiteIsLoaded", () => {
  GlobalElements.navBar.icon.should("be.visible");
});

Cypress.Commands.add("ignoreCrossOrginError", () => {
  cy.on("uncaught:exception", (err) => {
    if (err.message.includes("cross origin")) {
      return false;
    }
    return true;
  });
});
