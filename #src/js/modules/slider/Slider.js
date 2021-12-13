export default class Slider {
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