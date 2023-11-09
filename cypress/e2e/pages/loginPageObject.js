const LoginPageObject = function () {
    this.titleText = '.login-title'
    this.email = '[type="email"]'
    this.password = '[type="password"]'
    this.loginButton = '[type="submit"]'
    this.sair = ".menu"
    this.errorMessage = '.error-message'


    this.loginAdminValidCredentials = async (email, password) => {
        cy.get(this.titleText).should('have.text', 'Login')
        cy.get(this.email).type(email);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
        cy.get(this.sair, { timeout: 10000 }).should('contain', 'Sair');
    }

    this.loginAdminInvalidCredentials = async (email, password) => {
        cy.get(this.titleText).should('have.text', 'Login')
        cy.get(this.email).type(email);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
        cy.get(this.errorMessage).should('contain', 'Credenciais inválidas. Verifique seu email e senha.');
    }


    //error-message

}

  module.exports = new LoginPageObject()