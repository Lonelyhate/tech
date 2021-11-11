function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

//header
const scedule = document.querySelector('.schedule')
const searchBtn = document.querySelector('.search__btn')
const searchInput = document.querySelector('.input__search')
const menu = document.querySelector('.menu')
const searchCancel = document.querySelector('.search__cancel')
const btnProfile = document.querySelector('.profile__btn')
const profileMenu = document.querySelector('.profile__list')
const menuBtn = document.querySelector('.menu__icon')
const menuClose = document.querySelector('.menu__hide')
const menuBody = document.querySelector('.menu__body')
const menuNext = document.querySelector('.menu__next')
const menuList = document.querySelector('.menu__list')

document.querySelector('.header-top__schedule').addEventListener('click', (e) => {
    scedule.classList.toggle('schedule_active')
    sceduleBool = scedule.classList.contains('schedule_active')
})

function searchShow () {
    searchInput.classList.add('input__search_show')
    menu.classList.add('menu_hide')
    searchCancel.classList.add('search__cancel_show')
    document.querySelector('.header-bottom__right').style.marginLeft = 0
    document.querySelector('.header-bottom__right').style.width = '100%'
    searchBtn.style.transform = 'translateX(-45px)'
}

function searchHide () {
    searchInput.classList.remove('input__search_show')
    menu.classList.remove('menu_hide')
    searchCancel.classList.remove('search__cancel_show')
    document.querySelector('.header-bottom__right').style.marginLeft = ''
    document.querySelector('.header-bottom__right').style.width = ''
    searchBtn.style.transform = ''
}
searchBtn.addEventListener('click', searchShow)
searchCancel.addEventListener('click', searchHide)

btnProfile.addEventListener('click', () => {
    profileMenu.classList.toggle('profile__list_active')
})

document.body.addEventListener('click', e => {
    if(!e.target.closest('.schedule_active') && !e.target.closest('.header-top__schedule')) {
        scedule.classList.remove('schedule_active')
    }
    if(!e.target.closest('.profile__list_active') && !e.target.closest('.profile__btn')) {
        profileMenu.classList.remove('profile__list_active')
    }
})

menuBtn.addEventListener('click', () => {
    menuBody.classList.add('menu__body_active')
})

menuClose.addEventListener('click', () => {
    menuBody.classList.remove('menu__body_active')
})

function transformMenu(e) {
    let self = e.currentTarget
    let parent = self.parentNode
    let subMenu = parent.querySelector('.submenu').querySelector('.sub-first')
    subMenu.style.display = 'block'
    menuList.style.transform = `translateX(-${menuListWidth}px)`
}

let menuListWidth = menuList.clientWidth

menuNext.addEventListener('click', transformMenu)
