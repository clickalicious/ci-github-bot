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
/* tslint:disable:function-name no-unused-variable no-unused-locals */
const mocha_typescript_1 = require("mocha-typescript");
const ts_mockito_1 = require("ts-mockito");
const vanilla_js_1 = require("../../../lib/helper/request/vanilla-js");
const github_1 = require("../../../lib/configuration/github");
const nock = require("nock");
/**
 * Tests for renderer/vanilla-js
 */
let HelperRequestVanillaJsTest = HelperRequestVanillaJsTest_1 = class HelperRequestVanillaJsTest {
    /**
     * Test preparation
     */
    static before() {
        // Mock GitHub API
        const body = {
            statusMessage: 'WAT?',
        };
        nock(HelperRequestVanillaJsTest_1.apiProtocol + '://' +
            HelperRequestVanillaJsTest_1.apiHost).post(HelperRequestVanillaJsTest_1.apiRoute).reply(201, body);
        // Preconfigured stub of ConfigurationGithub
        const configurationGithubStub = ts_mockito_1.mock(github_1.ConfigurationGithub);
        ts_mockito_1.when(configurationGithubStub.getUsername()).thenReturn('foo');
        ts_mockito_1.when(configurationGithubStub.getToken()).thenReturn('bar');
        HelperRequestVanillaJsTest_1.configurationGithub = ts_mockito_1.instance(configurationGithubStub);
        HelperRequestVanillaJsTest_1.subject = new vanilla_js_1.HelperRequestVanillaJs(HelperRequestVanillaJsTest_1.configurationGithub);
    }
    'Test successful API call (via stub) ...'() {
        const body = 'some dummy body of a comment';
        const url = HelperRequestVanillaJsTest_1.apiProtocol + '://' +
            HelperRequestVanillaJsTest_1.apiHost + HelperRequestVanillaJsTest_1.apiRoute;
        // Send request and receive Promise in return
        return HelperRequestVanillaJsTest_1.subject.send(url, { body }, 'POST');
    }
    'Test unsuccessful API call (via stub) ...'(done) {
        HelperRequestVanillaJsTest_1.subject.send('http://127.0.0.1:12345/', {}, 'POST').catch(() => {
            done();
        });
    }
};
/**
 * Api Protocol used for constructing URLs
 *
 * @type {string}
 */
HelperRequestVanillaJsTest.apiProtocol = 'https';
/**
 * API Host for testing
 *
 * @type {string}
 */
HelperRequestVanillaJsTest.apiHost = 'api.github.com';
/**
 * Dummy route for API mock with nock
 *
 * @type {string}
 */
HelperRequestVanillaJsTest.apiRoute = '/repos/PubTrans/docker-cache/issues/4/comments';
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelperRequestVanillaJsTest.prototype, "Test successful API call (via stub) ...", null);
__decorate([
    mocha_typescript_1.test(mocha_typescript_1.timeout(20000)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HelperRequestVanillaJsTest.prototype, "Test unsuccessful API call (via stub) ...", null);
HelperRequestVanillaJsTest = HelperRequestVanillaJsTest_1 = __decorate([
    mocha_typescript_1.suite
], HelperRequestVanillaJsTest);
var HelperRequestVanillaJsTest_1;
