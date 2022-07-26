const core = require('@actions/core');
const github = require('@actions/github');

try {
    const title  = core.getInput('title');
    const content = core.getInput('content');
    console.log(`Discussion ${title}: ${content}!`);
} catch (error) {
  core.setFailed(error.message);
}