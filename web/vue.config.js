// These are available in all builds
// Additional environment variables may be set in .env* files
//
module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',

    devServer: {
        // host: VUE_APP_CLIENT_HOST,
        // port: VUE_APP_CLIENT_PORT,
        headers: {
            // 'X-CLIENT-NAME': VUE_APP_CLIENT_NAME,
            'Access-Control-Allow-Origin': '*',
        },
    },
};

