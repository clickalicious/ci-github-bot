<img src="https://avatars0.githubusercontent.com/u/26927954?v=3&s=80" align="right" />

---

![Logo of ci-github-bot](docs/logo-large.png)

**GitHub** communication bot for `CI/CD` workflows.

| [![npm](https://img.shields.io/npm/v/@clickalicious/ci-github-bot.svg)](https://www.npmjs.com/@clickalicious/ci-github-bot) 	| [![Codacy branch grade](https://img.shields.io/codacy/grade/c73c519d18dd4d6ca703271b4d5faccf/master.svg)](https://www.codacy.com/app/clickalicious/ci-github-bot?utm_source=github.com&utm_medium=referral&utm_content=clickalicious/ci-github-bot&utm_campaign=Badge_Grade) 	| [![Build Status](https://travis-ci.org/clickalicious/ci-github-bot.svg?branch=master)](https://travis-ci.org/clickalicious/ci-github-bot) 	| [![clickalicious open source](https://img.shields.io/badge/clickalicious-open--source-green.svg?style=flat)](https://clickalicious.de/) 	|
|---	|---	|---	|---	|
| [![GitHub release](https://img.shields.io/github/release/clickalicious/ci-github-bot.svg?style=flat)](https://github.com/clickalicious/ci-github-bot/releases) 	| [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)  	| [![Issue Stats](https://img.shields.io/issuestats/i/github/clickalicious/ci-github-bot.svg)](https://github.com/clickalicious/ci-github-bot/issues) 	| [![Dependency Status](https://dependencyci.com/github/clickalicious/ci-github-bot/badge)](https://dependencyci.com/github/clickalicious/ci-github-bot)  	|


## Table of Contents

- [Features](#features)
- [Philosophy](#philosophy)
- [Example](#example)
- [Requirements](#requirements)
- [Versioning](#versioning)
- [Roadmap](#roadmap)
- [Security-Issues](#security-issues)
- [License »](LICENSE)


## Features

 - Publish comments to a `GitHub` Pull Request by a simple method call
 - Comments rendered with `PUG` templating engine
 - Written in `TypeScript` and transpiled to `JavaScript` with help of `Grunt`
 - High-Quality npm package - clean & well documented code


## Philosophy

If you've ever used [`Heroku® Review Apps`](https://devcenter.heroku.com/articles/github-integration-review-apps "Heroku Review Apps") and want to implement something similar for your build process then you will probably reach some point where things getting complex (like I did :). You will need to take a bunch of information and before to be able to comment on a Pull Request. This is the step which `ci-github-bot` claims to simplify. With its abstraction on `GitHub`'s comment API its easy to publish the comment to the Pull Request on GitHub. 

Beside it's wrapping functionality `ci-github-bot` provides a bridge for the `CircleCI` build-system. You just need to put in an username, a token. The Pull-Request URL is taken from environment variables at `CircleCI`. After this step you are able to communicate with Github. From now on you can publish comments to Pull Requests at GitHub. Sounds simple? It is that simple. Let's have a look at the examples ...


## Example

We ship `ci-github-bot` with a simple bridge for passing configuration from `CircleCI` environment variables (ENV/.env) automagically to `ci-github-bot` - so the only thing left is passing username and token when creating a bot instance - the `GitHub` Pull Request URL is then taken from environment while building:


### CircleCI

This is an example on how to use the bridge between `CircleCI` environment and `ci-github-bot`:
```javascript

// Imports
const CircleCiGitHubBot = require('circlecigithubbot'); 
const ConfigurationComment = require('circlecigithubbot/configuration/comment');

// Pass GitHub username & token to new bot instance
let bot = new CircleCiGitHubBot(
    'username',
    'token'
);

// Create comment ...
bot.createPullRequestComment(
  new ConfigurationComment(
    'Hey look at the staging preview at: <a href="#{stageUrl}">#{stageText}</a>.', 
    {
        stageUrl: 'https://example.com',
        stageText: 'stage',
        buildNumber: 512,
        buildUrl: 'https://circleci.com/somebuild/somestep',
    }
  )
);


```

### Generic Bot

If you do not use any of the built-in CI-PaaS-providers you can create a bot instance and configure it manually of course. This is also really simple for most of the use-cases as you can see below:

```javascript

// Imports
const CircleCiGitHubBot = require('circlecigithubbot'); 
const ConfigurationGitHub = require('circlecigithubbot/configuration/github');
const ConfigurationComment = require('circlecigithubbot/configuration/comment');

// Bot configuration base ...
let configurationGitHub = new ConfigurationGitHub(
  'username',
  'password'
);

// Load the target/subject configuration from GitHub Pull Request URL
configurationGitHub.loadFromPullRequestUrl(
  'GitHub-Pull-Request-URL'
);

// Pass GitHub username & token to new bot instance
let bot = new CiGithubBot(
  configurationGitHub
);

// Create comment ...
bot.createPullRequestComment(
  new ConfigurationComment(
    'Hey look at the staging preview at: <a href="#{stageUrl}">#{stageText}</a>.', 
    {
        stageUrl: 'https://example.com',
        stageText: 'stage',
        buildNumber: 512,
        buildUrl: 'https://circleci.com/somebuild/somestep',
    }
  )
);


```

## Requirements

 - `Node.js >= 6.1`


## Versioning

For a consistent versioning i decided to make use of `Semantic Versioning 2.0.0` http://semver.org. Its easy to understand, very common and known from many other software projects.


## Roadmap

- [ ] Target stable release `1.0.0`
- [ ] `>= 90%` test coverage
- [ ] Implement some more bridges for popular CI-PaaS-providers like TravisCI 
      (TravisCI please don't worry - we still love u - but you're so expensive ;)

[![Throughput Graph](https://graphs.waffle.io/clickalicious/ci-github-bot/throughput.svg)](https://waffle.io/clickalicious/ci-github-bot/metrics)


## Security Issues

If you encounter a (potential) security issue don't hesitate to get in contact with us `opensource@clickalicious.de` before releasing it to the public. So i get a chance to prepare and release an update before the issue getting shared. Thank you!


## Participate & Share

... yeah. If you're a code monkey too - maybe we can build a force ;) If you would like to participate in either **Code**, **Comments**, **Documentation**, **Wiki**, **Bug-Reports**, **Unit-Tests**, **Bug-Fixes**, **Feedback** and/or **Critic** then please let me know as well!
<a href="https://twitter.com/intent/tweet?hashtags=&original_referer=http%3A%2F%2Fgithub.com%2F&text=ci-github-bot%20-%20GitHub%20communication%20%23bot%20for%20%23CI/CD%20workflows%20%40phpfluesterer%20%23ci-github-bot%20%23js%20%23circleci%20https%3A%2F%2Fgithub.com%2Fclickalicious%2Fci-github-bot&tw_p=tweetbutton" target="_blank">
  <img src="http://jpillora.com/github-twitter-button/img/tweet.png"></img>
</a>

## Sponsors

Thanks to our sponsors and supporters:

| JetBrains | Navicat |
|---|---|
| <a href="https://www.jetbrains.com/phpstorm/" title="PHP IDE :: JetBrains PhpStorm" target="_blank"><img src="http://resources.jetbrains.com/storage/products/jetbrains/img/meta/jetbrains_250x250.png" height="55"></img></a> | <a href="http://www.navicat.com/" title="Navicat GUI - DB GUI-Admin-Tool for MySQL, MariaDB, SQL Server, SQLite, Oracle & PostgreSQL" target="_blank"><img src="http://upload.wikimedia.org/wikipedia/en/9/90/PremiumSoft_Navicat_Premium_Logo.png" height="55" /></a>  |


###### Copyright
<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
