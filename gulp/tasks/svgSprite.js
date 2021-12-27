import svg from "gulp-svg-sprite"

export const svgSprite = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber( //обработка ошибок
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(svg({
        mode: {
            stack: {
                sprite: '../icons/icons.svg',
                example: true
            }
        }
    }))
    .pipe(app.gulp.dest(`${app.path.build.images}`))
    .pipe(app.plugins.browserSync.stream())
}