'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
/* tslint:disable:function-name */
const mocha_typescript_1 = require("mocha-typescript");
const assert = require("assert");
const github_1 = require("../../lib/configuration/github");
const github_2 = require("../../lib/helper/url-parser/github");
/**
 * Tests for configuration/github
 */
let ConfigurationGithubTest = ConfigurationGithubTest_1 = class ConfigurationGithubTest {
    /**
     * Test preparation
     */
    static before() {
        const helperUrlParserGithub = new github_2.HelperUrlParserGithub(this.urlHttp);
        ConfigurationGithubTest_1.subject = new github_1.ConfigurationGithub(helperUrlParserGithub, ConfigurationGithubTest_1.username, ConfigurationGithubTest_1.token);
    }
    'Test getting username & token ...'() {
        assert.equal(ConfigurationGithubTest_1.subject.getUsername(), ConfigurationGithubTest_1.username, 'Expected username matching input');
        assert.equal(ConfigurationGithubTest_1.subject.getToken(), ConfigurationGithubTest_1.token, 'Expected token matching input');
    }
    'Test setting and getting API host ...'() {
        assert.equal(ConfigurationGithubTest_1.subject.getHost(), ConfigurationGithubTest_1.hostDefault, 'Expected API host matching default');
        assert.equal(ConfigurationGithubTest_1.subject.setHost(ConfigurationGithubTest_1.host).getHost(), ConfigurationGithubTest_1.host, 'Expected API host matching input');
    }
    'Test getting "organisation" ...'() {
        assert.equal(ConfigurationGithubTest_1.subject.getOrganisation(), ConfigurationGithubTest_1.organisationDefault, 'Expected "organisation" matching default');
    }
    'Test getting "repository" ...'() {
        assert.equal(ConfigurationGithubTest_1.subject.getRepository(), ConfigurationGithubTest_1.repositoryDefault, 'Expected "repository" matching default');
    }
    'Test getting "pull-request-number" ...'() {
        assert.equal(ConfigurationGithubTest_1.subject.getPullRequestNumber(), ConfigurationGithubTest_1.pullRequestNumberDefault, 'Expected "pull-request-number" matching default');
    }
    'Test getting "scheme" ...'() {
        assert.equal(ConfigurationGithubTest_1.subject.getScheme(), ConfigurationGithubTest_1.schemeDefault, 'Expected "scheme" matching default');
    }
};
/**
 * GitHub username
 *
 * @type {string}
 */
ConfigurationGithubTest.username = 'Test';
/**
 * GitHub password/token
 *
 * @type {string}
 */
ConfigurationGithubTest.token = '123456';
/**
 * GitHub URL scheme for SSL connections
 *
 * @type {string}
 */
ConfigurationGithubTest.schemeHttps = 'https';
/**
 * GitHub URL scheme for non-SSL connections
 *
 * @type {string}
 */
ConfigurationGithubTest.schemeHttp = 'http';
/**
 * GitHub organisation
 *
 * @type {string}
 */
ConfigurationGithubTest.organisation = 'clickalicious';
/**
 * GitHub Repository
 *
 * @type {string}
 */
ConfigurationGithubTest.repository = 'ci-github-bot';
/**
 * GitHub Pull Request number
 *
 * @type {number}
 */
ConfigurationGithubTest.pullRequestNumber = 1;
/**
 * GitHub default API hostname
 *
 * @type {string}
 */
ConfigurationGithubTest.hostDefault = 'api.github.com';
ConfigurationGithubTest.organisationDefault = 'clickalicious';
ConfigurationGithubTest.repositoryDefault = 'ci-github-bot';
ConfigurationGithubTest.pullRequestNumberDefault = 1;
ConfigurationGithubTest.schemeDefault = 'http';
/**
 * GitHub alternative API hostname
 *
 * @type {string}
 */
ConfigurationGithubTest.host = 'example.github.com';
/**
 * GitHub Pull Request URL.
 *
 * @type {string}
 */
ConfigurationGithubTest.urlHttps = 'https://github.com/clickalicious/ci-github-bot/pull/1';
/**
 * GitHub Pull Request URL.
 *
 * @type {string}
 */
ConfigurationGithubTest.urlHttp = 'http://github.com/clickalicious/ci-github-bot/pull/1';
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigurationGithubTest.prototype, "Test getting username & token ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigurationGithubTest.prototype, "Test setting and getting API host ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigurationGithubTest.prototype, "Test getting \"organisation\" ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigurationGithubTest.prototype, "Test getting \"repository\" ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigurationGithubTest.prototype, "Test getting \"pull-request-number\" ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigurationGithubTest.prototype, "Test getting \"scheme\" ...", null);
ConfigurationGithubTest = ConfigurationGithubTest_1 = __decorate([
    mocha_typescript_1.suite
], ConfigurationGithubTest);
var ConfigurationGithubTest_1;
