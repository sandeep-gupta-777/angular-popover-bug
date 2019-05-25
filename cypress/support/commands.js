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

Cypress.Commands.add("login_UI", (email, password) => {

    cy.server();
    cy.route('GET', 'https://dev.imibot.ai/api/v1/actions/?limit=100', 'fixture:actions').as('actions');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/bot/?limit=1000', 'fixture:bot').as('bot');
    cy.route('POST', 'https://dev.imibot.ai/api/v1/user/enterprise_login/', 'fixture:enterprise_login').as('enterprise_login');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/integrations/', 'fixture:integrations').as('integrations');
    cy.route('POST', 'https://staging.imibot.ai/api/v1/user/login/' ).as('login');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/enterprise/*', 'fixture:enterprise').as('enterprise');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/user/enterprises/', 'fixture:enterprises').as('enterprises');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/moduledetails/?limit=1000', 'fixture:pipeline-module.json').as('json');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/role/', 'fixture:role').as('role');

    cy.visit('http://localhost:4200/auth/login');
    cy.get('[data-cy=login-email]')
      .type('ayeshreddy.k@imimobile.com');
    cy.get('[data-cy=login-password]')
      .type('Botwoman@123!');
    cy.get('[data-cy=login-submit]').click();

    cy.wait(['@login']);
    cy.wait(10000);
    cy.url({timeout:3000}).should('include', '/core/viewbots');
});

Cypress.Commands.add("login_stub", (email, password) => {
    cy.visit('http://localhost:4200/auth/login');

    cy.server();
    cy.route('GET', 'https://dev.imibot.ai/api/v1/actions/?limit=100', 'fixture:actions').as('actions');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/bot/?limit=1000', 'fixture:bot').as('bot');
    cy.route('POST', 'https://dev.imibot.ai/api/v1/user/enterprise_login/', 'fixture:enterprise_login').as('enterprise_login');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/integrations/', 'fixture:integrations').as('integrations');
    cy.route('POST', 'https://dev.imibot.ai/api/v1/user/login/', 'fixture:login').as('login');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/enterprise/*', 'fixture:enterprise').as('enterprise');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/user/enterprises/', 'fixture:enterprises').as('enterprises');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/moduledetails/?limit=1000', 'fixture:pipeline-module.json').as('json');
    cy.route('GET', 'https://dev.imibot.ai/api/v1/role/', 'fixture:role').as('role');

    cy.login_UI();
});
    Cypress.Commands.add("login_localstorage", (email, password) => {
    cy.fixture('post-login-data.json')
        .then((data) => {
            localStorage.setItem("@@STATE", JSON.stringify(data));
            // cy.visit('http://localhost:4200/core/viewbots');
        })

});