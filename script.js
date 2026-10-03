document.addEventListener("DOMContentLoaded", function () {

    let cartItemsArray = [];

    const openCartButton = document.getElementById("openCart");
    const closeCartButton = document.getElementById("closeCart");
    const cartElement = document.getElementById("cart");
    const cartOverlay = document.getElementById("cartOverlay");

    const cartItemsContainer = document.getElementById("cartItems");
    const cartCountElement = document.getElementById("cartCount");
    const cartTotalElement = document.getElementById("cartTotal");

    const checkoutButton = document.getElementById("checkoutButton");
    const checkoutOverlay = document.getElementById("checkoutOverlay");
    const closeCheckoutButton = document.getElementById("closeCheckout");

    const checkoutForm = document.getElementById("checkoutForm");

    const customerNameInput = document.getElementById("customerName");
    const customerPhoneInput = document.getElementById("customerPhone");
    const customerGovernorateSelect =
        document.getElementById("customerCity");
    const customerAreaSelect =
        document.getElementById("customerArea");
    const customerAddressInput =
        document.getElementById("customerAddress");
    const orderNotesInput =
        document.getElementById("orderNotes");

    const checkoutItemsCount =
        document.getElementById("checkoutItemsCount");
    const checkoutTotal =
        document.getElementById("checkoutTotal");

    const areasByGovernorate = {

        "Cairo": [
            "Nasr City",
            "Heliopolis",
            "Maadi",
            "New Cairo",
            "Fifth Settlement",
            "Mokattam",
            "Ain Shams",
            "El Matareya",
            "Shorouk",
            "Badr",
            "Downtown Cairo",
            "Zamalek",
            "Abbasia",
            "Shubra",
            "Misr El Kadima"
        ],

        "Giza": [
            "Dokki",
            "Mohandessin",
            "Haram",
            "Faisal",
            "6th of October",
            "Sheikh Zayed",
            "Hadayek October",
            "Imbaba",
            "Agouza",
            "Bulaq El Dakrour",
            "Warraq",
            "Kerdasa"
        ],

        "Alexandria": [
            "Miami",
            "Sidi Bishr",
            "Smouha",
            "Gleem",
            "Stanley",
            "Sporting",
            "Roushdy",
            "Mandara",
            "Montaza",
            "Agami",
            "Borg El Arab",
            "Moharam Bek",
            "Kafr Abdo"
        ],

        "Qalyubia": [
            "Banha",
            "Shubra El Kheima",
            "Qalyub",
            "Obour City",
            "Khanka",
            "Khosous",
            "Tukh",
            "Qaha",
            "Shebeen El Qanater"
        ],

        "Sharqia": [
            "Zagazig",
            "10th of Ramadan",
            "Belbeis",
            "Minya Al Qamh",
            "Abu Kabir",
            "Faqous",
            "Hehia",
            "Mashtoul El Souq"
        ],

        "Dakahlia": [
            "Mansoura",
            "Talkha",
            "Mit Ghamr",
            "Dekernes",
            "Sherbin",
            "Aga",
            "Belqas",
            "Manzala",
            "Sinbillawin"
        ],

        "Gharbia": [
            "Tanta",
            "Mahalla El Kubra",
            "Kafr El Zayat",
            "Zefta",
            "Santa",
            "Basyoun",
            "Qutour"
        ],

        "Monufia": [
            "Shibin El Kom",
            "Menouf",
            "Ashmoun",
            "Sadat City",
            "Quesna",
            "Tala",
            "Berket El Sabe"
        ],

        "Beheira": [
            "Damanhur",
            "Kafr El Dawwar",
            "Rashid",
            "Edku",
            "Abu Hummus",
            "Hosh Essa",
            "Kom Hamada",
            "Mahmoudiyah"
        ],

        "Kafr El Sheikh": [
            "Kafr El Sheikh",
            "Desouk",
            "Metoubes",
            "Baltim",
            "Fouh",
            "Sidi Salem",
            "Qallin"
        ],

        "Damietta": [
            "Damietta",
            "New Damietta",
            "Ras El Bar",
            "Faraskour",
            "Kafr Saad",
            "Zarqa"
        ],

        "Port Said": [
            "Port Said",
            "Port Fouad",
            "Arab District",
            "Zohour District",
            "Dawahy District"
        ],

        "Ismailia": [
            "Ismailia",
            "Fayed",
            "Qantara East",
            "Qantara West",
            "Tal El Kebir",
            "Abu Suwir"
        ],

        "Suez": [
            "Suez",
            "Arbaeen",
            "Ataqah",
            "Faisal",
            "Ganayen"
        ],

        "Fayoum": [
            "Fayoum",
            "Sinnuris",
            "Tamiya",
            "Ibshaway",
            "Itsa",
            "Yousef El Seddik"
        ],

        "Beni Suef": [
            "Beni Suef",
            "Al Wasta",
            "Nasser",
            "Biba",
            "Samasta",
            "Ihnasiya"
        ],

        "Minya": [
            "Minya",
            "Mallawi",
            "Samalut",
            "Maghagha",
            "Beni Mazar",
            "Abu Qurqas",
            "Deir Mawas"
        ],

        "Asyut": [
            "Asyut",
            "Dairut",
            "Manfalut",
            "Qusiya",
            "Abnub",
            "Sahel Selim",
            "El Badari"
        ],

        "Sohag": [
            "Sohag",
            "Akhmim",
            "Girga",
            "Tahta",
            "Juhayna",
            "Al Maragha",
            "Al Monshah"
        ],

        "Qena": [
            "Qena",
            "Nag Hammadi",
            "Qus",
            "Dishna",
            "Farshout",
            "Abu Tesht"
        ],

        "Luxor": [
            "Luxor",
            "Esna",
            "Armant",
            "El Tod",
            "Al Bayadiya"
        ],

        "Aswan": [
            "Aswan",
            "Kom Ombo",
            "Edfu",
            "Daraw",
            "Abu Simbel"
        ],

        "Red Sea": [
            "Hurghada",
            "El Gouna",
            "Safaga",
            "Marsa Alam",
            "Quseir"
        ],

        "New Valley": [
            "Kharga",
            "Dakhla",
            "Farafra",
            "Baris",
            "Balat"
        ],

        "Matrouh": [
            "Marsa Matrouh",
            "El Alamein",
            "Dabaa",
            "Siwa",
            "Salloum"
        ],

        "North Sinai": [
            "Arish",
            "Sheikh Zuweid",
            "Rafah",
            "Bir al-Abd"
        ],

        "South Sinai": [
            "Sharm El Sheikh",
            "Dahab",
            "Nuweiba",
            "Taba",
            "Saint Catherine",
            "El Tor"
        ]
    };

    function openCart() {
        cartElement.classList.add("active");
        cartOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeCart() {
        cartElement.classList.remove("active");
        cartOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    function openCheckout() {
        if (cartItemsArray.length === 0) {
            alert("YOUR CART IS EMPTY");
            return;
        }

        checkoutOverlay.classList.add("active");
        document.body.style.overflow = "hidden";

        updateCheckoutSummary();
    }

    function closeCheckout() {
        checkoutOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    function updateCart() {

        cartItemsContainer.innerHTML = "";

        let total = 0;

        cartItemsArray.forEach(function (item, index) {

            total += item.price;

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>

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
                    class="remove-cart-item"
                    data-index="${index}">
                    REMOVE
                </button>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        cartCountElement.textContent = cartItemsArray.length;

        cartTotalElement.textContent =
            total.toLocaleString() + " EGP";

        updateCheckoutSummary();
    }

    function updateCheckoutSummary() {

        if (!checkoutItemsCount || !checkoutTotal) {
            return;
        }

        let total = 0;

        cartItemsArray.forEach(function (item) {
            total += item.price;
        });

        checkoutItemsCount.textContent =
            cartItemsArray.length;

        checkoutTotal.textContent =
            total.toLocaleString() + " EGP";
    }

    document.querySelectorAll(".add-cart").forEach(function (button) {

        button.addEventListener("click", function () {

            const productElement =
                button.closest(".product");

            if (!productElement) {
                return;
            }

            const productName =
                productElement.querySelector("h3").textContent;

            const productPriceText =
                productElement.querySelector(".price").textContent;

            const productPrice =
                parseInt(
                    productPriceText.replace(/[^\d]/g, ""),
                    10
                );

            const colorSelect =
                productElement.querySelector(".color");

            const sizeSelect =
                productElement.querySelector(".size");

            const selectedColor =
                colorSelect ? colorSelect.value : "N/A";

            const selectedSize =
                sizeSelect ? sizeSelect.value : "N/A";

            if (
                colorSelect &&
                !selectedColor
            ) {
                alert("PLEASE SELECT A COLOR");
                return;
            }

            if (
                sizeSelect &&
                !selectedSize
            ) {
                alert("PLEASE SELECT A SIZE");
                return;
            }

            const cartItem = {
                name: productName,
                price: productPrice,
                color: selectedColor,
                size: selectedSize
            };

            cartItemsArray.push(cartItem);

            updateCart();

            openCart();
        });
    });

    cartItemsContainer.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList.contains(
                    "remove-cart-item"
                )
            ) {

                const itemIndex =
                    parseInt(
                        event.target.dataset.index,
                        10
                    );

                cartItemsArray.splice(
                    itemIndex,
                    1
                );

                updateCart();
            }
        }
    );

    if (openCartButton) {
        openCartButton.addEventListener(
            "click",
            openCart
        );
    }

    if (closeCartButton) {
        closeCartButton.addEventListener(
            "click",
            closeCart
        );
    }

    if (cartOverlay) {
        cartOverlay.addEventListener(
            "click",
            closeCart
        );
    }

    if (checkoutButton) {
        checkoutButton.addEventListener(
            "click",
            openCheckout
        );
    }

    if (closeCheckoutButton) {
        closeCheckoutButton.addEventListener(
            "click",
            closeCheckout
        );
    }

    if (checkoutOverlay) {

        checkoutOverlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === checkoutOverlay
                ) {
                    closeCheckout();
                }
            }
        );
    }

    if (customerGovernorateSelect) {

        customerGovernorateSelect.addEventListener(
            "change",
            function () {

                const selectedGovernorate =
                    customerGovernorateSelect.value;

                customerAreaSelect.innerHTML = `
                    <option value="">
                        SELECT AREA
                    </option>
                `;

                customerAreaSelect.disabled = true;

                if (!selectedGovernorate) {
                    return;
                }

                const availableAreas =
                    areasByGovernorate[
                        selectedGovernorate
                    ];

                if (!availableAreas) {
                    return;
                }

                availableAreas.forEach(
                    function (area) {

                        const areaOption =
                            document.createElement(
                                "option"
                            );

                        areaOption.value = area;
                        areaOption.textContent = area;

                        customerAreaSelect.appendChild(
                            areaOption
                        );
                    }
                );

                customerAreaSelect.disabled = false;
            }
        );
    }

    if (checkoutForm) {

        checkoutForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                if (cartItemsArray.length === 0) {
                    alert("YOUR CART IS EMPTY");
                    return;
                }

                const customerName =
                    customerNameInput.value.trim();

                const customerPhone =
                    customerPhoneInput.value.trim();

                const governorate =
                    customerGovernorateSelect.value;

                const area =
                    customerAreaSelect.value;

                const customerAddress =
                    customerAddressInput.value.trim();

                const orderNotes =
                    orderNotesInput.value.trim();

                let total = 0;

                cartItemsArray.forEach(
                    function (item) {
                        total += item.price;
                    }
                );

                let orderDetails = "";

                cartItemsArray.forEach(
                    function (item, index) {

                        orderDetails +=
                            (index + 1) +
                            ". " +
                            item.name +
                            " | COLOR: " +
                            item.color +
                            " | SIZE: " +
                            item.size +
                            " | PRICE: " +
                            item.price +
                            " EGP\n";
                    }
                );

                alert(
                    "ORDER RECEIVED SUCCESSFULLY\n\n" +
                    "NAME: " +
                    customerName +
                    "\n" +
                    "PHONE: " +
                    customerPhone +
                    "\n" +
                    "GOVERNORATE: " +
                    governorate +
                    "\n" +
                    "AREA: " +
                    area +
                    "\n" +
                    "ADDRESS: " +
                    customerAddress +
                    "\n\n" +
                    "ITEMS:\n" +
                    orderDetails +
                    "\nTOTAL: " +
                    total +
                    " EGP"
                );

                cartItemsArray = [];

                updateCart();

                checkoutForm.reset();

                customerAreaSelect.innerHTML = `
                    <option value="">
                        SELECT AREA
                    </option>
                `;

                customerAreaSelect.disabled = true;

                closeCheckout();
                closeCart();
            }
        );
    }

    updateCart();

});
