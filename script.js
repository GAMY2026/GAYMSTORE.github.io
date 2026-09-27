```javascript
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // عناصر السلة
    // =========================

    const openCartButton = document.getElementById("openCart");
    const closeCartButton = document.getElementById("closeCart");
    const cart = document.getElementById("cart");
    const cartOverlay = document.getElementById("cartOverlay");

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    const addCartButtons = document.querySelectorAll(".add-cart");


    // السلة
    let cartProducts = [];


    // =========================
    // فتح السلة
    // =========================

    openCartButton.addEventListener("click", function () {

        cart.classList.add("active");
        cartOverlay.classList.add("active");

    });


    // =========================
    // إغلاق السلة
    // =========================

    closeCartButton.addEventListener("click", function () {

        cart.classList.remove("active");
        cartOverlay.classList.remove("active");

    });


    // إغلاق السلة عند الضغط خارجها
    cartOverlay.addEventListener("click", function () {

        cart.classList.remove("active");
        cartOverlay.classList.remove("active");

    });


    // =========================
    // إضافة منتج للسلة
    // =========================

    addCartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product = button.closest(".product");

            if (!product) {
                return;
            }


            // اسم المنتج
            const productName =
                product.querySelector("h3").textContent.trim();


            // السعر
            const priceText =
                product.querySelector(".price").textContent.trim();

            const productPrice =
                parseInt(priceText.replace(/[^\d]/g, ""));


            // المقاس
            const sizeSelect =
                product.querySelector(".size");

            const productSize =
                sizeSelect.value;


            // التأكد من اختيار المقاس
            if (productSize === "") {

                alert("من فضلك اختر المقاس أولاً");

                return;
            }


            // إضافة المنتج
            cartProducts.push({

                name: productName,

                price: productPrice,

                size: productSize

            });


            // تحديث السلة
            renderCart();


            // فتح السلة
            cart.classList.add("active");
            cartOverlay.classList.add("active");

        });

    });


    // =========================
    // عرض السلة
    // =========================

    function renderCart() {

        cartItems.innerHTML = "";

        let total = 0;


        // السلة فارغة
        if (cartProducts.length === 0) {

            cartItems.innerHTML = `
                <div style="
                    text-align: center;
                    padding: 40px 10px;
                    color: #777;
                    font-size: 17px;
                ">
                    السلة فارغة
                </div>
            `;

        }


        // المنتجات
        cartProducts.forEach(function (product, index) {

            total += product.price;


            const cartItem =
                document.createElement("div");

            cartItem.className = "cart-item";


            cartItem.innerHTML = `
                
                <div>

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        المقاس: ${product.size}
                    </p>

                    <strong>
                        ${product.price} جنيه
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


        // عدد المنتجات
        cartCount.textContent =
            cartProducts.length;


        // إجمالي السعر
        cartTotal.textContent =
            total + " جنيه";


        // أزرار الحذف
        const removeButtons =
            cartItems.querySelectorAll(".remove-item");


        removeButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const index =
                    Number(button.dataset.index);


                cartProducts.splice(index, 1);


                renderCart();

            });

        });

    }


    // تشغيل السلة أول مرة
    renderCart();

});
```
