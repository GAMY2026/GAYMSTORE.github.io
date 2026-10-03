```javascript
document.addEventListener("DOMContentLoaded", function () {

    let cartItemsArray = [];

    /* =========================================
       CART ELEMENTS
    ========================================= */

    const openCartButton =
        document.getElementById("openCart");

    const closeCartButton =
        document.getElementById("closeCart");

    const cartElement =
        document.getElementById("cart");

    const cartOverlay =
        document.getElementById("cartOverlay");

    const cartItemsContainer =
        document.getElementById("cartItems");

    const cartCountElement =
        document.getElementById("cartCount");

    const cartTotalElement =
        document.getElementById("cartTotal");

    const checkoutButton =
        document.getElementById("checkoutButton");

    const checkoutOverlay =
        document.getElementById("checkoutOverlay");

    const closeCheckoutButton =
        document.getElementById("closeCheckout");

    const checkoutForm =
        document.getElementById("checkoutForm");

    const customerNameInput =
        document.getElementById("customerName");

    const customerPhoneInput =
        document.getElementById("customerPhone");

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


    /* =========================================
       AREAS BY GOVERNORATE
    ========================================= */

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


    /* =========================================
       CART FUNCTIONS
    ========================================= */

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


    function updateCheckoutSummary() {

        let total = 0;

        cartItemsArray.forEach(function (item) {

            total += item.price;

        });

        checkoutItemsCount.textContent =
            cartItemsArray.length;

        checkoutTotal.textContent =
            total.toLocaleString() + " EGP";
    }


    function updateCart() {

        cartItemsContainer.innerHTML = "";

        let total = 0;


        cartItemsArray.forEach(
            function (item, index) {

                total += item.price;

                const cartItem =
                    document.createElement("div");

                cartItem.className =
                    "cart-item";


                cartItem.innerHTML = `

                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <p>
                            COLOR:
                            ${item.color}
                        </p>

                        <p>
                            SIZE:
                            ${item.size}
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


                cartItemsContainer.appendChild(
                    cartItem
                );
            }
        );


        cartCountElement.textContent =
            cartItemsArray.length;

        cartTotalElement.textContent =
            total.toLocaleString() + " EGP";

        updateCheckoutSummary();
    }


    /* =========================================
       ADD PRODUCTS TO CART
    ========================================= */

    document.querySelectorAll(
        ".add-cart"
    ).forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const product =
                        button.closest(".product");

                    const productName =
                        product.querySelector(
                            "h3"
                        ).textContent;

                    const productPriceText =
                        product.querySelector(
                            ".price"
                        ).textContent;

                    const productPrice =
                        parseInt(
                            productPriceText.replace(
                                /[^\d]/g,
                                ""
                            ),
                            10
                        );

                    const colorSelect =
                        product.querySelector(
                            ".color"
                        );

                    const sizeSelect =
                        product.querySelector(
                            ".size"
                        );

                    const selectedColor =
                        colorSelect.value;

                    const selectedSize =
                        sizeSelect.value;


                    if (!selectedColor) {

                        alert(
                            "PLEASE SELECT A COLOR"
                        );

                        return;
                    }


                    if (!selectedSize) {

                        alert(
                            "PLEASE SELECT A SIZE"
                        );

                        return;
                    }


                    cartItemsArray.push({

                        name: productName,

                        price: productPrice,

                        color: selectedColor,

                        size: selectedSize

                    });


                    updateCart();

                    openCart();

                }
            );
        }
    );


    /* =========================================
       REMOVE CART ITEM
    ========================================= */

    cartItemsContainer.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList.contains(
                    "remove-cart-item"
                )
            ) {

                const index =
                    parseInt(
                        event.target.dataset.index,
                        10
                    );

                cartItemsArray.splice(
                    index,
                    1
                );

                updateCart();

            }

        }
    );


    /* =========================================
       CART BUTTONS
    ========================================= */

    openCartButton.addEventListener(
        "click",
        openCart
    );


    closeCartButton.addEventListener(
        "click",
        closeCart
    );


    cartOverlay.addEventListener(
        "click",
        closeCart
    );


    checkoutButton.addEventListener(
        "click",
        openCheckout
    );


    closeCheckoutButton.addEventListener(
        "click",
        closeCheckout
    );


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


    /* =========================================
       GOVERNORATE / AREA
    ========================================= */

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


            const areas =
                areasByGovernorate[
                    selectedGovernorate
                ];


            if (!areas) {

                return;

            }


            areas.forEach(
                function (area) {

                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value = area;

                    option.textContent = area;

                    customerAreaSelect.appendChild(
                        option
                    );

                }
            );


            customerAreaSelect.disabled = false;

        }
    );


    /* =========================================
       CHECKOUT / WHATSAPP
    ========================================= */

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (
                cartItemsArray.length === 0
            ) {

                alert(
                    "YOUR CART IS EMPTY"
                );

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

            let orderDetails = "";


            cartItemsArray.forEach(
                function (item, index) {

                    total += item.price;


                    orderDetails +=
                        (index + 1) +
                        ". " +
                        item.name +
                        "\n" +

                        "COLOR: " +
                        item.color +
                        "\n" +

                        "SIZE: " +
                        item.size +
                        "\n" +

                        "PRICE: " +
                        item.price +
                        " EGP\n\n";

                }
            );


            const orderNumber =
                "GAMY-" +
                Date.now()
                    .toString()
                    .slice(-6);


            const whatsappNumber =
                "201105178891";


            const confirmMessage =

                "🟢 GAMY STORE - ORDER CONFIRMED\n\n" +

                "ORDER NUMBER: " +
                orderNumber +
                "\n\n" +

                "CUSTOMER DETAILS\n" +

                "NAME: " +
                customerName +
                "\n" +

                "PHONE: " +
                customerPhone +
                "\n\n" +

                "DELIVERY DETAILS\n" +

                "GOVERNORATE: " +
                governorate +
                "\n" +

                "AREA: " +
                area +
                "\n" +

                "ADDRESS: " +
                customerAddress +
                "\n\n" +

                "ORDER DETAILS\n" +

                orderDetails +

                "TOTAL: " +
                total +
                " EGP\n\n" +

                "NOTES: " +
                (orderNotes || "No notes") +
                "\n\n" +

                "✅ CUSTOMER CONFIRMS THIS ORDER.";


            const rejectMessage =

                "🔴 GAMY STORE - ORDER REJECTED\n\n" +

                "ORDER NUMBER: " +
                orderNumber +
                "\n\n" +

                "CUSTOMER DETAILS\n" +

                "NAME: " +
                customerName +
                "\n" +

                "PHONE: " +
                customerPhone +
                "\n\n" +

                "TOTAL: " +
                total +
                " EGP\n\n" +

                "❌ CUSTOMER REJECTS THIS ORDER.";


            const confirmURL =

                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    confirmMessage
                );


            const rejectURL =

                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    rejectMessage
                );


            const orderResultOverlay =
                document.createElement(
                    "div"
                );


            orderResultOverlay.className =
                "order-result-overlay";


            orderResultOverlay.innerHTML = `

                <div class="order-result-box">

                    <div class="order-success-icon">
                        ✓
                    </div>

                    <h2>
                        ORDER RECEIVED
                    </h2>

                    <div class="order-number">
                        ${orderNumber}
                    </div>

                    <p>
                        PLEASE CHOOSE AN OPTION
                    </p>


                    <a
                        href="${confirmURL}"
                        target="_blank"
                        class="confirm-order-button">

                        ✓ CONFIRM ORDER

                    </a>


                    <a
                        href="${rejectURL}"
                        target="_blank"
                        class="reject-order-button">

                        ✕ REJECT ORDER

                    </a>


                    <button
                        type="button"
                        class="close-order-result">

                        CLOSE

                    </button>

                </div>

            `;


            document.body.appendChild(
                orderResultOverlay
            );


            const closeOrderResult =
                orderResultOverlay.querySelector(
                    ".close-order-result"
                );


            closeOrderResult.addEventListener(
                "click",
                function () {

                    orderResultOverlay.remove();


                    cartItemsArray = [];


                    updateCart();


                    checkoutForm.reset();


                    customerAreaSelect.innerHTML = `
                        <option value="">
                            SELECT AREA
                        </option>
                    `;


                    customerAreaSelect.disabled =
                        true;


                    closeCheckout();

                    closeCart();

                }
            );

        }
    );


    /* =========================================
       HERO YOUTUBE VIDEO CONTROLS
    ========================================= */

    const heroVideo =
        document.getElementById("heroVideo");

    const playButton =
        document.getElementById("playButton");

    const soundButton =
        document.getElementById("soundButton");

    const fullscreenButton =
        document.getElementById("fullscreenButton");


    let videoPlaying = true;

    let videoMuted = true;


    function sendYouTubeCommand(
        command,
        args = []
    ) {

        if (!heroVideo) {
            return;
        }


        heroVideo.contentWindow.postMessage(

            JSON.stringify({

                event: "command",

                func: command,

                args: args

            }),

            "https://www.youtube.com"

        );

    }


    /* PLAY / PAUSE */

    if (playButton) {

        playButton.addEventListener(
            "click",
            function () {

                if (videoPlaying) {

                    sendYouTubeCommand(
                        "pauseVideo"
                    );

                    videoPlaying = false;

                    playButton.textContent =
                        "▶ PLAY";

                } else {

                    sendYouTubeCommand(
                        "playVideo"
                    );

                    videoPlaying = true;

                    playButton.textContent =
                        "❚❚ PAUSE";

                }

            }
        );

    }


    /* SOUND ON / OFF */

    if (soundButton) {

        soundButton.addEventListener(
            "click",
            function () {

                if (videoMuted) {

                    sendYouTubeCommand(
                        "unMute"
                    );

                    sendYouTubeCommand(
                        "setVolume",
                        [100]
                    );

                    videoMuted = false;

                    soundButton.textContent =
                        "🔊 SOUND ON";

                } else {

                    sendYouTubeCommand(
                        "mute"
                    );

                    videoMuted = true;

                    soundButton.textContent =
                        "🔇 SOUND OFF";

                }

            }
        );

    }


    /* FULLSCREEN */

    if (fullscreenButton) {

        fullscreenButton.addEventListener(
            "click",
            function () {

                if (!heroVideo) {
                    return;
                }


                if (
                    heroVideo.requestFullscreen
                ) {

                    heroVideo.requestFullscreen();

                }

                else if (
                    heroVideo.webkitRequestFullscreen
                ) {

                    heroVideo.webkitRequestFullscreen();

                }

                else if (
                    heroVideo.msRequestFullscreen
                ) {

                    heroVideo.msRequestFullscreen();

                }

            }
        );

    }


    /* =========================================
       START VIDEO MUTED
    ========================================= */

    if (heroVideo) {

        setTimeout(
            function () {

                sendYouTubeCommand(
                    "mute"
                );

                sendYouTubeCommand(
                    "playVideo"
                );

            },
            1000
        );

    }


    /* =========================================
       INITIAL CART
    ========================================= */

    updateCart();

});
```
