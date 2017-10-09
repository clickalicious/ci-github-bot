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
const comment_1 = require("./../../lib/configuration/comment");
/**
 * Tests for configuration/comment
 */
let ConfigurationCommentTest = class ConfigurationCommentTest {
    /**
     * Test constructing with template & variables
     */
    'Test creating instance with templates & variables ...'() {
        const templates = ['foo', 'bar'];
        const variables = { foo: 'bar' };
        const configurationComment = new comment_1.ConfigurationComment(templates, variables);
        assert.equal(configurationComment.getTemplates(), templates, 'Expected templates ' +
            'matching input');
        assert.equal(configurationComment.getVariables(), variables, 'Expected variables ' +
            'matching input');
    }
};
__decorate([
    mocha_typescript_1.test
], ConfigurationCommentTest.prototype, "Test creating instance with templates & variables ...", null);
ConfigurationCommentTest = __decorate([
    mocha_typescript_1.suite
], ConfigurationCommentTest);
