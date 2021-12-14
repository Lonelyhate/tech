/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/Tabs.js":
/*!***************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/Tabs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tabs)
/* harmony export */ });
class Tabs {
    constructor(tabNamesSelector, tabBtnSelector, tabContentSelector) {
        this.tabsNames = document.querySelectorAll(tabNamesSelector)
        this.tabBtn = document.querySelector(tabBtnSelector)
        this.tabContent = document.querySelectorAll(tabContentSelector)
        this.tabClass = tabNamesSelector.slice(1)

        this.hideTabs = this.hideTabs.bind(this)
        this.showTabs = this.showTabs.bind(this)
        this.render = this.render.bind(this)

        this.hideTabs()
        this.showTabs()
        this.render()
    }

    hideTabs() {
        this.tabContent.forEach(item => {
            item.classList.add('tabs_hide')
            item.classList.remove('tabs_show', 'opac-anim')
        })

        this.tabsNames.forEach(item => {
            item.classList.remove('tabs_active')
        })
    }

    showTabs(i = 0) {
        this.tabContent[i].classList.remove('tabs_hide')
        this.tabContent[i].classList.add('tabs_show', 'opac-anim')

        this.tabsNames[i].classList.add('tabs_active')
    }

    render() {
        this.tabBtn.addEventListener('click', e => {
            if(e.target && e.target.classList.contains(this.tabClass)) {
                this.tabsNames.forEach((item, i) => {
                    if(e.target == item) {
                        this.hideTabs()
                        this.showTabs(i)
                    }
                })
            } 
        })
    }
}

