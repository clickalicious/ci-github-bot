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
const ts_mockito_1 = require("ts-mockito");
const github_1 = require("../../../lib/helper/url-parser/github");
const github_api_1 = require("../../../lib/helper/url-builder/github-api");
const github_2 = require("../../../lib/configuration/github");
/**
 * Tests for helper/github-api
 */
let HelperUrlBuilderGithubApiTest = HelperUrlBuilderGithubApiTest_1 = class HelperUrlBuilderGithubApiTest {
    /**
     * Test preparations
     */
    static before() {
        // Preconfigured stub of HelperUrlParserGithub
        const helperUrlParserGithubStub = ts_mockito_1.mock(github_1.HelperUrlParserGithub);
        ts_mockito_1.when(helperUrlParserGithubStub.getScheme()).thenReturn('https');
        ts_mockito_1.when(helperUrlParserGithubStub.getOrganisation()).thenReturn('clickalicious');
        ts_mockito_1.when(helperUrlParserGithubStub.getRepository()).thenReturn('ci-github-bot');
        ts_mockito_1.when(helperUrlParserGithubStub.getPullRequestNumber()).thenReturn(1);
        ts_mockito_1.when(helperUrlParserGithubStub.getUrl()).thenReturn(HelperUrlBuilderGithubApiTest_1.url);
        // Preconfigured stub of ConfigurationGithub
        const configurationGithubStub = ts_mockito_1.mock(github_2.ConfigurationGithub);
        ts_mockito_1.when(configurationGithubStub.getScheme()).thenReturn('https');
        ts_mockito_1.when(configurationGithubStub.getOrganisation()).thenReturn('clickalicious');
        ts_mockito_1.when(configurationGithubStub.getRepository()).thenReturn('ci-github-bot');
        ts_mockito_1.when(configurationGithubStub.getPullRequestNumber()).thenReturn(1);
        ts_mockito_1.when(configurationGithubStub.getHost()).thenReturn('api.github.com');
        HelperUrlBuilderGithubApiTest_1.configurationGithub = ts_mockito_1.instance(configurationGithubStub);
        HelperUrlBuilderGithubApiTest_1.subject = new github_api_1.HelperUrlBuilderGithubApi(HelperUrlBuilderGithubApiTest_1.configurationGithub);
    }
    'Test resolve API URL from helper ...'() {
        assert.equal(HelperUrlBuilderGithubApiTest_1.subject.buildUrl('issues/' +
            HelperUrlBuilderGithubApiTest_1.configurationGithub.getPullRequestNumber() +
            '/comments'), 'https://api.github.com/repos/clickalicious/ci-github-bot/issues/1/comments', 'Expected API URL matching');
    }
};
/**
 * Username
 *
 * @type {string}
 */
HelperUrlBuilderGithubApiTest.username = 'Test';
/**
 * Token
 *
 * @type {string}
 */
HelperUrlBuilderGithubApiTest.token = '123456';
/**
 * GitHub Pull Request URL
 *
 * @type {string}
 */
HelperUrlBuilderGithubApiTest.url = 'https://github.com/clickalicious/ci-github-bot/pull/1';
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelperUrlBuilderGithubApiTest.prototype, "Test resolve API URL from helper ...", null);
HelperUrlBuilderGithubApiTest = HelperUrlBuilderGithubApiTest_1 = __decorate([
    mocha_typescript_1.suite
], HelperUrlBuilderGithubApiTest);
var HelperUrlBuilderGithubApiTest_1;
