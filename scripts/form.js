document.addEventListener('DOMContentLoaded', function() {
    const productArray = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        // Add more products as needed
    ];

    const productNameSelect = document.getElementById('productName');
    productArray.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });

    // LocalStorage counter
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', function() {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
    });
});
