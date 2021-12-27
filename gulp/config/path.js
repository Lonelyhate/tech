//Получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

//Пути в исходники и результат
const buildFolder = './dist' //также можно использовать rootFolder
const srcFolder = './src'

//Объекты путей
export const path = {
    build: { //Собираемые файлы с src
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/` 
    }, 
    src: {  //Исходные файлы, которые обрабатываются и переносятся в build
        js: `${srcFolder}/js/main.js`, //Копирование js файла
        images: `${srcFolder}/img/**/*{jpg,jpeg,png,gif,webp}`, //копирование картинок
        svg: `${srcFolder}/img/**/*.svg`, //копирование svg картинок
        scss: `${srcFolder}/scss/style.scss`, // Копирование scss файлов
        html: `${srcFolder}/*.html`, //Копирование главного html файла
        files: `${srcFolder}/files/**/*.*`, //путь откуда копировать в build
        svgicons: `${srcFolder}/img/svgicons/*.svg` //Создание svg-спрайтов
    },
    watch: { //наблюдает за изменениями
        js: `${srcFolder}/js/**/*.js`, //наблюдаем за всеми js файлами
        scss: `${srcFolder}/scss/**/*.scss`, //Наблюдаем за всеми файлами scss
        html: `${srcFolder}/**/*.html`, //наблюдение за изменениями всех хтмл файлов
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/img/svgicons/*.svg`
    }, 
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}