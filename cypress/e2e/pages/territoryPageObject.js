import 'cypress-file-upload';

const TerritoryPageObject = function () {
    this.name = '#name'
    this.description = '[data-placeholder="Digite aqui a descrição"]'
    this.history = '[data-placeholder="Digite aqui a história do território quilombola"]'
    this.cartografia = '[data-placeholder="Digite aqui a cartografia território quilombola"]'
    this.religion = '[data-placeholder="Digite aqui sobre a religião do território quilombola"]'
    this.latitude = '[aria-describedby="latitudeHint"]'
    this.longitude = '[aria-describedby="longitudeHint"]'
    this.referencias = '[data-placeholder="Insira aqui as referencias"]'
    this.saveButton = '[type="submit"]'
    this.alert = '[role="alert"]'


    //data-placeholder="Digite aqui sobre a religião do território quilombola"
    


    this.createATerritory = async (name, description, history, cartografia, religion, latitude, longitude, referencias) => {
        cy.get(this.name).type(name);
        cy.get(this.description).type(description);
        cy.get(this.history).type(history)
        cy.get(this.cartografia).type(cartografia)
        cy.get(this.religion).type(religion)
        cy.get(this.latitude).type(latitude)
        cy.get(this.longitude).type(longitude)
        cy.get('input[type=file]').selectFile('./cypress/fixtures/image.png')
        cy.get(this.referencias).type(referencias)
        cy.get(this.saveButton).click()
        cy.get(this.alert).should('contain', 'Território cadastrado com sucesso')

    }

}

  module.exports = new TerritoryPageObject()