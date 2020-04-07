module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    collectCoverage: false,
    collectCoverageFrom: [
        "src/**/*.{js,vue}",
        "!**/node_modules/**"
    ],
    coverageReporters: [
        /* "html", */
        "text-summary"
    ]
};
