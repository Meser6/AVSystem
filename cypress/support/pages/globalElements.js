class GlobalElements {
  navBar = {
    get icon() {
      return cy.get(`[role="banner"]>[alt="Angular Logo"]`);
    },
    get main() {
      return cy.get(`#main-view-link`);
    },
    get form() {
      return cy.get(`#form-view-link`);
    },
    get stepper() {
      return cy.get(`#stepper-view-link`);
    },
    get twitterOrX() {
      return cy.get(`[title="Twitter"]`);
    },
    get youTube() {
      return cy.get(`[title="YouTube"]`);
    },
  };

  clickAtNavBar(element) {
    if (element === "twitterOrX" || element === "youTube") {
      cy.openInTheSameTab(this.navBar[element]);
      return;
    }
    this.navBar[element].click();
  }
}
export default new GlobalElements();
