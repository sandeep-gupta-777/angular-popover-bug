/// <reference types="Cypress" />

describe('Bot code version', function () {
	before(() => {
		cy.server();
		cy.route('https://staging.imibot.ai/api/v1/botversioning/*').as('botversioning');

		cy.login_UI();
		cy.wait(40000);
		cy.contains("e2e (pls dont use)").click();
		cy.wait(40000);
		cy.get('[data-cy=sidebar-logic]').click();
		cy.wait(40000);
		// cy.wait(['@botversioning'], {timeout: 10000});
	});

	it('checks if user is able to update bot code version', function () {
		cy.server();
		cy.route('POST','**/codevalidation/**').as('version_validate');
		cy.route('PUT','**/botversioning/**').as('botversioning-save');

		cy.window().then(win => {
			win.document.getElementsByClassName("CodeMirror")[0].CodeMirror.setValue("");
			console.log(win.document.getElementsByClassName("CodeMirror")[0]);
			cy.log(win.document.getElementsByClassName("CodeMirror")[0]);
		});
		cy.get('.CodeMirror textarea')
			.type("x = this is test", { force: true });
		cy.wait(60000);
		cy.get('[data-cy=version-save]').click();
		// cy.wait(['@version_validate'], {timeout:10000});
		// cy.wait(['@botversioning-save'], {timeout:10000});
		// cy.wait(30000);
		// cy.get('.mat-snack-bar-container').should('contain', "New Version saved");//todo:
	});

	it('checks if user is able to fork code version', function () {
		cy.get('[data-cy=version-fork]').click();
		cy.get('[data-cy=version-fork-comment]').type("this is e2e test");
		cy.get('[data-cy=version-fork-submit]').click();
		cy.wait(30000);
		// cy.get('.mat-snack-bar-container').should('contain', "New Version forked");
	});

	it('checks if user is able to Activate code an inactive version', function () {
		cy.get('[data-cy=version-dropdown-toggle]').click();
		cy.contains('Inactive').click();
		cy.get('[data-cy=version-activate]').click();
		// cy.get('.mat-snack-bar-container').should('exist');
	});


	it('checks if user is able to save inactive version with errors', function () {
		cy.window().then(win => {
			win.document.getElementsByClassName("CodeMirror")[0].CodeMirror.setValue("");
			console.log(win.document.getElementsByClassName("CodeMirror")[0]);
			cy.log(win.document.getElementsByClassName("CodeMirror")[0]);
		});

		cy.get('[data-cy=version-dropdown-toggle]').click();
		cy.contains('Inactive').click();

		cy.get('.CodeMirror textarea').type("x = this is test`", {force: true});
		cy.get('[data-cy=version-save]').click();
		cy.get('[data-cy=modal-confirm-submit]').click();
		// cy.get('.mat-snack-bar-container').should('contain', "New Version saved");//TODO:
	});

	it('checks if code validation works for bad code', function () {
		cy.window().then(win => {
			win.document.getElementsByClassName("CodeMirror")[0].CodeMirror.setValue("");
			console.log(win.document.getElementsByClassName("CodeMirror")[0]);
			cy.log(win.document.getElementsByClassName("CodeMirror")[0]);
		});

		cy.get('.CodeMirror textarea').type("x = this is test`", {force: true});
		cy.get('[data-cy=editor-code-validation]').click();
		cy.get('[data-cy=version-validation-info-toggle]').click();
		cy.contains('Issue found');
		cy.get('[data-cy=version-validation-info-toggle]').click();
	});

	it('checks if code validation works for good code', function () {
		cy.window().then(win => {
			win.document.getElementsByClassName("CodeMirror")[0].CodeMirror.setValue("");
		});

		cy.get('.CodeMirror textarea').type("x = this is test", {force: true});
		cy.get('[data-cy=editor-code-validation]').click();
		cy.get('[data-cy=version-validation-info-toggle]').click();
		cy.contains('No issue found');
		cy.get('[data-cy=version-validation-info-toggle]').click();
	});


});


// describe('Codemirror', () => {
//
// 	it('can be tested using textarea', () => {
// 		cy.visit('https://codemirror.net/')
//
// 		cy.window().then(win => {
// 			win.document.getElementsByClassName("CodeMirror")[0].CodeMirror.setValue("");
// 			console.log(win.document.getElementsByClassName("CodeMirror")[0]);
// 		});
//
// 		cy.get('.CodeMirror textarea')
// 			.type('test test test test', { force: true });
// 	})
// });
