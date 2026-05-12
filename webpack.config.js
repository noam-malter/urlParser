import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    entry: './src/urlParser.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'urlParser.js',
        library: {
            name: 'urlParser',
            type: 'umd',
            export: 'default',
        },
        globalObject: 'this',
        environment: {
            arrowFunction: false,
            const: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'production',
};
