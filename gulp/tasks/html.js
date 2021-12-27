import fileinclude from "gulp-file-include"
import webpHtmlNosvg from "gulp-webp-html-nosvg"
import versionNumber from "gulp-version-number"

export const html = () => {
    return app.gulp.src(app.path.src.html) //получение данных с исходнков
    .pipe(app.plugins.plumber( //обработка ошибок
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(fileinclude())
    .pipe(app.plugins.replace(/@img\//g, 'img/')) //подключение картинок из вложеных html файлов с помощью собачки@
    .pipe(
        app.plugins.if(
            app.isBuild,
            webpHtmlNosvg() //конвертация всех картинок в webp кроме svg
        )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js'
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        )
    )
    .pipe(app.gulp.dest(app.path.build.html)) //копирование в результат
    .pipe(app.plugins.browserSync.stream())
}