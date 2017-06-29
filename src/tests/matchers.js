export default {
  '@date@': (value) => {
    return !Number.isNaN(Date.parse(value));
  },
  '@integer@': (value) => {
    return Number.parseInt(value, 10).toString() === String(value);
  },
  '@string@': (value) => {
    return typeof value === 'string';
  },
  '@object@': (value) => {
    return typeof value === 'object';
  },
  '@array@': (value) => {
    return Array.isArray(value);
  },
};
