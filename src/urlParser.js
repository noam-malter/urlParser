const decode = (str) => decodeURIComponent(str.replace(/\+/g, ' '));

export const parseUrlParams = (url = globalThis.location?.href ?? '') => {
    const match = /\?([^#]*)/.exec(url);
    if (!match?.[1]) return {};
    return match[1].split('&').reduce((params, pair) => {
        const eqIdx = pair.indexOf('=');
        const key = decode(eqIdx === -1 ? pair : pair.slice(0, eqIdx));
        const value = eqIdx === -1 ? '' : decode(pair.slice(eqIdx + 1));
        params[key] = value;
        return params;
    }, {});
};

export default { parseUrlParams };
