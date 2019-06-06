/// <reference types="Cypress" />

describe('Chat window', function () {
	before(() => {
		cy.server();
		cy.route('POST','api/v1/webhook/web/*').as('send');

		cy.login_UI();
		cy.wait(10000);
		cy.contains("e2e_chat_preview (pls dont use)").trigger('mouseover').click();
		cy.wait(5000);

		cy.contains("Preview").click();
		cy.wait(5000);

		cy.get('[data-cy=chat-full-screen]')
			.invoke('removeAttr', 'target')
			.invoke('attr', 'href');
		cy.get('[data-cy=chat-full-screen]')	.click()


	});

	it('checks if user is able to chat and see the chat rooms', function () {
		cy.server();
		cy.route('POST','/api/v1/webhook/web/*').as('send');
		cy.get('[data-cy=chat-message]');
		cy.get('[data-cy=chat-input]').type("this is e2e test {enter}");
		cy.contains("this is e2e test").should('exist');
		cy.wait(['@send'], {timeout:10000});
		cy.get('[data-cy=chat-room]').should('exist');

		/*check for header items*/
		cy.get("[data-cy=chat-logo-enterprise]").should('exist');
		cy.get("[data-cy=chat-logo-bot]").should('exist');
		cy.get("[data-cy=chat-room-uid]").should('exist');
		// cy.get("[data-cy=chat-room-lasttemplaykey]").should('exist');
		cy.get('[data-cy=custom-room-form-trigger]').should('exist');
	});

	it('checks if chat rooms exists', function () {
		cy.get('[data-cy=chat-room-new]').should('exist');
	});

	it('checks if user can create a new custom room', function () {
		cy.server();
		cy.route('POST','/api/v1/webhook/web/*').as('send1');

		cy.get('[data-cy=custom-room-form-trigger]').click();
		cy.get('[data-cy=edit-consumer-uid]').type(Date.now());
		cy.get('[data-cy=edit-consumer-submit]').click();
		cy.wait(['@send1'], {timeout:10000});
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
