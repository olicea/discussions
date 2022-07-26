const core = require('@actions/core');
const github = require('@actions/github');

try {
    const title  = core.getInput('title');
    const content = core.getInput('content');
    console.log(`Discussion ${title}: ${content}!`);

    //create a new issue
    const octokit = new github.GitHub(process.env.GITHUB_TOKEN);
    const issue = {
        title: title,
        body: content
    };
    octokit.issues.create({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_data: issue
    });

} catch (error) {
  core.setFailed(error.message);
}