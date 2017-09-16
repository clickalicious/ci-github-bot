'use strict';

/**
 * ci-gitHub-bot
 * GitHub communication bot for CI/CD workflow.
 *
 * Bridge between CI-server like "CircleCI" or "Travis CI" or similar and ci-github-bot.
 * Takes ENVIRONMENT variables and pass them as JSON configuration to ci-github-bot instance.
 *
 * MIT License
 * *
 * @copyright 2017 clickalicious, Benjamin Carl
 */

import {CiGithubBot} from "./cigithubbot";

//export GB_BUILD_NUMBER="502"
//export GB_BUILD_URL="https://www.google.de/"
//export GB_GITHUB_ORGANISATION="PubTrans"
//export GB_PULL_REQUEST="https://github.com/PubTrans/docker-cache/pull/4"
//export GB_COMMIT_HASH="663e27035895bf6967000ca0ea7fca7ca8520427"
//export GB_REPONAME="docker-cache"
//export GB_GITHUB_TOKEN="df380202c8ad7c224c186959ad46a4a074ff48fa"
//export GB_GITHUB_USERNAME="PubTrans-io"
//export GB_ENABLED="1"
//export STAGE_URL="https://preis24.de"
//export STAGE_TEXT="Aloha Mahe"

//let GithubBot = require('./githubbot');
let rc = new CiGithubBot();
rc.bar();

/*
const GithubBot = require("github-bot").create({
  bot: {
    username: 'PubTrans-io',
    token: 'df380202c8ad7c224c186959ad46a4a074ff48fa'
  },
  origin: {
    username: 'PubTrans',
    repository: 'docker-cache'
  },
  pr: {
    url: 'https://github.com/PubTrans/docker-cache/pull/4'
  }
});

//process.env.STAGE_URL encodeURIComponent(process.env.STAGE_TEXT)
// Create review comment on PR which requires approval
GithubBot.createReviewComment({
  stageUrl: 'https://preis24.de',
  stageText: 'Aloha Ben',
  buildNumber: 502,
  buildUrl: 'https://www.google.de/',
  template: 'Aloha'
});
*/
