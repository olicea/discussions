const core = require('@actions/core');
const github = require('@actions/github');
import { Octokit } from '@octokit';

try {
    const title  = core.getInput('title');
    const content = core.getInput('content');
    console.log(`Discussion ${title}: ${content}!`);

    // creating a discussion in GitHub
    const octokit = new github.GitHub(process.env.GITHUB_TOKEN);
    // const discussion = {
    //     title: title,
    //     body: content
    // };

    // octokit.discussions.createDiscussion({
    //     repo: github.context.repo.repo,
    //     body: discussion
    // });

    octokit.rest.createDiscussion({
        repo: github.context.repo.repo,
        body: discussion
    }).then(res => {
        console.log(res.data);
    });


} catch (error) {
  core.setFailed(error.message);
}