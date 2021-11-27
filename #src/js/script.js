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
    
    
    function slider(wrapperSelector, fieldSelector, slidesSelector, leftSelector, rightSelector, speed = 300, fullWidth = null) {
        const sliderField = document.querySelector(fieldSelector)
        const slides = document.querySelectorAll(slidesSelector)
        const leftBtn = document.querySelector(leftSelector)
        const rightBtn = document.querySelector(rightSelector)
        const wrapper = document.querySelector(wrapperSelector)
        let step = 0
        let count = 0
        let endSlide = 0
        let slideLength = slides.length
        let slideWidth
        

        if (fullWidth) {
            slideWidth = wrapper.clientWidth
            endSlide = slides.length - 1
            window.addEventListener('resize', () => {
                slideWidth = wrapper.clientWidth
                sliderField.style.width = `${slideLength * slideWidth}px`
                sliderField.style.transform = `translate(${-slideWidth * count}px)`
            })
        } else {
            slideWidth = slides[0].clientWidth
            endSlide = Math.floor(wrapper.clientWidth / slideWidth)
            endSlide = slideLength - endSlide
            
        }

        sliderField.style.width = `${slideLength * slideWidth}px`

        rightBtn.addEventListener('click', () => {
            sliderField.style.transition = `transform ${speed}ms ease-out`
            rightBtn.disabled = true
            count++
            if(count >= endSlide) {
                rightBtn.disabled = true
                rightBtn.style.opacity = 0.5
                setTimeout(() => {
                    sliderField.style.transition = ``
                }, speed)
            } else {
                setTimeout(() => {
                    sliderField.style.transition = ``
                    rightBtn.disabled = false
                }, speed)
            }
            leftBtn.disabled = false
            leftBtn.style.opacity = 1
            step = count * slideWidth
            sliderField.style.transform = `translate(${-step}px)`

        })

        leftBtn.disabled = true
        leftBtn.addEventListener('click', () => {
            count--
            leftBtn.disabled = true
            sliderField.style.transition = `transform ${speed}ms ease-out`
            if(count == 0) {
                leftBtn.disabled = true
                leftBtn.style.opacity = 0.5
            } else {
                setTimeout(() => {
                    sliderField.style.transition = ``
                    leftBtn.disabled = false
                }, speed)
            }
            rightBtn.disabled = false
            rightBtn.style.opacity = 1
            step = count * slideWidth
            sliderField.style.transform = `translate(${-step}px)`
            setTimeout(() => {
                sliderField.style.transition = ``
            }, speed)
        })
    }

    slider('.inner-slider__wrapper', '.inner-slider__field', '.inner-slider__slide', '.inner-slider__left', '.inner-slider__right', 500, true)
    slider('.products-slider__wrapper', '.products-slider__field', '.product-slider__item', '.products-slider__left', '.products-slider__right', 500)
    slider('.custome__wrapper', '.custome__field', '.custome__item', '.custome-slider__left', '.custome-slider__right', 300)
    slider('.msi-laptops__wrapper', '.msi-laptops__field', '.msi-laptops__item', '.msi-laptops__left', '.msi-laptops__right', 500)
    slider('.laptops__wrapper', '.laptops__field', '.laptops__item', '.desctops-slider__left', '.desctops-slider__right', 500)
    slider('.monitors__wrapper', '.monitors__field', '.monitors__item', '.monitors__left', '.monitors__right', 500)


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
    
})