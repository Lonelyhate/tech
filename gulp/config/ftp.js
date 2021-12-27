//Получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

//Пути в исходники и результат
const buildFolder = './dist' //также можно использовать rootFolder
const srcFolder = './src'

//Объекты путей
export const path = {
    build: {
        files: `${buildFolder}/files/` //
    }, //Собираемые файлы с src
    src: {
        files: `${srcFolder}/files/**/*.*` //путь откуда копировать в build
    }, //Исходные файлы, которые обрабатываются и переносятся в build
    watch: {}, //за которыми должен следить галп
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}