```javascript
const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const product = button.closest(".product");

        const name = product.querySelector("h3").textContent;

        alert("تم إضافة " + name + " إلى السلة");

    });

});
```
