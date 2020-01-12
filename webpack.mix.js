let mix = require('laravel-mix');
let Path = require('path');
let ImageminPlugin     = require('imagemin-webpack-plugin').default;
let CopyWebpackPlugin  = require('copy-webpack-plugin');
let imageminMozjpeg    = require('imagemin-mozjpeg');


mix.webpackConfig({
    resolve: {
        alias: {
            "headroom": Path.resolve('node_modules', 'headroom.js/dist/headroom.js'),
            "TweenMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
            "TimelineLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
            "TimelineMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
            "scrollTo": Path.resolve('node_modules', 'gsap/src/uncompressed/plugins/ScrollToPlugin.js'),
            "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
            "animation.gsap": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
            "debug.addIndicators": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
        }
    },
    plugins: [
        //Compress images
        new CopyWebpackPlugin([{
            from: 'resources/img', // FROM
            to: 'img/', // TO
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '65-80'
            },
            plugins: [
                imageminMozjpeg({
                    quality: 65,
                    //Set the maximum memory to use in kbytes
                    // maxmemory: 1000 * 512
                })
            ]
        })
    ],
})
.js('resources/js/app.js', 'public/js')
.sass('resources/sass/style.sass', 'public/css');
