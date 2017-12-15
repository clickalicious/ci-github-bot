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
const di_configuration_1 = require("../lib/di-configuration");
const github_1 = require("../lib/configuration/github");
/**
 * Tests for di-configuration
 */
let DiConfigurationTest = DiConfigurationTest_1 = class DiConfigurationTest {
    'Test retrieving DIC for generic CI platforms ...'() {
        DiConfigurationTest_1.subject = new di_configuration_1.DiConfiguration(DiConfigurationTest_1.username, DiConfigurationTest_1.token, DiConfigurationTest_1.url);
        const configurationGithub = DiConfigurationTest_1.subject.getContainer().resolve('configurationGithub');
        assert.strictEqual(configurationGithub instanceof github_1.ConfigurationGithub, true);
    }
    'Test retrieving DIC for CircleCI platform ...'() {
        process.env['PR_URL'] = DiConfigurationTest_1.url;
        DiConfigurationTest_1.subject = new di_configuration_1.DiConfiguration(DiConfigurationTest_1.username, DiConfigurationTest_1.token, '', di_configuration_1.DiConfiguration.CI_PLATFORM_CIRCLECI);
        const configurationGithub = DiConfigurationTest_1.subject.getContainer().resolve('configurationGithub');
        assert.strictEqual(configurationGithub instanceof github_1.ConfigurationGithub, true);
        assert.strictEqual(DiConfigurationTest_1.subject.getContainer().resolve('pullRequestUrl'), DiConfigurationTest_1.url);
    }
};
/**
 * GitHub Pull Request URL
 *
 * @type {string}
 */
DiConfigurationTest.url = 'https://github.com/clickalicious/ci-github-bot/pull/1';
/**
 * GitHub Username
 *
 * @type {string}
 */
DiConfigurationTest.username = 'foo';
/**
 * GitHub API Token for user.
 *
 * @type {string}
 */
DiConfigurationTest.token = 'bar';
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiConfigurationTest.prototype, "Test retrieving DIC for generic CI platforms ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiConfigurationTest.prototype, "Test retrieving DIC for CircleCI platform ...", null);
DiConfigurationTest = DiConfigurationTest_1 = __decorate([
    mocha_typescript_1.suite
], DiConfigurationTest);
var DiConfigurationTest_1;
