'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const dotenv = require("dotenv");
const cigithubbot_1 = require("./cigithubbot");
const comment_1 = require("./configuration/comment");
const github_1 = require("./configuration/github");
const applicationDirectory = path.dirname(require.main.filename);
dotenv.config({
    path: applicationDirectory + '\\.env',
});
const configurationGitHub = new github_1.default(process.env.GB_GITHUB_BOT_USERNAME, process.env.GB_GITHUB_BOT_TOKEN);
configurationGitHub.loadFromPullRequestUrl(process.env.GB_GITHUB_PR_URL);
const bot = new cigithubbot_1.default(configurationGitHub);
bot.createPullRequestComment(new comment_1.default(process.env.GB_TEMPLATES.split('|'), {
    stageUrl: process.env.GB_STAGE_LINK_URL,
    stageText: process.env.GB_STAGE_LINK_TEXT,
    buildNumber: process.env.GB_CI_BUILD_NUMBER,
    buildUrl: process.env.GB_CI_BUILD_URL,
}));
//# sourceMappingURL=test.js.map