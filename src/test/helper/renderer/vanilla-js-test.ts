'use strict';

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
import { suite, test } from 'mocha-typescript';
import * as assert from 'assert';
import { mock, instance, when } from 'ts-mockito';
import { HelperRendererVanillaJs } from '../../../lib/helper/renderer/vanilla-js';
import { ConfigurationComment } from '../../../lib/configuration/comment';
import { ConfigurationCommentInterface } from '../../../lib/configuration/comment-interface';

/**
 * Tests for renderer/vanilla-js
 */
@suite class HelperRendererVanillaJsTest
{
  /**
   * Templates
   *
   * @type {string[]}
   */
  private static readonly templates: string[] = ['<span>${FOO}</span>'];

  /**
   * Template missing a variable
   *
   * @type {string[]}
   */
  private static readonly templatesMissingVariable: string[] = ['<span>${FOO} - ${BAR}</span>'];

  /**
   * Variables for rendering template.
   *
   * @type {object}
   */
  private static readonly variables: object = { FOO: 'BAR' };

  /**
   * Instance for testing
   *
   * @type {HelperRendererVanillaJs}
   */
  private static subject: HelperRendererVanillaJs;

  /**
   * Configuration of a comment
   *
   * @type {ConfigurationCommentInterface}
   */
  private static configurationComment: ConfigurationComment;

  /**
   * Configuration of a comment missing a variable
   *
   * @type {ConfigurationCommentInterface}
   */
  private static configurationCommentMissingVariable: ConfigurationComment;

  /**
   * Test preparation
   */
  static before() {
    HelperRendererVanillaJsTest.subject = new HelperRendererVanillaJs();
  }

  before() {
    HelperRendererVanillaJsTest.configurationComment = mock(ConfigurationComment);

    when(HelperRendererVanillaJsTest.configurationComment.getVariables()).thenReturn(
      HelperRendererVanillaJsTest.variables,
    );

    when(HelperRendererVanillaJsTest.configurationComment.getTemplates()).thenReturn(
      HelperRendererVanillaJsTest.templates,
    );

    HelperRendererVanillaJsTest.configurationCommentMissingVariable = mock(ConfigurationComment);

    when(HelperRendererVanillaJsTest.configurationCommentMissingVariable.getVariables()).thenReturn(
      HelperRendererVanillaJsTest.variables,
    );

    when(HelperRendererVanillaJsTest.configurationCommentMissingVariable.getTemplates()).thenReturn(
      HelperRendererVanillaJsTest.templatesMissingVariable,
    );
  }

  @test 'Test rendering template ...'() {

    assert.strictEqual(
      HelperRendererVanillaJsTest.subject.render(
        instance(HelperRendererVanillaJsTest.configurationComment),
      ),
      '<span>BAR</span>',
      'Expected rendered template matching',
    );
  }

  @test 'Test error on missing variable ...'() {

    const foo: ConfigurationComment = instance(
      HelperRendererVanillaJsTest.configurationCommentMissingVariable,
    );

    assert.throws(
      () => {
        const a = HelperRendererVanillaJsTest.subject.render(foo);
      },
      Error,
      'Variable "BAR" is undefined. Template could not be rendered!',
    );
  }
}
