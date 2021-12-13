const filters = () => {
    const filterBtns = document.querySelectorAll('.filters__btn')
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

export default filters