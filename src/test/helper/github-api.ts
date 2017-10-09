'use strict';

/* tslint:disable:function-name */
import { suite, test, describe, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert';
import { HelperGithubApi } from './../../lib/helper/github-api';
import { ConfigurationGithub } from './../../lib/configuration/github';

/**
 * Tests for helper/github-api
 */
@suite class HelperGithubApiTest {

  /**
   * Test constructing with ConfigurationGithub
   */
  @test 'Test creating instance with ConfigurationGithub ...'() {
    const username: string = 'Test';
    const token: string = '123456';

    const configurationGithub = new ConfigurationGithub(
      username,
      token,
    );

    const helperGithubApi = new HelperGithubApi(configurationGithub);
  }

  @test 'Test resolve API URL from helper ...'() {
    const username: string = 'Test';
    const token: string = '123456';
    const url: string = 'https://github.com/clickalicious/ci-github-bot/pull/1';
    const apiUrl: string = 'https://api.github.com/repos/clickalicious/ci-github-bot/issues/1/' +
      'comments';

    const configurationGithub = new ConfigurationGithub(
      username,
      token,
    );

    configurationGithub.loadFromPullRequestUrl(url);

    const helperGithubApi = new HelperGithubApi(
      configurationGithub,
    );

    assert.equal(
      helperGithubApi.getApiUrl(
        'issues/' + configurationGithub.getPullRequestNumber() + '/comments',
      ),
      apiUrl,
      'Expected API URL matching input',
    );
  }
}
