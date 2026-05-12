export const parseUrlParams = (url = globalThis.location?.href ?? '') => {
    const match = /\?([^#]*)/.exec(url);
    if (!match?.[1]) return {};
    return match[1].split('&').reduce((params, pair) => {
        const [key, value] = pair.split('=');
        params[key] = value;
        return params;
    }, {});
};

export default { parseUrlParams };
