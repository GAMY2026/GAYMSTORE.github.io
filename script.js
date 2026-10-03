document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       CART
       ========================================= */

    let cartItemsArray = [];

    const openCart = document.getElementById("openCart");
    const closeCart = document.getElementById("closeCart");
    const cart = document.getElementById("cart");
    const cartOverlay = document.getElementById("cartOverlay");

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");


    /* =========================================
       OPEN CART
       ========================================= */

    openCart.addEventListener("click", function () {

        cart.classList.add("active");
        cartOverlay.classList.add("active");

    });


    /* =========================================
       CLOSE CART
       ========================================= */

    closeCart.addEventListener("click", function () {

        cart.classList.remove("active");
        cartOverlay.classList.remove("active");

    });


    cartOverlay.addEventListener("click", function () {

        cart.classList.remove("active");
        cartOverlay.classList.remove("active");

    });


    /* =========================================
       ADD TO CART
       ========================================= */

    const addButtons =
        document.querySelectorAll(".add-cart");


    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product =
                button.closest(".product");


            if (!product) {
                return;
            }


            const name =
                product.querySelector("h3")
                .textContent
                .trim();


            const priceText =
                product.querySelector(".price")
                .textContent;


            const price =
                parseInt(
                    priceText.replace(/[^\d]/g, "")
                );


            const color =
                product.querySelector(".color").value;


            const size =
                product.querySelector(".size").value;


            if (color === "" || size === "") {

                alert(
                    "PLEASE SELECT COLOR AND SIZE"
                );

                return;

            }


            cartItemsArray.push({

                name: name,

                price: price,

                color: color,

                size: size

            });


            updateCart();


            cart.classList.add("active");

            cartOverlay.classList.add("active");

        });

    });


    /* =========================================
       UPDATE CART
       ========================================= */

    function updateCart() {

        cartItems.innerHTML = "";

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

                        <h3>
                            ${item.name}
                        </h3>

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

            }
        );


        cartCount.textContent =
            cartItemsArray.length;


        cartTotal.textContent =
            total + " EGP";


        const removeButtons =
            document.querySelectorAll(
                ".remove-item"
            );


        removeButtons.forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const index =
                        parseInt(
                            button.getAttribute(
                                "data-index"
                            )
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



    /* =========================================
       GOVERNORATES + AREAS
       ========================================= */

    const customerCity =
        document.getElementById(
            "customerCity"
        );


    const customerArea =
        document.getElementById(
            "customerArea"
        );


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
       CHANGE GOVERNORATE
       ========================================= */

    customerCity.addEventListener(
        "change",
        function () {

            const selectedGovernorate =
                customerCity.value;


            customerArea.innerHTML = `
                <option value="">
                    SELECT AREA
                </option>
            `;


            customerArea.disabled = true;


            if (
                selectedGovernorate === ""
            ) {

                return;

            }


            const areas =
                areasByGovernorate[
                    selectedGovernorate
                ];


            if (!areas) {
                return;
            }


            areas.forEach(function (area) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value = area;

                option.textContent = area;


                customerArea.appendChild(
                    option
                );

            });


            customerArea.disabled = false;

        }
    );



    /* =========================================
       CHECKOUT
       ========================================= */

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );


    const checkoutOverlay =
        document.getElementById(
            "checkoutOverlay"
        );


    const closeCheckout =
        document.getElementById(
            "closeCheckout"
        );


    const checkoutForm =
        document.getElementById(
            "checkoutForm"
        );


    const checkoutItemsCount =
        document.getElementById(
            "checkoutItemsCount"
        );


    const checkoutTotal =
        document.getElementById(
            "checkoutTotal"
        );



    /* =========================================
       OPEN CHECKOUT
       ========================================= */

    checkoutButton.addEventListener(
        "click",
        function () {

            if (
                cartItemsArray.length === 0
            ) {

                alert(
                    "YOUR CART IS EMPTY"
                );

                return;

            }


            checkoutItemsCount.textContent =
                cartItemsArray.length;


            let total = 0;


            cartItemsArray.forEach(
                function (item) {

                    total += item.price;

                }
            );


            checkoutTotal.textContent =
                total + " EGP";


            cart.classList.remove(
                "active"
            );


            cartOverlay.classList.remove(
                "active"
            );


            checkoutOverlay.classList.add(
                "active"
            );

        }
    );



    /* =========================================
       CLOSE CHECKOUT
       ========================================= */

    closeCheckout.addEventListener(
        "click",
        function () {

            checkoutOverlay.classList.remove(
                "active"
            );

        }
    );



    /* =========================================
       CLOSE CHECKOUT OUTSIDE
       ========================================= */

    checkoutOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                checkoutOverlay
            ) {

                checkoutOverlay.classList.remove(
                    "active"
                );

            }

        }
    );



    /* =========================================
       PLACE ORDER
       ========================================= */

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const customerName =
                document.getElementById(
                    "customerName"
                ).value.trim();


            const customerPhone =
                document.getElementById(
                    "customerPhone"
                ).value.trim();


            const customerCityValue =
                customerCity.value;


            const customerAreaValue =
                customerArea.value;


            const customerAddress =
                document.getElementById(
                    "customerAddress"
                ).value.trim();


            const orderNotes =
                document.getElementById(
                    "orderNotes"
                ).value.trim();



            let total = 0;


            cartItemsArray.forEach(
                function (item) {

                    total += item.price;

                }
            );



            /* TEMPORARY SUCCESS MESSAGE */

            alert(
                "ORDER RECEIVED SUCCESSFULLY\n\n" +

                "NAME: " +
                customerName +
                "\n" +

                "PHONE: " +
                customerPhone +
                "\n" +

                "GOVERNORATE: " +
                customerCityValue +
                "\n" +

                "AREA: " +
                customerAreaValue +
                "\n" +

                "TOTAL: " +
                total +
                " EGP"
            );


            checkoutOverlay.classList.remove(
                "active"
            );


            checkoutForm.reset();


            customerArea.innerHTML = `
                <option value="">
                    SELECT AREA
                </option>
            `;


            customerArea.disabled = true;

        }
    );

});
