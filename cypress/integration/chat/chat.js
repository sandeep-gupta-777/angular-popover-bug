/// <reference types="Cypress" />

describe('Chat window', function () {
	before(() => {
		cy.server();
		cy.route('POST','https://staging.imibot.ai/api/v1/webhook/web/*').as('send');

		cy.login_UI();
		cy.wait(10000);
		cy.contains("e2e_chat_preview (pls dont use)").trigger('mouseover').click();
		cy.wait(5000);

		// cy.wait(['@send'], {timeout:10000});
	});

	beforeEach(()=>{
		cy.contains("Preview").click();
		cy.wait(5000);
	})

	// it('checks if user is able to chat and see the chat rooms', function () {
	// 	// cy.log(cy);
	// 	cy.get('[data-cy=chat-message]')
	// 		.then(($el)=>{
	// 			cy.log($el);
	// 		});
	// 	cy.get('[data-cy=chat-input]').type("this is e2e test {enter}");
	// 	cy.contains("this is e2e test").should('exist');
	// 	cy.wait(['@send'], {timeout:10000});
	// 	cy.get('[data-cy=chat-back]').click();
	// 	cy.get('[data-cy=chat-room]').should('exist');
	// });
	//
	// it('checks if chat rooms exists', function () {
	// 	cy.server();
	// 	cy.route('POST','https://staging.imibot.ai/api/v1/webhook/web/*').as('send');
	// 	cy.get('[data-cy=chat-back]').click();
	// 	cy.get('[data-cy=chat-room-new]').click();
	// 	cy.wait(['@send'], {timeout:10000});
	// });
	//
	it('checks if user can create a new custom room', function () {
		cy.server();
		cy.route('POST',/.*webhook.*/g).as('send');
		// cy.wait(['@send'], {timeout:10000});//doesnt work

		cy.get('[data-cy=chat-back]').click();
		cy.get('[data-cy=custom-room-form-trigger]').click();
		cy.get('[data-cy=edit-consumer-submit]').click();
		cy.wait(['@send'], {timeout:10000});
	});

	it('checks if user can minimize and maximize chat preview', function () {
		cy.server();
		cy.route('POST','https://staging.imibot.ai/api/v1/webhook/web/*').as('send');
		// cy.wait(['@send'], {timeout:10000});//doesnt work

		cy.get('[data-cy=chat-minimize]').click();
		cy.get('[data-cy=preview-tooltip]').click();
		cy.get('[data-cy=chat-minimize]').should('exist')
	});

	it('checks if user can open fullscreen preview', function () {
		cy.server();
		cy.route('POST','https://staging.imibot.ai/api/v1/webhook/web/*').as('send');
		// cy.wait(['@send'], {timeout:10000});//doesnt work

		cy.get('[data-cy=chat-full-screen]')
			.invoke('removeAttr', 'target')
			.invoke('attr', 'href')
		cy.get('[data-cy=chat-full-screen]')	.click()
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
