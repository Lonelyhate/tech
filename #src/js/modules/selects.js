const select = () => {
    const selectHeader = document.querySelectorAll('.select__header')
    const selectItem = document.querySelectorAll('.select__item')

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    })

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    })

    function selectToggle(e) {
        e.currentTarget.parentElement.classList.toggle('is-active')
    }

    function selectChoose(e) {
        let value = e.currentTarget.getAttribute('data-select')
        let currentText = e.currentTarget.innerHTML
        let parentValue = e.currentTarget.closest('.select').querySelector('.select__curent').getAttribute('data-select')
        let parentText = e.currentTarget.closest('.select').querySelector('.select__curent').innerHTML

        e.currentTarget.closest('.select').querySelector('.select__curent').innerHTML = currentText
        e.currentTarget.closest('.select').querySelector('.select__curent').setAttribute('data-select', value)

        e.currentTarget.setAttribute('data-select', parentValue)
        e.currentTarget.innerHTML = parentText

        e.currentTarget.closest('.select').classList.remove('is-active')
    }
}

export default select;