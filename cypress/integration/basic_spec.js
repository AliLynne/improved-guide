describe("basic usage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
  });

  it("Has no detectable a11y violations on load", () => {
    // Test the page at initial load
    cy.checkA11y();
  });

  it("Contains the word AliLynne", () => {
    cy.contains("AliLynne");
  });

  it("Has no a11y violations after theme toggle", () => {
    cy.get(".themeToggle").click();
    cy.checkA11y();
  });
});
