## urlParser ##

urlParser is a library for parsing URL query parameters into a plain object.

## Installation ##

```bash
npm install
```

## Usage ##

### ES Module ###

```javascript
import { parseUrlParams } from './src/urlParser.js';

parseUrlParams('http://www.mydomain.com');                 // {}
parseUrlParams('http://www.mydomain.com?');                // {}
parseUrlParams('http://www.mydomain.com?a=1');             // { a: '1' }
parseUrlParams('http://www.mydomain.com?a=1&b=2&c=3');    // { a: '1', b: '2', c: '3' }
parseUrlParams('http://www.mydomain.com?a=1&b=2&c=3#q3'); // { a: '1', b: '2', c: '3' }
```

Calling without an argument reads `window.location.href`.

### Browser (via dist bundle) ###

```html
<script src="dist/urlParser.js"></script>
<script>
  const params = urlParser.parseUrlParams('http://www.mydomain.com?a=1&b=2');
  // { a: '1', b: '2' }
</script>
```

## Development ##

```bash
npm test            # run tests once
npm run test:watch  # run tests in watch mode
npm run build       # build dist/urlParser.js
```
