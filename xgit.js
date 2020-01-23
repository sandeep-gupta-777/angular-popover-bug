const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');


async function runCommand(str) {
  return (await exec(str)).stdout.trim();
}

async function f() {
  let currentBranch = await runCommand(`git rev-parse --abbrev-ref HEAD`);
  let lastCommit = await runCommand(`git log -1 -s --format=%ct`);
  fs.writeFileSync('D:\\nodebook\\DEVELOP\\imi\\src\\deploy.json',
    JSON.stringify({currentBranch, lastCommit: Number(lastCommit) * 1000}));
  console.log(currentBranch);
  console.log(lastCommit);
}

f();

