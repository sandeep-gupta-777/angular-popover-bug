// const permissionsObj = require("../../fixtures/role-based-access/sidebar");
// const creds = require("../../auth/login");
// const login = creds.login;
// const helper = require("../helper/helper.js");
//
// login.forEach((cred) => {
//     let module = 'sidebar_nav_links';
//     let role = cred.role;
//     const element_data_cy_obj = permissionsObj[module][role];
//     console.log(element_data_cy_obj);
//     const login = () => cy.login_UI(cred.email, cred.password);
//     const postLogin = () => {
//         cy.get('[data-cy=bot-card]').first().click();
//         cy.wait(10000);
//     };
//     const title = `role based testing:: ${module}:: ${cred.role.toUpperCase()}`;
//     console.log("==>", permissionsObj["sidebar_nav_links"][role], role);
//     helper.checkIfElementExists_Suite(login, postLogin, title, element_data_cy_obj);
// });
//
