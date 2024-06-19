const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    // get GitHub token
    const token = core.getInput("repo-token", { required: true });
    const octokit = github.getOctokit(token);
    const { context } = github;

    // get the current pr
    const pr = context.payload.pull_request;
    console.log(pr.title);
    
    // create an issue for pr
    console.log("Creating issue for PR");
    const issue = await octokit.rest.issues.create({
      owner: context.repo.owner,
      repo: context.repo.repo,
      title: pr.title,
      body: pr.body,
    });
    // add comment to PR
    console.log("Adding comment to PR");
    await octokit.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: pr.number,
      body: `Issue created: ${issue.data.html_url}`,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
