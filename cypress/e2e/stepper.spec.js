import Stepper from "../support/pages/stepper";

// At application wrong charts validation is not implemented :)

const dataTemplate = {
  name: "Jurand",
  address: "Spychow",
};

beforeEach(() => {
  cy.visitPage("stepper");
});

describe("Stepper page", () => {
  it("Filling steps using correct data", () => {
    Stepper.fillStep("name", dataTemplate.name, true).fillStep(
      "address",
      dataTemplate.address,
      true
    );

    checkSummary(dataTemplate.name, dataTemplate.address);
  });
  it("Returning to previous steppes", () => {
    Stepper.fillStep("name", dataTemplate.name, true).fillStep(
      "address",
      dataTemplate.address,
      true
    );

    Stepper.backToPreviousStep();
    Stepper.steps.address.input
      .invoke("val")
      .should("eq", dataTemplate.address);
    Stepper.backToPreviousStep();
    Stepper.steps.name.input.invoke("val").should("eq", dataTemplate.name);
  });
  it("Reseting data", () => {
    Stepper.fillStep("name", dataTemplate.name, true).fillStep(
      "address",
      dataTemplate.address,
      true
    );

    Stepper.resetSteps();

    Stepper.steps.name.input.invoke("val").should("be.empty");
    Stepper.navBars.address.should("have.attr", "aria-disabled", "true");
    Stepper.navBars.summary.should("have.attr", "aria-disabled", "true");
  });
  describe("Name", () => {
    const step = "name";
    it("Empty name", () => {
      Stepper.fillStep(step, "", false);

      checkErrorMessage("This field is required.");
    });

    it("To long name", () => {
      Stepper.fillStep(step, "dźwiękonaśladownictwo");

      checkErrorMessage("The maximum length for this field is 20 characters.");
    });
  });

  describe("Address", () => {
    const step = "address";
    beforeEach(() => {
      Stepper.fillStep("name", dataTemplate.name, true);
    });
    it("Empty address", () => {
      Stepper.fillStep(step, "", false);

      checkErrorMessage("This field is required.");
    });
    it("To long address", () => {
      Stepper.fillStep(step, "konstantynopolitańczykówianeczka", false);

      checkErrorMessage("The maximum length for this field is 30 characters.");
    });
  });
});

function checkSummary(name, address) {
  Stepper.summary.message.invoke("text").should("eq", "You are now done!");
  Stepper.summary.name.invoke("text").should("eq", ` Name: ${name} `);
  Stepper.summary.address.invoke("text").should("eq", ` Address: ${address} `);
}

function checkErrorMessage(mesage) {
  Stepper.steps.error.should("be.visible");
  Stepper.steps.error.invoke("text").should("include", mesage);
}
