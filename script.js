```javascript
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENTS
    ========================= */

    const elements = {
        openCart: document.getElementById("openCart"),
        closeCart: document.getElementById("closeCart"),
        cart: document.getElementById("cart"),
        overlay: document.getElementById("cartOverlay"),

        cartItems: document.getElementById("cartItems"),
        cartCount: document.getElementById("cartCount"),
        cartTotal: document.getElementById("cartTotal"),

        addButtons: document.querySelectorAll(".add-cart")
    };


    /* =========================
       CART DATA
    ========================= */

    let cart = [];


    /* =========================
       OPEN CART
    ========================= */

    function openCart() {
        elements.cart.classList.add("active");
        elements.overlay.classList.add("active");
    }


    /* =========================
       CLOSE CART
    ========================= */

    function closeCart() {
        elements.cart.classList.remove("active");
        elements.overlay.classList.remove("active");
    }


    /* =========================
       ADD PRODUCT
    ========================= */

    function addProduct(button) {

        const product = button.closest(".product");

        if (!product) {
            return;
        }


        const name =
            product.querySelector("h3").textContent.trim();


        const priceText =
            product.querySelector(".price").textContent;


        const price =
            parseInt(
                priceText.replace(/[^\d]/g, ""),
                10
            );


        const color =
            product.querySelector(".color").value;


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


        updateCart();

        openCart();
    }


    /* =========================
       UPDATE CART
    ========================= */

    function updateCart() {

        elements.cartItems.innerHTML = "";

        let total = 0;


        /* EMPTY CART */

        if (cart.length === 0) {

            elements.cartItems.innerHTML = `
                <p class="empty-cart">
                    السلة فارغة حالياً
                </p>
            `;

            elements.cartCount.textContent = "0";
            elements.cartTotal.textContent = "0 جنيه";

            return;
        }


        /* CART PRODUCTS */

        cart.forEach(function (item, index) {

            total += item.price;


            const cartItem =
                document.createElement("div");

            cartItem.className = "cart-item";


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


            elements.cartItems.appendChild(cartItem);

        });


        /* UPDATE COUNT */

        elements.cartCount.textContent =
            cart.length;


        /* UPDATE TOTAL */

        elements.cartTotal.textContent =
            total + " جنيه";
    }


    /* =========================
       REMOVE PRODUCT
    ========================= */

    function removeProduct(index) {

        cart.splice(index, 1);

        updateCart();
    }


    /* =========================
       EVENTS
    ========================= */

    elements.openCart.addEventListener(
        "click",
        openCart
    );


    elements.closeCart.addEventListener(
        "click",
        closeCart
    );


    elements.overlay.addEventListener(
        "click",
        closeCart
    );


    /* ADD BUTTONS */

    elements.addButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {
                addProduct(button);
            }
        );

    });


    /* REMOVE BUTTONS */

    elements.cartItems.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList.contains(
                    "remove-item"
                )
            ) {

                const index =
                    parseInt(
```
