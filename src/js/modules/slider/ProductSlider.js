import Slider from "./slider.js";

export default class ProductSlider extends Slider{
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
