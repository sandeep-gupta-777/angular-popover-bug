const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');


async function runCommand(str) {
    return await exec(str);
}

function f() {
    let currentBranch = `git rev-parse --abbrev-ref HEAD`;
    let lastCommit = `git log -1`
    fs.writeFileSync('D:\\nodebook\\DEVELOP\\bot_platform-fe\\dist\\botPlateformFE\\git-info.json',
        {currentBranch,lastCommit});
}

