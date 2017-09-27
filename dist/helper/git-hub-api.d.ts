import ConfigurationGitHub from './../configuration/github';
import ModelGitHubPullRequestComment from './../model/git-hub/pull-request/comment';
export default class HelperGitHubApi {
    private configuration;
    constructor(configuration: ConfigurationGitHub);
    getApiUrl(path: string): string;
    parsePullRequestCommentResponse(response: string): ModelGitHubPullRequestComment;
    private urlFactory(path);
    private getConfiguration();
    private setConfiguration(value);
}
