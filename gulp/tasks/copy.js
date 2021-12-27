export const copy = () => {
    return app.gulp.src(app.path.src.files) //Получили файлы
    .pipe(app.gulp.dest(app.path.build.files)) //Перенесои файлы
}