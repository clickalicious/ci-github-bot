'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ci-gitHub-bot
 *
 * Github communication bot for CI/CD workflows.
 *
 * Simplified abstraction on Github's PR/Review-Comment API.
 * Supports templates for comments based on PUG template engine.
 *
 * MIT License
 *
 * @copyright 2017 clickalicious, Benjamin Carl
 */
const ci_github_bot_1 = require("./ci-github-bot");
const github_1 = require("./configuration/github");
/**
 * "CircleCI to CiGithubBot bridge" for CircleCI build environment.
 */
class CircleCiGithubBot extends ci_github_bot_1.CiGithubBot {
    /**
     * Constructor.
     *
     * @param {string} username Github username used by the bot.
     * @param {string} token    Token used by the bot.
     */
    constructor(username, token) {
        const configuration = new github_1.ConfigurationGithub(username, token);
        // No we insert data from CircleCI environment
        configuration
            .loadFromPullRequestUrl(process.env.CI_PULL_REQUEST);
        super(configuration);
    }
}
exports.CircleCiGithubBot = CircleCiGithubBot;