/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/cart.js":
/*!***************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/cart.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cart = () => {
    
    const cartBtn = document.querySelector('.cart__btn')
    const cartContent = document.querySelector('.cart__content')
    const productsBtn = document.querySelectorAll('.product__add-to-cart')
    const cartList = document.querySelector('.cart-products')
    const fullPrice = document.querySelector('.cart__price span')
    const cartCount = document.querySelector('.cart__count')
    let price = 0
    let addCart = 0
    let countProduct = 0

    const randomId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };

    const priceWithoutSpaces = (str) => {
        return str.replace(/[^0-9,.]/g, ' ')
    };

    cartBtn.addEventListener('click', () => {
        cartContent.classList.toggle('cart__content_active')
    })

    const pricePlus = (currentPrice) => {
        return price += currentPrice
    }

    const minusPrice = (currentPrice) => {
        return price -= currentPrice
    }

    const printQuantity = () => {
        let leng = cartList.children.length
        cartCount.textContent = `${leng} item in cart`
        document.querySelector('.cart__quantity').textContent = leng
    }

    const printFullPrice = () => {
        fullPrice.textContent = price % 1 === 0 ? `$${price}.00` : `$${price}`
    }

    const generateCartProduct = (id, img, name, price) => {
        return `
            <li class="cart-products__item">
                <article class="cart-products__product" data-product="${id}" data-price="${price}">
                    <p class="cart-products__quantity">1 <span>x</span></p>
                    <div class="cart-products__img">
                        <img src="${img}" alt="">
                    </div>
                    <p class="cart-products__name">${name}</p>
                    <div class="cart-products__btns">
                        <button class="cart-products__delete">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="9.25" fill="white" stroke="#CACDD8" stroke-width="1.5"/>
                                <path d="M7 7L13.5 13.5" stroke="#A2A6B0" stroke-linecap="round"/>
                                <path d="M13.5 7L7 13.5" stroke="#A2A6B0" stroke-linecap="round"/>
                            </svg>
                        </button>
                        <button class="cart-products__edit">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10.9629" r="9.25" fill="white" stroke="#CACDD8" stroke-width="1.5"/>
                                <path d="M6.0472 15.7064H6.10254L8.66678 15.4727C8.94767 15.4448 9.21039 15.321 9.41083 15.1222L14.9452 9.58792C15.16 9.36099 15.276 9.05816 15.268 8.7458C15.2599 8.43343 15.1283 8.137 14.9021 7.92147L13.2172 6.23657C12.9973 6.03002 12.7092 5.9115 12.4076 5.90356C12.106 5.89563 11.812 5.99883 11.5815 6.19353L6.0472 11.7279C5.84843 11.9283 5.72467 12.191 5.69669 12.4719L5.43227 15.0361C5.42399 15.1262 5.43568 15.217 5.4665 15.302C5.49732 15.3871 5.54653 15.4643 5.6106 15.5281C5.66806 15.5851 5.7362 15.6302 5.81112 15.6608C5.88604 15.6914 5.96627 15.7069 6.0472 15.7064ZM12.3625 7.09747L14.0412 8.77621L12.8114 9.97532L11.1634 8.32732L12.3625 7.09747ZM6.88964 12.5764L10.3517 9.13902L12.012 10.7993L8.56839 14.2429L6.72361 14.4151L6.88964 12.5764Z" fill="#A2A6B0"/>
                            </svg>
                        </button>
                    </div>
                </article>
            </li>
        `
    }

    const countSum = () => {
        document.querySelectorAll('.cart-products__item').forEach(e => {
            price += parseInt(e.querySelector('.cart-products__product').getAttribute('data-price')) * parseInt(priceWithoutSpaces(e.querySelector('.cart-products__quantity').textContent))
        })
    }

    function initLocalStorage() {
        if (localStorage.getItem('products') !== null) {
            cartList.innerHTML = localStorage.getItem('products')
            printQuantity()
            countSum()
            printFullPrice()
        }
    }   

    initLocalStorage()

    const updateStorage = () => {
        let html = cartList.innerHTML
        html = html.trim()
        if(html.length) {
            localStorage.setItem('products', html)
        } else {
            localStorage.removeItem('products')
        }
    }
    
    productsBtn.forEach((item, i) => {
        item.closest('.product').setAttribute('data-product', i)

        item.addEventListener('click', e => {
            const self = e.target
            const parent = self.closest('.product')
            const itemId = parent.getAttribute('data-product')
            const itemImg = parent.querySelector('.product__img img').getAttribute('src')
            const itemName = parent.querySelector('.product__name').textContent
            const itemPrice = parseFloat(priceWithoutSpaces(parent.querySelector('.product__current-price').textContent))
            const itemsLength = document.querySelector('.cart-products').children
            addCart = 0

            pricePlus(itemPrice)
            printFullPrice()
            if(itemsLength.length > 0) {
                for (let el of itemsLength) {
                    if(itemId === el.querySelector('.cart-products__product').getAttribute('data-product')) {
                        el.querySelector('.cart-products__quantity').textContent = parseInt(priceWithoutSpaces(el.querySelector('.cart-products__quantity').textContent)) + 1 + ' x'
                        addCart = 1
                    }
                }
            } 

            if (addCart === 0) {
                cartList.insertAdjacentHTML('afterbegin', generateCartProduct(itemId, itemImg, itemName, itemPrice))
            }
            updateStorage()
            printQuantity()
            
        })
    })

    cartList.addEventListener('click', e => {
        if (e.target.classList.contains('cart-products__delete')) {
            const parent = e.target.closest('.cart-products__item')
            const countProducts = parseInt(priceWithoutSpaces(parent.querySelector('.cart-products__quantity').textContent))
            let currentPrice = parent.querySelector('.cart-products__product').getAttribute('data-price') * countProducts
            
            minusPrice(currentPrice)
            parent.style.transform = `translateX(-${parent.clientWidth}px)`
            setTimeout(() => {
                printFullPrice()
                parent.remove()
                printQuantity()
                updateStorage()
            }, 300)
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);

/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/closeWindows.js":
/*!***********************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/closeWindows.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const closeWindows = () => {

    const scedule = document.querySelector('.schedule')
    const profileMenu = document.querySelector('.profile__list')
    const cartContent = document.querySelector('.cart__content')

    document.body.addEventListener('click', e => {
        if(!e.target.closest('.schedule_active') && !e.target.closest('.header-top__schedule')) {
            scedule.classList.remove('schedule_active')
        }
        if(!e.target.closest('.profile__list_active') && !e.target.closest('.profile__btn')) {
            profileMenu.classList.remove('profile__list_active')
        }
        if(!e.target.closest('.cart__content_active') && !e.target.closest('.cart__btn') && !e.target.closest('.cart-products__delete') && !e.target.closest('.cart-products__edit')) {
            cartContent.classList.remove('cart__content_active')
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeWindows);

/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/filters.js":
/*!******************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/filters.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filters = () => {
    const filterBtns = document.querySelectorAll('.filters__btn')
    const filterOpenBtn = document.querySelector('.catalog-top__btn')
    const filters = document.querySelector('.filters')

    filterOpenBtn.addEventListener('click', () => {
        filters.classList.toggle('active')
    })

    filterBtns.forEach(item => {
        item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px'
        item.addEventListener('click', (e) => {
            e.preventDefault()
            const el = item.nextElementSibling
            el.classList.toggle('active')
            if(el.classList.contains('active')) {
                el.style.maxHeight = 0
            } else {
                el.style.maxHeight = el.scrollHeight + 'px'
            }
        })
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filters);

/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/footer.js":
/*!*****************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/footer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footer = () => {
    const footerBtns = document.querySelectorAll('.footer-list__btn')

    footerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const content = e.target.nextElementSibling
            content.classList.toggle('footer-list__submenu_active')
            content.parentElement.classList.toggle('footer-list__item_active')
            if(content.classList.contains('footer-list__submenu_active')) {
                content.style.maxHeight = content.scrollHeight + 'px'
            } else {
                content.style.maxHeight = 0
            }
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/header.js":
/*!*****************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/header.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/pathCatalog.js":
/*!**********************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/pathCatalog.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pathCatalog = () => {
    const menuList = document.querySelector('.menu__list')
    let pathLink = []
    menuList.addEventListener('click', e => {
        pathLink = []
        if(e.target.closest('.menu__item')){
            const firstLink = e.target.closest('.menu__item').querySelector('a').textContent.trim()
            
            pathLink.push(firstLink)
        }

        if(e.target.closest('.sub-first__item')){
            const twoLink = e.target.closest('.sub-first__item').querySelector('a').textContent.trim()
            pathLink.push(twoLink)
        }

        if(e.target.closest('.sub-two__item')) {
            const threeLink = e.target.closest('.sub-two__item').querySelector('a').textContent.trim()
            pathLink.push(threeLink)
        }

        if(e.target.closest('.sub-three__item')) {
            const fourLink = e.target.closest('.sub-three__item').querySelector('a').textContent.trim()
            pathLink.push(fourLink)
        }

        localStorage.setItem('links-catalog', pathLink)
    })

    const pathHTML = document.querySelector('.path')
    const pathItem = localStorage.getItem('links-catalog').split(',')

    if(pathHTML) {
        for(let i = 0; i < pathItem.length; i++) {
            if (i == pathItem.length - 1) {
                pathHTML.insertAdjacentHTML('beforeend', `
                    <a href="" class="path__link path__link_last">${pathItem[i]}</a>
                `)
            } else {
                pathHTML.insertAdjacentHTML('beforeend', `
                    <a href="" class="path__link">${pathItem[i]} <span>›</span></a>
                `)
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pathCatalog);

/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/selects.js":
/*!******************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/selects.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const select = () => {
    const selectHeader = document.querySelectorAll('.select__header')
    const selectItem = document.querySelectorAll('.select__item')

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    })

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    })

    function selectToggle(e) {
        e.currentTarget.parentElement.classList.toggle('is-active')
    }

    function selectChoose(e) {
        let value = e.currentTarget.getAttribute('data-select')
        let currentText = e.currentTarget.innerHTML
        let parentValue = e.currentTarget.closest('.select').querySelector('.select__curent').getAttribute('data-select')
        let parentText = e.currentTarget.closest('.select').querySelector('.select__curent').innerHTML

        e.currentTarget.closest('.select').querySelector('.select__curent').innerHTML = currentText
        e.currentTarget.closest('.select').querySelector('.select__curent').setAttribute('data-select', value)

        e.currentTarget.setAttribute('data-select', parentValue)
        e.currentTarget.innerHTML = parentText

        e.currentTarget.closest('.select').classList.remove('is-active')
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (select);

/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/slider/InnerSlider.js":
/*!*****************************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/slider/InnerSlider.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InnerSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "../../\u0000#SITES/tech/\u0000#src/js/modules/slider/slider.js");


class InnerSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor(container, next, prev, speed) {
        super(container, next, prev, speed)

        if(this.infinity) {
            this.index = 1
        } 

        this.setParametres = this.setParametres.bind(this)
        this.binds = this.binds.bind(this)
        this.resize = this.resize.bind(this)

        this.setParametres()
        this.binds()
        this.resize()
    }

    setParametres() {
        this.step = this.sliderWrapper.clientWidth
        if(this.infinity) {
            this.sliderField.style.width = this.step * (this.sliderCount + 2) + 'px'
            this.sliderField.style.transform = `translateX(-${this.step * this.index}px)` 
        } else {
            this.sliderField.style.width = this.step * this.sliderCount + 'px'
            this.sliderField.style.transform = `translateX(-${this.step * this.index}px)` 
        } 
    }

    nextStep(btn) {
        btn.disabled = true
        this.sliderField.style.transition = `transform ${this.speed}ms ease-out`
        this.sliderField.style.transform = `translateX(-${this.step * this.index}px)` 
    }

    binds() {
            if(this.infinity) {
                this.btnNext.addEventListener('click', () => {
                    this.index++

                    if(this.index == this.sliderCount + 1) {
                        this.nextStep(this.btnNext)

                        setTimeout(() => {
                            this.index = 1
                            this.sliderField.style.transition = ''
                            this.btnNext.disabled = false
                            this.sliderField.style.transform = `translateX(-${this.step * this.index}px)` 
                        }, this.speed)
                    } else {
                        this.nextStep(this.btnNext)

                        setTimeout(() => {
                            this.btnNext.disabled = false
                            this.sliderField.style.transition = ''
                        }, this.speed)
                    }
                })

                this.btnPrev.addEventListener('click', () => {
                    this.index--

                    if(this.index <= 0) {
                        this.nextStep(this.btnPrev)

                        setTimeout(() => {
                            this.index = this.sliderCount 
                            this.sliderField.style.transition = ''
                            this.btnPrev.disabled = false
                            this.sliderField.style.transform = `translateX(-${this.step * this.index}px)` 
                        }, this.speed)
                    } else {
                        this.nextStep(this.btnPrev)

                        setTimeout(() => {
                            this.btnPrev.disabled = false
                            this.sliderField.style.transition = ''
                        }, this.speed)
                    }
                })

            } else {
                if(this.next){
                    this.btnNext.addEventListener('click', () => {
                        this.index++
    
                        if(this.index == this.sliderCount - 1) {
                            this.nextStep(this.btnNext)
                            
                            setTimeout(() => {
                                this.sliderField.style.transition = ''
                            }, this.speed)
                        } else {
                            this.nextStep(this.btnNext)
                            
                            setTimeout(() => {
                                this.btnNext.disabled = false
                                this.sliderField.style.transition = ''
                            }, this.speed)
                        }
    
                        this.btnPrev.disabled = false
                        this.btnPrev.style.opacity = 1
                    })
    
                    this.btnPrev.disabled = true
                    this.btnPrev.addEventListener('click', () => {
                        this.index--
    
                        if(this.index == 0) {
                            this.nextStep(this.btnPrev)
                        } else {
                            this.nextStep(this.btnPrev)
    
                            setTimeout(() => {
                                this.btnPrev.disabled = false
                                this.sliderField.style.transition = ''
                            }, this.speed)
                        }
    
                        this.btnNext.disabled = false
                        this.btnNext.style.opacity = 1
                    })
            }
        }

        if(this.pagination){
            this.paginationParent.addEventListener('click', e => {
                this.itemClick = e.target
                if(this.itemClick.classList.contains('pagination')){
                    this.index = this.itemClick.getAttribute('data-pagination')

                    clearTimeout(this.PaginationAnimateDelete)

                    for(let item of this.paginationParent.children) {
                        item.classList.remove(this.paginationItemActiveClass)
                    }

                    this.sliderField.style.transition = `transform ${this.speed}ms ease-out`
                    this.sliderField.style.transform = `translateX(-${this.index * this.step}px)`
                    this.itemClick.classList.add(this.paginationItemActiveClass)

                    this.PaginationAnimateDelete = setTimeout(() => {
                        this.sliderField.style.transition = ``
                    }, this.speed)
                }
            })
            
        }
    }

    resize() {
        window.addEventListener('resize', this.setParametres)
    }

}

/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/slider/ProductSlider.js":
/*!*******************************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/slider/ProductSlider.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "../../\u0000#SITES/tech/\u0000#src/js/modules/slider/slider.js");


class ProductSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor(container, next, prev, speed) {
        super(container, next, prev, speed)

        this.setParametres = this.setParametres.bind(this)
        this.binds = this.binds.bind(this)
        this.resize = this.resize.bind(this)
        this.touchMobile = this.touchMobile.bind(this)
        this.countStep = 1
        this.touchX = 0
        this.dragX = 0
        this.isDragging = false

        this.resize()
        this.setParametres()
        this.binds()
        this.touchMobile()

    }

    setParametres() {
        this.step = this.sliderChild[0].clientWidth
        this.sliderField.style.width = this.sliderCount * this.step + 'px'
        this.countStep = Math.floor(this.sliderWrapper.clientWidth / this.step)
        this.sliderField.style.transform = `translateX(-${this.step * this.index * this.countResize}px)` 
    }

    resize() {
        window.addEventListener('resize', this.setParametres)
    }

    nextStep(btn) {
        this.countResize = this.countStep
        this.maxNext = this.countStep * (this.index + 1)
        btn.disabled = true
        this.sliderField.style.transition = `transform ${this.speed}ms ease-out`
        this.sliderField.style.transform = `translateX(-${this.step * this.index * this.countStep}px)`
    }

    binds() {
        this.maxNext = 0
        this.btnPrev.disabled = true

        this.btnNext.addEventListener('click', () => {
            this.index++

            if(this.maxNext >= this.sliderCount) {
                this.btnNext.disabled = true
                this.index--
            } else {
                this.nextStep(this.btnNext)
                setTimeout(() => {
                    this.sliderField.style.transition = ''
                    this.btnNext.disabled = false
                }, this.speed)
            }

            this.btnPrev.disabled = false
        })

        this.btnPrev.addEventListener('click', () => {
            this.index--

            if(this.index <= 0) {
                this.nextStep(this.btnPrev)
            } else {
                this.nextStep(this.btnPrev)
                
                setTimeout(() => {
                    this.sliderField.style.transition = ''
                    this.btnPrev.disabled = false
                }, this.speed)
            }

            this.btnNext.disabled = false
        })
    }

    touchMobile() {
        this.sliderField.addEventListener('touchstart', this.touchStart, false)
        this.sliderField.addEventListener('touchmove', this.touchMove, false)
    }

    touchStart(e) {
        this.touchX = e.touches[0].pageX
    }

    touchMove(e) {
        if(!this.touchX) {
            return false
        }

        this.dragX = e.touches[0].pageX

        this.dragShift = this.dragX - this.touchX
        
        
    }

}


/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/slider/slider.js":
/*!************************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/slider/slider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
    constructor({
        container = null,
        next = null,
        prev = null,
        speed = 300,
        pagination = null,
        infinity = null
    }) 
    {
        this.container = document.querySelector(container)
        this.next = next
        this.prev = prev
        this.speed = speed
        this.pagination = pagination
        this.infinity = infinity
        this.sliderCount = this.container.childElementCount
        this.index = 0

        this.manageHTML = this.manageHTML.bind(this)

        this.manageHTML()
    }

    manageHTML() {
        this.sliderField = document.createElement('div')
        this.sliderField.classList.add('slider__field')
        this.sliderField.innerHTML = this.container.innerHTML
        this.sliderWrapper = document.createElement('div')
        this.sliderWrapper.classList.add('slider__wrapper')
        this.sliderWrapper.append(this.sliderField)
        this.container.innerHTML = ''
        this.container.append(this.sliderWrapper)
        this.sliderChild = this.sliderField.children

        if(this.next) {
            this.sliderBtnContainer = document.createElement('div')
            this.sliderBtnContainer.classList.add('slider__btns')
            this.sliderWrapper.append(this.sliderBtnContainer)

            this.btnNext = document.createElement('button')
            this.btnNext.classList.add('slider-next', this.next)
            this.btnPrev = document.createElement('button')
            this.btnPrev.classList.add('slider-prev', this.prev)
            this.sliderBtnContainer.append(this.btnPrev)
            this.sliderBtnContainer.append(this.btnNext)
        }

        if(this.pagination) {
            this.paginationParentClass = this.pagination[0]
            this.paginationItemClass = this.pagination[1]
            this.paginationItemActiveClass = this.pagination[2]
            
            this.paginationParent = document.createElement('ul')
            this.paginationParent.classList.add('paginations')
            this.paginationParent.classList.add(this.paginationParentClass)
            this.container.append(this.paginationParent)

            for(let i = 0; i < this.sliderCount; i++) {
                this.paginationItem = document.createElement('li')
                this.paginationItem.classList.add('pagination')
                this.paginationItem.classList.add(this.paginationItemClass)
                this.paginationItem.setAttribute('data-pagination', i)
                this.paginationParent.append(this.paginationItem)
            }
            this.paginationParent.children[0].classList.add(this.paginationItemActiveClass)
        }

        if(this.infinity) {
            this.firstSlide = this.sliderChild[0].cloneNode(true)
            this.lastSlide = this.sliderChild[this.sliderCount - 1].cloneNode(true)
            
            this.sliderField.insertAdjacentElement('beforeend', this.firstSlide)
            this.sliderField.insertAdjacentElement('afterbegin', this.lastSlide)
        }

    }

}

/***/ }),

