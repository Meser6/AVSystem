import "./commands";
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const testTitlePath = test.title.replace("#", "%23");
    const catalogPath = Cypress.spec.relative.split("e2e\\").at(-1);
    // const testPath = prepareTestPath();
    const testPath = runnable.parent.parent.title
      ? `${runnable.parent.parent.title} -- ${runnable.parent.title} --`
      : `${runnable.parent.title} --`;
    const screenshot = `screenshots/${catalogPath}/${testPath} ${testTitlePath} (failed).png`;
    addContext({ test }, screenshot);
  }
});
