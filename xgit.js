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
    console.log("=========XGIT:START===========");
    console.log(`Writing variable time = ${time}`);

    try {
        fs.writeFileSync('src\\deploy.json', JSON.stringify({currentBranch,lastDeploy: time}));

        fs.writeFileSync('src\\assets\\js\\deploy.js',
            `var deploy_obj_botplateform_fe = {"currentBranch":"develop","lastDeploy":${time}};`);

        console.log("deploy.json::",fs.readFileSync('src\\deploy.json').toString());
        console.log("deploy.js::",fs.readFileSync('src\\assets\\js\\deploy.js').toString());
    }catch (e) {
        console.log(e);
    }
    console.log("=========XGIT:END===========");

}
f();

