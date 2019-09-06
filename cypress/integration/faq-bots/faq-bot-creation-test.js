/// <reference types="Cypress" />

describe('faq-artical-tab', function () {

    beforeEach(() => {
        cy.login_UI();
    });

    it('checks if artical is present or not',function(){
        cy.wait(30000);
        cy.contains('+ New Bot').click();
        cy.contains('Build a new search based bot for deployment').click();
        cy.get('[data-cy=bot_name_faq_creation]')
        .type('shoaibtestbot'+Date.now());
        cy.contains('Done').click();
      cy.url({timeout:300000}).should('include', '/botdetail/faqbot');
        cy.get('[data-cy=3-bot-button-on-top]').click();
        cy.contains('Delete').click();
        cy.contains('Delete bot').click();
        cy.wait(15000);
        cy.url().should('include', 'viewbots');
    })

})
