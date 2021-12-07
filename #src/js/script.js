document.addEventListener('DOMContentLoaded', () => {
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
    const menuItems = document.querySelectorAll('.item-js')
    const menuBack = document.querySelector('.menu__back')
    let menuListWidth = menuList.clientWidth
    let step = 0
    let stepBack = 0
    
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
        if(!e.target.closest('.cart__content_active') && !e.target.closest('.cart__btn') && !e.target.closest('.cart-products__delete') && !e.target.closest('.cart-products__edit')) {
            cartContent.classList.remove('cart__content_active')
        }
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
    
    
    //sliders
    
    // function sliderMain(wrapperSelector, fieldSelector, slidesSelector, leftSelector, rightSelector, nameClasss,speed) {
    //     const sliderWrapper = document.querySelector(wrapperSelector)
    //     const sliderField = document.querySelector(fieldSelector)
    //     const slides = document.querySelectorAll(slidesSelector)
    //     const leftBtn = document.querySelector(leftSelector)
    //     const rightBtn = document.querySelector(rightSelector)
    //     let step = sliderWrapper.clientWidth
    //     let count = 1
    
    //     sliderField.style.width = `${step * (slides.length + 2)}px`
    //     const elemEnd = document.createElement('div')
    //     elemEnd.classList.add(nameClasss)
    //     elemEnd.innerHTML = slides[0].innerHTML
    //     sliderField.append(elemEnd)
    //     const elemFirst = document.createElement('div')
    //     elemFirst.classList.add(nameClasss)
    //     elemFirst.innerHTML = slides[slides.length - 1].innerHTML
    //     sliderField.insertAdjacentElement('afterbegin', elemFirst)
    
    //     sliderField.style.transform = `translateX(-${step * count}px)`
    
    //     window.addEventListener('resize', () => {
    //         step = sliderWrapper.clientWidth
    //         sliderField.style.width = `${step * (slides.length + 2)}px`
    //         sliderField.style.transform = `translateX(-${step * count}px)`
    //     })
    
    //     rightBtn.addEventListener('click', () => {
    //         count++
    
    //         sliderField.style.transition = 'all 0.3s ease-out'
    //         sliderField.style.transform = `translateX(-${step * count}px)`
    //         rightBtn.disabled = true
    //         setTimeout(() => {
    //             rightBtn.disabled = false
    //             sliderField.style.transition = ''
    //         }, speed)
    
    //         if (count == (slides.length + 2) - 1) {
    //             count = 1
    //             setTimeout(() => {
    //                 sliderField.style.transform = `translateX(-${step * count}px)`
    //             }, speed)
    //         }
    //     })
        
    //     leftBtn.addEventListener('click', () => {
    //         count--
    //         sliderField.style.transition = 'all 0.3s ease-out'
    //         sliderField.style.transform = `translateX(-${step * count}px)`
    
    //         leftBtn.disabled = true
    //         setTimeout(() => {
    //             leftBtn.disabled = false
    //             sliderField.style.transition = ''
    //         }, speed)
    
    //         if (count == 0) {
    //             count = slides.length
    //             setTimeout(() => {
    //                 sliderField.style.transform = `translateX(-${step * count}px)`
    //             }, speed)
    //         }
    //     })
        
    // }
    
    // function sliderSmall(fieldSelector, slidesSelector, leftSelector, rightSelector, speed, wrapperSelector = '', adaptiv = false) {
    //     const sliderField = document.querySelector(fieldSelector)
    //     const slides = document.querySelectorAll(slidesSelector)
    //     const leftBtn = document.querySelector(leftSelector)
    //     const rightBtn = document.querySelector(rightSelector)
    //     const wrapper = document.querySelector(wrapperSelector)
    //     let step = 0
    //     let widthSlides = slides[0].clientWidth * slides.length

    //     if(adaptiv) {
    //         step = wrapper.clientWidth
    //         widthSlides = step * slides.length
    //         window.addEventListener('resize', () => {
    //             step = wrapper.clientWidth

    //             widthSlides = step * slides.length

    //             sliderField.style.width = `${step * (slides.length + 2)}px`
    //             sliderField.style.transform = `translateX(${-step}px)`
    //         })
            
    //     } else {
    //         step = slides[0].clientWidth
    //         window.addEventListener('resize', () => {
    //             step = slides[0].clientWidth
    //             sliderField.style.transform = `translateX(${-step}px)`
    //         })
    //     }
        
    //     if(widthSlides >= (wrapper.clientWidth)) {
            
    //         const elemLast = slides[0].cloneNode(true)
    //         sliderField.append(elemLast)
        
    //         const elemFirst = slides[slides.length - 1].cloneNode(true)
    //         sliderField.insertAdjacentElement('afterbegin', elemFirst)
        
    //         sliderField.style.width = `${step * (slides.length + 2)}px`
    //         sliderField.style.transform = `translateX(${-step}px)`
        
    //         rightBtn.addEventListener('click', () => {
        
    //             sliderField.style.transition = `all ${speed}ms ease-out`
    //             sliderField.style.transform = `translateX(-${step * 2}px)`
    //             rightBtn.disabled = true
    //             const slides2 = document.querySelectorAll(slidesSelector)
    //             setTimeout(() => {
    //                 const elemLast = slides2[2].cloneNode(true)
    //                 sliderField.append(elemLast)
    //                 slides2[0].remove()
    //                 sliderField.style.transition = ''
    //                 rightBtn.disabled = false
    //                 sliderField.style.transform = `translateX(-${step}px)`
    //             }, speed)
    //         })
    //         leftBtn.addEventListener('click', () => {
    //             sliderField.style.transition = `all ${speed}ms ease-out`
    //             sliderField.style.transform = `translateX(0px)`
    //             leftBtn.disabled = true
    //             const slides2 = document.querySelectorAll(slidesSelector)
    //             setTimeout(() => {
        
    //                 const elemFirst = slides2[slides2.length - 3].cloneNode(true)
    //                 sliderField.insertAdjacentElement('afterbegin', elemFirst)
    //                 slides2[slides2.length - 1].remove()
    //                 leftBtn.disabled = false
    //                 sliderField.style.transition = ''
    //                 sliderField.style.transform = `translateX(-${step}px)`
        
    //             }, speed)
    //         })
    //     } else {
    //         leftBtn.style.display = 'none'
    //         rightBtn.style.display = 'none'
    //     }
    
        
    // }
    
    // // sliderMain('.inner-slider__wrapper', '.inner-slider__field', '.inner-slider__slide', '.inner-slider__left', '.inner-slider__rigth', 'inner-slider__slide',500)
    
    // sliderSmall('.products-slider__field', '.product-slider__item', '.products-slider__left', '.products-slider__right', 500, '.products-slider__wrapper')
    // sliderSmall('.inner-slider__field', '.inner-slider__slide', '.inner-slider__left', '.inner-slider__right', 500, '.inner-slider__wrapper', true)
    
    
    // function slider(wrapperSelector, fieldSelector, slidesSelector, leftSelector, rightSelector, speed = 300, fullWidth = null, paginationSelector = null) {
    //     const sliderField = document.querySelector(fieldSelector)
    //     const slides = document.querySelectorAll(slidesSelector)
    //     const wrapper = document.querySelector(wrapperSelector)
    //     let step = 0
    //     let count = 0
    //     let endSlide = 0
    //     let slideLength = slides.length
    //     let slideWidth
        

    //     if (fullWidth) {
    //         slideWidth = wrapper.clientWidth
    //         endSlide = slides.length - 1
    //         window.addEventListener('resize', () => {
    //             slideWidth = wrapper.clientWidth
    //             sliderField.style.width = `${slideLength * slideWidth}px`
    //             sliderField.style.transform = `translate(${-slideWidth * count}px)`
    //         })
    //     } else {
    //         slideWidth = slides[0].clientWidth
    //         endSlide = Math.floor(wrapper.clientWidth / slideWidth)
    //         endSlide = slideLength - endSlide
            
    //     }

    //     sliderField.style.width = `${slideLength * slideWidth}px`

    //     if(leftSelector) {
    //         const leftBtn = document.querySelector(leftSelector)
    //         const rightBtn = document.querySelector(rightSelector)
    //         rightBtn.addEventListener('click', () => {
    //             sliderField.style.transition = `transform ${speed}ms ease-out`
    //             rightBtn.disabled = true
    //             count++
    //             if(count >= endSlide) {
    //                 rightBtn.disabled = true
    //                 rightBtn.style.opacity = 0.5
    //                 setTimeout(() => {
    //                     sliderField.style.transition = ``
    //                 }, speed)
    //             } else {
    //                 setTimeout(() => {
    //                     sliderField.style.transition = ``
    //                     rightBtn.disabled = false
    //                 }, speed)
    //             }
    //             leftBtn.disabled = false
    //             leftBtn.style.opacity = 1
    //             step = count * slideWidth
    //             sliderField.style.transform = `translate(${-step}px)`
    
    //         })
    
    //         leftBtn.disabled = true
    //         leftBtn.addEventListener('click', () => {
    //             count--
    //             leftBtn.disabled = true
    //             sliderField.style.transition = `transform ${speed}ms ease-out`
    //             if(count == 0) {
    //                 leftBtn.disabled = true
    //                 leftBtn.style.opacity = 0.5
    //             } else {
    //                 setTimeout(() => {
    //                     sliderField.style.transition = ``
    //                     leftBtn.disabled = false
    //                 }, speed)
    //             }
    //             rightBtn.disabled = false
    //             rightBtn.style.opacity = 1
    //             step = count * slideWidth
    //             sliderField.style.transform = `translate(${-step}px)`
    //             setTimeout(() => {
    //                 sliderField.style.transition = ``
    //             }, speed)
    //         })
    //     }

    //     if(paginationSelector) {
    //         const paginationParent = document.querySelector(paginationSelector)

    //         for (let i = 0; i < slides.length; i++) {
    //             const paginat = document.createElement('li')
    //             paginat.classList.add('reviews__pagination')
    //             paginat.setAttribute('data-index', i)

    //             paginationParent.append(paginat)
    //         }

    //         paginationParent.children[0].classList.add('reviews__pagination_active')

    //         paginationParent.addEventListener('click', e => {
    //             if(e.target.getAttribute('data-index')) {
    //                 count = e.target.getAttribute('data-index')

    //                 document.querySelectorAll('.reviews__pagination').forEach(item => {
    //                     item.classList.remove('reviews__pagination_active')
    //                 })

    //                 e.target.classList.add('reviews__pagination_active')

    //                 sliderField.style.transform = `translateX(-${count * slideWidth}px)`
    //             }
    //         })
    //     }
    // }

    // // slider('.inner-slider__wrapper', '.inner-slider__field', '.inner-slider__slide', '.inner-slider__left', '.inner-slider__right', 500, true)
    // slider('.products-slider__wrapper', '.products-slider__field', '.product-slider__item', '.products-slider__left', '.products-slider__right', 500)
    // slider('.custome__wrapper', '.custome__field', '.custome__item', '.custome-slider__left', '.custome-slider__right', 300)
    // slider('.msi-laptops__wrapper', '.msi-laptops__field', '.msi-laptops__item', '.msi-laptops__left', '.msi-laptops__right', 500)
    // slider('.laptops__wrapper', '.laptops__field', '.laptops__item', '.desctops-slider__left', '.desctops-slider__right', 500)
    // slider('.monitors__wrapper', '.monitors__field', '.monitors__item', '.monitors__left', '.monitors__right', 500)
    // slider('.reviews__wrapper', '.reviews__field', '.reviews__item', null, null, 500, true, '.reviews__paginations')

    class Slider {
        constructor({
            container = null,
            next = null,
            prev = null,
            speed = 300
        }) 
        {
            this.container = document.querySelector(container)
            this.next = next
            this.prev = prev
            this.speed = speed
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

        }

    }

    class InnerSlider extends Slider{
        constructor(container, next, prev, speed) {
            super(container, next, prev, speed)

            this.setParametres = this.setParametres.bind(this)
            this.binds = this.binds.bind(this)
            this.resize = this.resize.bind(this)

            this.setParametres()
            this.binds()
            this.resize()
        }

        setParametres() {
            this.step = this.sliderWrapper.clientWidth
            this.sliderField.style.width = this.step * this.sliderCount + 'px'
            this.sliderField.style.transform = `translateX(-${this.step * this.index}px)` 
        }

        nextStep(btn) {
            btn.disabled = true
            this.sliderField.style.transition = `transform ${this.speed}ms ease-out`
            this.sliderField.style.transform = `translateX(-${this.step * this.index}px)` 
        }

        binds() {
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

        

        resize() {
            window.addEventListener('resize', this.setParametres)
        }

    }

    class ProductSlider extends Slider{
        constructor(container, next, prev, speed) {
            super(container, next, prev, speed)

            this.setParametres = this.setParametres.bind(this)
            this.binds = this.binds.bind(this)
            this.resize = this.resize.bind(this)
            this.countStep = 1

            this.resize()
            this.setParametres()
            this.binds()
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

    }

    new InnerSlider({
        container: '.inner2__slider',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })

    new ProductSlider({
        container: '.new-products__slider',
        next: 'slider__main-next',
        prev: 'slider__main-left',
        speed: 500
    })


    //табы с помощью класса
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

    new Tabs('.msi-category', '.msi-categories', '.msi-laptops__slider')
    new Tabs('.desctops__category', '.desctops__categories', '.laptops__slider')

    //footer
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

    //корзина

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

    
})