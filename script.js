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


    // فتح السلة
    cartButton.addEventListener("click", function () {

        cartElement.classList.add("active");
        overlay.classList.add("active");

    });


    // إغلاق السلة
    closeButton.addEventListener("click", function () {

        cartElement.classList.remove("active");
        overlay.classList.remove("active");

    });


    // إغلاق السلة عند الضغط خارجها
    overlay.addEventListener("click", function () {

        cartElement.classList.remove("active");
        overlay.classList.remove("active");

    });


    // إضافة المنتجات للسلة
    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product = button.closest(".product");

            const name =
                product.querySelector("h3").textContent;

            const priceText =
                product.querySelector(".price").textContent;

            const price =
                parseInt(priceText.replace(/[^\d]/g, ""));

            const size =
                product.querySelector(".size").value;


            // التأكد من اختيار المقاس
            if (size === "") {

                alert("من فضلك اختر المقاس أولاً");

                return;

            }


            // إضافة المنتج
            cart.push({

                name: name,
                price: price,
                size: size

            });


            updateCart();


            // فتح السلة تلقائياً
            cartElement.classList.add("active");
            overlay.classList.add("active");

        });

    });


    // تحديث السلة
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


        // عدد المنتجات
        cartCount.textContent = cart.length;


        // الإجمالي
        cartTotal.textContent =
            total + " جنيه";


        // أزرار الحذف
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
