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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("login", (email, password) => {
    cy.visit('http://localhost:4200/auth/login');
    cy.get('[data-cy=login-email]')
        .type('ayeshreddy.k@imimobile.com');
    cy.get('[data-cy=login-password]')
        .type('Botwoman@123!');
    cy.get('[data-cy=login-submit]').click();
    cy.wait(40000);
    cy.url().should('include', '/core/viewbots');
});