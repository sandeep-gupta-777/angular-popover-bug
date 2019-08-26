const jenkins = require('jenkins')({baseUrl: 'http://sandeep:imi@12345@10.0.10.57', crumbIssuer: true});
const inquirer = require('inquirer');
const Spinner = require('cli-spinner').Spinner;
const spinner = new Spinner('processing.. %s');
spinner.setSpinnerTitle("Jenkins is busy. Pls wait");
spinner.setSpinnerString('|/-\\');
let build_number;
let scope_name = 'IMIbot Frontend';
inquirer
  .prompt([
    {
      type: 'list',
      message: 'What env/branch you want to deploy?',
      name: 'branch',
      choices: ["develop", "staging", "staging-v2"]
    }
  ])
  .then(answers => {
    let branch, env;
    if (answers.branch === 'staging') {
      branch = env = 'staging';
    } else if (answers.branch === 'staging-v2') {
      env = 'v2';
      branch = "develop"
    } else if (answers.branch === 'develop') {
      branch = 'develop';
      env = 'dev';
    }
    console.log(`INFO::deploying branch: ${branch} on environment: ${env} `);
    buildInit(env, branch)
    spinner.start();
  });

function buildInit(environment, branch) {

  function waitOnQueue(id) {
    jenkins.queue.item(id, function (err, item) {
      if (err) throw err;
      if (item.executable) {
        spinner.stop(true);
        console.log('end', `Started deployment at: http://10.0.10.57/job/IMIbot%20Frontend/${item.executable.number}/`);
        build_number = item.executable.number;
        printLogStream(item.executable.number);
      } else if (item.cancelled) {
        spinner.stop(true);
        console.log('\nbuild has been cancelled');
      } else {
        setTimeout(function () {
          waitOnQueue(id);
        }, 3000);
      }
    });
  }

  jenkins.job.build({name: scope_name, parameters: {environment, branch}}, function (err, id) {
    if (err) throw err;
    waitOnQueue(id);
  });

  function printLogStream(id) {
    const log = jenkins.build.logStream(scope_name, id);

    log.on('data', function (text) {
      process.stdout.write(text);
    });

    log.on('error', function (err) {
      console.log('error', err);
    });

    log.on('end', function () {
      console.log('INFO::', `Finished, please check: http://10.0.10.57/job/IMIbot%20Frontend/${id}/`);
    });
  }
}

process.on('SIGINT', function () {
  jenkins.build.stop(scope_name, build_number, function (err) {
    if(err){
      console.log('Could not stop it', err);
      process.exit();
    }else {
      console.log('\n Successfully stopped!');
      process.exit();
    }
  });

});
