const OperationIdNotTest = require('./rules/operation-id-not-test');
const id = 'plugin';

/** @type {import('@redocly/cli').DecoratorsConfig} */
const rules = {
  oas3: {
    'operation-id-not-test': OperationIdNotTest,
  },
};

module.exports = {
  id,
  rules,
};