import { defineSupportCode } from 'cucumber';

function CustomWorld(callback) {
  // A custom world placeholder function
  return callback;
}

defineSupportCode(function({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
});
