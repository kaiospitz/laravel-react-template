/* eslint-disable unused-imports/no-unused-vars */
const mix = require('laravel-mix')
/*const Dotenv = require('dotenv-webpack')

mix.webpackConfig((webpack) => {
    return {
        plugins: [new Dotenv()],
    }
})*/

mix.sass('client/assets/sass/global.scss', 'public/css').version()

mix.js('client/app.js', 'public/js').version().react()
