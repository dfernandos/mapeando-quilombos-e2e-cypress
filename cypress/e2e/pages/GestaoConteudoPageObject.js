const GestaoConteudoageObject = function () {
    this.titleText = '.login-title'
    this.email = '[type="email"]'
    this.password = '[type="password"]'
    this.loginButton = '[type="submit"]'
    this.header = ".header"
    this.nomeTerritório = '.nome'
    this.deleteButton = "button[aria-label='Deletar Quilombo da Família Silva']"
    this.editButton = "button[aria-label='Editar Quilombo da Família Silva']"
    this.adicionarButton = "a[href='/cadastro']"



    this.userCanCheckTheListOfTerritory = async () => {
        cy.get(this.header).should('contain', 'Lista de Territorios Quilombolas');
        cy.get('article').should('have.length.above', 0);
        cy.get('.nome', { timeout: 10000 }).should('exist');
        cy.get(this.nomeTerritório).should('contain', 'Quilombo da Família Silva');
        cy.get(this.editButton, { timeout: 10000 }).should('exist')
        cy.get(this.deleteButton, { timeout: 10000 }).should('exist');
        cy.get(this.adicionarButton, { timeout: 10000 }).should('exist');
    }


}

  module.exports = new GestaoConteudoageObject();