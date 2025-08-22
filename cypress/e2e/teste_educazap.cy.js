describe('Teste educazap', () => {
  beforeEach(() => {
    cy.visit('https://educazap.net/')
    
  });

  it('Verifica se o site está carregando', () => {
   cy.get('img')
      .should('be.visible')
      }); 
  it('Verifica se o campo de login está visível', () => {
  cy.get('.my-3 > .form-control')
      .should('be.visible');

  }); 
  it('Verifica se o campo de senha está visível', () => {
    cy.get('.mb-3 > .form-control')
      .should('be.visible');
  });
  it('verifica se o botão de submeter está visível', () => {
    cy.get('.text-start > .text-center > .btn')
      .should('be.visible');

  })  
  it('Verifica se o botão de submeter está habilitado', () => {
    cy.get('.text-start > .text-center > .btn')
      .should('not.be.disabled');
  });

  it('Exibe mensagem de erro ao submeter formulário vazio', () => {
    cy.get('.text-start > .text-center > .btn').click();  
    cy.get('.overlay-andv')
      .invoke('show') 
      .should('be.visible')
      .invoke('text', 'Preencha este campo.');
    

  });
  it('Exibe mensagem de erro ao submeter formulário com login invalido e senha vazia,logo após limpa o campo', () => {
    cy.get('.my-3 > .form-control').type('usuario_invalido');
    cy.get('.text-start > .text-center > .btn').click();  
    cy.get('.overlay-andv')
      .invoke('show') 
      .should('be.visible')
      .invoke('text', 'Preencha este campo.');
    cy.get('.my-3 > .form-control').clear();
    
    
  });
   it('Exibe mensagem de erro ao submeter formulário com senha invalida e login vazio,logo apos limpa o campo', () => {
    cy.get('.input-group.mb-3 > .form-control').type('senha_invalida');
    cy.get('.text-start > .text-center > .btn').click();  
    cy.get('.overlay-andv')
      .invoke('show') 
      .should('be.visible')
      .invoke('text', 'Preencha este campo.');
    cy.get('.input-group.mb-3 > .form-control').clear();

})

it('Exibe mensagem de erro ao submeter formulário com senha correta e login vazio,logo apos limpa o campo', () => {
    cy.get('.input-group.mb-3 > .form-control').type('Educa@zap');
    cy.get('.text-start > .text-center > .btn').click();  
    cy.get('.overlay-andv')
      .invoke('show') 
      .should('be.visible')
      .invoke('text', 'Preencha este campo.');
    cy.get('.input-group.mb-3 > .form-control').clear();
     

})
  it('Exibe mensagem de erro ao submeter formulário com login correto e senha vazia,logo apos limpa o campo', () => {
 cy.get('.input-group.mb-3 > .form-control').type('Super');
 cy.get('.text-start > .text-center > .btn').click();  
 cy.get('.overlay-andv')
      .invoke('show') 
      .should('be.visible')
      .invoke('text', 'Preencha este campo.');
  cy.get('.input-group.mb-3 > .form-control').clear();
  });
  it('Exibe mensagem de erro ao submeter formulário com login e senha incorretos,logo apos limpa os campos', () => {
    cy.get('.my-3 > .form-control').type('usuario_invalido');
    cy.get('.input-group.mb-3 > .form-control').type('senha_invalida');
    cy.get('.text-start > .text-center > .btn').click();  
    cy.get('.overlay-andv')
      .invoke('show') 
      .should('be.visible')
      .invoke('text', 'Login,Matricula ou senha inválidos.');
    cy.get('.my-3 > .form-control').clear();
    cy.get('.input-group.mb-3 > .form-control').clear();
  });
  it('Faz login com sucesso', () => {
    cy.get('.my-3 > .form-control').type('Super');
    cy.get('.input-group.mb-3 > .form-control').type('Educa@zap');
    cy.get('.text-start > .text-center > .btn').click();  
    cy.url().should('include', '/home');
    cy.get('.mb-2').should('contain', 'Secretaria Virtual');
  });
 


}) 
