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

    email = email || "ayeshreddy.k@imimobile.com";
    password = password || "Botwoman@123!";

    cy.server();
    cy.route('GET', '*/api/v1/actions/?limit=100').as('actions');
    cy.route('GET', '*/api/v1/bot/?limit=1000').as('bot');
    cy.route('POST', '*/api/v1/user/enterprise_login/').as('enterprise_login');
    cy.route('GET', '*/api/v1/integrations/').as('integrations');
    cy.route('POST', '*/api/v1/user/login/' ).as('login');
    cy.route('GET', '*/api/v1/enterprise/*').as('enterprise');
    cy.route('GET', '*/api/v1/user/enterprises/').as('enterprises');
    cy.route('GET', '*/api/v1/moduledetails/?limit=1000').as('json');
    cy.route('GET', '*/api/v1/role/').as('role');

    const BASE_URL = Cypress.config('backend_root');

    cy.visit(`${BASE_URL}/auth/login`);
    cy.get('[data-cy=login-email]')
      // .type('ayeshreddy.k@imimobile.com');
      .type(email);
    cy.get('[data-cy=login-password]')
      // .type('Botwoman@123!');
      .type(password);
    cy.get('[data-cy=login-submit]').click();

    // cy.wait(['@login']);
    cy.wait(60000);
    cy.url({timeout:40000}).should('include', '/core/viewbots');
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
