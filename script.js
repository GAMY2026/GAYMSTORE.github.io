document.addEventListener("DOMContentLoaded", function () {

```
let cartItemsArray = [];


/* =========================
   CART ELEMENTS
========================== */

const cartButton =
    document.getElementById("openCart");

const closeButton =
    document.getElementById("closeCart");

const cartElement =
    document.getElementById("cart");

const overlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");


/* =========================
   CHECKOUT ELEMENTS
========================== */

const checkoutButton =
    document.getElementById("checkoutButton");

const checkoutOverlay =
    document.getElementById("checkoutOverlay");

const closeCheckout =
    document.getElementById("closeCheckout");

const checkoutForm =
    document.getElementById("checkoutForm");

const checkoutItemsCount =
    document.getElementById("checkoutItemsCount");

const checkoutTotal =
    document.getElementById("checkoutTotal");


/* =========================
   LOCATION ELEMENTS
========================== */

const customerCity =
    document.getElementById("customerCity");

const customerArea =
    document.getElementById("customerArea");


/* =========================
   HERO VIDEO
========================== */

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


function sendYouTubeCommand(command) {

    if (!heroVideo) return;

    heroVideo.contentWindow.postMessage(
        JSON.stringify({
            event: "command",
            func: command,
            args: []
        }),
        "*"
    );

}


/* PLAY / PAUSE */

if (playButton) {

    playButton.addEventListener("click", function () {

        if (videoPlaying) {

            sendYouTubeCommand("pauseVideo");

            playButton.textContent = "▶ PLAY";

            videoPlaying = false;

        } else {

            sendYouTubeCommand("playVideo");

            playButton.textContent = "❚❚ PAUSE";

            videoPlaying = true;

        }

    });

}


/* SOUND */

if (soundButton) {

    soundButton.addEventListener("click", function () {

        if (videoMuted) {

            sendYouTubeCommand("unMute");

            soundButton.textContent =
                "🔊 SOUND ON";

            videoMuted = false;

        } else {

            sendYouTubeCommand("mute");

            soundButton.textContent =
                "🔇 SOUND OFF";

            videoMuted = true;

        }

    });

}


/* FULLSCREEN */

if (fullscreenButton) {

    fullscreenButton.addEventListener("click", function () {

        const hero =
            document.querySelector(".home");

        if (!document.fullscreenElement) {

            if (hero.requestFullscreen) {

                hero.requestFullscreen();

            }

        } else {

            if (document.exitFullscreen) {

                document.exitFullscreen();

            }

        }

    });

}


/* =========================
   GOVERNORATES
========================== */

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


/* =========================
   OPEN CART
========================== */

cartButton.addEventListener("click", function () {

    cartElement.classList.add("active");

    overlay.classList.add("active");

});


/* =========================
   CLOSE CART
========================== */

function closeCart() {

    cartElement.classList.remove("active");

    overlay.classList.remove("active");

}


closeButton.addEventListener(
    "click",
    closeCart
);

overlay.addEventListener(
    "click",
    closeCart
);


/* =========================
   ADD TO CART
========================== */

document
    .querySelectorAll(".add-cart")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const product =
                    button.closest(".product");

                const name =
                    product.querySelector("h3").textContent;

                const priceText =
                    product.querySelector(".price").textContent;

                const price =
                    parseInt(
                        priceText.replace(/[^\d]/g, ""),
                        10
                    );

                const color =
                    product.querySelector(".color").value;

                const size =
                    product.querySelector(".size").value;


                if (!color) {

                    alert("Please select a color.");

                    return;

                }


                if (!size) {

                    alert("Please select a size.");

                    return;

                }


                cartItemsArray.push({

                    name: name,

                    price: price,

                    color: color,

                    size: size

                });


                updateCart();

                cartElement.classList.add("active");

                overlay.classList.add("active");

            }
        );

    });


/* =========================
   UPDATE CART
========================== */

function updateCart() {

    cartItems.innerHTML = "";


    if (cartItemsArray.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">YOUR CART IS EMPTY</p>';

    } else {

        cartItemsArray.forEach(
            function (item, index) {

                const itemElement =
                    document.createElement("div");

                itemElement.className =
                    "cart-item";


                itemElement.innerHTML = `

                    <div class="cart-item-top">

                        <div>

                            <h4>
                                ${item.name}
                            </h4>

                            <div class="cart-item-details">

                                COLOR: ${item.color}
                                <br>

                                SIZE: ${item.size}

                            </div>

                        </div>


                        <div class="cart-item-price">

                            ${item.price} EGP

                        </div>

                    </div>


                    <button
                        class="remove-item"
                        data-index="${index}">
                        REMOVE
                    </button>

                `;


                cartItems.appendChild(
                    itemElement
                );

            }
        );


        document
            .querySelectorAll(".remove-item")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        cartItemsArray.splice(
                            index,
                            1
                        );

                        updateCart();

                    }
                );

            });

    }


    const total =
        cartItemsArray.reduce(
            function (sum, item) {

                return sum + item.price;

            },
            0
        );


    cartCount.textContent =
        cartItemsArray.length;

    cartTotal.textContent =
        total + " EGP";

    checkoutItemsCount.textContent =
        cartItemsArray.length;

    checkoutTotal.textContent =
        total + " EGP";

}


/* =========================
   GOVERNORATE CHANGE
========================== */

customerCity.addEventListener(
    "change",
    function () {

        const governorate =
            customerCity.value;

        customerArea.innerHTML =
            '<option value="">SELECT AREA</option>';

        customerArea.disabled = true;


        if (
            governorate &&
            areasByGovernorate[governorate]
        ) {

            areasByGovernorate[
                governorate
            ].forEach(function (area) {

                const option =
                    document.createElement("option");

                option.value = area;

                option.textContent = area;

                customerArea.appendChild(
                    option
                );

            });

            customerArea.disabled = false;

        }

    }
);


/* =========================
   OPEN CHECKOUT
========================== */

checkoutButton.addEventListener(
    "click",
    function () {

        if (cartItemsArray.length === 0) {

            alert("YOUR CART IS EMPTY.");

            return;

        }

        checkoutOverlay.classList.add(
            "active"
        );

    }
);


/* =========================
   CLOSE CHECKOUT
========================== */

closeCheckout.addEventListener(
    "click",
    function () {

        checkoutOverlay.classList.remove(
            "active"
        );

    }
);


checkoutOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target === checkoutOverlay
        ) {

            checkoutOverlay.classList.remove(
                "active"
            );

        }

    }
);


/* =========================
   CHECKOUT / WHATSAPP
========================== */

checkoutForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (cartItemsArray.length === 0) {

            alert("YOUR CART IS EMPTY.");

            return;

        }


        const customerName =
            document
                .getElementById("customerName")
                .value
                .trim();

        const customerPhone =
            document
                .getElementById("customerPhone")
                .value
                .trim();

        const governorate =
            customerCity.value;

        const area =
            customerArea.value;

        const address =
            document
                .getElementById("customerAddress")
                .value
                .trim();

        const notes =
            document
                .getElementById("orderNotes")
                .value
                .trim();


        const total =
            cartItemsArray.reduce(
                function (sum, item) {

                    return sum + item.price;

                },
                0
            );


        const orderNumber =
            "GAMY-" +
            String(Date.now()).slice(-6);


        let productsText = "";


        cartItemsArray.forEach(
            function (item, index) {

                productsText +=
                    `${index + 1}. ${item.name}\n` +
                    `Color: ${item.color}\n` +
                    `Size: ${item.size}\n` +
                    `Price: ${item.price} EGP\n\n`;

            }
        );


        const whatsappNumber =
            "201105178891";


        const confirmMessage =
            `GAMY STORE - ORDER CONFIRMATION
```

Order Number: ${orderNumber}

Customer Name: ${customerName}
Phone: ${customerPhone}

Governorate: ${governorate}
Area: ${area}

Address:
${address}

ORDER:
${productsText}

TOTAL: ${total} EGP

Notes:
${notes || "None"}

CUSTOMER CONFIRMS THIS ORDER.`;

```
        const rejectMessage =
            `GAMY STORE - ORDER REJECTION
```

Order Number: ${orderNumber}

Customer Name: ${customerName}
Phone: ${customerPhone}

CUSTOMER REJECTS THIS ORDER.`;

```
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


        const resultOverlay =
            document.createElement("div");


        resultOverlay.style.cssText = `
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.82);
            display:flex;
            align-items:center;
            justify-content:center;
            padding:20px;
            z-index:20000;
        `;


        resultOverlay.innerHTML = `

            <div style="
                background:#fff;
                width:min(480px,100%);
                padding:40px 30px;
                text-align:center;
                color:#111;
                box-shadow:0 25px 70px rgba(0,0,0,.4);
            ">

                <div style="
                    font-size:10px;
                    letter-spacing:4px;
                    color:#777;
                    margin-bottom:12px;
                ">
                    GAMY STORE
                </div>


                <h2 style="
                    font-size:25px;
                    letter-spacing:3px;
                    margin-bottom:12px;
                ">
                    ORDER READY
                </h2>


                <p style="
                    color:#666;
                    font-size:12px;
                    line-height:1.8;
                    margin-bottom:25px;
                ">
                    Order ${orderNumber} has been created.
                    Please choose your action.
                </p>


                <a
                    href="${confirmURL}"
                    target="_blank"
                    style="
                        display:block;
                        width:100%;
                        padding:15px;
                        background:#111;
                        color:#fff;
                        text-decoration:none;
                        font-size:10px;
                        letter-spacing:2px;
                        margin-bottom:10px;
                    ">
                    CONFIRM ORDER
                </a>


                <a
                    href="${rejectURL}"
                    target="_blank"
                    style="
                        display:block;
                        width:100%;
                        padding:15px;
                        background:#fff;
                        color:#111;
                        border:1px solid #111;
                        text-decoration:none;
                        font-size:10px;
                        letter-spacing:2px;
                        margin-bottom:15px;
                    ">
                    REJECT ORDER
                </a>


                <button
                    id="closeOrderResult"
                    style="
                        border:0;
                        background:transparent;
                        color:#777;
                        cursor:pointer;
                        font-size:9px;
                        letter-spacing:2px;
                    ">
                    CLOSE
                </button>

            </div>

        `;


        document.body.appendChild(
            resultOverlay
        );


        document
            .getElementById(
                "closeOrderResult"
            )
            .addEventListener(
                "click",
                function () {

                    resultOverlay.remove();

                }
            );


        checkoutOverlay.classList.remove(
            "active"
        );

    }
);


/* =========================
   INITIAL CART
========================== */

updateCart();
```

});
