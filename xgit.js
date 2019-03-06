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
    try {
        console.log("=========BEFORE===========");
        console.log("deploy.json::",fs.readFileSync(path.join(__dirname, 'src\\deploy.json')).toString());
        console.log("deploy.js::",fs.readFileSync(path.join(__dirname, 'src\\assets\\js\\deploy.js')).toString());
    }catch (e) {
        console.log(e);
        console.log("deploy.json path::",path.join(__dirname, 'src\\deploy.json'));
        console.log("deploy.js path::",path.join(__dirname, 'src\\assets\\js\\deploy.js'));
    }
    console.log(`Writing variable time = ${time}`);

    try {
        fs.writeFileSync('src\\deploy.json', JSON.stringify({currentBranch,lastDeploy: time}));
        fs.writeFileSync('src\\assets\\js\\deploy.js',
            `var deploy_obj_botplateform_fe = {"currentBranch":"develop","lastDeploy":${time}};`);

        console.log("=========AFTER===========");
        console.log("deploy.json::",fs.readFileSync('src\\deploy.json').toString());
        console.log("deploy.js::",fs.readFileSync('src\\assets\\js\\deploy.js').toString());
    }catch (e) {
        console.log(e);
    }
    console.log("=========XGIT:END===========");

}
f();

