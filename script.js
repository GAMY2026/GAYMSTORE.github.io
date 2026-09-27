```javascript
let cart = [];

const addButtons = document.querySelectorAll(".add-cart");

const cartElement = document.getElementById("cart");
const cartItemsElement = document.getElementById("cartItems");
const cartCountElement = document.getElementById("cartCount");
const cartTotalElement = document.getElementById("cartTotal");

const openCartButton = document.getElementById("openCart");
const closeCartButton = document.getElementById("closeCart");
const overlay = document.getElementById("cartOverlay");

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const product = button.closest(".product");

        const name = product.querySelector("h3").textContent.trim();

        const priceText = product.querySelector(".price").textContent;

        const price = parseInt(priceText.replace(/\D/g, ""));

        const size = product.querySelector(".size").value;

        if (size === "") {
            alert("من فضلك اختر المقاس أولاً");
            return;
        }

        cart.push({
            name: name,
            price: price,
            size: size
        });

        updateCart();

        openCart();

    });

});


function updateCart() {

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

            updateCart();

        });

        cartItemsElement.appendChild(itemElement);

    });

    cartCountElement.textContent = cart.length;

    cartTotalElement.textContent =
        total + " جنيه";
}


function openCart() {

    cartElement.classList.add("active");

    overlay.classList.add("active");

}


function closeCart() {

    cartElement.classList.remove("active");

    overlay.classList.remove("active");

}


openCartButton.addEventListener("click", openCart);

closeCartButton.addEventListener("click", closeCart);

overlay.addEventListener("click", closeCart);
```
