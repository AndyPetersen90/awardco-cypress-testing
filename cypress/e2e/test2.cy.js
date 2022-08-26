describe("AwardCo Cypress Testing", () => {
  it("Testing navigation and a screenshot", () => {
    cy.visit("https://www.award.co/");

    cy.get(".button.footer-button.w-button").contains("Get a Demo").click();
    cy.get('a[href*="/resources"]').click();
    cy.get("img").first().screenshot("First Image");
  });
});
