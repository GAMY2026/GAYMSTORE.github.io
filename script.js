document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       CART
       ========================================= */

    let cartItemsArray = [];

    const openCart = document.getElementById("openCart");
    const closeCart = document.getElementById("closeCart");
    const cart = document.getElementById("cart");
    const cartOverlay = document.getElementById("cartOverlay");

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");


    /* =========================================
       OPEN CART
       ========================================= */

    openCart.addEventListener("click", function () {

        cart.classList.add("active");
        cartOverlay.classList.add("active");

    });


    /* =========================================
       CLOSE CART
       ========================================= */

    closeCart.addEventListener("click", function () {

        cart.classList.remove("active");
        cartOverlay.classList.remove("active");

    });


    /* =========================================
       CLOSE CART BY OVERLAY
       ========================================= */

    cartOverlay.addEventListener("click", function () {

        cart.classList.remove("active");
        cartOverlay.classList.remove("active");

    });


    /* =========================================
       ADD PRODUCTS TO CART
       ========================================= */

    const addButtons =
        document.querySelectorAll(".add-cart");


    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product =
                button.closest(".product");


            if (!product) {
                return;
            }


            const name =
                product.querySelector("h3").textContent.trim();


            const priceText =
                product.querySelector(".price").textContent;


            const price =
                parseInt(
                    priceText.replace(/[^\d]/g, "")
                );


            const color =
                product.querySelector(".color").value;


            const size =
                product.querySelector(".size").value;


            /* CHECK OPTIONS */

            if (color === "" || size === "") {

                alert(
                    "PLEASE SELECT COLOR AND SIZE"
                );

                return;

            }


            /* ADD PRODUCT */

            cartItemsArray.push({

                name: name,

                price: price,

                color: color,

                size: size

            });


            updateCart();


            /* OPEN CART */

            cart.classList.add("active");

            cartOverlay.classList.add("active");

        });

    });


    /* =========================================
       UPDATE CART
       ========================================= */

    function updateCart() {

        cartItems.innerHTML = "";

        let total = 0;


        cartItemsArray.forEach(function (item, index) {

            total += item.price;


            const cartItem =
                document.createElement("div");


            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        COLOR: ${item.color}
                    </p>

                    <p>
                        SIZE: ${item.size}
                    </p>

                    <strong>
                        ${item.price} EGP
                    </strong>

                </div>


                <button
                    class="remove-item"
                    data-index="${index}">

                    ×

                </button>

            `;


            cartItems.appendChild(cartItem);

        });


        /* CART COUNT */

        cartCount.textContent =
            cartItemsArray.length;


        /* CART TOTAL */

        cartTotal.textContent =
            total + " EGP";


        /* =====================================
           REMOVE ITEMS
           ===================================== */

        const removeButtons =
            document.querySelectorAll(
                ".remove-item"
            );


        removeButtons.forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const index =
                        parseInt(
                            button.getAttribute(
                                "data-index"
                            )
                        );


                    cartItemsArray.splice(
                        index,
                        1
                    );


                    updateCart();

                }
            );

        });

    }



    /* =========================================
       CHECKOUT
       ========================================= */

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );


    const checkoutOverlay =
        document.getElementById(
            "checkoutOverlay"
        );


    const closeCheckout =
        document.getElementById(
            "closeCheckout"
        );


    const checkoutForm =
        document.getElementById(
            "checkoutForm"
        );


    const checkoutItemsCount =
        document.getElementById(
            "checkoutItemsCount"
        );


    const checkoutTotal =
        document.getElementById(
            "checkoutTotal"
        );



    /* =========================================
       OPEN CHECKOUT
       ========================================= */

    checkoutButton.addEventListener(
        "click",
        function () {


            /* CART EMPTY */

            if (cartItemsArray.length === 0) {

                alert(
                    "YOUR CART IS EMPTY"
                );

                return;

            }


            /* ITEMS COUNT */

            checkoutItemsCount.textContent =
                cartItemsArray.length;


            /* CALCULATE TOTAL */

            let total = 0;


            cartItemsArray.forEach(
                function (item) {

                    total += item.price;

                }
            );


            checkoutTotal.textContent =
                total + " EGP";


            /* CLOSE CART */

            cart.classList.remove(
                "active"
            );


            cartOverlay.classList.remove(
                "active"
            );


            /* OPEN CHECKOUT */

            checkoutOverlay.classList.add(
                "active"
            );

        }
    );



    /* =========================================
       CLOSE CHECKOUT
       ========================================= */

    closeCheckout.addEventListener(
        "click",
        function () {

            checkoutOverlay.classList.remove(
                "active"
            );

        }
    );



    /* =========================================
       CLOSE CHECKOUT BY CLICKING OUTSIDE
       ========================================= */

    checkoutOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                checkoutOverlay
            ) {

                checkoutOverlay.classList.remove(
                    "active"
                );

            }

        }
    );



    /* =========================================
       PLACE ORDER
       ========================================= */

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* CUSTOMER DATA */

            const customerName =
                document.getElementById(
                    "customerName"
                ).value.trim();


            const customerPhone =
                document.getElementById(
                    "customerPhone"
                ).value.trim();


            const customerCity =
                document.getElementById(
                    "customerCity"
                ).value.trim();


            const customerArea =
                document.getElementById(
                    "customerArea"
                ).value.trim();


            const customerAddress =
                document.getElementById(
                    "customerAddress"
                ).value.trim();


            const orderNotes =
                document.getElementById(
                    "orderNotes"
                ).value.trim();



            /* CALCULATE TOTAL */

            let total = 0;


            cartItemsArray.forEach(
                function (item) {

                    total += item.price;

                }
            );



            /* =====================================
               TEMPORARY SUCCESS MESSAGE
               ===================================== */

            alert(
                "ORDER RECEIVED SUCCESSFULLY\n\n" +
                "NAME: " + customerName + "\n" +
                "PHONE: " + customerPhone + "\n" +
                "TOTAL: " + total + " EGP"
            );


            /* CLOSE CHECKOUT */

            checkoutOverlay.classList.remove(
                "active"
            );


            /* RESET FORM */

            checkoutForm.reset();


            /*
             * IMPORTANT:
             * We are NOT clearing the cart yet.
             * We will connect PLACE ORDER
             * to WhatsApp in the next step.
             */

        }
    );

});
