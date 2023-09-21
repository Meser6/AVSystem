import "./commands";
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const testTitlePath = test.title.replace("#", "%23");
    const catalogPath = Cypress.spec.relative.split("e2e\\").at(-1);
    const screenshot = `screenshots/${catalogPath}/${runnable.parent.title} -- ${testTitlePath} (failed).png`;
    addContext({ test }, screenshot);
  }
});
