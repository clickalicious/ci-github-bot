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
import { DiConfiguration } from '../lib/di-configuration';
import { ConfigurationGithub } from '../lib/configuration/github';

/**
 * Tests for di-configuration
 */
@suite class DiConfigurationTest {
  /**
   * Subject
   *
   * @type {DiConfiguration}
   */
  private static subject: DiConfiguration;

  /**
   * GitHub Pull Request URL
   *
   * @type {string}
   */
  private static readonly url: string = 'https://github.com/clickalicious/ci-github-bot/pull/1';

  /**
   * GitHub Username
   *
   * @type {string}
   */
  private static readonly username: string = 'foo';

  /**
   * GitHub API Token for user.
   *
   * @type {string}
   */
  private static readonly token: string = 'bar';

  @test 'Test retrieving DIC for generic CI platforms ...'() {

    DiConfigurationTest.subject = new DiConfiguration(
      DiConfigurationTest.username,
      DiConfigurationTest.token,
      DiConfigurationTest.url,
    );

    const configurationGithub = DiConfigurationTest.subject.getContainer().resolve(
      'configurationGithub',
    );

    assert.strictEqual(
      configurationGithub instanceof ConfigurationGithub,
      true,
    );
  }

  @test 'Test retrieving DIC for CircleCI platform ...'() {

    process.env['PR_URL'] = DiConfigurationTest.url;

    DiConfigurationTest.subject = new DiConfiguration(
      DiConfigurationTest.username,
      DiConfigurationTest.token,
      '',
      DiConfiguration.CI_PLATFORM_CIRCLECI,
    );

    const configurationGithub = DiConfigurationTest.subject.getContainer().resolve(
      'configurationGithub',
    );

    assert.strictEqual(
      configurationGithub instanceof ConfigurationGithub,
      true,
    );

    assert.strictEqual(
      DiConfigurationTest.subject.getContainer().resolve('pullRequestUrl'),
      DiConfigurationTest.url,
    );
  }
}
