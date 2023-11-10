const HomePageObject = function () {
    this.inicioMenuItem = 'a[href="/"]'
    this.sobreMenuItem = 'a[href="/sobre"]'
    this.contatoMenuItem = 'a[href="/contato"]'
    this.loginMenuItem = 'a[href="/login"]'
    this.GestaoConteudoMenuItem = '.menu a:contains("Gestão de Conteúdo")'
    this.sair = '.menu a:contains("Sair")'


    this.clickLoginMenuItem = async () => {
      cy.get(this.loginMenuItem).click();
}

  this.clickInicioMenuItem = async () => {
    cy.get(this.inicioMenuItem).click();
}

this.clickSobreMenuItem = async () => {
    cy.get(this.sobreMenuItem).click();
}

this.clickContatoMenuItem = async () => {
    cy.get(this.contatoMenuItem).click();
}

this.clickGestaoConteudiMenuItem = async () => {
    cy.get(this.GestaoConteudoMenuItem).dblclick();
}

this.logout = async () =>{
    cy.get(this.sair, { timeout: 10000 }).click();
}


}

  module.exports = new HomePageObject();