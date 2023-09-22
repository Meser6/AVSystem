class MainPage {
  resources = {
    get lernAngular() {
      return cy.contains("Learn Angular");
    },
    get cliDpcumentation() {
      return cy.contains("CLI Documentation");
    },
    get angularBlog() {
      return cy.contains("Angular Blog");
    },
    get angularDevTools() {
      return cy.contains("Angular DevTools");
    },
  };
  nextSteps = {
    get newComponent() {
      return cy.contains("New Component");
    },
    get angularMaterial() {
      return cy.contains("Angular Material");
    },
    get addPWASupport() {
      return cy.contains("Add PWA Support");
    },
    get addDependency() {
      return cy.contains("Add Dependency");
    },
    get runAndWatchTests() {
      return cy.contains("Run and Watch Tests");
    },
    get buildForProduction() {
      return cy.contains("Build for Production");
    },
    get terminal() {
      return cy.get("div.terminal");
    },
  };
  iconsNearFooter = {
    get animations() {
      return cy.get('[title="Animations"]');
    },
    get cli() {
      return cy.get('[title="CLI"]');
    },
    get meetup() {
      return cy.get('[title="Find a Local Meetup"]');
    },
    get discord() {
      return cy.get('[title="Join the Conversation on Discord"]');
    },
  };
}
export default new MainPage();
