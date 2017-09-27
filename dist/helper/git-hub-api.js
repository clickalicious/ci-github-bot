'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = require("./../model/git-hub/pull-request/comment");
class HelperGitHubApi {
    constructor(configuration) {
        this
            .setConfiguration(configuration);
    }
    getApiUrl(path) {
        return this.urlFactory('repos/' +
            this.getConfiguration().getOrganisation() + '/' +
            this.getConfiguration().getRepository() + '/' +
            path);
    }
    parsePullRequestCommentResponse(response) {
        return Object.assign(new comment_1.default(), JSON.parse(response));
    }
    urlFactory(path) {
        return this.getConfiguration().getScheme() + '://' +
            this.getConfiguration().getHost() + '/' +
            path;
    }
    getConfiguration() {
        return this.configuration;
    }
    setConfiguration(value) {
        this.configuration = value;
        return this;
    }
}
exports.default = HelperGitHubApi;
//# sourceMappingURL=git-hub-api.js.map