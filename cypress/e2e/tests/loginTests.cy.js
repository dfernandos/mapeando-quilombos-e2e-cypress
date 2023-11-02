const homePageObject = require('../pages/homePageObject');
const loginPageObject = require('../pages/loginPageObject');

describe('Login tests', () => {
  let loginData;
  let loginDataInvalid;

  before(() => {
    // Carregue os dados da fixture no início do teste
    cy.fixture('loginData').then((data) => {
      loginData = data;
    });

    cy.fixture('loginData_invalid').then((data) => {
      loginDataInvalid = data;
    });
  });


beforeEach(() => {
  cy.viewport(1524, 900);
  cy.visit('/');
});


describe('Login tests', () => {
  describe('User can log in the system', () => {
    describe('User can log in successfully', () => {
      describe('Given I am in the homepage', () => {
        describe('When I click in the menu Login and add valid credentials', () => {
          describe('Then user should be redirected to the HomePage', () => {
            it('Test', () => {
              homePageObject.clickLoginMenuItem();
              loginPageObject.loginAdminValidCredentials(loginData.email, loginData.password);
              homePageObject.logout();
            });
          });
        });
      });
    });

    describe('User can log in with incorrect credentials', () => {
      describe('User can not log in', () => {
        describe('Given I am in the homepage', () => {
          describe('When I click in the menu Login and add Incorrect credentials', () => {
            describe('Then user should not be redirected and see an error message', () => {
              it('Test', () => {
                cy.viewport(1524, 900);
                cy.visit('/');
                homePageObject.clickLoginMenuItem();
                loginPageObject.loginAdminInvalidCredentials(loginDataInvalid.email, loginDataInvalid.password);
              });
            });
          });
        });
      });
    });
  });
});
});