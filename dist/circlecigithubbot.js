'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
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
const cigithubbot_1 = require("./cigithubbot");
const github_1 = require("./configuration/github");
/**
 * "CircleCI to CiGitHubBot bridge" for CircleCI build environment.
 */
class CircleCiGithubBot extends cigithubbot_1.default {
    /**
     * Constructor.
     *
     * @param {string} username GitHub username used by the bot.
     * @param {string} token    Token used by the bot.
     */
    constructor(username, token) {
        const configuration = new github_1.default(username, token);
        // No we insert data from CircleCI environment
        configuration
            .loadFromPullRequestUrl(process.env.CI_PULL_REQUEST);
        super(configuration);
    }
}
exports.default = CircleCiGithubBot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlY2lnaXRodWJib3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY2lyY2xlY2lnaXRodWJib3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViOzs7Ozs7Ozs7OztHQVdHO0FBRUgsK0NBQXdDO0FBQ3hDLG1EQUF5RDtBQUV6RDs7R0FFRztBQUNILHVCQUF1QyxTQUFRLHFCQUFXO0lBRXhEOzs7OztPQUtHO0lBQ0gsWUFBWSxRQUFnQixFQUFFLEtBQWE7UUFFekMsTUFBTSxhQUFhLEdBQUksSUFBSSxnQkFBbUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFaEUsOENBQThDO1FBQzlDLGFBQWE7YUFDVixzQkFBc0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXZELEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7QUFsQkQsb0NBa0JDIn0=