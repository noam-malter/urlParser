var urlParser = (function() {

    var parsePair = function(pair) {
        var splits = pair.split('=');
        return {key: splits[0], value: splits[1]};
    };

    var parsePairs = function(pairs) {
        var params = {};
        for (var i=0, l=pairs.length; i<l; i++) {
            var pair = parsePair(pairs[i]);
            params[pair.key] = pair.value;
        }
        return params;
    };

    var parseUrlParams = function(url) {
        url = typeof url === 'undefined' ? window.location.href : url;

        var urlParams = {},
            params = /\?([^#]*)/.exec(url);

        if (params && params.length > 1) {
            urlParams = parsePairs(params[1].split('&'));
        }

        return urlParams;
    };

    return {
        parseUrlParams: parseUrlParams
    };

})();
