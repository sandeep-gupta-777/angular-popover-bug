/// <reference types="Cypress" />

describe('faq-test', function () {

    before(() => {
        cy.login_UI();
    });

    // it('checks if first bot opens or not',function(){
    //     cy.contains('Search Based').click()
    //     cy.url().should('include','viewbots?type=faqbot')
    //     cy.get('.grid-bot-preview-name').first().click()
    //     cy.url().should('include','/botdetail/faqbot/')

    // })

    it('checks if faq bot has all settings tabs or not', function () {
        cy.contains('Search Based').click()
        cy.url().should('include', 'viewbots?type=faqbot')
        cy.get('.grid-bot-preview-name').first().click()
        cy.url().should('include', '/botdetail/faqbot/')
        

        cy.get('.mat-tab-label-container')
            .contains('Handover and Inference')
        cy.get('.mat-tab-label-container')
            .contains('Profile')
        cy.get('.mat-tab-label-container')
            .contains('Management')
        cy.get('.mat-tab-label-container')
            .contains('Security')
        cy.get('.mat-tab-label-container')
            .contains('Integrations')

        cy.get('.mat-tab-label-container')
            .contains('Handover and Inference')
            .click()
        cy.contains('Agent Handover')
    })
})