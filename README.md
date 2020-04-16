# cucumber-steps
Quick start for testing with cucumber

[![CircleCI](https://circleci.com/gh/brainhubeu/cucumber-steps.svg?style=svg)](https://circleci.com/gh/brainhubeu/cucumber-steps)
[![Last commit](https://img.shields.io/github/last-commit/brainhubeu/cucumber-steps.svg)](https://github.com/brainhubeu/cucumber-steps/commits/master)
[![license](https://img.shields.io/npm/l/@brainhubeu/cucumber-steps.svg)](https://github.com/brainhubeu/cucumber-steps/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

[![Downloads](https://img.shields.io/npm/dm/@brainhubeu/cucumber-steps?color=blue)](https://www.npmjs.com/package/@brainhubeu/cucumber-steps)
[![Activity](https://img.shields.io/github/commit-activity/m/brainhubeu/cucumber-steps.svg)](https://github.com/brainhubeu/cucumber-steps/commits/master)
[![Minified](https://img.shields.io/bundlephobia/min/@brainhubeu/cucumber-steps?label=minified)](https://www.npmjs.com/package/@brainhubeu/cucumber-steps)
[![npm](https://img.shields.io/npm/v/@brainhubeu/cucumber-steps.svg)](https://www.npmjs.com/package/@brainhubeu/cucumber-steps)
[![Contributors](https://img.shields.io/github/contributors/brainhubeu/cucumber-steps?color=blue)](https://github.com/brainhubeu/cucumber-steps/graphs/contributors)

# Getting started
Install library

with npm: `npm i --save-dev @brainhubeu/cucumber-steps`

or with yarn: `yarn add --dev @brainhubeu/cucumber-steps`

Add following in anywhere in your `step-definitions` directory
```js
import { defineSupportCode } from 'cucumber';
import stepsSupport from '@brainhubeu/cucumber-steps';

defineSupportCode(stepsSupport);
```
# Available steps
#### Setting headers
```
Given I set header "heder-name" with value "header-value"
```

#### Sending request
```
When I send a "METHOD" request to "/path"
```

#### Sending request with body
```
When I send a "METHOD" request to "/path" with body:
  """
  {
    "name": "Wonderful coffee",
    "project": {
      "name": "Coffee"
    }
  }
  """
```

#### Chcking response code
```
Then the response code should be 111
```

#### Checking response body
```
Then the JSON should match pattern
  """
  {
    "name": "Wonderful coffee",
    "project": {
      "name": "Coffee"
    }
  }
  """
```
