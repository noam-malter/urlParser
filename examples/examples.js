import { parseUrlParams } from '../src/urlParser.js';

console.log(parseUrlParams('http://www.mydomain.com'));                    // {}
console.log(parseUrlParams('http://www.mydomain.com?'));                   // {}
console.log(parseUrlParams('http://www.mydomain.com?a=1'));                // { a: '1' }
console.log(parseUrlParams('http://www.mydomain.com?a=1&b=2&c=3'));       // { a: '1', b: '2', c: '3' }
console.log(parseUrlParams('http://www.mydomain.com?a=1&b=2&c=3#q3'));    // { a: '1', b: '2', c: '3' }