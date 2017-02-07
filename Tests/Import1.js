'use strict';

import * as Exponent from 'exponent';

export const name = 'Import1';

export function test(t) {
  t.describe(`import * as Exponent from 'exponent';`, () => {
    t.it(`const { Constants } = Exponent;`, () => {
      const { Constants } = Exponent;
      t.expect(Constants.exponentVersion).toBeDefined();
    });
    t.it(`Exponent.Constants`, () => {
      t.expect(Exponent.Constants.exponentVersion).toBeDefined();
    });
  });
}