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
const github_api_1 = require("./../../lib/helper/github-api");
const github_1 = require("./../../lib/configuration/github");
/**
 * Tests for helper/github-api
 */
let HelperGithubApiTest = class HelperGithubApiTest {
    /**
     * Test constructing with ConfigurationGithub
     */
    'Test creating instance with ConfigurationGithub ...'() {
        const username = 'Test';
        const token = '123456';
        const configurationGithub = new github_1.ConfigurationGithub(username, token);
        const helperGithubApi = new github_api_1.HelperGithubApi(configurationGithub);
    }
    'Test resolve API URL from helper ...'() {
        const username = 'Test';
        const token = '123456';
        const url = 'https://github.com/clickalicious/ci-github-bot/pull/1';
        const apiUrl = 'https://api.github.com/repos/clickalicious/ci-github-bot/issues/1/' +
            'comments';
        const configurationGithub = new github_1.ConfigurationGithub(username, token);
        configurationGithub.loadFromPullRequestUrl(url);
        const helperGithubApi = new github_api_1.HelperGithubApi(configurationGithub);
        assert.equal(helperGithubApi.getApiUrl('issues/' + configurationGithub.getPullRequestNumber() + '/comments'), apiUrl, 'Expected API URL matching input');
    }
};
__decorate([
    mocha_typescript_1.test
], HelperGithubApiTest.prototype, "Test creating instance with ConfigurationGithub ...", null);
__decorate([
    mocha_typescript_1.test
], HelperGithubApiTest.prototype, "Test resolve API URL from helper ...", null);
HelperGithubApiTest = __decorate([
    mocha_typescript_1.suite
], HelperGithubApiTest);
