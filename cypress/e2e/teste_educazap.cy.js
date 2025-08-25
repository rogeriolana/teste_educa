describe('Teste Educazap', () => {
  
  beforeEach(() => {
    cy.visitLoginPage();
  });

 
  it('Verifica se o site está carregando (imagens visíveis)', () => {
    cy.checkPageImagesAreVisible();
  });

 
  it('Verifica se o campo de login está visível', () => {
    cy.checkLoginFieldIsVisible();
  });


  it('Verifica se o campo de senha está visível', () => {
    cy.checkPasswordFieldIsVisible();
  });

  
  it('Verifica se o botão de submeter está visível', () => {
    cy.checkSubmitButtonIsVisible();
  });

  
  it('Verifica se o botão de submeter está habilitado', () => {
    cy.checkSubmitButtonIsEnabled();
  });

  it('Exibe mensagem de erro ao submeter formulário vazio', () => {
    cy.clickSubmitButton();
    cy.checkHtml5ValidationMessage('.my-3 > .form-control', 'Preencha este campo.');
  });

  
  it('Exibe mensagem de erro ao submeter formulário com login inválido e senha vazia, logo após limpa o campo', () => {
    cy.typeLogin('usuario_invalido');
    cy.clickSubmitButton();
    cy.checkHtml5ValidationMessage('.mb-3 > .form-control', 'Preencha este campo.');
    cy.clearLoginField();
  });

  it('Exibe mensagem de erro ao submeter formulário com senha inválida e login vazio, logo após limpa o campo', () => {
    cy.typePassword('senha_invalida');
    cy.clickSubmitButton();
    cy.checkHtml5ValidationMessage('.my-3 > .form-control', 'Preencha este campo.');
    cy.clearPasswordField();
  });

  it('Exibe mensagem de erro ao submeter formulário com senha correta e login vazio, logo após limpa o campo', () => {
    cy.typePassword('Educa@zap');
    cy.clickSubmitButton();
    cy.checkHtml5ValidationMessage('.my-3 > .form-control', 'Preencha este campo.');
    cy.clearPasswordField();
  });

  it('Exibe mensagem de erro ao submeter formulário com login correto e senha vazia, logo após limpa o campo', () => {
    cy.typeLogin('Super');
    cy.clickSubmitButton();
    cy.checkHtml5ValidationMessage('.mb-3 > .form-control', 'Preencha este campo.');
    cy.clearLoginField();
  });


  it('Exibe mensagem de erro ao submeter formulário com login e senha incorretos, logo após limpa os campos', () => {
    cy.login('usuario_invalido', 'senha_invalida'); 
    cy.checkAppErrorMessage('Login, Matrícula ou Senha Inválidos');
    cy.clearLoginField();
    cy.clearPasswordField();
  });


  it('Faz login com sucesso', () => {
    cy.login('Super', 'Educa@zap'); 
    cy.url().should('include', '/home'); 
    cy.get('.mb-2').should('contain', 'Secretaria Virtual'); 
  });
});

