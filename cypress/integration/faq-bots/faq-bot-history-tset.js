
/// <reference types="Cypress" />

describe('faq-history', function () {

    beforeEach(() => {
        cy.login_UI();
    });

    it('checks if artical is present or not',function(){
        cy.contains('Search Based').click();
        cy.url().should('include', 'viewbots?type=faqbot');
        cy.wait(3000);
        cy.get('.grid-bot-preview-name').first().click()
        cy.wait(3000);
        cy.url().should('include', '/botdetail/faqbot/')

        cy.contains('History').click()
        cy.wait(5000);
        cy.url().should('include','build=History')
        cy.contains('See all the instances when knowledge base was trained and revert to a previously created version')
        cy.get('.arrow-circle').first().trigger('mouseover')
        cy.contains('Make live').click({ force: true })
    })

})