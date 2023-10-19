let carts = document.querySelectorAll(".addtocart");
let btnAddCartPageProduct = document.querySelectorAll("add-product");
let products = [{
        name: "Nike Dri-FIT ADV A.P.S.",
        tag: '1',
        price: 1839000 + 'đ',
        inCart: 0,
    },
    {
        name: "Naomi Osaka",
        tag: '2',
        price: 1739000 + 'đ',
        inCart: 0,
    },
    {
        name: "Nike Dri-FIT",
        tag: '3',
        price: 819000 + 'đ',
        inCart: 0,
    },
    {
        name: "Air Jordan 1 Mid SE",
        tag: '4',
        price: 14772870 + 'đ',
        inCart: 0,
    },
    {
        name: "Nike Air Huarache",
        tag: '5',
        price: 2257201 + 'đ',
        inCart: 0,
    },
    {
        name: "LeBron XX",
        tag: '6',
        price: 3493901 + 'đ',
        inCart: 0,
    },
    {
        name: "Nike Air Max Pulse",
        tag: '7',
        price: 3493901 + 'đ',
        inCart: 0,
    },
    {
        name: "Nike Dunk High Retro Premium",
        tag: '8',
        price: 730436 + 'đ',
        inCart: 0,
    },
    {
        name: "Nike Air Force 1 '07",
        tag: '9',
        price: 2263297 + 'đ',
        inCart: 0,
    },
    {
        name: "Nike Court Vision Low",
        tag: '10',
        price: 1558890 + 'đ',
        inCart: 0,
    },
    // Demo 10 cái
]


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector(".quanlity").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector(".quanlity").textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(".quanlity").textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;

        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    if (cartCost != null && !isNaN(parseInt(cartCost))) {
        cartCost = parseInt(cartCost);
        product.price = parseInt(product.price);
        localStorage.setItem("totalCost", cartCost + product.price + "đ");
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    const productRow = document.querySelector('.productInCart');
    const productRow1 = document.querySelector("tfoot");
    let cartCost = localStorage.getItem("totalCost");
    console.log(cartItems);
    if (cartItems && productRow && productRow1) {
        productRow.innerHTML = '';
        productRow1.innerHTML = '';
        Object.values(cartItems).map(item => {
            item.price = parseInt(item.price);
            productRow.innerHTML += `
            <tr>
            <td>${item.name}</td>
            <td class="img-total"><img src="/img/men-img${item.tag}.webp" alt=""></td>
            <td>${item.price}</td>
            <td>${item.inCart}</td>
            <td>${item.price * item.inCart}</td>
        </tr>
      `

            productRow1.innerHTML = `
        <tr>
           <td colspan="3" style="font-weight: bold;">Tổng cộng:</td>
            <td id="total" style="font-weight: bold;">${cartCost}</td>
            <td><a onclick="window.location.href='pay_cart.html'"><button class="btnCart" onclick="checkout()">Đến Thanh Toán</button></a></td>
        </tr>
      `
        })
    }
}


function displayCart1() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    const pay1 = document.querySelector(".addthanhtoan1");
    const pay2 = document.querySelector(".mainn");
    const pay3 = document.querySelector(".total");
    let cartCost = localStorage.getItem("totalCost");
    console.log(cartItems);
    if (cartItems && pay1 && pay2 && pay3) {
        pay1.innerHTML = '';
        pay2.innerHTML = '';
        pay3.innerHTML = '';
        Object.values(cartItems).map(item => {
            item.price = parseInt(item.price);
            pay1.innerHTML += `
                <div>
                    <td><img src="/img/men-img${item.tag}.webp" alt=""> </td>
                    <td><span id="name">${item.name}</span></td>
                    <td> <span id="price">${item.price.toLocaleString()}<sup>đ</sup></span></td>
                </div>
            `;

            pay2.innerHTML = `
                <table>
                    <tbody>
                        <tr>
                            <td>Temporary</td>
                            <td id="left130">${cartCost}<sup>đ</sup></td>
                        </tr>
                        <tr>
                            <td>Transport fee</td>
                            <td id="left130">-</td>
                        </tr>
                    </tbody>
                </table>
            `

            pay3.innerHTML = `
            <table>
            <tbody>
                <tr>
                    <td>Total</td>
                    <td id="left250">${cartCost}<sup>đ</sup></td>
                </tr>
            </tbody>
        </table>
            `
        });
    }

    console.log(pay1);
}


displayCart1();
onloadCartNumbers();
displayCart();