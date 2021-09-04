describe('renders the home page', () => {
    it("renders correctly", () => {
        cy.visit("/");
        cy.get("#container").should("exist")
    })

    it("button click correctly",() => {
        cy.visit("/");
        cy.wait(3000)
        cy.get("#changeButton").click()
        cy.get("#changeButton").should("be.visible");
    })
})
