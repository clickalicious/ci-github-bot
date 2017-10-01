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
/**
 * Model for Github Pull-Request Comment.
 *
 * @api https://developer.github.com/v3/pulls/#get-a-single-pull-request
 */
class ModelGithubPullRequestComment {
    /**
     * Getter for body.
     *
     * @returns {string}
     */
    getBody() {
        return this.body;
    }
    /**
     * Setter for body.
     *
     * @param {string} value
     *
     * @returns {ModelGithubPullRequestComment}
     */
    setBody(value) {
        this.body = value;
        return this;
    }
}
exports.ModelGithubPullRequestComment = ModelGithubPullRequestComment;
