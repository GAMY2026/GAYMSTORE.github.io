```javascript
document.addEventListener("DOMContentLoaded", function () {

    let cart = [];

    const openCart = document.getElementById("openCart");
    const closeCart = document.getElementById("closeCart");
    const cartElement = document.getElementById("cart");
    const cartOverlay = document.getElementById("cartOverlay");

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    const addButtons = document.querySelectorAll(".add-cart");


    /* =========================
       OPEN CART
    ========================= */

    openCart.addEventListener("click", function () {

        cartElement.classList.add("active");
        cartOverlay.classList.add("active");

    });


    /* =========================
       CLOSE CART
    ========================= */

    closeCart.addEventListener("click", function () {

        cartElement.classList.remove("active");
        cartOverlay.classList.remove("active");

    });


    cartOverlay.addEventListener("click", function () {

        cartElement.classList.remove("active");
        cartOverlay.classList.remove("active");

    });


    /* =========================
       ADD PRODUCT
    ========================= */

    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product = button.closest(".product");

            const name =
                product.querySelector("h3").textContent.trim();

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
            cartOverlay.classList.add("active");

        });

    });


    /* =========================
       UPDATE CART
    ========================= */

    function updateCart() {

        cartItems.innerHTML = "";

        let total = 0;


        if (cart.length === 0) {

            cartItems.innerHTML = `
                <p class="empty-cart">
                    السلة فارغة حالياً
                </p>
            `;

        }


        cart.forEach(function (item, index) {

            total += item.price;


            const cartItem =
                document.createElement("div");

            cartItem.classList.add("cart-item");


            cartItem.innerHTML = `

                <div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        اللون: ${item.color}
                    </p>

                    <p>
                        المقاس: ${item.size}
                    </p>

                    <strong>
                        ${item.price} جنيه
                    </strong>

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


        /* =========================
           REMOVE PRODUCT
        ========================= */

        const removeButtons =
            document.querySelectorAll(".remove-item");


        removeButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const index =
                    parseInt(
                        button.getAttribute("data-index")
                    );


                cart.splice(index, 1);

                updateCart();

            });

        });

    }


    /* =========================
       INITIAL CART
    ========================= */

    updateCart();

});
```
