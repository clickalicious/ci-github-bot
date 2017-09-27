'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ParserUrlGitHub {
    constructor(url) {
        this
            .setUrl(url)
            .parse();
    }
    parse() {
        const urlParts = this.getUrl().split('/');
        if (7 !== urlParts.length || true === isNaN(parseInt(urlParts[6], 10))) {
            throw new Error('Error resolving required data from passed URL "' + this.getUrl() + '"');
        }
        this
            .setScheme(urlParts[0].replace(':', ''))
            .setOrganisation(urlParts[3])
            .setRepository(urlParts[4])
            .setPullRequestNumber(parseInt(urlParts[6], 10));
    }
    getUrl() {
        return this.url;
    }
    setUrl(value) {
        this.url = value;
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
}
exports.default = ParserUrlGitHub;
//# sourceMappingURL=git-hub.js.map