/***/ "../../\u0000#SITES/tech/\u0000#src/js/modules/webpImg.js":
/*!******************************************************!*\
  !*** ../../ #SITES/tech/ #src/js/modules/webpImg.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const webpImg = () => {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webpImg);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ../../ #SITES/tech/ #src/js/main.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_webpImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webpImg */ "../../\u0000#SITES/tech/\u0000#src/js/modules/webpImg.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "../../\u0000#SITES/tech/\u0000#src/js/modules/header.js");
/* harmony import */ var _modules_closeWindows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/closeWindows */ "../../\u0000#SITES/tech/\u0000#src/js/modules/closeWindows.js");
/* harmony import */ var _modules_slider_InnerSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider/InnerSlider */ "../../\u0000#SITES/tech/\u0000#src/js/modules/slider/InnerSlider.js");
/* harmony import */ var _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider/ProductSlider */ "../../\u0000#SITES/tech/\u0000#src/js/modules/slider/ProductSlider.js");
/* harmony import */ var _modules_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Tabs */ "../../\u0000#SITES/tech/\u0000#src/js/modules/Tabs.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/footer */ "../../\u0000#SITES/tech/\u0000#src/js/modules/footer.js");
/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/cart */ "../../\u0000#SITES/tech/\u0000#src/js/modules/cart.js");
/* harmony import */ var _modules_pathCatalog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pathCatalog */ "../../\u0000#SITES/tech/\u0000#src/js/modules/pathCatalog.js");
/* harmony import */ var _modules_selects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/selects */ "../../\u0000#SITES/tech/\u0000#src/js/modules/selects.js");
/* harmony import */ var _modules_filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/filters */ "../../\u0000#SITES/tech/\u0000#src/js/modules/filters.js");












