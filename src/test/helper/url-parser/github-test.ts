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
import { HelperUrlParserGithub } from '../../../lib/helper/url-parser/github';

/**
 * Tests for helper/url-parser/github
 */
@suite class HelperUrlParserGithubTest
{
  /**
   * Scheme
   *
   * @var {string}
   */
  private static readonly scheme: string = 'https';

  /**
   * Organisation
   *
   * @type {string}
   */
  private static readonly organisation: string = 'clickalicious';

  /**
   * Repository
   *
   * @type {string}
   */
  private static readonly repository: string = 'ci-github-bot';

  /**
   * Pull Request number
   *
   * @type {number}
   */
  private static readonly pullRequestNumber: number = 1;

  /**
   * GitHub Pull Request URL
   *
   * @type {string}
   */
  private static readonly url: string = 'https://github.com/clickalicious/ci-github-bot/pull/1';

  /**
   * Invalid URL for testing error handling
   *
   * @type {string}
   */
  private static readonly urlInvalid: string= 'https://github.com/clickalicious/';

  /**
   * Instance for testing
   *
   * @type {HelperUrlParserGithub}
   */
  private static subject: HelperUrlParserGithub;

  /**
   * Test preparation
   */
  static before() {
    HelperUrlParserGithubTest.subject = new HelperUrlParserGithub(HelperUrlParserGithubTest.url);
  }

  @test 'Test retrieving URL parts from instance ...'() {

    assert.equal(
      HelperUrlParserGithubTest.subject.getUrl(),
      HelperUrlParserGithubTest.url,
      'Expected url matching input',
    );

    assert.equal(
      HelperUrlParserGithubTest.subject.getScheme(),
      HelperUrlParserGithubTest.scheme,
      'Expected scheme matching input',
    );

    assert.equal(
      HelperUrlParserGithubTest.subject.getOrganisation(),
      HelperUrlParserGithubTest.organisation,
      'Expected organisation matching input',
    );

    assert.equal(
      HelperUrlParserGithubTest.subject.getRepository(),
      HelperUrlParserGithubTest.repository,
      'Expected repository matching input',
    );

    assert.equal(
      HelperUrlParserGithubTest.subject.getPullRequestNumber(),
      HelperUrlParserGithubTest.pullRequestNumber,
      'Expected repository matching input',
    );
  }

  @test 'Test creating instance without URL ...'() {
    const subject: HelperUrlParserGithub = new HelperUrlParserGithub(HelperUrlParserGithubTest.url);

    assert.equal(
      subject.getUrl(),
      HelperUrlParserGithubTest.url,
      'Expected url matching input',
    );

    assert.equal(
      subject.getScheme(),
      HelperUrlParserGithubTest.scheme,
      'Expected scheme matching input',
    );

    assert.equal(
      subject.getOrganisation(),
      HelperUrlParserGithubTest.organisation,
      'Expected organisation matching input',
    );

    assert.equal(
      subject.getRepository(),
      HelperUrlParserGithubTest.repository,
      'Expected repository matching input',
    );

    assert.equal(
      subject.getPullRequestNumber(),
      HelperUrlParserGithubTest.pullRequestNumber,
      'Expected repository matching input',
    );
  }

  @test 'Test error on invalid URL thrown as expected ...'() {
    assert.throws(
      () => {
        const subject: HelperUrlParserGithub = new HelperUrlParserGithub(
          HelperUrlParserGithubTest.urlInvalid,
        );
      },
      Error,
      'Error resolving required data from passed URL "' +
      HelperUrlParserGithubTest.urlInvalid + '"',
    );

    assert.throws(
      () => {
        HelperUrlParserGithubTest.subject.resolveFromPullRequestUrl(
          HelperUrlParserGithubTest.urlInvalid,
        );
      },
      Error,
      'Error resolving required data from passed URL "' +
      HelperUrlParserGithubTest.urlInvalid + '"',
    );
  }

  @test 'Test resolving data from pull-request URL ...'() {

    HelperUrlParserGithubTest.subject.resolveFromPullRequestUrl(
      HelperUrlParserGithubTest.url,
    );

    assert.strictEqual(
      HelperUrlParserGithubTest.subject.getPullRequestNumber(),
      1,
      'Error resolving data from pull-request URL',
    );
  }
}
