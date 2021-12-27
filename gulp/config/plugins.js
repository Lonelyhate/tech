import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //обработка ошибок
import notify from "gulp-notify"; //сообщенияz
import browserSync from "browser-sync"; //обновления браузера
import newer from "gulp-newer"; // проверка обновлений
import ifPlugin from "gulp-if"; //Условное ветвление

//экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin
}