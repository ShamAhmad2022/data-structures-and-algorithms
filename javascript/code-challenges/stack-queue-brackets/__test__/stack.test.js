'use strict';

// const Stack = require('../stack');
const validateBrackets = require('../stack');

describe('Stack', () => {

  it('does the validateBrackets works properly true', () => {
    expect(validateBrackets('{[]}')).toEqual(true);
  });

  it('does the validateBrackets works properly false', () => {
    expect(validateBrackets('{[/}')).toEqual(false);
  });
});
