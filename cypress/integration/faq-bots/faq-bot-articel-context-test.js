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

    cy.contains('Create new article').click()

    cy.get('.category-lable')
      .contains('Category')

    cy.get('.questions-heading')
      .contains('Questions')

    cy.get('.response-heading')
      .contains('Response')

    let randQuestion = `testQuestion@BigPrimeModBigPrime ${Math.floor(Math.random() * 10000000000)}`;
    cy.get('[data-cy=add-question-ti-tentemplate]').type(randQuestion);
    cy.contains('Add question').click();

    // cy.get('[data-cy=gentemp-sidebar-text]').click();
    // cy.get('[data-cy=gentemp-sidebar-carousel]').click();
    // cy.get('[data-cy=gentemp-sidebar-quick-reply]').click();
    cy.get('[data-cy=response_type_drop]').click();
    cy.get('[data-cy=response_type_drop_Dynamic]').click();

    cy.get('.CodeMirror textarea')
      .type('output={\'generated_msg\': [{\'text\':[\'testAnswer@BigPrimeModBigPrime\']}]}', { force: true ,parseSpecialCharSequences: false});
    // cy.get('[data-cy=context-logic-input]').type('output={\'generated_msg\': [{\'text\':[\'testAnswer@BigPrimeModBigPrime\']}]}');

    cy.contains('Save and train').click();

    cy.contains('Add to new category').click();
    cy.wait(1000);

    cy.get('[data-cy=add-new-category]').type('categoryForTest'+Date.now());
    cy.contains('Change and save').click();
    cy.wait(10000);
    cy.get('.article-item').first().click();
    cy.get('[data-cy=goBackFromArticle]').click();
    cy.get('.article-item').first().click();
    cy.contains('Preview').click();

    cy.get('[data-cy=chat-input]').type(randQuestion);

    cy.get('[data-cy=chat-input]').type('{enter}');

    cy.get('.chat-window-section').contains('testAnswer@BigPrimeModBigPrime');

    cy.get('[data-cy=article-delete-button]').click();
    cy.get('[data-cy=modal-confirm-submit]').click();


  })

})
