/// <reference types="Cypress" />

describe('Login', function () {
  it('checks if normal login works fine', function () {
    cy.login_UI();
  })

  it('checks if normal logout works fine and route protection dont allow user to go back', function () {
    cy.login_UI();
    cy.get('[data-cy=header-dropdown-toggle]').click();
    cy.get('[data-cy=header-sign-out]').click();
    cy.go('back');
    cy.wait(2000);
    cy.url().should('include', 'login');
  })
});
