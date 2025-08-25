// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Comando customizado para visitar a página de login do Educazap
// Comando customizado para visitar a página de login do Educazap
// Comando customizado para visitar a página de login do Educazap

// Comando customizado para visitar a página de login do Educazap
Cypress.Commands.add('visitLoginPage', () => {
  cy.visit('https://educazap.net/');
  cy.log('Página de login do Educazap visitada.');
});

// Comando customizado para verificar se as imagens principais da página estão visíveis
Cypress.Commands.add('checkPageImagesAreVisible', () => {
  cy.get('img')
    .should('be.visible');
  cy.log('Imagens da página verificadas e visíveis.');
});

// Comando customizado para verificar se o campo de login está visível
Cypress.Commands.add('checkLoginFieldIsVisible', () => {
  cy.get('.my-3 > .form-control') // Seletor para o campo de login
    .should('be.visible');
  cy.log('Campo de login visível.');
});

// Comando customizado para verificar se o campo de senha está visível
Cypress.Commands.add('checkPasswordFieldIsVisible', () => {
  cy.get('.mb-3 > .form-control') // Seletor para o campo de senha
    .should('be.visible');
  cy.log('Campo de senha visível.');
});

// Comando customizado para verificar se o botão de submeter está visível
Cypress.Commands.add('checkSubmitButtonIsVisible', () => {
  cy.get('.text-start > .text-center > .btn') // Seletor para o botão de submeter
    .should('be.visible');
  cy.log('Botão de submeter visível.');
});

// Comando customizado para verificar se o botão de submeter está habilitado
Cypress.Commands.add('checkSubmitButtonIsEnabled', () => {
  cy.get('.text-start > .text-center > .btn')
    .should('not.be.disabled');
  cy.log('Botão de submeter habilitado.');
});

// Comando customizado para preencher o campo de login
Cypress.Commands.add('typeLogin', (username) => {
  cy.get('.my-3 > .form-control')
    .type(username);
  cy.log(`Login preenchido com: ${username}`);
});

// Comando customizado para preencher o campo de senha
Cypress.Commands.add('typePassword', (password) => {
  cy.get('.mb-3 > .form-control')
    .type(password);
  cy.log(`Senha preenchida (ocultada para segurança).`);
});

// Comando customizado para clicar no botão de submeter
Cypress.Commands.add('clickSubmitButton', () => {
  cy.get('.text-start > .text-center > .btn').click();
  cy.log('Botão de submeter clicado.');
});

// NOVO COMANDO: Verifica mensagens de validação HTML5
// Usado para erros como "Preencha este campo." que são do próprio navegador.
Cypress.Commands.add('checkHtml5ValidationMessage', (fieldSelector, expectedMessage) => {
  cy.get(fieldSelector)
    .then(($input) => {
      // Usamos expect diretamente no elemento DOM nativo para acessar validationMessage
      expect($input[0].validationMessage).to.eq(expectedMessage);
    });
  cy.log(`Mensagem de validação HTML5 "${expectedMessage}" verificada para o campo ${fieldSelector}.`);
});

// COMANDO ATUALIZADO: Verifica mensagens de erro da aplicação (personalizadas)
// Usado para erros como "Login, Matricula ou senha inválidos."
Cypress.Commands.add('checkAppErrorMessage', (expectedMessage) => {
  cy.get('.text-danger')
    .should('be.visible') // Garante que o overlay está visível
    .and('include.text', expectedMessage); // Verifica se o texto inclui a mensagem esperada
  cy.log(`Mensagem de erro da aplicação "${expectedMessage}" verificada no overlay.`);
});


// Comando customizado para limpar o campo de login
Cypress.Commands.add('clearLoginField', () => {
  cy.get('.my-3 > .form-control').clear();
  cy.log('Campo de login limpo.');
});

// Comando customizado para limpar o campo de senha
Cypress.Commands.add('clearPasswordField', () => {
  cy.get('.mb-3 > .form-control').clear();
  cy.log('Campo de senha limpo.');
});

// Comando customizado para fazer login
Cypress.Commands.add('login', (username, password) => {
  cy.typeLogin(username);
  cy.typePassword(password);
  cy.clickSubmitButton();
  cy.log(`Tentativa de login com ${username}.`);
});