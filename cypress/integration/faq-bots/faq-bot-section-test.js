/// <reference types="Cypress" />

describe('faq-artical-tab', function () {

    beforeEach(() => {
        cy.login_UI();
    });

    it('checks if sessions and consumers are present or not',function(){
        cy.contains('Search Based').click()
        cy.url().should('include', 'viewbots?type=faqbot')
        cy.get('.grid-bot-preview-name').first().click();
        cy.wait(30000);
        cy.url().should('include', '/botdetail/faqbot/')

        cy.contains('Chat').click()
        cy.url().should('include','build=chat')
        cy.contains('Conversations')
        cy.get('.mat-tab-label-container')
            .contains('Sessions')
        cy.get('.mat-tab-label-container')
            .contains('Consumers')


    })

})