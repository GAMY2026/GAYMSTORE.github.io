```javascript
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addButtons = document.querySelectorAll(".add-cart");

const cartElement = document.getElementById("cart");
const cartItemsElement = document.getElementById("cartItems");
const cartCountElement = document.getElementById("cartCount");
const cartTotalElement = document.getElementById("cartTotal");

const openCartButton = document.getElementById("openCart");
const closeCartButton = document.getElementById("closeCart");
const overlay = document.getElementById("cartOverlay");


// حفظ السلة
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


// تحديث السلة
function updateCart() {

    if (!cartItemsElement) {
        return;
    }

    cartItemsElement.innerHTML = "";

    let total = 0;

    cart.forEach(function (item, index) {

        total += item.price;

        const itemElement = document.createElement("div");

        itemElement.className = "cart-item";

        itemElement.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>المقاس: ${item.size}</p>
                <strong>${item.price} جنيه</strong>
            </div>

            <button class="remove-item">
                حذف
            </button>
        `;

        const removeButton =
            itemElement.querySelector(".remove-item");

        removeButton.addEventListener("click", function () {

            cart.splice(index, 1);

            saveCart();

            updateCart();

        });

        cartItemsElement.appendChild(itemElement);

    });

    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }

    if (cartTotalElement) {
        cartTotalElement.textContent =
            total + " جنيه";
    }
}


// إضافة المنتجات للسلة
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
            parseInt(priceText.replace(/[^\d]/g, ""));

        const sizeSelect =
            product.querySelector(".size");

        const size =
            sizeSelect.value;


        if (size === "") {

            alert("من فضلك اختر المقاس أولاً");

            return;
        }


        cart.push({
            name: name,
            price: price,
            size: size
        });


        saveCart();

        updateCart();

        openCart();

    });

});


// فتح السلة
function openCart() {

    if (cartElement) {
        cartElement.classList.add("active");
    }

    if (overlay) {
        overlay.classList.add("active");
    }
}


// إغلاق السلة
function closeCart() {

    if (cartElement) {
        cartElement.classList.remove("active");
    }

    if (overlay) {
        overlay.classList.remove("active");
    }
}


// زر فتح السلة
if (openCartButton) {

    openCartButton.addEventListener(
        "click",
        openCart
    );

}


// زر إغلاق السلة
if (closeCartButton) {

    closeCartButton.addEventListener(
        "click",
        closeCart
    );

}


// الضغط على الخلفية لإغلاق السلة
if (overlay) {

    overlay.addEventListener(
        "click",
        closeCart
    );

}


// زر إتمام الطلب
const checkoutButton =
    document.getElementById("checkoutButton");


if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        function () {

            if (cart.length === 0) {

                alert(
                    "السلة فارغة، أضف منتج أولاً"
                );

                return;
            }


            window.location.href =
                "checkout.html";

        }
    );

}


// تشغيل السلة عند فتح الصفحة
updateCart();
```
