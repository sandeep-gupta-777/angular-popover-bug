/// <reference types="Cypress" />

describe('faq-artical-tab', function () {

  beforeEach(() => {
    cy.login_UI();
  });

  it('checks if artical is present or not', function () {
    cy.contains('Smart bots').click();
    cy.contains('Q&A bots').click();
    cy.url().should('include', 'viewbots?type=faqbot');
    cy.wait(3000);
    cy.get('.grid-bot-preview-name').first().click()
    cy.wait(3000);
    cy.url().should('include', '/botdetail/faqbot/')

    cy.contains('Article').click()
    cy.wait(5000);
    cy.url().should('include', 'build=articles')
    cy.contains('All articles')
    cy.contains('Knowledge base')

    cy.get('.article-item').first().click()

    cy.get('.category-lable')
      .contains('Category')

    cy.get('.questions-heading')
      .contains('Questions')
    cy.get('.response-heading')
      .contains('Response')

    cy.get('[data-cy=gentemp-sidebar-text]').click();
    cy.get('[data-cy=gentemp-sidebar-carousel]').click();
    cy.get('[data-cy=gentemp-sidebar-quick-reply]').click();


  })

})
