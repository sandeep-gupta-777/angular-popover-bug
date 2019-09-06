/// <reference types="Cypress" />

describe('faq-search', function () {

    beforeEach(() => {
        cy.login_UI();
    });

    it('checks if faq search is working or not',function(){
        cy.contains('Smart bots').click();
        cy.contains('Q&A bots').click();
        cy.url().should('include', 'viewbots?type=faqbot');
        cy.wait(3000);
      cy.contains("e2eFaq (pls dont use)").click({force: true});
        cy.wait(3000);
        cy.url().should('include', '/botdetail/faqbot/')

        cy.get('[data-cy=article-search]')
             .type('what');

        cy.get('[data-cy=article-search-results]').first().click()
        cy.url().should('include', 'build=articles')

        cy.get('.category-lable')
            .contains('Category')

        cy.get('.questions-heading')
            .contains('Questions')
        cy.get('.response-heading')
            .contains('Response')

        // cy.contains('Article').click()
        // cy.wait(30000);
        // cy.url().should('include','build=articles')
        // cy.contains('All articles')
        // cy.contains('Knowledge base')

        // cy.get('.article-item').first().click()

        // cy.get('.category-lable')
        //     .contains('Category')

        // cy.get('.questions-heading')
        //     .contains('Questions')
        // cy.get('.response-heading')
        //     .contains('Response')

    })

})
