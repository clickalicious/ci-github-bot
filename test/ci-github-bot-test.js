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
const ci_github_bot_1 = require("../lib/ci-github-bot");
const github_1 = require("../lib/configuration/github");
const vanilla_js_1 = require("../lib/helper/request/vanilla-js");
const github_api_1 = require("../lib/helper/url-builder/github-api");
const vanilla_js_2 = require("../lib/helper/renderer/vanilla-js");
const comment_1 = require("../lib/configuration/comment");
/**
 * Tests for ci-github-bot
 */
let CiGithubBotTest = CiGithubBotTest_1 = class CiGithubBotTest {
    /**
     * Test preparations
     */
    static before() {
        // Preconfigured stub of ConfigurationGithub
        const configurationGithubStub = ts_mockito_1.mock(github_1.ConfigurationGithub);
        ts_mockito_1.when(configurationGithubStub.getUsername()).thenReturn('foo');
        ts_mockito_1.when(configurationGithubStub.getToken()).thenReturn('bar');
        ts_mockito_1.when(configurationGithubStub.getPullRequestNumber()).thenReturn(1);
        CiGithubBotTest_1.configurationGithub = ts_mockito_1.instance(configurationGithubStub);
        // Preconfigured stub of ConfigurationGithub
        const configurationGithubInvalidStub = ts_mockito_1.mock(github_1.ConfigurationGithub);
        ts_mockito_1.when(configurationGithubInvalidStub.getUsername()).thenReturn('foo');
        ts_mockito_1.when(configurationGithubInvalidStub.getToken()).thenReturn('bar');
        CiGithubBotTest_1.configurationGithubInvalid = ts_mockito_1.instance(configurationGithubInvalidStub);
        // Preconfigured stub of HelperRequestVanillaJs
        const helperRequestVanillaJsStub = ts_mockito_1.mock(vanilla_js_1.HelperRequestVanillaJs);
        CiGithubBotTest_1.helperRequestVanillaJs = ts_mockito_1.instance(helperRequestVanillaJsStub);
        // Preconfigured stub of HelperRequestVanillaJs
        const helperUrlBuilderGithubStub = ts_mockito_1.mock(github_api_1.HelperUrlBuilderGithubApi);
        CiGithubBotTest_1.helperUrlBuilderGithubApi = ts_mockito_1.instance(helperUrlBuilderGithubStub);
        // Preconfigured comment template
        const configurationCommentStub = ts_mockito_1.mock(comment_1.ConfigurationComment);
        ts_mockito_1.when(configurationCommentStub.getTemplates()).thenReturn(['foo']);
        ts_mockito_1.when(configurationCommentStub.getVariables()).thenReturn({ foo: 'bar' });
        CiGithubBotTest_1.configurationComment = ts_mockito_1.instance(configurationCommentStub);
        // Preconfigured stub of HelperRendererVanillaJs
        const helperRendererVanillaJsStub = ts_mockito_1.mock(vanilla_js_2.HelperRendererVanillaJs);
        ts_mockito_1.when(helperRendererVanillaJsStub.render(CiGithubBotTest_1.configurationComment)).thenReturn('foo');
        CiGithubBotTest_1.helperRendererVanillaJs = ts_mockito_1.instance(helperRendererVanillaJsStub);
    }
    'Test sending a comment to GitHub with bot ...'() {
        // Create instance of Bot
        CiGithubBotTest_1.subject = new ci_github_bot_1.CiGithubBot(CiGithubBotTest_1.configurationGithub, CiGithubBotTest_1.helperRequestVanillaJs, CiGithubBotTest_1.helperUrlBuilderGithubApi, CiGithubBotTest_1.helperRendererVanillaJs);
        CiGithubBotTest_1.subject.createComment(CiGithubBotTest_1.configurationComment);
    }
    'Test fail on missing pull request number ...'() {
        // Create instance of Bot
        CiGithubBotTest_1.subject = new ci_github_bot_1.CiGithubBot(CiGithubBotTest_1.configurationGithubInvalid, CiGithubBotTest_1.helperRequestVanillaJs, CiGithubBotTest_1.helperUrlBuilderGithubApi, CiGithubBotTest_1.helperRendererVanillaJs);
        // Mutation: Assert that Pull request is null for testing error condition
        assert.strictEqual(CiGithubBotTest_1.configurationGithubInvalid.getPullRequestNumber(), null);
        // Assert throws error on
        assert.throws(() => {
            CiGithubBotTest_1.subject.createComment(CiGithubBotTest_1.configurationComment);
        }, Error, 'Failed creating pull request comment: You need to configure the number of the ' +
            'pull request before creating a comment.');
    }
};
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CiGithubBotTest.prototype, "Test sending a comment to GitHub with bot ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CiGithubBotTest.prototype, "Test fail on missing pull request number ...", null);
CiGithubBotTest = CiGithubBotTest_1 = __decorate([
    mocha_typescript_1.suite
], CiGithubBotTest);
var CiGithubBotTest_1;
