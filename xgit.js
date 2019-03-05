const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');


async function runCommand(str) {
    // console.log((await exec(str)).stdout);
    return (await exec(str)).stdout.trim();
}

async function f() {
    let currentBranch = await runCommand(`git rev-parse --abbrev-ref HEAD`);
    console.log(currentBranch);
    let lastCommit = await runCommand(`git log -1 -s --format=%ct`);
    let time = Date.now();
    fs.writeFileSync('D:\\nodebook\\DEVELOP\\bot_platform-fe\\src\\deploy.json',
        JSON.stringify({currentBranch,lastDeploy: time}));
    fs.writeFileSync('D:\\nodebook\\DEVELOP\\bot_platform-fe\\src\\assets\\js\\deploy.js',
        `var deploy_obj_botplateform_fe = {"currentBranch":"develop","lastDeploy":${time}};`);
    console.log("=========XGIT:START===========");
    console.log(`Writing variable time = ${time}`);
    console.log("=========XGIT:END===========");
}
f();

