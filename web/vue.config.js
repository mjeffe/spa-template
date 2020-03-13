// These are available in all builds
// Additional environment variables may be set in .env* files
//

// used below in configureWebpack section
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    },

    // Used to show bundle and component sizes during build (Note, this is also
    // included in the next section where we complie bootstrap-vue from source).
    // See const defined at the top of this file
    // See: https://medium.com/js-dojo/how-to-reduce-your-vue-js-bundle-size-with-webpack-3145bf5019b7
    /*
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()]
    },
    */

    // This allows webpack to build from bootstrap-vue source rather than the
    // pre-bundled esm/ modular build. The point is to reduce the size of the
    // compiled output bundles, specifically the bootstrap-vue dependency
    // within chunk-vendor.js
    //
    // See: https://bootstrap-vue.js.org/docs/#using-bootstrapvue-source-code-for-smaller-bundles
    //
    // The above link requires:
    //  npm install babel-core babel-loader babel-preset-env --save-dev
    //
    // But I had config issues with babel-preset-env. Some googling suggested a
    // version missmatch, so I upgraded babel 6.x to babel 7.x
    // See: https://stackoverflow.com/questions/52092739/upgrade-to-babel-7-cannot-read-property-bindings-of-null
    //  npm remove babel-preset-env
    //  npm install @babel/preset-env --save-dev
    //
    // Which required changing in the config below:
    //   presets: ['env']
    // to
    //   presets: ['@babel/preset-env']
    //
    // Unfortunately this didn't ultimately help. The bootstrap-vue dependency
    // within chunk-vendors.js did in fact reduce from 489k to 308k, but the
    // overall chunk-vendors.js bundle size went up slightly from 671k to 681k.
    // I haven't been able to figure out what caused this, so for now, I've
    // just commented this out.
    /*
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()],
        resolve: {
            alias: {
              // Alias for using source of BootstrapVue
              'bootstrap-vue$': 'bootstrap-vue/src/index.js'
            }
        },
        module: {
            rules: [
              {
                test: /\.js$/,
                // Exclude transpiling `node_modules`, except `bootstrap-vue/src`
                exclude: /node_modules\/(?!bootstrap-vue\/src\/)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    // presets: ['env']
                    presets: ['@babel/preset-env']
                  }
                }
              }
            ]
        }
    }
    */
};

