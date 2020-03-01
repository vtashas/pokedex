describe("main page", function() {
  it("main page displayed successfully", function() {
    cy.visit("http://localhost:3000/");
    cy.get(".outer-container").should("be.visible");
    cy.get(".card-wrapper").should("be.visible");
    cy.get(".card-container").should("be.visible");
    cy.get(".card-container")
      .find("img")
      .should("be.visible");
    cy.get(".card-description").should("be.visible");
    cy.get(".card-container")
      .find("img")
      .eq(0)
      .click();
  });
});