window.addEventListener('DOMContentLoaded', () => {
    //Настройка webp изображений
    (0,_modules_webpImg__WEBPACK_IMPORTED_MODULE_0__["default"])()
    //Меню адапитвное
    ;(0,_modules_header__WEBPACK_IMPORTED_MODULE_1__["default"])()

    //Слайдеры
   try {
    new _modules_slider_InnerSlider__WEBPACK_IMPORTED_MODULE_3__["default"]({
        container: '.inner2__slider',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500,
        infinity: true
    })

    new _modules_slider_InnerSlider__WEBPACK_IMPORTED_MODULE_3__["default"]({
        container: '.reviews__slider',
        speed: 500,
        pagination: ['reviews__paginations', 'reviews__pagination', 'reviews__pagination_active']
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.new-products__slider',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.custome__slider ',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.msi-laptops__slider_one',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.msi-laptops__slider_two',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.msi-laptops__slider_three',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.msi-laptops__slider_four',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.desctops__slider_one',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.desctops__slider_two',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.desctops__slider_three',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.desctops__slider_four',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new _modules_slider_ProductSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
        container: '.monitors__slider',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    //табы
    new _modules_Tabs__WEBPACK_IMPORTED_MODULE_5__["default"]('.msi-category', '.msi-categories', '.msi-laptops__slider')
    new _modules_Tabs__WEBPACK_IMPORTED_MODULE_5__["default"]('.desctops__category', '.desctops__categories', '.desctops__slider')
   } catch(e) {}
    
    //Футер аккордеон
    (0,_modules_footer__WEBPACK_IMPORTED_MODULE_6__["default"])()

    //Корзина
    ;(0,_modules_cart__WEBPACK_IMPORTED_MODULE_7__["default"])()

    //Путь на странице каталог
    ;(0,_modules_pathCatalog__WEBPACK_IMPORTED_MODULE_8__["default"])()

    //Селекты
    ;(0,_modules_selects__WEBPACK_IMPORTED_MODULE_9__["default"])()

    //Каталог фильтры
    ;(0,_modules_filters__WEBPACK_IMPORTED_MODULE_10__["default"])()

    //Закрывание всех окон при клике вне окна
    ;(0,_modules_closeWindows__WEBPACK_IMPORTED_MODULE_2__["default"])()
})


})();

/******/ })()
;
//# sourceMappingURL=script.js.map