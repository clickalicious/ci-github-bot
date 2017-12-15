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
import { ConfigurationComment } from '../../lib/configuration/comment';

/**
 * Tests for configuration/comment
 */
@suite class ConfigurationCommentTest
{
  /**
   * Templates
   *
   * @type {[string , string]}
   */
  private static readonly templates: string[] = ['foo', 'bar'];

  /**
   * Variables
   *
   * @type {{foo: string}}
   */
  private static readonly variables: {} = { foo: 'bar' };

  /**
   * Subject
   *
   * @type {ConfigurationComment}
   */
  private static subject: ConfigurationComment;

  /**
   * Test preparations
   */
  static before() {
    ConfigurationCommentTest.subject = new ConfigurationComment();
    ConfigurationCommentTest.subject.setData(
      ConfigurationCommentTest.templates,
      ConfigurationCommentTest.variables,
    );
  }

  @test 'Test retrieving templates & variables from instance ...'() {

    assert.equal(
      ConfigurationCommentTest.subject.getTemplates(),
      ConfigurationCommentTest.templates,
      'Expected templates matching input',
    );

    assert.equal(
      ConfigurationCommentTest.subject.getVariables(),
      ConfigurationCommentTest.variables,
      'Expected variables matching input',
    );
  }
}
