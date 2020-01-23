const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');


async function runCommand(str) {
  return (await exec(str)).stdout.trim();
}

async function f() {
  let currentBranch = await runCommand(`git rev-parse --abbrev-ref HEAD`);
  let lastCommit = await runCommand(`git log -1 -s --format=%ct`);
  const obj = {currentBranch, lastCommit: Number(lastCommit) * 1000}
  fs.writeFileSync('D:\\nodebook\\DEVELOP\\imi\\src\\deploy.json',
    JSON.stringify(obj));
  console.dir(obj);
}

f();

