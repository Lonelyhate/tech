const productAbout = () => {
    const mediaQuery730 = window.matchMedia('(max-width: 730px)')
    const aboutTabsNames = document.querySelector('.product-header__names')
    const productLeft = document.querySelector('.product-middle__left')
    const productHeader = document.querySelector('.product-about__container')
    const productSum = document.querySelector('.product-header__sum')

    function media730(e) {
        if(e.matches) {
            productLeft.insertAdjacentElement('afterbegin', aboutTabsNames)
            productHeader.append(productSum)
        } else {
            productHeader.insertAdjacentElement('afterbegin', aboutTabsNames)
        }
    }

    mediaQuery730.addListener(media730)
    media730(mediaQuery730)
}


export default productAbout