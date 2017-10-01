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
import { CiGithubBot } from './ci-github-bot';
/**
 * "CircleCI to CiGithubBot bridge" for CircleCI build environment.
 */
export declare class CircleCiGithubBot extends CiGithubBot {
    /**
     * Constructor.
     *
     * @param {string} username Github username used by the bot.
     * @param {string} token    Token used by the bot.
     */
    constructor(username: string, token: string);
}
