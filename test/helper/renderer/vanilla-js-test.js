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
const vanilla_js_1 = require("../../../lib/helper/renderer/vanilla-js");
const comment_1 = require("../../../lib/configuration/comment");
/**
 * Tests for renderer/vanilla-js
 */
let HelperRendererVanillaJsTest = HelperRendererVanillaJsTest_1 = class HelperRendererVanillaJsTest {
    /**
     * Test preparation
     */
    static before() {
        HelperRendererVanillaJsTest_1.subject = new vanilla_js_1.HelperRendererVanillaJs();
    }
    before() {
        HelperRendererVanillaJsTest_1.configurationComment = ts_mockito_1.mock(comment_1.ConfigurationComment);
        ts_mockito_1.when(HelperRendererVanillaJsTest_1.configurationComment.getVariables()).thenReturn(HelperRendererVanillaJsTest_1.variables);
        ts_mockito_1.when(HelperRendererVanillaJsTest_1.configurationComment.getTemplates()).thenReturn(HelperRendererVanillaJsTest_1.templates);
        HelperRendererVanillaJsTest_1.configurationCommentMissingVariable = ts_mockito_1.mock(comment_1.ConfigurationComment);
        ts_mockito_1.when(HelperRendererVanillaJsTest_1.configurationCommentMissingVariable.getVariables()).thenReturn(HelperRendererVanillaJsTest_1.variables);
        ts_mockito_1.when(HelperRendererVanillaJsTest_1.configurationCommentMissingVariable.getTemplates()).thenReturn(HelperRendererVanillaJsTest_1.templatesMissingVariable);
    }
    'Test rendering template ...'() {
        assert.strictEqual(HelperRendererVanillaJsTest_1.subject.render(ts_mockito_1.instance(HelperRendererVanillaJsTest_1.configurationComment)), '<span>BAR</span>', 'Expected rendered template matching');
    }
    'Test error on missing variable ...'() {
        const foo = ts_mockito_1.instance(HelperRendererVanillaJsTest_1.configurationCommentMissingVariable);
        assert.throws(() => {
            const a = HelperRendererVanillaJsTest_1.subject.render(foo);
        }, Error, 'Variable "BAR" is undefined. Template could not be rendered!');
    }
};
/**
 * Templates
 *
 * @type {string[]}
 */
HelperRendererVanillaJsTest.templates = ['<span>${FOO}</span>'];
/**
 * Template missing a variable
 *
 * @type {string[]}
 */
HelperRendererVanillaJsTest.templatesMissingVariable = ['<span>${FOO} - ${BAR}</span>'];
/**
 * Variables for rendering template.
 *
 * @type {object}
 */
HelperRendererVanillaJsTest.variables = { FOO: 'BAR' };
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelperRendererVanillaJsTest.prototype, "Test rendering template ...", null);
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelperRendererVanillaJsTest.prototype, "Test error on missing variable ...", null);
HelperRendererVanillaJsTest = HelperRendererVanillaJsTest_1 = __decorate([
    mocha_typescript_1.suite
], HelperRendererVanillaJsTest);
var HelperRendererVanillaJsTest_1;
