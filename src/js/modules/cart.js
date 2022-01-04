const cart = () => {
    
    const cartBtn = document.querySelector('.cart__btn')
    const cartContent = document.querySelector('.cart__content')
    const productsBtn = document.querySelectorAll('.product__add-to-cart')
    const cartList = document.querySelector('.cart-products')
    const fullPrice = document.querySelector('.cart__price span')
    const cartCount = document.querySelector('.cart__count')
    let price = 0
    let addCart = 0
    let countProduct = 0

    const priceWithoutSpaces = (str) => {
        return str.replace(/[^0-9,.]/g, ' ')
    };

    cartBtn.addEventListener('click', () => {
        cartContent.classList.toggle('cart__content_active')
    })

    const pricePlus = (currentPrice) => {
        return price += currentPrice
    }

    const minusPrice = (currentPrice) => {
        return price -= currentPrice
    }

    const printQuantity = () => {
        let leng = cartList.children.length
        cartCount.textContent = `${leng} item in cart`
        document.querySelector('.cart__quantity').textContent = leng
    }

    const printFullPrice = () => {
        fullPrice.textContent = price % 1 === 0 ? `$${price}.00` : `$${price}`
    }

    const generateCartProduct = (id, img, name, price) => {
        return `
            <li class="cart-products__item">
                <article class="cart-products__product" data-product="${id}" data-price="${price}">
                    <p class="cart-products__quantity">1 <span>x</span></p>
                    <div class="cart-products__img">
                        <img src="${img}" alt="">
                    </div>
                    <p class="cart-products__name">${name}</p>
                    <div class="cart-products__btns">
                        <button class="cart-products__delete">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="9.25" fill="white" stroke="#CACDD8" stroke-width="1.5"/>
                                <path d="M7 7L13.5 13.5" stroke="#A2A6B0" stroke-linecap="round"/>
                                <path d="M13.5 7L7 13.5" stroke="#A2A6B0" stroke-linecap="round"/>
                            </svg>
                        </button>
                        <button class="cart-products__edit">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10.9629" r="9.25" fill="white" stroke="#CACDD8" stroke-width="1.5"/>
                                <path d="M6.0472 15.7064H6.10254L8.66678 15.4727C8.94767 15.4448 9.21039 15.321 9.41083 15.1222L14.9452 9.58792C15.16 9.36099 15.276 9.05816 15.268 8.7458C15.2599 8.43343 15.1283 8.137 14.9021 7.92147L13.2172 6.23657C12.9973 6.03002 12.7092 5.9115 12.4076 5.90356C12.106 5.89563 11.812 5.99883 11.5815 6.19353L6.0472 11.7279C5.84843 11.9283 5.72467 12.191 5.69669 12.4719L5.43227 15.0361C5.42399 15.1262 5.43568 15.217 5.4665 15.302C5.49732 15.3871 5.54653 15.4643 5.6106 15.5281C5.66806 15.5851 5.7362 15.6302 5.81112 15.6608C5.88604 15.6914 5.96627 15.7069 6.0472 15.7064ZM12.3625 7.09747L14.0412 8.77621L12.8114 9.97532L11.1634 8.32732L12.3625 7.09747ZM6.88964 12.5764L10.3517 9.13902L12.012 10.7993L8.56839 14.2429L6.72361 14.4151L6.88964 12.5764Z" fill="#A2A6B0"/>
                            </svg>
                        </button>
                    </div>
                </article>
            </li>
        `
    }

    const countSum = () => {
        document.querySelectorAll('.cart-products__item').forEach(e => {
            price += parseInt(e.querySelector('.cart-products__product').getAttribute('data-price')) * parseInt(priceWithoutSpaces(e.querySelector('.cart-products__quantity').textContent))
        })
    }

    function initLocalStorage() {
        if (localStorage.getItem('products') !== null) {
            cartList.innerHTML = localStorage.getItem('products')
            printQuantity()
            countSum()
            printFullPrice()
        }
    }   

    initLocalStorage()

    const updateStorage = () => {
        let html = cartList.innerHTML
        html = html.trim()
        if(html.length) {
            localStorage.setItem('products', html)
        } else {
            localStorage.removeItem('products')
        }
    }
    
    productsBtn.forEach((item, i) => {
        item.closest('.product').setAttribute('data-product', i)

        item.addEventListener('click', e => {
            const self = e.target
            const parent = self.closest('.product')
            const itemId = parent.getAttribute('data-product')
            const itemImg = parent.querySelector('.product__img img').getAttribute('src')
            const itemName = parent.querySelector('.product__name').textContent
            const itemPrice = parseFloat(priceWithoutSpaces(parent.querySelector('.product__current-price').textContent))
            const itemsLength = document.querySelector('.cart-products').children
            addCart = 0

            pricePlus(itemPrice)
            printFullPrice()
            if(itemsLength.length > 0) {
                for (let el of itemsLength) {
                    if(itemId === el.querySelector('.cart-products__product').getAttribute('data-product')) {
                        el.querySelector('.cart-products__quantity').textContent = parseInt(priceWithoutSpaces(el.querySelector('.cart-products__quantity').textContent)) + 1 + ' x'
                        addCart = 1
                    }
                }
            } 

            if (addCart === 0) {
                cartList.insertAdjacentHTML('afterbegin', generateCartProduct(itemId, itemImg, itemName, itemPrice))
            }
            updateStorage()
            printQuantity()
            
        })
    })

    cartList.addEventListener('click', e => {
        if (e.target.classList.contains('cart-products__delete')) {
            const parent = e.target.closest('.cart-products__item')
            const countProducts = parseInt(priceWithoutSpaces(parent.querySelector('.cart-products__quantity').textContent))
            let currentPrice = parent.querySelector('.cart-products__product').getAttribute('data-price') * countProducts
            
            minusPrice(currentPrice)
            parent.style.transform = `translateX(-${parent.clientWidth}px)`
            setTimeout(() => {
                printFullPrice()
                parent.remove()
                printQuantity()
                updateStorage()
            }, 300)
        }
    })
}

export default cart;