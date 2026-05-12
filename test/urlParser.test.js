import { describe, it, expect } from 'vitest';
import { parseUrlParams } from '../src/urlParser.js';

describe('urlParser', () => {
    it('returns empty object when there are no parameters', () => {
        expect(parseUrlParams('http://www.mydomain.com')).toEqual({});
    });

    it('returns empty object when there is only ? character', () => {
        expect(parseUrlParams('http://www.mydomain.com?')).toEqual({});
    });

    it('returns single parameter', () => {
        expect(parseUrlParams('http://www.mydomain.com?a=1')).toEqual({ a: '1' });
    });

    it('returns all parameters', () => {
        expect(parseUrlParams('http://www.mydomain.com?a=1&b=2&c=3')).toEqual({ a: '1', b: '2', c: '3' });
    });

    it('ignores fragment', () => {
        expect(parseUrlParams('http://www.mydomain.com?a=1&b=2&c=3#q3')).toEqual({ a: '1', b: '2', c: '3' });
    });
});
