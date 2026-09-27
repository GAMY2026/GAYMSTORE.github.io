let cart = [];

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const product = button.closest(".product");

        const name = product.querySelector("h3").textContent;

        const priceText = product.querySelector("strong").textContent;

        const price = parseInt(
            priceText.replace(/\D/g, "")
        );

        const selects = product.querySelectorAll("select");

        const color = selects[0].value;

        const size = selects[1].value;

        cart.push({
            name: name,
            price: price,
            color: color,
            size: size
        });

        updateCart();

        openCart();

    });

});


function updateCart() {

    const cartItems = document.getElementById("cartItems");

    const cartCount = document.getElementById("cartCount");

    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function (item, index) {

        total += item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>

                <h3>${item.name}</h3>

                <p>اللون: ${item.color}</p>

                <p>المقاس: ${item.size}</p>

                <strong>${item.price} جنيه</strong>

            </div>

            <button onclick="removeItem(${index})">
                حذف
            </button>
        `;

        cartItems.appendChild(div);

    });

    cartCount.textContent = cart.length;

    cartTotal.textContent = total + " جنيه";
}


function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


function openCart() {

    document.getElementById("cart").classList.add("active");

    document.getElementById("cartOverlay").classList.add("active");

}


function closeCart() {

    document.getElementById("cart").classList.remove("active");

    document.getElementById("cartOverlay").classList.remove("active");

}


function checkout() {

    if (cart.length === 0) {

        alert("السلة فارغة");

        return;
    }

    alert("تم تجهيز الطلب بنجاح");

}
