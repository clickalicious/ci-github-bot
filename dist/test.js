'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 /**
 * ci-gitHub-bot
 *
 * GitHub communication bot for CI/CD workflows.
 *
 * Simplified abstraction on GitHub's PR/Review-Comment API.
 * Supports templates for comments based on PUG template engine.
 *
 * MIT License
 *
 * @copyright 2017 clickalicious, Benjamin Carl
 */
/**
 * e2e test script for development.
 */
const path = require("path");
const dotenv = require("dotenv");
const cigithubbot_1 = require("./cigithubbot");
const comment_1 = require("./configuration/comment");
const github_1 = require("./configuration/github");
// Retrieve application directory
const applicationDirectory = path.dirname(require.main.filename);
// Simulate CI/CD environment var setup
dotenv.config({
    path: applicationDirectory + '\\.env',
});
// Bot configuration base ...
const configurationGitHub = new github_1.default(process.env.GB_GITHUB_BOT_USERNAME, process.env.GB_GITHUB_BOT_TOKEN);
// Load the target/subject configuration from URL
configurationGitHub.loadFromPullRequestUrl(process.env.GB_GITHUB_PR_URL);
// Create instance of Bot
const bot = new cigithubbot_1.default(configurationGitHub);
// Creates a new PR review comment on existing PR.
bot.createPullRequestComment(new comment_1.default(process.env.GB_TEMPLATES.split('|'), {
    stageUrl: process.env.GB_STAGE_LINK_URL,
    stageText: process.env.GB_STAGE_LINK_TEXT,
    buildNumber: process.env.GB_CI_BUILD_NUMBER,
    buildUrl: process.env.GB_CI_BUILD_URL,
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYjs7Ozs7Ozs7Ozs7O0dBWUc7QUFFSDs7R0FFRztBQUVILDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsK0NBQXdDO0FBQ3hDLHFEQUEyRDtBQUMzRCxtREFBeUQ7QUFFekQsaUNBQWlDO0FBQ2pDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpFLHVDQUF1QztBQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ1osSUFBSSxFQUFFLG9CQUFvQixHQUFHLFFBQVE7Q0FDdEMsQ0FBQyxDQUFDO0FBR0gsNkJBQTZCO0FBQzdCLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxnQkFBbUIsQ0FDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FDaEMsQ0FBQztBQUVGLGlEQUFpRDtBQUNqRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FDN0IsQ0FBQztBQUVGLHlCQUF5QjtBQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLHFCQUFXLENBQ3pCLG1CQUFtQixDQUNwQixDQUFDO0FBRUYsa0RBQWtEO0FBQ2xELEdBQUcsQ0FBQyx3QkFBd0IsQ0FDMUIsSUFBSSxpQkFBb0IsQ0FDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUNuQztJQUNFLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtJQUN2QyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0I7SUFDekMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO0lBQzNDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWU7Q0FDdEMsQ0FDRixDQUNGLENBQUMifQ==