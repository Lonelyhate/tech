import webpImg from './modules/webpImg'
import header from './modules/header';
import closeWindows from "./modules/closeWindows";
import InnerSlider from "./modules/slider/InnerSlider"
import ProductSlider from "./modules/slider/ProductSlider"
import Tabs from "./modules/Tabs"
import footer from './modules/footer';
import cart from './modules/cart';
import pathCatalog from './modules/pathCatalog';
import select from './modules/selects';
import filters from './modules/filters';

window.addEventListener('DOMContentLoaded', () => {
    //Настройка webp изображений
    webpImg()
    //Меню адапитвное
    header()

    //Слайдеры
   try {
    new InnerSlider({
        container: '.inner2__slider',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500,
        infinity: true
    })

    new InnerSlider({
        container: '.reviews__slider',
        speed: 500,
        pagination: ['reviews__paginations', 'reviews__pagination', 'reviews__pagination_active']
    })

    new ProductSlider({
        container: '.new-products__slider',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.custome__slider ',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.msi-laptops__slider_one',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.msi-laptops__slider_two',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.msi-laptops__slider_three',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.msi-laptops__slider_four',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.desctops__slider_one',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.desctops__slider_two',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.desctops__slider_three',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.desctops__slider_four',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.monitors__slider',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    //табы
    new Tabs('.msi-category', '.msi-categories', '.msi-laptops__slider')
    new Tabs('.desctops__category', '.desctops__categories', '.desctops__slider')
   } catch(e) {}
    
    //Футер аккордеон
    footer()

    //Корзина
    cart()

    //Путь на странице каталог
    pathCatalog()

    //Селекты
    select()

    //Каталог фильтры
    filters()

    //Закрывание всех окон при клике вне окна
    closeWindows()
})

