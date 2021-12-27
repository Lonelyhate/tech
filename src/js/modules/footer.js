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

export default footer;