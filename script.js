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

        let orderDetails = "";

        cartItemsArray.forEach(function (item, index) {

            total += item.price;

            orderDetails +=
                (index + 1) +
                ". " +
                item.name +
                "\n" +
                "   COLOR: " +
                item.color +
                "\n" +
                "   SIZE: " +
                item.size +
                "\n" +
                "   PRICE: " +
                item.price +
                " EGP\n\n";
        });

        const orderNumber =
            "GAMY-" +
            Date.now().toString().slice(-6);

        const whatsappMessage =
            "🛍️ GAMY STORE — NEW ORDER\n\n" +

            "ORDER NUMBER: " +
            orderNumber +
            "\n\n" +

            "👤 CUSTOMER DETAILS\n" +
            "NAME: " +
            customerName +
            "\n" +

            "PHONE: " +
            customerPhone +
            "\n\n" +

            "📍 DELIVERY DETAILS\n" +
            "GOVERNORATE: " +
            governorate +
            "\n" +

            "AREA: " +
            area +
            "\n" +

            "ADDRESS: " +
            customerAddress +
            "\n\n" +

            "🛒 ORDER DETAILS\n" +
            orderDetails +

            "💰 TOTAL: " +
            total +
            " EGP\n\n" +

            "📝 NOTES: " +
            (orderNotes || "No notes") +
            "\n\n" +

            "Thank you for shopping with GAMY STORE 🤍";

        const whatsappNumber =
            "201105178891";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(
            whatsappURL,
            "_blank"
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
