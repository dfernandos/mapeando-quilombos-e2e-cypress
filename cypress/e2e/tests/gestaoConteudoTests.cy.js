const homePageObject = require('../pages/homePageObject.js');
const loginPageObject = require('../pages/loginPageObject.js');
const GestaoConteudoPageObject = require('../pages/GestaoConteudoPageObject.js');


describe('Gestão de Conteúdo', ()=> {

  let loginData;

  before(() => {
    // Carregue os dados da fixture no início do teste
    cy.fixture('loginData').then((data) => {
      loginData = data;
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

})


