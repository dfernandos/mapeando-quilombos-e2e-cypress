const GestaoConteudoageObject = function () {
    this.titleText = '.login-title'
    this.email = '[type="email"]'
    this.password = '[type="password"]'
    this.loginButton = '[type="submit"]'
    this.header = ".header"
    this.nomeTerritório = '.nome'
    this.deleteButton = '[aria-label="Deletar Quilombo for testing"]'
    this.editButton = "button[aria-label='Editar Quilombo da Família Silva']"
    this.adicionarButton = "a[href='/cadastro']"
    this.listOfTerritory = "article"
    this.alert = '[role="alert"]'

    this.userCanCheckTheListOfTerritory = async () => {
        cy.get(this.header).should('contain', 'Lista de Territorios Quilombolas');
        cy.get(this.listOfTerritory).should('have.length.above', 0);
        cy.get('.nome', { timeout: 10000 }).should('exist');
        cy.get(this.nomeTerritório).should('contain', 'Quilombo da Família Silva');
        cy.get(this.editButton, { timeout: 10000 }).should('exist')
        cy.get(this.adicionarButton, { timeout: 10000 }).should('exist');
    }

    this.clickAdicionarTerritoryButton = async () => {
        cy.get(this.adicionarButton).click()
    }

    this.deleteATerritory = async () => {
        cy.get('article').last().within(($article) => {
            cy.get(this.deleteButton).click();
          });
        cy.get('.alert-buttons').contains('Confirmar').click();
        cy.get(this.alert).should('contain', 'Território deletado com sucesso')
    }




}

  module.exports = new GestaoConteudoageObject();