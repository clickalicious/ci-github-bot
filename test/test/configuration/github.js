'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:function-name */
const mocha_typescript_1 = require("mocha-typescript");
const assert = require("assert");
const github_1 = require("./../../lib/configuration/github");
/**
 * Tests for configuration/github
 */
let ConfigurationGithubTest = class ConfigurationGithubTest {
    /**
     * Test constructing with template & variables
     */
    'Test creating instance with username & token ...'() {
        const username = 'Test';
        const token = '123456';
        const configurationGithub = new github_1.ConfigurationGithub(username, token);
        assert.equal(configurationGithub.getUsername(), username, 'Expected username ' +
            'matching input');
        assert.equal(configurationGithub.getToken(), token, 'Expected token ' +
            'matching input');
    }
    /**
     * Test API host
     */
    'Test API host ...'() {
        const username = 'Test';
        const token = '123456';
        const host = 'api.github.com';
        const configurationGithub = new github_1.ConfigurationGithub(username, token);
        assert.equal(configurationGithub.getHost(), host, 'Expected API host ' +
            'matching input');
    }
    /**
     * Test loading configuration form a GitHub URL
     */
    'Test loading configuration form a GitHub URL ...'() {
        const username = 'Test';
        const token = '123456';
        const url = 'https://github.com/clickalicious/ci-github-bot/pull/1';
        const scheme = 'https';
        const organisation = 'clickalicious';
        const repository = 'ci-github-bot';
        const pullRequestNumber = 1;
        const configurationGithub = new github_1.ConfigurationGithub(username, token);
        configurationGithub.loadFromPullRequestUrl(url);
        assert.equal(configurationGithub.getScheme(), scheme, 'Expected scheme ' +
            'matching input');
        assert.equal(configurationGithub.getOrganisation(), organisation, 'Expected ' +
            'organisation matching input');
        assert.equal(configurationGithub.getRepository(), repository, 'Expected ' +
            'repository matching input');
        assert.equal(configurationGithub.getPullRequestNumber(), pullRequestNumber, 'Expected ' +
            'pull request number matching input');
    }
};
__decorate([
    mocha_typescript_1.test
], ConfigurationGithubTest.prototype, "Test creating instance with username & token ...", null);
__decorate([
    mocha_typescript_1.test
], ConfigurationGithubTest.prototype, "Test API host ...", null);
__decorate([
    mocha_typescript_1.test
], ConfigurationGithubTest.prototype, "Test loading configuration form a GitHub URL ...", null);
ConfigurationGithubTest = __decorate([
    mocha_typescript_1.suite
], ConfigurationGithubTest);
