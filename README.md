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
