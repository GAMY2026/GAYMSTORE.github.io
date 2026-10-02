```javascript
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CART DATA
    ========================= */

    let cart = [];


    /* =========================
       ELEMENTS
    ========================= */

    const cartButton =
        document.getElementById("openCart");

    const closeButton =
        document.getElementById("closeCart");

    const cartElement =
        document.getElementById("cart");

    const overlay =
        document.getElementById("cartOverlay");

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    const addButtons =
        document.querySelectorAll(".add-cart");


    /* =========================
       OPEN CART
    ========================= */

    cartButton.addEventListener("click", function () {

        cartElement.classList.add("active");

        overlay.classList.add("active");

    });


    /* =========================
       CLOSE CART
    ========================= */

    closeButton.addEventListener("click", function () {

        cartElement.classList.remove("active");

        overlay.classList.remove("active");

    });


    /* =========================
       CLOSE BY OVERLAY
    ========================= */

    overlay.addEventListener("click", function () {

        cartElement.classList.remove("active");

        overlay.classList.remove("active");

    });


    /* =========================
       ADD PRODUCT
    ========================= */

    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product =
                button.closest(".product");


            /* PRODUCT NAME */

            const name =
                product.querySelector("h3").textContent;


            /* PRICE */

            const priceText =
                product.querySelector(".price").textContent;


            const price =
                parseInt(
                    priceText.replace(/[^\d]/g, "")
                );


            /* COLOR */

            const color =
                product.querySelector(".color").value;


            /* SIZE */

            const size =
                product.querySelector(".size").value;


            /* CHECK COLOR */

            if (color === "") {

                alert("من فضلك اختر اللون أولاً");

                return;
            }


            /* CHECK SIZE */

            if (size === "") {

                alert("من فضلك اختر المقاس أولاً");

                return;
            }


            /* ADD TO CART */

            cart.push({

                name: name,

                price: price,

                color: color,

                size: size

            });


            /* UPDATE */

            updateCart();


            /* OPEN CART */

            cartElement.classList.add("active");

            overlay.classList.add("active");

        });

    });


    /* =========================
       UPDATE CART
    ========================= */

    function updateCart() {

        cartItems.innerHTML = "";

        let total = 0;


        /* EMPTY CART */

        if (cart.length === 0) {

            cartItems.innerHTML = `
                <p class="empty-cart">
                    السلة فارغة
                </p>
            `;

        }


        /* PRODUCTS */

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


        /* COUNT */

        cartCount.textContent =
            cart.length;


        /* TOTAL */

        cartTotal.textContent =
            total + " جنيه";


        /* =========================
           REMOVE BUTTONS
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
