/*I just wanted to add a quick note. This was a fun assessment. 
I had never used Cypress before, so being able to download, learn, 
and use within the time frame was extremely exciting and satisfying for me. 
Thank you!
*/

describe("AwardCo Cypress Testing", () => {
  it("Events, adds invite name", () => {
    cy.visit("https://www.award.co/");

    cy.get('a[href*="/events"]').contains("Learn More").click();
    cy.get("[id^=Inviters-name]")
      .type("Andrew Petersen")
      .should("have.value", "Andrew Petersen");
  });
});
