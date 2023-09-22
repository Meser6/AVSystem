class Stepper {
  navBars = {
    get name() {
      return cy
        .get(`[role="tab"]`)
        .contains(`name`)
        .parents(`mat-step-header[role="tab"]`);
    },
    get address() {
      return cy
        .get(`[role="tab"]`)
        .contains(`address`)
        .parents(`mat-step-header[role="tab"]`);
    },
    get summary() {
      return cy
        .get(`[role="tab"]`)
        .contains(`Done`)
        .parents(`mat-step-header[role="tab"]`);
    },
  };
  steps = {
    get nextButton() {
      return cy.get(`button[type="submit"]`).contains("Next");
    },
    get error() {
      return cy.get(`.text-danger`);
    },
    get backButton() {
      return cy.get(`button[type="button"]`).contains("Back");
    },
    name: {
      get input() {
        return cy.get(`input[formcontrolname="firstCtrl"]`);
      },
    },
    address: {
      get input() {
        return cy.get(`input[formcontrolname="secondCtrl"]`);
      },
    },
  };
  summary = {
    get message() {
      return cy.get(`p.ng-star-inserted`).first();
    },
    get name() {
      return cy.get(`p.ng-star-inserted`).contains("Name:");
    },
    get address() {
      return cy.get(`p.ng-star-inserted`).contains("Address:");
    },
    get resetButton() {
      return cy.get(`button`).contains("Reset");
    },
  };

  fillStep(step, value, goNext) {
    value
      ? this.steps[step].input.type(value)
      : this.steps[step].input.type("1").type("{backspace}");
    if (goNext) this.steps.nextButton.click({ force: true });
    return this;
  }

  backToPreviousStep() {
    this.steps.backButton.click({ force: true });
  }
  resetSteps() {
    this.summary.resetButton.click({ force: true });
  }
}
export default new Stepper();
