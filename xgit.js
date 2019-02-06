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
    let lastCommit = await runCommand(`git log -1`);
    fs.writeFileSync('D:\\nodebook\\DEVELOP\\bot_platform-fe\\src\\git-info.json',
        JSON.stringify({currentBranch,lastCommit}));
}
f();

