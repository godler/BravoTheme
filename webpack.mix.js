let mix = require('laravel-mix');
require('mix-tailwindcss');

const extension = mix.inProduction() ? '.min' : '';

mix.js('src/app.js', `js/main${extension}.js`)
    // .postCss('src/styles.css', `css/styles${extension}.css`)
    .postCss("src/styles.css", "css", [require("tailwindcss")])
    // .tailwind()
    .setPublicPath('dist')
    .version()
    // .browserSync({
    //     proxy: 'http://domain.test',
    //     files: [
    //         './dist/mix-manifest.json',
    //         '../../pages/**/*.md'
    //     ]
    // })
