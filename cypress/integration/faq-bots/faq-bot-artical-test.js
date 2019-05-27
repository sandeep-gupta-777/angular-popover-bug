/// <reference types="Cypress" />

describe('faq-artical-tab', function () {

    beforeEach(() => {
        cy.login_UI();
    });
    
    it('checks if artical is present or not',function(){
        cy.contains('Search Based').click()
        cy.url().should('include', 'viewbots?type=faqbot')
        cy.get('.grid-bot-preview-name').first().click()
        cy.url().should('include', '/botdetail/faqbot/')
        
        cy.contains('Article').click()
        cy.url().should('include','build=articles')
        cy.contains('All articles')
        cy.contains('Knowledge base')

        cy.get('.article-item').first().click()

        cy.get('.category-lable')
            .contains('Category')

        cy.get('.questions-heading')
            .contains('Questions')
        cy.get('.response-heading') 
            .contains('Response')

        
        


    })

})