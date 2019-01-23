// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const webpackConfig = require("../packages/apps/ui-kit/config/webpack.test.config");

module.exports = function (config) {
    config.set({
        // to run in additional browsers:
        // 1. install corresponding karma launcher
        //    http://karma-runner.github.io/0.13/config/browsers.html
        // 2. add it to the `browsers` array below.
        basePath: "../",
        browsers: ["PhantomJS"],
        frameworks: ["jasmine"],
        client: {
            chai: {
                includeStack: true
            }
        },
        files: [
            require.resolve("angular"), // eslint-disable-line no-undef
            require.resolve("angular-mocks"), // eslint-disable-line no-undef
            require.resolve("angular-aria"), // eslint-disable-line no-undef
            require.resolve("angular-sanitize"), // eslint-disable-line no-undef
            "packages/**/tests/index.js"
        ],
        preprocessors: {
            [require.resolve("angular")]: ["webpack", "sourcemap"],
            [require.resolve("angular-mocks")]: ["webpack", "sourcemap"],
            [require.resolve("angular-aria")]: ["webpack", "sourcemap"],
            [require.resolve("angular-sanitize")]: ["webpack", "sourcemap"],
            "packages/**/tests/index.js": ["webpack", "sourcemap"]
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
            stats: {
                colors: true
            }
        },
        coverageReporter: {
            dir: "coverage/",
            reporters: [
                { type: "text" },
                { type: "lcov", subdir: "report-lcov" },
                { type: "html", subdir: "report-html" }
            ],
            check: {
                global: {
                    statements: 70,
                    lines: 70,
                    functions: 70
                }
            }
        }
    });
};
