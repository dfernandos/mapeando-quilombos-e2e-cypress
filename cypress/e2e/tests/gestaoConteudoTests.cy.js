const homePageObject = require('../pages/homePageObject.js');
const loginPageObject = require('../pages/loginPageObject.js');
const GestaoConteudoPageObject = require('../pages/GestaoConteudoPageObject.js');
const TerritoryPageObject = require('../pages/territoryPageObject.js');


describe('Gestão de Conteúdo', ()=> {

  let loginData;
  let territoryData;


  before(() => {
    // Carregue os dados da fixture no início do teste
    cy.fixture('loginData').then((data) => {
      loginData = data;
    });

    cy.fixture('territory-data').then((data) => {
      territoryData = data;
    });
  });

  beforeEach(() => {
    cy.viewport(1524, 900);
    cy.visit('/');
    homePageObject.clickLoginMenuItem();
    loginPageObject.loginAdminValidCredentials(loginData.email, loginData.password);
    cy.wait(2000);
    homePageObject.clickGestaoConteudiMenuItem()
  
  });
  
  afterEach(() => {
    homePageObject.logout();
  });

  describe('Gestão de Conteúdo tests', () => {
    describe('User should see a list of Territory', () => {
      describe('User should see a list of Territory successfully', () => {
        describe('Given I am in the logged area', () => {
          describe('When I click in the menu Gestao de Conteúdo', () => {
            describe('Then I can see a list of territóries', () => {
              it('Test', () => {
                GestaoConteudoPageObject.userCanCheckTheListOfTerritory();
              });
            });
          });
        });
      });
    });
  });

  describe('Gestão de Conteúdo tests', () => {
    describe('Should create a Territory successfully', () => {
      describe('Given I am in the logged area', () => {
        describe('When I click in the menu Gestao de Conteúdo', () => {
          describe('And Add a new territory', () => {
            describe('Then I should see a success message and be redirected to the list of territory', () => {
              it('Test', () => {
                GestaoConteudoPageObject.clickAdicionarTerritoryButton()
                TerritoryPageObject.createATerritory(territoryData.name, territoryData.description, territoryData.history, territoryData.cartografia, territoryData.religion, territoryData.latitude, territoryData.longitude, territoryData.referencias);
              });
            });
          });
        });
      });
    });
  });

    describe('Should delete a Territory successfully', () => {
      describe('Given I am in the logged area', () => {
        describe('When I click in the menu Gestao de Conteúdo', () => {
          describe('And delete a territory', () => {
            describe('Then I should see a success message', () => {
              it('Test', () => {
                GestaoConteudoPageObject.deleteATerritory();
              });
            });
          });
        });
      });
  });


  


})


