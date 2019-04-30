/// <reference types="Cypress" />

describe('header links', function() {
    it('checks if normal login works fine', function() {
        cy.visit('http://localhost:4200/auth/login');
        cy.get('[data-cy=login-email]')
          .type('ayeshreddy.k@imimobile.com');
        cy.get('[data-cy=login-password]')
          .type('Botwoman@123!');
        cy.get('[data-cy=login-submit]').click();
        cy.wait(40000);
        cy.url().should('include', '/core/viewbots');;
    })
});