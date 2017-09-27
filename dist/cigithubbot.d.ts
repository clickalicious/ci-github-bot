import ConfigurationComment from './configuration/comment';
import ConfigurationGitHub from './configuration/github';
import HelperCurl from './helper/curl';
import HelperGitHubApi from './helper/git-hub-api';
export default class CiGithubBot {
    static readonly COMMENT_MARKER_BEGIN: string;
    static readonly COMMENT_MARKER_END: string;
    static readonly TEMPLATE_POWERED_BY: string;
    static readonly MODE_CREATE: number;
    static readonly MODE_UPDATE: number;
    static readonly HTTP_USER_AGENT: string;
    private configuration;
    private helperCurl;
    private helperGitHubApi;
    constructor(configuration: ConfigurationGitHub);
    createPullRequestComment(configuration: ConfigurationComment): void;
    private sendRequest(url, jsonData, httpMethod?);
    private resolveModeByComment(comment);
    getHelperGitHubApi(): HelperGitHubApi;
    private setHelperGitHubApi(value);
    getHelperCurl(): HelperCurl;
    private setHelperCurl(value);
    getConfiguration(): ConfigurationGitHub;
    private setConfiguration(value);
}
