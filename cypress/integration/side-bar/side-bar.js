/// <reference types="Cypress" />

describe('faq-test', function () {

    before(() => {
        cy.login_UI();
    });

    it('checks if dirty data modal is comming or not', function () {
        cy.contains('Q&A bots').click();
        cy.get('.grid-bot-preview-name').first().click();
      cy.url({timeout:60000}).should('include', '/botdetail/faqbot');

        cy.url().should('include', '/botdetail/faqbot/')


        cy.get('.mat-tab-label-container')
            .contains('Handover and Inference')
            .click();

        cy.get('[data-cy=faq-habdover-first-input]')
        .type('123');

        cy.contains('Article').click();

        cy.contains('Keep editing').click();
    })
})
