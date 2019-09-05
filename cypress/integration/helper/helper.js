
const assert_exists = "exist";
const assert_not_exists = "not.exist";
function checkIfElementExists(element_data_cy, shouldExist) {
    it(`checks if ${element_data_cy} ${shouldExist ? "" : "NOT"} exists`, function () {
        cy.get(`[data-cy=${element_data_cy}]`).should(shouldExist ? assert_exists : assert_not_exists);
    });
}

/**
 * @element_data_cy_obj
 * */
function checkIfElementExists_Suite(login, postLogin, title, element_data_cy_obj) {
    describe(title, function () {
        before(() => {
            login();// cy.login_UI(cred.email, cred.password);
            postLogin();
        });

        element_data_cy_obj.forEach((obj)=>{
                checkIfElementExists(obj.data_cy, obj.should_exist);
        })

    });
}



module.exports = {
    checkIfElementExists,
    checkIfElementExists_Suite
};
