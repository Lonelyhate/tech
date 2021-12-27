const textGradient = () => {
    const gradientBtn = document.querySelector('.paragraph__btn')
    const gradientText = document.querySelector('.paragraph__text')
    let gradientHeigth = gradientText.scrollHeight

    gradientText.style.maxHeight = `${gradientHeigth - (gradientHeigth / 3)}px`

    window.addEventListener('resize', () => {
        gradientHeigth = gradientText.scrollHeight
        if(gradientText.classList.contains('more')) {
            gradientText.style.maxHeight = gradientHeigth + 'px'
        }
    })

    gradientBtn.addEventListener('click', () => {
        gradientText.classList.add('more')
        gradientText.style.maxHeight = gradientHeigth + 'px'
        gradientBtn.remove()
    })
}

export default textGradient