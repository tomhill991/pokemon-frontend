describe('Search', () => {
    it('user can search for a pokemon by clicking a suggestion or clicking submit button', () => {
        cy.visit('/')
        cy.get('input').type('charizard')
        cy.get('button').click()
        cy.get('h2').should('have.text', 'Charizard')
        cy.get('input').type('Pikachu')
        cy.get('.suggestions-container').find('>li').first().click()
        cy.get('h2').should('have.text', 'Pikachu')
    })

    it("user shown error message if pokemon doesn't exist", () => {
        cy.visit('/search')
        cy.get('input').type('fake pokemon')
        cy.get('button').click()
        cy.get('p').should('have.text', 'Not hath found: Pokemon name fake pokemon was not found. Have you even watched pokemon?')
    })
})
