var gulp = require("gulp");
var shell = require("gulp-shell");
var elixir = require('laravel-elixir');
var bowerDir = './resources/assets/bower/';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
    mix.scripts([
        'jquery/dist/jquery.min.js',
        'bootstrap/dist/js/bootstrap.min.js'
    ], 'public/js/all.js', bowerDir);

    // mix.scripts([
    //     '../bower/jquery/dist/jquery.min.js'
    // ]);
});
