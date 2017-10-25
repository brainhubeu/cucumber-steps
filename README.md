# cucumber-steps
Quick start for testing with cucumber

# Getting started
Install library
`npm i --save-dev https://github.com/brainhubeu/cucumber-steps`

Add following in anywhere in your `step-definitions` directory
```
import { defineSupportCode } from 'cucumber';
import stepsSupport from 'cucumber-steps';

defineSupportCode(stepsSupport);
```
