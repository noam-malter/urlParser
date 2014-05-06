describe("urlParser", function() {
    it("should return empty object when there are no parameters", function() {
        var params = urlParser.parseUrlParams('http://www.mydomain.com');
        expect(params).toEqual({});
    });

    it("should return empty object when there is only ? character", function() {
        var params = urlParser.parseUrlParams('http://www.mydomain.com?');
        expect(params).toEqual({});
    });

    it("should return single parameter", function() {
        var params = urlParser.parseUrlParams('http://www.mydomain.com?a=1');
        expect(params).toEqual({a: '1'});
    });

    it("should return all parameters", function() {
        var params = urlParser.parseUrlParams('http://www.mydomain.com?a=1&b=2&c=3');
        expect(params).toEqual({a: '1', b: '2', c: '3'});
    });

    it("should ignore fragment", function() {
        var params = urlParser.parseUrlParams('http://www.mydomain.com?a=1&b=2&c=3#q3');
        expect(params).toEqual({a: '1', b: '2', c: '3'});
    });
});