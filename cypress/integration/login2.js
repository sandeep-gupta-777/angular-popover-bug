/// <reference types="Cypress" />

describe('Login', function() {
    it('checks if normal login works fine', function() {
        // console.log(cy.fixture('post-login-data.json'));
        cy.login_localstorage();
        // cy.reload();
    })
});