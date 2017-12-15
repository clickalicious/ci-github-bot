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
const github_1 = require("../../../lib/helper/url-parser/github");
/**
 * Tests for helper/url-parser/github
 */
let HelperUrlParserGithubTest = HelperUrlParserGithubTest_1 = class HelperUrlParserGithubTest {
    /**
     * Test preparation
     */
    static before() {
        HelperUrlParserGithubTest_1.subject = new github_1.HelperUrlParserGithub(HelperUrlParserGithubTest_1.url);
    }
    'Test retrieving URL parts from instance ...'() {
        assert.equal(HelperUrlParserGithubTest_1.subject.getUrl(), HelperUrlParserGithubTest_1.url, 'Expected url matching input');
        assert.equal(HelperUrlParserGithubTest_1.subject.getScheme(), HelperUrlParserGithubTest_1.scheme, 'Expected scheme matching input');
        assert.equal(HelperUrlParserGithubTest_1.subject.getOrganisation(), HelperUrlParserGithubTest_1.organisation, 'Expected organisation matching input');
        assert.equal(HelperUrlParserGithubTest_1.subject.getRepository(), HelperUrlParserGithubTest_1.repository, 'Expected repository matching input');
        assert.equal(HelperUrlParserGithubTest_1.subject.getPullRequestNumber(), HelperUrlParserGithubTest_1.pullRequestNumber, 'Expected repository matching input');
    }
    'Test creating instance without URL ...'() {
        const subject = new github_1.HelperUrlParserGithub(HelperUrlParserGithubTest_1.url);
        assert.equal(subject.getUrl(), HelperUrlParserGithubTest_1.url, 'Expected url matching input');
        assert.equal(subject.getScheme(), HelperUrlParserGithubTest_1.scheme, 'Expected scheme matching input');
        assert.equal(subject.getOrganisation(), HelperUrlParserGithubTest_1.organisation, 'Expected organisation matching input');
        assert.equal(subject.getRepository(), HelperUrlParserGithubTest_1.repository, 'Expected repository matching input');
        assert.equal(subject.getPullRequestNumber(), HelperUrlParserGithubTest_1.pullRequestNumber, 'Expected repository matching input');
    }
    'Test error on invalid URL thrown as expected ...'() {
        assert.throws(() => {
            const subject = new github_1.HelperUrlParserGithub(HelperUrlParserGithubTest_1.urlInvalid);
        }, Error, 'Error resolving required data from passed URL "' +
            HelperUrlParserGithubTest_1.urlInvalid + '"');
        assert.throws(() => {
            HelperUrlParserGithubTest_1.subject.resolveFromPullRequestUrl(HelperUrlParserGithubTest_1.urlInvalid);
        }, Error, 'Error resolving required data from passed URL "' +
            HelperUrlParserGithubTest_1.urlInvalid + '"');
    }
    'Test resolving data from pull-request URL ...'() {
        HelperUrlParserGithubTest_1.subject.resolveFromPullRequestUrl(HelperUrlParserGithubTest_1.url);
        assert.strictEqual(HelperUrlParserGithubTest_1.subject.getPullRequestNumber(), 1, 'Error resolving data from pull-request URL');
    }
};
/**
 * Scheme
 *
 * @var {string}
 */
HelperUrlParserGithubTest.scheme = 'https';
/**
 * Organisation
 *
 * @type {string}
 */
HelperUrlParserGithubTest.organisation = 'clickalicious';
/**
 * Repository
 *
 * @type {string}
 */
HelperUrlParserGithubTest.repository = 'ci-github-bot';
/**
 * Pull Request number
 *
 * @type {number}
 */
HelperUrlParserGithubTest.pullRequestNumber = 1;
/**
 * GitHub Pull Request URL
 *
 * @type {string}
 */
HelperUrlParserGithubTest.url = 'https://github.com/clickalicious/ci-github-bot/pull/1';
/**
 * Invalid URL for testing error handling
 *
 * @type {string}
 */
HelperUrlParserGithubTest.urlInvalid = 'https://github.com/clickalicious/';
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelperUrlParserGithubTest.prototype, "Test retrieving URL parts from instance ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelperUrlParserGithubTest.prototype, "Test creating instance without URL ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelperUrlParserGithubTest.prototype, "Test error on invalid URL thrown as expected ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelperUrlParserGithubTest.prototype, "Test resolving data from pull-request URL ...", null);
HelperUrlParserGithubTest = HelperUrlParserGithubTest_1 = __decorate([
    mocha_typescript_1.suite
], HelperUrlParserGithubTest);
var HelperUrlParserGithubTest_1;
