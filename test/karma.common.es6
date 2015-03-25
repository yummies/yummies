import path from 'path';

const babelConfig = JSON.stringify({
    optional: 'runtime',
    experimental: true
});

export default {
    colors: true,
    files: [
        'lib/*.es6'
    ],
    preprocessors: {
        'lib/*.es6': [ 'webpack' ]
    },
    frameworks: [ 'mocha' ],
    webpack: {
        cache: true,
        resolve: {
            extensions: [ '', '.js', '.es6', '.json' ]
        },
        module: {
            preLoaders: [
                {
                    test: /\.es6$/,
                    include: path.resolve('test/lib/'),
                    loader: 'babel?' + babelConfig
                },
                {
                    test: /\.es6$/,
                    include: path.resolve('lib/'),
                    loader: 'isparta?{ babel: ' + babelConfig + ' }'
                }
            ]
        }
    },
    webpackMiddleware: {
        noInfo: true,
        quiet: true
    },
    coverageReporter: {
        dir: '../coverage',
        reporters: [
            { type: 'lcovonly', subdir: '.' }
        ]
    }
}
