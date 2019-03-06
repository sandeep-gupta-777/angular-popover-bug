const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');


async function runCommand(str) {
    // console.log((await exec(str)).stdout);
    return (await exec(str)).stdout.trim();
}

async function f() {
    let currentBranch = await runCommand(`git rev-parse --abbrev-ref HEAD`);
    console.log(currentBranch);
    let lastCommit = await runCommand(`git log -1 -s --format=%ct`);
    let time = Date.now();
    console.log("=========XGIT:START===========");
    const deploy_json_path = path.join(__dirname, 'src/deploy.json');
    const deploy_js_path = path.join(__dirname, 'src/assets/js/deploy.js');
    try {
        console.log("=========BEFORE===========");
        console.log("deploy.json::",fs.readFileSync(deploy_json_path).toString());
        console.log("deploy.js::",fs.readFileSync(deploy_js_path).toString());
    }catch (e) {
        console.log(e);
    }finally {
        console.log("deploy.json path::",deploy_json_path);
        console.log("deploy.js path::",deploy_js_path);
    }
    console.log(`Writing variable time = ${time}`);

    try {
        fs.writeFileSync(deploy_json_path, JSON.stringify({currentBranch,lastDeploy: time}));
        fs.writeFileSync(deploy_js_path,
            `var deploy_obj_botplateform_fe = {"currentBranch":"develop","lastDeploy":${time}};`);

        console.log("=========AFTER===========");
        console.log("deploy.json::",fs.readFileSync(deploy_json_path).toString());
        console.log("deploy.js::",fs.readFileSync(deploy_js_path).toString());
    }catch (e) {
        console.log(e);
    }
    console.log("=========XGIT:END===========");

}
f();

