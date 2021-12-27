const filters = () => {
    const filterBtns = document.querySelectorAll('.filters__btn')
    const filterOpenBtn = document.querySelector('.catalog-top__btn')
    const filters = document.querySelector('.filters')
    const filtersClose = document.querySelector('.filters__close')

    filterOpenBtn.addEventListener('click', () => {
        filters.classList.toggle('active')

        if(filters.classList.contains('active')){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = '';
        }
    })

    filtersClose.addEventListener('click', (e) => {
        e.preventDefault()
        filters.classList.remove('active')
        document.body.style.overflow = '';
    })

    filterBtns.forEach(item => {

        if(document.body.classList.contains('_touch')){
            item.nextElementSibling.style.maxHeight = 0 + 'px'
        } else {
            item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px'
        }

        item.addEventListener('click', (e) => {
            e.preventDefault()
            const el = item.nextElementSibling
            el.classList.toggle('active')
            if(el.classList.contains('active')) {
                if(document.body.classList.contains('_touch')){
                    el.style.maxHeight = el.scrollHeight + 'px'
                } else {
                    el.style.maxHeight = 0
                }

            } else {
                if(document.body.classList.contains('_touch')){
                    el.style.maxHeight = 0
                } else {
                    el.style.maxHeight = el.scrollHeight + 'px'
                }
            }
        })
    })

}

export default filters