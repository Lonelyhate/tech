import Slider from "./slider.js"

export default class InnerSlider extends Slider{
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