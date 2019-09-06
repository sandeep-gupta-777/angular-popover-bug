/// <reference types="Cypress" />

describe('faq-artical-tab', function () {

    beforeEach(() => {
        cy.login_UI();
    });

    it('checks if sessions and consumers are present or not',function(){
        cy.contains('Smart bots').click()
        cy.contains('Q&A bots').click()
        cy.url().should('include', 'viewbots?type=faqbot')
        cy.contains("e2eFaq (pls dont use)").click({force: true});
        cy.wait(30000);
        cy.url().should('include', '/botdetail/faqbot/')

        cy.contains('Sessions').click()
        cy.url().should('include','build=chat')
        cy.contains('Conversations')
        cy.get('.mat-tab-label-container')
            .contains('Sessions')
        cy.get('.mat-tab-label-container')
            .contains('Consumers')


    })

})
