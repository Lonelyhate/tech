import isMobile from "./templates/isMobile.js"
import webp from "./templates/webp.js"
import header from "./modules/header.js"
import closeWindows from "./modules/closeWindows.js"
import InnerSlider from "./modules/slider/InnerSlider.js"
import ProductSlider from "./modules/slider/ProductSlider.js"
import cart from "./modules/cart.js"
import Tabs from "./modules/Tabs.js"
import footer from "./modules/footer.js"
import pathCatalog from "./modules/pathCatalog.js"
import selects from "./modules/selects.js"
import filters from "./modules/filters.js"

window.addEventListener('DOMContentLoaded', () => {
    //Провека с какого устройство
    isMobile()

    //Проверка поддерживается ли формат webp
    webp()

    //Js реализация по работу с хеадаром
    header()

    //Слайдеры
    try{
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
    selects()

    //Каталог фильтры
    filters()

    //закрытие окон
    closeWindows()
})