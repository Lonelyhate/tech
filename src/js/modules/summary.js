const summary = () => {
    const summaryItems = document.querySelectorAll('.summary__subtitle')

    summaryItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault()
            const itemContent = item.closest('.summary__item').querySelector('.summary__content')
            item.classList.toggle('active')        

            if(item.classList.contains('active')){
                itemContent.style.maxHeight = itemContent.scrollHeight + 'px'
            } else {
                itemContent.style.maxHeight = 0
            }
        })
    })
}

export default summary