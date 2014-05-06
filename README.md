## urlParser ##

urlParser is a library for parsing url parameters. After parsing a url it returns an object containing all the url parameters.

## Usage ##

```javascript
(function(urlParser) {
    var params = urlParser.parseUrlParams('http://www.mydomain.com');
    console.log(params); // {}

    params = urlParser.parseUrlParams('http://www.mydomain.com?');
    console.log(params); // {}

    params = urlParser.parseUrlParams('http://www.mydomain.com?a=1');
    console.log(params); // {a: '1'}

    params = urlParser.parseUrlParams('http://www.mydomain.com?a=1&b=2&c=3');
    console.log(params); // {a: '1', b: '2', c: '3'}

    params = urlParser.parseUrlParams('http://www.mydomain.com?a=1&b=2&c=3#q3');
    console.log(params); // {a: '1', b: '2', c: '3'}
})(urlParser);
```