const permissionsObj = require("../../fixtures/role-based-access/sidebar-smart-bots");
const creds = require("../../auth/login");
const login = creds.login;
const helper = require("../helper/helper.js");
let bot_types = ['sidebar_nav_links_smart_bots', 'sidebar_nav_links_pipeline_bots'];
bot_types.forEach((bot_type) => {
  login.forEach((cred) => {
    let module = bot_type;
    let role = cred.role;
    const element_data_cy_obj = permissionsObj[module][role];
    console.log(element_data_cy_obj);
    const login = () => cy.login_UI(cred.email, cred.password);
    const postLogin = () => {
      if (module === 'sidebar_nav_links_Q&A_bots') {
        cy.contains('Q&A bots').click();
      } else if (module === 'sidebar_nav_links_smart_bots') {
        cy.contains('Smart bots').click();
      } else if (module === 'sidebar_nav_links_pipeline_bots') {
        cy.contains('Pipeline bots').click();
      }
      cy.get('[data-cy=bot-card]').first().click();
      cy.wait(10000);
    };
    const title = `RBT::${module}:: ${cred.role.toUpperCase()}`;
    helper.checkIfElementExists_Suite(login, postLogin, title, element_data_cy_obj);
  });
})

