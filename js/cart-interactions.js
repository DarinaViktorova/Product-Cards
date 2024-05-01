
document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    products.forEach((product) => {
        updateCloseButtonVisibility(product);
    });
});
