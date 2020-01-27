const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
async function runCommand(str) {
  return (await exec(str)).stdout.trim();
}

async function f() {
  console.log("=======start=======");
  logFiles();
  let currentBranch = await runCommand(`git rev-parse --abbrev-ref HEAD`);
  let lastDeploy = await runCommand(`git log -1 -s --format=%ct`);
  lastDeploy = Number(lastDeploy) * 1000;
  const obj = {currentBranch, lastDeploy: lastDeploy};
  try {
    fs.writeFileSync('src\\assets\\js\\deploy.json', JSON.stringify(obj));
  } catch (e) {
    console.log(e);
  }
  try {
    fs.writeFileSync('src\\assets\\js\\deploy.js', `var deploy_obj_botplateform_fe = {"currentBranch":"${currentBranch}","lastDeploy":${lastDeploy}};`);
  } catch (e) {
    console.log(e);
  }
  console.log("====end=======");
  logFiles();
}

f();

function logFiles() {
  console.log("deploy.js ==>", fs.readFileSync('src\\assets\\js\\deploy.js').toString());
  console.log("deploy.js ==>", fs.readFileSync('src\\assets\\js\\deploy.json').toString());
}
