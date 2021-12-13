const closeWindows = () => {

    const scedule = document.querySelector('.schedule')
    const profileMenu = document.querySelector('.profile__list')
    const cartContent = document.querySelector('.cart__content')

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
}

export default closeWindows;