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


    /* =========================
       فتح السلة
    ========================= */

    cartButton.addEventListener("click", function () {

        cartElement.classList.add("active");
        overlay.classList.add("active");

    });


    /* =========================
       إغلاق السلة
    ========================= */

    closeButton.addEventListener("click", function () {

        cartElement.classList.remove("active");
        overlay.classList.remove("active");

    });


    overlay.addEventListener("click", function () {

        cartElement.classList.remove("active");
        overlay.classList.remove("active");

    });


    /* =========================
       إضافة المنتج للسلة
    ========================= */

    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product = button.closest(".product");

            if (!product) {
                return;
            }


            const name =
                product.querySelector("h3").textContent.trim();


            const priceText =
                product.querySelector(".price").textContent;


            const price =
                parseInt(priceText.replace(/\D/g, ""));


            const size =
                product.querySelector(".size").value;


            /* لازم يختار المقاس */

            if (size === "") {

                alert("من فضلك اختر المقاس أولاً");

                return;

            }


            /* إضافة المنتج */

            cart.push({

                name: name,

                price: price,

                size: size

            });


            /* تحديث السلة */

            updateCart();


            /* فتح السلة تلقائياً */

            cartElement.classList.add("active");

            overlay.classList.add("active");

        });

    });


    /* =========================
       تحديث السلة
    ========================= */

    function updateCart() {

        cartItems.innerHTML = "";

        let total = 0;


        /* السلة فارغة */

        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div style="
                    text-align:center;
                    padding:40px 10px;
                    color:#777;
                ">
                    السلة فارغة
                </div>
            `;

        }


        /* عرض المنتجات */

        cart.forEach(function (item, index) {

            total += item.price;


            const itemElement =
                document.createElement("div");


            itemElement.className =
                "cart-item";


            itemElement.innerHTML = `

                <div>

                    <h3>
                        ${item.name}
                    </h3>

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


            cartItems.appendChild(itemElement);

        });


        /* عدد المنتجات */

        cartCount.textContent =
            cart.length;


        /* إجمالي السعر */

        cartTotal.textContent =
            total + " جنيه";


        /* أزرار الحذف */

        const removeButtons =
            document.querySelectorAll(".remove-item");


        removeButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const index =
                    parseInt(button.dataset.index);


                cart.splice(index, 1);


                updateCart();

            });

        });

    }


    /* تشغيل السلة */

    updateCart();

});
```
