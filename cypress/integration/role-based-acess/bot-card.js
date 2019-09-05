const permissionsObj = require("../../fixtures/role-based-access/bot-card");
const creds = require("../../auth/login");
const login = creds.login;
const helper = require("../helper/helper.js");

login.forEach((cred) => {
  let module = 'bot_card';
  let role = cred.role;
  const element_data_cy_obj = permissionsObj[module][role];
  const login = () => cy.login_UI(cred.email, cred.password);
  const postLogin = () => {
    cy.get('.grid-bot-preview-name').first().get('[data-cy=bot-card-menu]').first().click();
    // cy.wait(10000);
  };
  const title = `role based testing:: ${module}:: ${cred.role.toUpperCase()}`;
  helper.checkIfElementExists_Suite(login, postLogin, title, element_data_cy_obj);
});

