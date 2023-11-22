const homePageObject = require('../pages/homePageObject.js');
const loginPageObject = require('../pages/loginPageObject.js');
const GestaoConteudoPageObject = require('../pages/GestaoConteudoPageObject.js');
const TerritoryPageObject = require('../pages/territoryPageObject.js');


describe('Gestão de Conteúdo', () => {
  let territoryData;

  before(() => {
    // Load fixture data at the beginning of the test

    cy.fixture('territory-data').then((data) => {
      territoryData = data;
    });
  });

  beforeEach(() => {
    cy.viewport(1524, 900);
    cy.visit('/');
    homePageObject.clickLoginMenuItem();
    loginPageObject.loginAdminValidCredentials(Cypress.env('CYPRESS_EMAIL_ADMIN'), Cypress.env('CYPRESS_PASSWORD_ADMIN'));
    homePageObject.clickGestaoConteudiMenuItem();
  });

  afterEach(() => {
    homePageObject.logout();
  });

  describe('Gestão de Conteúdo tests', () => {
    describe('User should see a list of Territory', () => {
      it('Test', () => {
        GestaoConteudoPageObject.userCanCheckTheListOfTerritory();
      });
    });
  });

  describe('Should create a Territory successfully', () => {
    it('Test', () => {
      GestaoConteudoPageObject.clickAdicionarTerritoryButton();
      TerritoryPageObject.createATerritory(
        territoryData.name,
        territoryData.description,
        territoryData.history,
        territoryData.cartografia,
        territoryData.religion,
        territoryData.latitude,
        territoryData.longitude,
        territoryData.referencias
      );
    });
  });

  describe('Should delete a Territory successfully', () => {
    it('Test', () => {
      GestaoConteudoPageObject.deleteATerritory();
    });
  });

});
