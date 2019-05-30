/// <reference types="Cypress" />

describe('Login', function() {
    it('checks if normal login works fine', function() {
        cy.login_UI();
    })
});