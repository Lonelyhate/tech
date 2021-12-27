import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'// сжатие css файла
import webpcss from 'gulp-webpcss'// вывод webp картинок
import autoprefixer from 'gulp-autoprefixer'; //добавление вендерных префиксеров
import groupCssMediaQueries from 'gulp-group-css-media-queries'// собирание всех медиа запросов

const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev }) //sourcemaps - говорит в каком именно файле ошибка
    .pipe(app.plugins.plumber( //обработка ошибок
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, 'img/')) //подключение картинок из вложеных html файлов с помощью собачки@
    .pipe(sass({
        outputStyle: 'expanded',

    }))
    .pipe(
        app.plugins.if(
            app.isBuild,
            groupCssMediaQueries()
        )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
            webpcss({
                webpClass: ".webp",
                noWebpClass: '.no-webp'
            })
        )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid: true,
                overrideBrowserlist: ["last 3 versions"],
                cascade: true
            })
        )
    )
    //если понадобиться не сжатый дубль файл стилей
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(
        app.plugins.if(
            app.isBuild,
            cleanCss()
        )
    )
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}