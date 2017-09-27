'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const pug = require("pug");
const request = require("request");
const curl_1 = require("./helper/curl");
const git_hub_api_1 = require("./helper/git-hub-api");
class CiGithubBot {
    constructor(configuration) {
        this
            .setConfiguration(configuration)
            .setHelperCurl(new curl_1.default(this.configuration.getUsername(), this.configuration.getToken()))
            .setHelperGitHubApi(new git_hub_api_1.default(this.configuration));
    }
    createPullRequestComment(configuration) {
        if (null === this.getConfiguration().getPullRequestNumber()) {
            throw new Error('Failed creating pull request comment: You need to configure the number of' +
                ' the pull request before creating a comment.');
        }
        let body = '';
        for (const template in configuration.getTemplates()) {
            body += pug.render(configuration.getTemplates()[template], configuration.getVariables());
        }
        body = CiGithubBot.COMMENT_MARKER_BEGIN + body +
            pug.render(CiGithubBot.TEMPLATE_POWERED_BY) + CiGithubBot.COMMENT_MARKER_END;
        const url = this.getHelperGitHubApi().getApiUrl('issues/' + this.getConfiguration().getPullRequestNumber() + '/comments');
        this.sendRequest(url, { body }, 'POST');
    }
    sendRequest(url, jsonData, httpMethod = 'GET') {
        const options = {
            headers: {
                'User-Agent': CiGithubBot.HTTP_USER_AGENT,
            },
            json: jsonData,
            method: httpMethod,
        };
        request(url, options)
            .on('response', (response) => {
        })
            .auth(this.getConfiguration().getUsername(), this.getConfiguration().getToken());
    }
    resolveModeByComment(comment) {
        if (-1 === comment.getBody().indexOf(CiGithubBot.COMMENT_MARKER_BEGIN)) {
            return CiGithubBot.MODE_CREATE;
        }
        else {
            return CiGithubBot.MODE_UPDATE;
        }
    }
    getHelperGitHubApi() {
        return this.helperGitHubApi;
    }
    setHelperGitHubApi(value) {
        this.helperGitHubApi = value;
        return this;
    }
    getHelperCurl() {
        return this.helperCurl;
    }
    setHelperCurl(value) {
        this.helperCurl = value;
        return this;
    }
    getConfiguration() {
        return this.configuration;
    }
    setConfiguration(value) {
        this.configuration = value;
        return this;
    }
}
CiGithubBot.COMMENT_MARKER_BEGIN = '<!-- CiGithubBot:BEGIN -->';
CiGithubBot.COMMENT_MARKER_END = '<!-- CiGithubBot:END -->';
CiGithubBot.TEMPLATE_POWERED_BY = '<div>Powered by Ci-GitHub-Bot ' +
    '<a href="https://github.com/clickalicious/ci-github-bot/" target="_blank"><img' +
    ' src="https://image.flaticon.com/icons/png/32/34/34429.png"' +
    ' /></a></div>';
CiGithubBot.MODE_CREATE = 0;
CiGithubBot.MODE_UPDATE = 1;
CiGithubBot.HTTP_USER_AGENT = 'Ci-GitHub-Bot - Mozilla/5.0 ' +
    '(Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
    'Chrome/61.0.3163.100 Safari/537.36';
exports.default = CiGithubBot;
//# sourceMappingURL=cigithubbot.js.map