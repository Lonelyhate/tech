const header = () => {
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
    const menuItems = document.querySelectorAll('.item-js')
    const menuBack = document.querySelector('.menu__back')
    let menuListWidth = menuList.clientWidth
    let step = 0
    let stepBack = 0
    
    document.querySelector('.header-top__schedule').addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active')
        scedule.classList.toggle('schedule_active')
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
    
    menuBtn.addEventListener('click', () => {
        menuBody.classList.add('menu__body_active')
    })
    
    menuClose.addEventListener('click', () => {
        const subJsMenus = document.querySelectorAll('.sub-js')
        menuBody.classList.remove('menu__body_active')
        menuList.style.transform = `translateX(0px)`
        subJsMenus.forEach(item => {
            item.style.display = 'none'
        })
        step = 0
        menuBack.style.display = 'none'
    })
    
    window.addEventListener('resize', () => {
        menuListWidth = menuList.clientWidth
    })
    
    function transformMenu(e) {
        menuBack.style.display = 'block'
        let self = e.target
        if (self.tagName == 'BUTTON'){
            let parent = self.parentNode
            let subMenu = parent.querySelector('.submenu-js')
            let sub = parent.querySelector('.sub-js')
            console.log()
            
            if (subMenu) {
                subMenu.style.display = 'block'
                sub.style.display = 'block'
                step = step + menuListWidth
                stepBack = menuListWidth
            } else {
                sub.style.display = 'block'
                let subWidth = sub.clientWidth
                step = step + subWidth 
                stepBack = subWidth
            }
            menuList.style.transform = `translateX(${-step}px)`
        }
    }
    
    
    menuItems.forEach(item => {
        item.addEventListener('click', transformMenu)
    
    })
    
    menuBack.addEventListener('click', () => {
        step = step - stepBack
        menuList.style.transform = `translateX(${-step}px)`
        if (step < 200) {
            menuBack.style.display = 'none'
        }
    })
}

export default header;
