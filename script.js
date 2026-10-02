```javascript
document.addEventListener("DOMContentLoaded", function () {

    let cart = [];

    const cartButton = document.getElementById("openCart");
    const closeButton = document.getElementById("closeCart");
    const cartElement = document.getElementById("cart");
    const overlay = document.getElementById("cartOverlay");

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    const addButtons = document.querySelectorAll(".add-cart");


    /* فتح السلة */

    cartButton.addEventListener("click", function () {

        cartElement.classList.add("active");
        overlay.classList.add("active");

    });


    /* غلق السلة */

    closeButton.addEventListener("click", function () {

        cartElement.classList.remove("active");
        overlay.classList.remove("active");

    });


    /* غلق السلة عند الضغط خارج السلة */

    overlay.addEventListener("click", function () {

        cartElement.classList.remove("active");
        overlay.classList.remove("active");

    });


    /* إضافة المنتجات */

    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product = button.closest(".product");

            const name =
                product.querySelector("h3").textContent;

            const priceText =
                product.querySelector(".price").textContent;

            const price =
                parseInt(priceText.replace(/[^\d]/g, ""));

            const color =
                product.querySelector(".color").value;

            const size =
                product.querySelector(".size").value;


            if (color === "") {

                alert("من فضلك اختر اللون أولاً");

                return;

            }


            if (size === "") {

                alert("من فضلك اختر المقاس أولاً");

                return;

            }


            cart.push({
                name: name,
                price: price,
                color: color,
                size: size
            });


            updateCart();


            cartElement.classList.add("active");
            overlay.classList.add("active");

        });

    });


    /* تحديث السلة */

    function updateCart() {

        cartItems.innerHTML = "";

        let total = 0;


        cart.forEach(function (item, index) {

            total += item.price;


            const cartItem =
                document.createElement("div");

            cartItem.classList.add("cart-item");


            cartItem.innerHTML = `

                <div>

                    <h3>${item.name}</h3>

                    <p>اللون: ${item.color}</p>

                    <p>المقاس: ${item.size}</p>

                    <strong>${item.price} جنيه</strong>

                </div>

                <button
                    class="remove-item"
                    data-index="${index}">
                    حذف
                </button>

            `;


            cartItems.appendChild(cartItem);

        });


        cartCount.textContent = cart.length;

        cartTotal.textContent =
            total + " جنيه";


        /* أزرار الحذف */

        const removeButtons =
            document.querySelectorAll(".remove-item");


        removeButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const index =
                    button.getAttribute("data-index");

                cart.splice(index, 1);

                updateCart();

            });

        });

    }

});
```
