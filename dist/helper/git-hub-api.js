'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = require("./../model/git-hub/pull-request/comment");
/**
 * Helper for GitHub-API communication (URL-factory and stuff like that).
 */
class HelperGitHubApi {
    /**
     * Constructor.
     *
     * @param {ConfigurationGitHub} configuration
     */
    constructor(configuration) {
        this
            .setConfiguration(configuration);
    }
    /**
     * Returns FQ-API-URL for passed path.
     *
     * @param {string} path
     *
     * @returns {string}
     */
    getApiUrl(path) {
        return this.urlFactory('repos/' +
            this.getConfiguration().getOrganisation() + '/' +
            this.getConfiguration().getRepository() + '/' +
            path);
    }
    /**
     * Parses a Model from a plain JSON object
     *
     * @param {string} response from API request GET /repos/:owner/:repo/pulls/:number
     *
     * @returns {ModelGitHubPullRequestComment}
     */
    parsePullRequestCommentResponse(response) {
        return Object.assign(new comment_1.default(), JSON.parse(response));
    }
    /**
     *
     * @param {string} path
     *
     * @returns {string}
     */
    urlFactory(path) {
        return this.getConfiguration().getScheme() + '://' +
            this.getConfiguration().getHost() + '/' +
            path;
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
     * @returns {HelperGitHubApi}
     */
    setConfiguration(value) {
        this.configuration = value;
        return this;
    }
}
exports.default = HelperGitHubApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LWh1Yi1hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVyL2dpdC1odWItYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFnQmIscUVBQW9GO0FBRXBGOztHQUVHO0FBQ0g7SUFTRTs7OztPQUlHO0lBQ0gsWUFBWSxhQUFrQztRQUM1QyxJQUFJO2FBQ0QsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLFNBQVMsQ0FBQyxJQUFZO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUNwQixRQUFRO1lBQ1IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsR0FBRztZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxHQUFHO1lBQzdDLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLCtCQUErQixDQUFDLFFBQWdCO1FBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksaUJBQTZCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssVUFBVSxDQUFDLElBQVk7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEtBQUs7WUFDaEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRztZQUN2QyxJQUFJLENBQUM7SUFDVCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGdCQUFnQjtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssZ0JBQWdCLENBQUMsS0FBMEI7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQS9FRCxrQ0ErRUMifQ==