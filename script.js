document.addEventListener("DOMContentLoaded", function () {

    let cart = [];

    const openCart = document.getElementById("openCart");
    const closeCart = document.getElementById("closeCart");
    const cart = document.getElementById("cart");
    const cartOverlay = document.getElementById("cartOverlay");

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    // فتح السلة
    openCart.addEventListener("click", function () {
        cart.classList.add("active");
        cartOverlay.classList.add("active");
    });

    // إغلاق السلة
    closeCart.addEventListener("click", function () {
        cart.classList.remove("active");
        cartOverlay.classList.remove("active");
    });

    // إغلاق السلة عند الضغط خارجها
    cartOverlay.addEventListener("click", function () {
        cart.classList.remove("active");
        cartOverlay.classList.remove("active");
    });


    // أزرار إضافة المنتجات
    const addButtons = document.querySelectorAll(".add-cart");

    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product = button.closest(".product");

            const name = product.querySelector("h3").textContent;
            const priceText = product.querySelector(".price").textContent;
            const price = parseInt(priceText.replace(/[^\d]/g, ""));

            const color = product.querySelector(".color").value;
            const size = product.querySelector(".size").value;

            // التأكد من اختيار اللون والمقاس
            if (color === "" || size === "") {
                alert("PLEASE SELECT COLOR AND SIZE");
                return;
            }

            cart.push({
                name: name,
                price: price,
                color: color,
                size: size
            });

            updateCart();

            // فتح السلة تلقائياً بعد إضافة المنتج
            cart.classList.add("active");
            cartOverlay.classList.add("active");

        });

    });


    // تحديث السلة
    function updateCart() {

        cartItems.innerHTML = "";

        let total = 0;

        cart.forEach(function (item, index) {

            total += item.price;

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <div class="cart-item-info">

                    <h3>${item.name}</h3>

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


        // عدد المنتجات
        cartCount.textContent = cart.length;

        // الإجمالي
        cartTotal.textContent = total + " EGP";


        // أزرار حذف المنتجات
        const removeButtons = document.querySelectorAll(".remove-item");

        removeButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const index = button.getAttribute("data-index");

                cart.splice(index, 1);

                updateCart();

            });

        });

    }

});
