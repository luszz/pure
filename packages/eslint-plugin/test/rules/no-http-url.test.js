'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://luszz.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://luszz.com';",
      output: "var test = 'http://luszz.com';",
      errors: [
        {
          message: 'Recommended "http://luszz.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://luszz.com' />",
      output: "<img src='http://luszz.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://luszz.com" switch to HTTPS',
        },
      ],
    },
  ],
});
