class Form {
  form = {
    get name() {
      return cy.get(`input[name="name"]`);
    },
    get alterEgo() {
      return cy.get(`input[name="alterEgo"]`);
    },
    get power() {
      return cy.get(`select[name="power"]`);
    },
    get submitButton() {
      return cy.get(`button[class*="succes"]`);
    },
    get newHeroButton() {
      return cy.get(`button[class*="default"]`);
    },
    get emptyNameAlert() {
      return cy.get(`[class="alert alert-danger"]`);
    },
  };
  summary = {
    get summaryContainer() {
      return cy.get(`[class="container results"]>div`);
    },
    get nameValue() {
      return this.summaryContainer.contains(`Name`).siblings("div");
    },
    get alterEgoValue() {
      return this.summaryContainer.contains(`Alter Ego`).siblings("div");
    },
    get powerValue() {
      return this.summaryContainer.contains(`Power`).siblings("div");
    },
    get editButton() {
      return this.summaryContainer.get(`button`).contains("Edit");
    },
  };

  fillForm(name, alterEgo, power) {
    name ? this.form.name.clear().type(name) : this.form.name.clear();
    alterEgo
      ? this.form.alterEgo.clear().type(alterEgo)
      : this.form.alterEgo.clear();
    if (power) this.form.power.select(power);
  }

  submitForm() {
    this.form.submitButton.click();
  }
  clearForm() {
    this.form.newHeroButton.click();
  }
  returnToForm() {
    this.summary.editButton.click();
  }
}
export default new Form();
