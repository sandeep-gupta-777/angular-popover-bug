/// <reference types="Cypress" />

describe('KB concepts creation and deletion', function () {
  beforeEach(() => {
    cy.login_UI();
    cy.server()
    cy.route(/.*customner.*/g).as('getCustomner')
    cy.get('[data-cy=dashboard_KB]').click();
    cy.wait("@getCustomner");

  });
  it('checks if Knowledge base elements exist', function () {
    checkForKbHeader();
  });

  it('checks if KB concept creation and deletion works', function () {
    cy.server()
    cy.route('GET', /.*customn.*/g).as('getCustomner1');
    cy.route('POST', /.*customn.*/g).as('postCustomner1');
    cy.route('DELETE', /.*customn.*/g).as('deleteCustomner1');
    cy.contains('New Concept').click();
    let random = Date.now();
    cy.get('[data-cy=concept-name-input]').type(random.toString());
    cy.get('.CodeMirror textarea').type("['this is an e2e test']", {force: true});
    cy.get('[data-cy=concept-create]').click();

    cy.wait("@postCustomner1");
    cy.get('[data-cy=back]').click();
    // cy.wait("@getCustomner1");
    cy.contains(random).click();
    cy.get('[data-cy=concept-delete]').click();
    cy.get('[data-cy=modal-confirm-submit]').click();
    cy.wait("@deleteCustomner1");
    cy.get('[data-cy=smart-table]').should('not.contain', random);
    checkForKbHeader()
    //modal-confirm-submit
  });

});


function checkForKbHeader() {
  cy.contains('Enterprise Knowledge Base');
  cy.contains('New Concept');
  cy.get('[data-cy=smart-table]').should('exist');
}

