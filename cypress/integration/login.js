/// <reference types="Cypress" />

describe('Login', function() {
    it('checks if normal login works fine', function() {
        // cy.visit('http://localhost:4200/auth/login');
        // cy.get('[data-cy=login-email]')
        //   .type('ayeshreddy.k@imimobile.com');
        // cy.get('[data-cy=login-password]')
        //   .type('Botwoman@123!');
        // cy.get('[data-cy=login-submit]').click();
        // cy.wait(40000);
        // cy.url().should('include', '/core/viewbots');

        cy.server();
        // cy.route({method: 'POST', url: 'https://dev.imibot.ai/api/v1/user/login/', response:{sadasda:2312312123}})
        cy.route('POST','https://dev.imibot.ai/api/v1/user/login/','fixture:login');
        // cy.visit('http://localhost:4200/');
        // const xhr = new window.XmlHttpRequest()
        // xhr.open('GET', 'http://localhost:4200/api/login', false)
        // xhr.send() // now your `cy.route` will trigger
        // cy.wait('@apiCheck').then((xhr) => {
        //     assert.isNotNull(xhr.response.body.data, '1st API call has data')
        // })
        cy.login('ayeshreddy.k@imimobile.com', 'Botwoman@123!');;
    })
});