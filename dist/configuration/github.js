'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const git_hub_1 = require("./../parser/url/git-hub");
class ConfigurationGitHub {
    constructor(username, token) {
        this.host = 'api.github.com';
        this
            .setUsername(username)
            .setToken(token);
    }
    load(organisation, repository, pullRequestNumber = null, scheme = 'https') {
        this
            .setOrganisation(organisation)
            .setRepository(repository)
            .setPullRequestNumber(pullRequestNumber)
            .setScheme(scheme);
    }
    loadFromPullRequestUrl(pullRequestUrl) {
        const urlParser = new git_hub_1.default(pullRequestUrl);
        this.load(urlParser.getOrganisation(), urlParser.getRepository(), urlParser.getPullRequestNumber(), urlParser.getScheme());
    }
    getUsername() {
        return this.username;
    }
    setUsername(value) {
        this.username = value;
        return this;
    }
    getToken() {
        return this.token;
    }
    setToken(value) {
        this.token = value;
        return this;
    }
    getOrganisation() {
        return this.organisation;
    }
    setOrganisation(value) {
        this.organisation = value;
        return this;
    }
    getRepository() {
        return this.repository;
    }
    setRepository(value) {
        this.repository = value;
        return this;
    }
    getPullRequestNumber() {
        return this.pullRequestNumber;
    }
    setPullRequestNumber(value) {
        this.pullRequestNumber = value;
        return this;
    }
    getScheme() {
        return this.scheme;
    }
    setScheme(value) {
        this.scheme = value;
        return this;
    }
    getHost() {
        return this.host;
    }
    setHost(value) {
        this.host = value;
        return this;
    }
}
exports.default = ConfigurationGitHub;
//# sourceMappingURL=github.js.map