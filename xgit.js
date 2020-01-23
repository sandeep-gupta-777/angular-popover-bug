const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');


async function runCommand(str) {
  return (await exec(str)).stdout.trim();
}

async function f() {
  let currentBranch = await runCommand(`git rev-parse --abbrev-ref HEAD`);
  let lastDeploy = await runCommand(`git log -1 -s --format=%ct`);
  lastDeploy =  Number(lastDeploy) * 1000;
  const obj = {currentBranch, lastDeploy: Number(lastDeploy) * 1000}
  fs.writeFileSync('src\\assets\\js\\deploy.json', JSON.stringify(obj));
  fs.writeFileSync('src\\assets\\js\\deploy.js', `var deploy_obj_botplateform_fe = {"currentBranch":"${currentBranch}","lastDeploy":${lastDeploy}};`);
  console.dir(obj);
}

f();

