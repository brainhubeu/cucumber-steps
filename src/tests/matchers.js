export default {
  '@date@': value => !Number.isNaN(Date.parse(value)),
  '@integer@': value => Number.parseInt(value).toString() === String(value),
  '@string@': value => typeof value === 'string',
  '@object@': value => typeof value === 'object',
  '@array@': value => Array.isArray(value),
};
