/// <reference types="Cypress" />

describe('faq-test', function () {

    before(() => {
        cy.login_UI();
    });

    it('checks if dirty data modal is comming or not', function () {
        cy.contains('Search Based').click()
        
        cy.get('.grid-bot-preview-name').first().click()
    
        cy.get('.mat-tab-label-container')
            .contains('Handover and Inference')
            .click()
        
        
    })
})