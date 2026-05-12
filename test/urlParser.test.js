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

    it('preserves = signs inside a value', () => {
        expect(parseUrlParams('http://www.mydomain.com?token=abc=def==')).toEqual({ token: 'abc=def==' });
    });

    it('returns empty string for a valueless key', () => {
        expect(parseUrlParams('http://www.mydomain.com?flag')).toEqual({ flag: '' });
    });

    it('decodes percent-encoded characters in keys and values', () => {
        expect(parseUrlParams('http://www.mydomain.com?na%20me=John%20Doe')).toEqual({ 'na me': 'John Doe' });
    });

    it('decodes + as a space in keys and values', () => {
        expect(parseUrlParams('http://www.mydomain.com?na+me=John+Doe')).toEqual({ 'na me': 'John Doe' });
    });
});
