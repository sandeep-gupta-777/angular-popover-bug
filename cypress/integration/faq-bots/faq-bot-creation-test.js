/// <reference types="Cypress" />

describe('faq-artical-tab', function () {

    beforeEach(() => {
        cy.login_UI();
    });
    
    it('checks if artical is present or not',function(){
        cy.contains('+ New Bot').click();
        cy.contains('Search based bot').click();
        cy.get('[data-cy=bot_name_faq_creation]')
        .type('shoaibtestbot'+Date.now());
        cy.contains('Done').click();
        cy.wait(30000);
        cy.url().should('include', 'build=articles');
        cy.get('[data-cy=3-bot-button-on-top]').click();
        cy.contains('Delete').click();
        cy.contains('Delete bot').click();
        cy.wait(15000);
        cy.url().should('include', 'viewbots');
        cy.contains('Code Based')
    })

})