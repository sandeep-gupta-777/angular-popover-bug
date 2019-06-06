const permissionsObj = require("../../fixtures/role-based-access/header");
const creds = require("../../auth/login");
const login = creds.login;
const helper = require("../helper/helper.js");


login.forEach((cred) => {
    let module = 'header_nav_links';
    let role = cred.role;
    const element_data_cy_obj = permissionsObj[module][role];
    console.log(element_data_cy_obj);
    const login = () => cy.login_UI(cred.email, cred.password);
    const postLogin = () => {};
    const title = `role based testing:: ${module}:: ${cred.role.toUpperCase()}`;
    helper.checkIfElementExists_Suite(login, postLogin, title, element_data_cy_obj);
});

login.forEach((cred) => {
    let module = 'header_dropdown';
    let role = cred.role;
    const element_data_cy_obj = permissionsObj[module][role];
    console.log(element_data_cy_obj);
    const login = () => cy.login_UI(cred.email, cred.password);
    const postLogin = () => {
        cy.get('[data-cy=header-dropdown-toggle]').click();
        cy.wait(3000);
    };
    const title = `role based testing:: ${module}:: ${cred.role.toUpperCase()}`;
    helper.checkIfElementExists_Suite(login, postLogin, title, element_data_cy_obj);
});
