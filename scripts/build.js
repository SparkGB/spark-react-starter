const path = require('path');
const shell = require('shelljs');
const simpleGit = require('simple-git');
const { version } = require('../package.json');

const args = process.argv.slice(2)
const isDev = args.includes('--dev');

if (!shell.which('git')) {
  shell.echo('Cannot build without git');
  shell.exit(1);
}

if (!shell.which('yarn')) {
  shell.echo('Cannot build without yarn');
  shell.exit(1);
}

const workingDir = path.resolve(__dirname, '../');
const git = simpleGit(workingDir);

const getCurrentBranch = () => {
  return new Promise((fulfill, reject) => {
    git.status((err, status) => {
      if (err) {
        reject(err);
        return;
      }

      fulfill(status.current);
    });
  });
}

const getCurrentCommit = () => {
  return new Promise((fulfill, reject) => {
    git.revparse(['HEAD'], (err, hash = '') => {
      if (err) {
        reject(err);
        return;
      }
      fulfill(hash.slice(0, 7));
    });
  });
}

const main = async () => {
  try {
    const branch = await getCurrentBranch();
    const commit = await getCurrentCommit();
    const buildTime = new Date().toLocaleTimeString();

    shell.env.REACT_APP_VERSION = version;
    shell.env.REACT_APP_GIT_BRANCH = branch;
    shell.env.REACT_APP_GIT_COMMIT = commit;
    shell.env.REACT_APP_BUILD_TIME = buildTime;

    if (isDev) {
      shell.exec('yarn run dev');
      return;
    }

    shell.exec('yarn run build');
  } catch (err) {
    shell.echo('Failed to gather build info', err);
    shell.exit(1);
  }
}

main();