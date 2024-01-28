import { capitalize } from '@/utils/utils';
import { describe, expect, it } from 'vitest';

describe('utils', () => {
  describe('capitalize', () => {
    it('should return the first character capitalized of the given string', () => {
      const value = 'hello';
      const result = capitalize(value);
      expect(result).toBe('Hello');
    });
  });
});
