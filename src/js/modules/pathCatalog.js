const pathCatalog = () => {
    const menuList = document.querySelector('.menu__list')
    const contactUs = document.querySelectorAll('.header-top__contsctus')
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

    contactUs.forEach(item => {
        item.addEventListener('click', (e) => {
            pathLink = []
            pathLink.push('Contact Us')
            localStorage.setItem('links-catalog', pathLink)
        })
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

export default pathCatalog