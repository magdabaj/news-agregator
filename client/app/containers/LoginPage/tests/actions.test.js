import { defaultAction } from 'client/app/containers/LoginPage/actions';
import { DEFAULT_ACTION } from 'client/app/containers/LoginPage/constants';

describe('LoginPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
