import GlobalElements from "../support/pages/globalElements";

describe("Nav bars navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  ["main", "form", "stepper"].forEach((element) => {
    it(`Click at ${element} nav bar should lead to ${element} page`, () => {
      GlobalElements.clickAtNavBar(element);

      cy.websiteIsLoaded();
      cy.fixture("pages").then((pages) => {
        cy.url().should("includes", pages[element]);
      });
    });
  });
  [
    ["twitterOrX", "twitter.com"],
    ["youTube", "youtube.com"],
  ].forEach(([element, url]) => {
    it(`Click at ${element} nav bar should lead to ${url} url`, () => {
      cy.ignoreCrossOrginError();

      GlobalElements.clickAtNavBar(element);
      cy.url().should("includes", url);
    });
  });
});

describe("Not exinsting address", () => {
  it("Visiting not existing page should lead to main page", () => {
    cy.visit("/wrongAddress");

    cy.fixture("pages").then(({ main }) => {
      cy.url().should("eq", `${Cypress.config("baseUrl")}${main}`);
    });
  });
});
