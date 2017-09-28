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
const pug = require("pug");
const request = require("request");
const git_hub_api_1 = require("./helper/git-hub-api");
/**
 * Generic CI-Bot for GitHub communication wrapping configuration and template processing.
 */
class CiGithubBot {
    /**
     * Constructor.
     *
     * @param {ConfigurationGitHub} configuration Instance of bot configuration (credentials ...)
     */
    constructor(configuration) {
        this
            .setConfiguration(configuration)
            .setHelperGitHubApi(new git_hub_api_1.default(this.configuration));
    }
    /**
     * Creates a review comment on existing PR at GitHub.
     *
     * @param {ConfigurationComment} configuration Instance of comment configuration (template,
     *   variables ...)
     */
    createPullRequestComment(configuration) {
        if (null === this.getConfiguration().getPullRequestNumber()) {
            throw new Error('Failed creating pull request comment: You need to configure the number of' +
                ' the pull request before creating a comment.');
        }
        // Body of comment - "body" is the name in GitHub's API (v3)
        let body = '';
        // Render (all) template(s) passed into processing stack
        for (const template in configuration.getTemplates()) {
            body += pug.render(configuration.getTemplates()[template], configuration.getVariables());
        }
        body = CiGithubBot.COMMENT_MARKER_BEGIN + body +
            pug.render(CiGithubBot.TEMPLATE_POWERED_BY) + CiGithubBot.COMMENT_MARKER_END;
        const url = this.getHelperGitHubApi().getApiUrl('issues/' + this.getConfiguration().getPullRequestNumber() + '/comments');
        this.sendRequest(url, { body }, 'POST');
    }
    /**
     * Wraps some configuration stuff around request and sends it.
     *
     * @param {string} url
     * @param {object} jsonData
     * @param {string} httpMethod
     */
    sendRequest(url, jsonData, httpMethod = 'GET') {
        const options = {
            headers: {
                'User-Agent': CiGithubBot.HTTP_USER_AGENT,
            },
            json: jsonData,
            method: httpMethod,
        };
        // Send request
        request(url, options)
            .on('response', (response) => {
            console.log(response.statusCode); // 200
        })
            .auth(this.getConfiguration().getUsername(), this.getConfiguration().getToken());
    }
    /**
     * Getter for helperGitHubApi.
     *
     * @returns {HelperGitHubApi}
     */
    getHelperGitHubApi() {
        return this.helperGitHubApi;
    }
    /**
     * Setter for helperGitHubApi.
     *
     * @param {HelperGitHubApi} value
     *
     * @returns {CiGithubBot}
     */
    setHelperGitHubApi(value) {
        this.helperGitHubApi = value;
        return this;
    }
    /**
     * Getter for configuration.
     *
     * @returns {ConfigurationGitHub}
     */
    getConfiguration() {
        return this.configuration;
    }
    /**
     * Setter for configuration.
     *
     * @param {ConfigurationGitHub} value
     *
     * @returns {CiGithubBot}
     */
    setConfiguration(value) {
        this.configuration = value;
        return this;
    }
}
/**
 * Marker for comment (begin)
 *
 * @type {string}
 */
CiGithubBot.COMMENT_MARKER_BEGIN = '<!-- CiGithubBot:BEGIN -->';
/**
 * Marker for comment (end)
 *
 * @type {string}
 */
CiGithubBot.COMMENT_MARKER_END = '<!-- CiGithubBot:END -->';
/**
 * Powered by advertising for comments (PUG template).
 *
 * @type {string}
 */
CiGithubBot.TEMPLATE_POWERED_BY = '<div>Powered by Ci-GitHub-Bot ' +
    '<a href="https://github.com/clickalicious/ci-github-bot/" target="_blank"><img' +
    ' src="https://image.flaticon.com/icons/png/32/34/34429.png"' +
    ' /></a></div>';
/**
 * HTTP User Agent.
 *
 * @type {string}
 */
CiGithubBot.HTTP_USER_AGENT = 'Ci-GitHub-Bot';
exports.default = CiGithubBot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lnaXRodWJib3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY2lnaXRodWJib3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViOzs7Ozs7Ozs7OztHQVdHO0FBRUgsMkJBQTJCO0FBQzNCLG1DQUFtQztBQUduQyxzREFBbUQ7QUFFbkQ7O0dBRUc7QUFDSDtJQThDRTs7OztPQUlHO0lBQ0gsWUFBWSxhQUFrQztRQUU1QyxJQUFJO2FBQ0QsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO2FBQy9CLGtCQUFrQixDQUNqQixJQUFJLHFCQUFlLENBQ2pCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHdCQUF3QixDQUFDLGFBQW1DO1FBRWpFLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1RCxNQUFNLElBQUksS0FBSyxDQUFDLDJFQUEyRTtnQkFDekYsOENBQThDLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRUQsNERBQTREO1FBQzVELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVkLHdEQUF3RDtRQUN4RCxHQUFHLENBQUMsQ0FBQyxNQUFNLFFBQVEsSUFBSSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUMzRixDQUFDO1FBQ0QsSUFBSSxHQUFHLFdBQVcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJO1lBQzVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDO1FBRS9FLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFNBQVMsQ0FDN0MsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsV0FBVyxDQUN6RSxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssV0FBVyxDQUFDLEdBQVcsRUFBRSxRQUFnQixFQUFFLGFBQXFCLEtBQUs7UUFFM0UsTUFBTSxPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsWUFBWSxFQUFFLFdBQVcsQ0FBQyxlQUFlO2FBQzFDO1lBQ0QsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsVUFBVTtTQUNuQixDQUFDO1FBRUYsZUFBZTtRQUNmLE9BQU8sQ0FDSixHQUFHLEVBQUUsT0FBTyxDQUFDO2FBQ2IsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUMxQyxDQUFDLENBQUM7YUFDRCxJQUFJLENBQ0gsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsV0FBVyxFQUFFLEVBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUNuQyxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxrQkFBa0I7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLGtCQUFrQixDQUFDLEtBQXNCO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdCQUFnQjtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssZ0JBQWdCLENBQUMsS0FBMEI7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7O0FBbEtEOzs7O0dBSUc7QUFDYSxnQ0FBb0IsR0FBVyw0QkFBNEIsQ0FBQztBQUU1RTs7OztHQUlHO0FBQ2EsOEJBQWtCLEdBQVcsMEJBQTBCLENBQUM7QUFFeEU7Ozs7R0FJRztBQUNhLCtCQUFtQixHQUFXLGdDQUFnQztJQUM1RSxnRkFBZ0Y7SUFDaEYsNkRBQTZEO0lBQzdELGVBQWUsQ0FBQztBQUVsQjs7OztHQUlHO0FBQ2EsMkJBQWUsR0FBVyxlQUFlLENBQUM7QUE5QjVELDhCQW9LQyJ9