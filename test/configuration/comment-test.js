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
const comment_1 = require("../../lib/configuration/comment");
/**
 * Tests for configuration/comment
 */
let ConfigurationCommentTest = ConfigurationCommentTest_1 = class ConfigurationCommentTest {
    /**
     * Test preparations
     */
    static before() {
        ConfigurationCommentTest_1.subject = new comment_1.ConfigurationComment();
        ConfigurationCommentTest_1.subject.setData(ConfigurationCommentTest_1.templates, ConfigurationCommentTest_1.variables);
    }
    'Test retrieving templates & variables from instance ...'() {
        assert.equal(ConfigurationCommentTest_1.subject.getTemplates(), ConfigurationCommentTest_1.templates, 'Expected templates matching input');
        assert.equal(ConfigurationCommentTest_1.subject.getVariables(), ConfigurationCommentTest_1.variables, 'Expected variables matching input');
    }
};
/**
 * Templates
 *
 * @type {[string , string]}
 */
ConfigurationCommentTest.templates = ['foo', 'bar'];
/**
 * Variables
 *
 * @type {{foo: string}}
 */
ConfigurationCommentTest.variables = { foo: 'bar' };
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigurationCommentTest.prototype, "Test retrieving templates & variables from instance ...", null);
ConfigurationCommentTest = ConfigurationCommentTest_1 = __decorate([
    mocha_typescript_1.suite
], ConfigurationCommentTest);
var ConfigurationCommentTest_1;
