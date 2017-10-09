'use strict';

/* tslint:disable:function-name */
import { suite, test, describe, slow, timeout } from 'mocha-typescript';
import * as assert from 'assert';
import { ConfigurationGithub } from './../../lib/configuration/github';

/**
 * Tests for configuration/github
 */
@suite class ConfigurationGithubTest {

  /**
   * Test constructing with template & variables
   */
  @test 'Test creating instance with username & token ...'() {
    const username: string = 'Test';
    const token: string = '123456';

    const configurationGithub = new ConfigurationGithub(
      username,
      token,
    );

    assert.equal(configurationGithub.getUsername(), username, 'Expected username ' +
      'matching input');

    assert.equal(configurationGithub.getToken(), token, 'Expected token ' +
      'matching input');
  }

  /**
   * Test API host
   */
  @test 'Test API host ...'() {
    const username: string = 'Test';
    const token: string = '123456';
    const host: string = 'api.github.com';

    const configurationGithub = new ConfigurationGithub(
      username,
      token,
    );

    assert.equal(configurationGithub.getHost(), host, 'Expected API host ' +
      'matching input');
  }

  /**
   * Test loading configuration form a GitHub URL
   */
  @test 'Test loading configuration form a GitHub URL ...'() {
    const username: string = 'Test';
    const token: string = '123456';
    const url: string = 'https://github.com/clickalicious/ci-github-bot/pull/1';

    const scheme: string = 'https';
    const organisation = 'clickalicious';
    const repository = 'ci-github-bot';
    const pullRequestNumber = 1;

    const configurationGithub = new ConfigurationGithub(
      username,
      token,
    );

    configurationGithub.loadFromPullRequestUrl(url);

    assert.equal(configurationGithub.getScheme(), scheme, 'Expected scheme ' +
      'matching input');

    assert.equal(configurationGithub.getOrganisation(), organisation, 'Expected ' +
      'organisation matching input');

    assert.equal(configurationGithub.getRepository(), repository, 'Expected ' +
      'repository matching input');

    assert.equal(configurationGithub.getPullRequestNumber(), pullRequestNumber, 'Expected ' +
      'pull request number matching input');
  }
}
