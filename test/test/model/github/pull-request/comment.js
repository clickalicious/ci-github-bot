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
const comment_1 = require("./../../../../lib/model/github/pull-request/comment");
/**
 * Tests for model/github/pull-request/comment
 */
let ModelGithubPullRequestCommentTest = class ModelGithubPullRequestCommentTest {
    /**
     * Test constructing with ConfigurationGithub
     */
    'Test creating instance + handling body (set/get) ...'() {
        const body = '<foo>';
        const modelGithubPullRequestComment = new comment_1.ModelGithubPullRequestComment();
        modelGithubPullRequestComment.setBody(body);
        assert.equal(modelGithubPullRequestComment.getBody(), body, 'Expected body matching input');
    }
};
__decorate([
    mocha_typescript_1.test
], ModelGithubPullRequestCommentTest.prototype, "Test creating instance + handling body (set/get) ...", null);
ModelGithubPullRequestCommentTest = __decorate([
    mocha_typescript_1.suite
], ModelGithubPullRequestCommentTest);
