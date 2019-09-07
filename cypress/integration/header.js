/// <reference types="Cypress" />

describe('header nav links', function () {
    before(() => {
        cy.login_UI();
    });
    it('checks if dashboard link takes to /core/viewbots link page', function () {
        cy.get('[data-cy=dashboard_nav]').click();
        cy.url().should('include', '/core/viewbots');
    });
    it('checks if Knowledge link takes to core/customner link page', function () {
        cy.get('[data-cy=dashboard_KB]').click();
        cy.url().should('include', '/core/customner');
    });
    it('checks if Analytics link takes to core/analytics2/volume link page', function () {
        cy.get('[data-cy=dashboard_analytics]').click();
        cy.url().should('include', '/core/analytics2/overview');
    });
    it('checks if report link takes to core/reports link page', function () {
        cy.get('[data-cy=dashboard_reports]').click();
        cy.url().should('include', '/core/reports');
    });
});


describe('header dropdown', function () {

    beforeEach(() => {
        cy.login_localstorage();
        cy.get('[data-cy=header-dropdown-toggle]').click();
    });
    it('checks if profile tab takes to /core/profile link page', function () {
        cy.get('[data-cy=header-profile]').click();
        cy.url().should('include', '/core/profile');
    });

    it('checks if enterprise-profile tab takes to enterpriseprofile link page', function () {
        cy.get('[data-cy=header-enterprise-profile]').click();
        cy.url().should('include', '/core/enterpriseprofile');
    });

    it('checks if clicking sign out to core/auth/login link page', function () {
        cy.get('[data-cy=header-sign-out]').click();
        cy.url().should('include', 'auth/login');
    });
});
