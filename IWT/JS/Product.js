document.addEventListener("DOMContentLoaded", function () {
    const garmentTypeSelect = document.getElementById("garmentType");
    const products = document.querySelectorAll(".product");

    garmentTypeSelect.addEventListener("change", function () {
        const selectedType = garmentTypeSelect.value;

        products.forEach(product => {
            const dataType = product.getAttribute("data-type");

            if (selectedType === "all" || selectedType === dataType) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
