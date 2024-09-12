document.addEventListener("DOMContentLoaded", function () {
    const decreaseButtons = document.querySelectorAll(".decrease");
    const increaseButtons = document.querySelectorAll(".increase");

    decreaseButtons.forEach(button => {
        button.addEventListener("click", function () {
            const input = button.nextElementSibling;
            let currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        });
    });

    increaseButtons.forEach(button => {
        button.addEventListener("click", function () {
            const input = button.previousElementSibling;
            let currentValue = parseInt(input.value);
            input.value = currentValue + 1;
        });
    });
});