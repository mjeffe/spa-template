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

    // This allows bootstrap-vue components to find project relative image URLs
    // See: https://bootstrap-vue.js.org/docs/reference/images/
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    img: 'src',
                    image: 'xlink:href',
                    'b-img': 'src',
                    'b-img-lazy': ['src', 'blank-src'],
                    'b-card': 'img-src',
                    'b-card-img': 'src',
                    'b-card-img-lazy': ['src', 'blank-src'],
                    'b-carousel-slide': 'img-src',
                    'b-embed': 'src'
                };

                return options;
            });
    }
};

