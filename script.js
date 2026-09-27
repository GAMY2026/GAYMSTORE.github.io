let cart = [];

const addButtons = document.querySelectorAll(".add-cart");

const cartElement = document.getElementById("cart");
const cartItemsElement = document.getElementById("cartItems");
const cartCountElement = document.getElementById("cartCount");
const cartTotalElement = document.getElementById("cartTotal");

const openCartButton = document.getElementById("openCart");
const closeCartButton = document.getElementById("closeCart");
const overlay = document.getElementById("cartOverlay");
const checkoutButton = document.getElementById("checkoutButton");


/* ADD TO CART */

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const product = button.closest(".product");

        const name =
            product.querySelector("h3").textContent.trim();

        const priceText =
            product.querySelector("strong").textContent;

        const price =
            parseInt(priceText.replace(/\D/g, ""));

        const color =
            product.querySelector(".color").value;

        const size =
            product.querySelector(".size").value;


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


/* UPDATE CART */

function updateCart() {

    cartItemsElement.innerHTML = "";

    let total = 0;


    cart.forEach(function (item, index) {

        total += item.price;


        const itemElement =
            document.createElement("div");

        itemElement.className = "cart-item";


        itemElement.innerHTML = `
            <div>

                <h3>${item.name}</h3>

                <p>اللون: ${item.color}</p>

                <p>المقاس: ${item.size}</p>

                <strong>${item.price} جنيه</strong>

            </div>

            <button class="remove-item">
                حذف
            </button>
        `;


        const removeButton =
            itemElement.querySelector(".remove-item");


        removeButton.addEventListener(
            "click",
            function () {

                cart.splice(index, 1);

                updateCart();

            }
        );


        cartItemsElement.appendChild(itemElement);

    });


    cartCountElement.textContent =
        cart.length;

    cartTotalElement.textContent =
        total + " جنيه";
}


/* OPEN CART */

function openCart() {

    cartElement.classList.add("active");

    overlay.classList.add("active");

}


/* CLOSE CART */

function closeCart() {

    cartElement.classList.remove("active");

    overlay.classList.remove("active");

}


/* BUTTONS */

openCartButton.addEventListener(
    "click",
    openCart
);


closeCartButton.addEventListener(
    "click",
    closeCart
);


overlay.addEventListener(
    "click",
    closeCart
);


/* CHECKOUT */

checkoutButton.addEventListener(
    "click",
    function () {

        if (cart.length === 0) {

            alert("السلة فارغة");

            return;
        }


        alert(
            "تم تجهيز الطلب بنجاح"
        );

    }
);
