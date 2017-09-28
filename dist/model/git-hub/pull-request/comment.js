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
/**
 * Model for GitHub Pull-Request Comment.
 *
 * @api https://developer.github.com/v3/pulls/#get-a-single-pull-request
 */
class ModelGitHubPullRequestComment {
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
     * @returns {ModelGitHubPullRequestComment}
     */
    setBody(value) {
        this.body = value;
        return this;
    }
}
exports.default = ModelGitHubPullRequestComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbC9naXQtaHViL3B1bGwtcmVxdWVzdC9jb21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYjs7Ozs7Ozs7Ozs7R0FXRztBQUVIOzs7O0dBSUc7QUFDSDtJQVNFOzs7O09BSUc7SUFDSSxPQUFPO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE9BQU8sQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWxCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUE5QkQsZ0RBOEJDIn0=