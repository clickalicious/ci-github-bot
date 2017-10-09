'use strict';

/* tslint:disable:function-name */
import { suite, test, describe, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert';
import { ConfigurationComment } from './../../lib/configuration/comment';

/**
 * Tests for configuration/comment
 */
@suite class ConfigurationCommentTest {

  /**
   * Test constructing with template & variables
   */
  @test 'Test creating instance with templates & variables ...'() {
    const templates: string[] = ['foo', 'bar'];
    const variables: {} = { foo: 'bar' };

    const configurationComment = new ConfigurationComment(
      templates,
      variables,
    );

    assert.equal(configurationComment.getTemplates(), templates, 'Expected templates ' +
      'matching input');

    assert.equal(configurationComment.getVariables(), variables, 'Expected variables ' +
      'matching input');
  }
}
