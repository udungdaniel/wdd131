const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

document.addEventListener("DOMContentLoaded", () => {
    // Set footer dates
    const yearSpan = document.getElementById("year");
    const modifiedSpan = document.getElementById("lastModified");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modifiedSpan) modifiedSpan.textContent = document.lastModified;

    // Populate product dropdown if on form page
    const productSelect = document.getElementById("productName");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Only increment review count on review.html
    const reviewCounter = document.getElementById("reviewCount");
    if (reviewCounter) {
        const count = parseInt(localStorage.getItem("reviewCount") || "0") + 1;
        localStorage.setItem("reviewCount", count);
        reviewCounter.textContent = count;
    }
});
