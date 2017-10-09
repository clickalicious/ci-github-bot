'use strict';

/* tslint:disable:function-name */
import { suite, test, describe, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert';
import { ModelGithubPullRequestComment } from './../../../../lib/model/github/pull-request/comment';

/**
 * Tests for model/github/pull-request/comment
 */
@suite class ModelGithubPullRequestCommentTest {

  /**
   * Test constructing with ConfigurationGithub
   */
  @test 'Test creating instance + handling body (set/get) ...'() {
    const body: string = '<foo>';
    const modelGithubPullRequestComment = new ModelGithubPullRequestComment();

    modelGithubPullRequestComment.setBody(body);

    assert.equal(
      modelGithubPullRequestComment.getBody(),
      body,
      'Expected body matching input',
    );
  }
}
