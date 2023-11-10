# mapeando-quilombos-e2e-cypress
🔍 **Sumary**
- [Mapeando Quilombos](#Mapeando-Quilombos)
  - [E2E Tests](#testes-e2e)
    - [Project Structure](#estrutura-do-projeto)
    - [Tech Stack](#Tech-Stack)
    - [Build](#Build)
    - [How to run the tests](#How-to-run-the-tests)
    - [Test Scenarios](#Test_Scenarios)
      
---

# Mapeando Quilombos

O propósito do Mapeando Quilombos é contribuir para o compartilhamento de saberes sobre a cultura e história afro-brasileira através do conhecimento sobre os territórios quilombolas da cidade de Porto Alegre/RS. Através dessa iniciativa, busca-se ampliar a compreensão e valorização desses espaços, compartilhando informações relevantes e promovendo a conscientização sobre a importância histórica e cultural dos quilombos na sociedade brasileira.

O público-alvo deste projeto são os professores e alunos da educação básica, bem como qualquer pessoa interessada nessa temática. Por meio dessa iniciativa, os professores terão a oportunidade de ampliar seus conhecimentos sobre o tema e compartilhar essas informações com os alunos em sala de aula.
Link para o site: https://mapeando-quilombos.netlify.app/

Este projeto foi criado para a disciplina de Trabalho de Conclusão II para a obtenção do grau de Tecnólogo em Sistemas para internet pelo Instituto Federal do Rio Grande do Sul - IFRS Campus Porto Alegre.




## E2E Tests

Tests are written in JavaScript with Cypress framework [Cypress](https://www.cypress.io/).

### Project Structure

```
  |-- Cypress *(End to End tests for the UI)*
    |-- e2e *(Test files)*
    |-- fixtures *(static files with data used by the tests)*
    |-- pages *(Page objects)*
    |-- tests *(test files)*
  |-- cypress.config.js *(Cypress configuration file)*
```

### Tech Stack

 - ![Cypress](https://img.shields.io/badge/code-cypress-b0e0df)
 - ![JavaScript](https://img.shields.io/badge/code-javascript-b0e0df)
 - ![Node](https://img.shields.io/badge/code-node16-b0e0df)

### Build
 - Install:
   - [NodeJS >=14](https://nodejs.org/en/)
   - Project dependency setup  
     - `cd mapeando-quilombos-e2e-cypress` 
     - `npm install` 

### How to run the tests

 - In the project root:
   - Debug mode - Browser `npx cypress open`
     - Select E2E Testing
     - Start E2E Testing in Chrome
     - Select the testing file you want to run
   - Headless mode ` npx cypress run`

### Test Scenarios

### Login tests
```diff
  User can log in successfully
      Given I am in the homepage
      When I click in the menu Login and add valid credentials
      Then user should be redirected to the HomePage

  User can log in with incorrect credentials
      Given I am in the homepage
      When I click in the menu Login and add Incorrect credentials
      Then user should not be redirected and see an error message
```
### Gestão de Conteúdo tests

```diff
  User should see a list of Territory successfully
        Given I am in the logged area
        When I click in the menu Gestao de Conteúdo
        Then I can see a list of territóries

  Should create a Territory successfully
        Given I am in the logged area
        When I click in the menu Gestao de Conteúdo
        And Add a new territory
        Then I should see a success message and be redirected to the list of territory

  Should delete a Territory successfully
        Given I am in the logged area
        When I click in the menu Gestao de Conteúdo
        And delete a territory
        Then I should see a success message
```
