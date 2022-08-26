describe("AwardCo Cypress Testing", () => {
  it("More Navigation, information input", () => {
    cy.visit("https://www.award.co/");
    cy.get("div.amazon-highlight-container")
      .children()
      .next(".w-inline-block")
      .children()
      .click();
    cy.get("div.quote-text.home-quote-text").next().click();
    cy.get("[id^=firstname-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1]")
      .type("Andrew")
      .should("have.value", "Andrew");
    cy.get("[id^=lastname-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1]")
      .type("Petersen")
      .should("have.value", "Petersen");
    cy.get("[id^=email-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1]")
      .type("work@workemail.com")
      .should("have.value", "work@workemail.com");
    cy.get("[id^=phone-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1]")
      .type("1234567890")
      .should("have.value", "1234567890");
    cy.get("[id^=company-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1]")
      .type("Company Incorporated LLC")
      .should("have.value", "Company Incorporated LLC");
  });
});
