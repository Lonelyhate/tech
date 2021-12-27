import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export const otfToTtf = () => {
    //ищем файлы шрифтов .otf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
    .pipe(app.plugins.plumber( //обработка ошибок
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        })
    ))
    //конвертируем в .ttf
    .pipe(fonter({
        formats: ['ttf']
    }))
    //выгружаем в исходную папку
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonter/`))
}

export const ttfToWoff = () => {
    //ищем файлы шрифтов .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber( //обработка ошибок
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        })
    ))
     //конвертируем в .woff
     .pipe(fonter({
        formats: ['woff']
    }))
        //выигружаем в папку с результатом
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
     //ищем файлы шрифтов .ttf
     .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
     //конвертируем в .woff2
     .pipe(ttf2woff2())
     //Выгружаем в папку с результатом
     .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export const fontsStyle = () => {
    //файл стилей подключения шрифтов
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`
    //проверяем сущенствуют ли файлы шрифтов 
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if(fontsFiles) {
            if(!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, '', cb)
                let newFileOnly
                for (var i = 0; i < fontsFiles.length; i++) {
                    let fontFileName = fontsFiles[i].split('.')[0]
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName
                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900
                        } else {
                            400
                        }
                        fs.appendFile(fontsFile,
                            `@font-face {
                                font-family: ${fontName};
                                font-display: swap;
                                src: url("../fonts/${fontFileName}.woff2") format("woff2"), 
                                     url("../fonts/${fontFileName}.woff") format("woff");
                                font-weight: ${fontWeight};
                                font-style: normal;
                            }\r\n`, cb)
                        newFileOnly = fontFileName
                    }
                }
            } else {
                //если файл есть, выводим сообщение
                console.log("фалй scss/fonts.css уже есть, для обновление нужно его удалить")
            }
        }
    })
    return app.gulp.src(`${app.path.srcFolder}`)
    function cb() {}
}