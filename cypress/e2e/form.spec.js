import Form from "../support/pages/form";

const dataTemplate = {
  name: "Bob budowniczy",
  alterEgo: "Zbyszek",
  power: "Super Hot",
};

beforeEach(() => {
  cy.visitPage("form");
});

describe("Form page", () => {
  it("Submit default data", () => {
    Form.submitForm();

    checkSummary("Dr IQ", "Chuck Overstreet", "Really Smart");
  });
  it("Submit with own data", () => {
    Form.fillForm(dataTemplate.name, dataTemplate.alterEgo, dataTemplate.power);
    Form.submitForm();

    Form.form.emptyNameAlert.should("not.be.visible");
    checkSummary(dataTemplate.name, dataTemplate.alterEgo, dataTemplate.power);
  });
  it("Empty name", () => {
    Form.fillForm(null, dataTemplate.alterEgo, dataTemplate.power);

    Form.form.submitButton.should("be.disabled");
    Form.form.emptyNameAlert.should("be.visible");
  });
  it("Empty alter ego", () => {
    Form.fillForm(dataTemplate.name, null, dataTemplate.power);
    Form.submitForm();

    Form.form.emptyNameAlert.should("not.be.visible");
    checkSummary(dataTemplate.name, "", dataTemplate.power);
  });
  it("Empty power", () => {
    Form.clearForm();
    Form.fillForm(dataTemplate.name, dataTemplate.alterEgo, null);

    Form.form.submitButton.should("be.disabled");
  });
  it("Cleaning forms by new hero button", () => {
    Form.clearForm();

    checkFormValues("", "", null);
  });
  it("Returning to form", () => {
    Form.fillForm(dataTemplate.name, dataTemplate.alterEgo, dataTemplate.power);
    Form.submitForm();

    Form.returnToForm();
    checkFormValues(
      dataTemplate.name,
      dataTemplate.alterEgo,
      dataTemplate.power
    );
  });
});

function checkSummary(name, alterEgo, power) {
  Form.summary.nameValue.invoke("text").should("eq", name);
  Form.summary.alterEgoValue.invoke("text").should("eq", alterEgo);
  Form.summary.powerValue.invoke("text").should("eq", power);
}

function checkFormValues(name, alterEgo, power) {
  Form.form.name.invoke("val").should("eq", name);
  Form.form.alterEgo.invoke("val").should("eq", alterEgo);
  if (power) Form.form.power.invoke("val").should("eq", power);
}
