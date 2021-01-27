describe("resume", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/resume");
    cy.injectAxe();
  });

  it("Has no detectable a11y violations on load", () => {
    // Test the page at initial load
    cy.checkA11y();
  });
  it("Has no a11y violations after theme toggle", () => {
    cy.get(".themeToggle").click();
    cy.checkA11y();
  });

  it("Has no a11y violations after page change", () => {
    cy.get("nav > :nth-child(2)").click();
    cy.checkA11y();
  });
});
