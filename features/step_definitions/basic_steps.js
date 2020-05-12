import { When } from 'cucumber';

module.exports = function() {
  When(/I am on/, function(path) {
    // Write code here that turns the phrase above into concrete actions
    console.log(path);
    return Promise.resolve();
  });

  this.Then('I should see {stringInDoubleQuotes}', function(stringInDoubleQuotes, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
};
