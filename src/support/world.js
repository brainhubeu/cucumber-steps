import { defineSupportCode } from 'cucumber';
import { webdriverio } from 'webdriverio';

function CustomWorld(callback) {
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
});
