// List of products
const products = [
    {name: "Aashirvaad Atta", price: "₹250", image: "img1.jpg", category: "Staples", offer: "10% OFF"},
    {name: "Parle-G Biscuits", price: "₹50", image: "img2.jpg", category: "Snacks", offer: "Buy 1 Get 1"},
    {name: "Tata Tea", price: "₹120", image: "img3.jpg", category: "Beverages"},
    {name: "Sunflower Oil", price: "₹180", image: "img4.jpg", category: "Oils & Ghee", offer: "15% OFF"},
    {name: "Maggi Noodles", price: "₹20", image: "img5.jpg", category: "Snacks"},
    {name: "Dalda Ghee", price: "₹300", image: "img6.jpg", category: "Oils & Ghee"},
    {name: "Nestle Milkmaid", price: "₹70", image: "img1.jpg", category: "Staples", offer: "20% OFF"},
    {name: "Britannia Bread", price: "₹40", image: "img3.jpg", category: "Staples"},
    {name: "Amul Butter", price: "₹60", image: "img4.jpg", category: "Oils & Ghee"},
    {name: "Tata Salt", price: "₹25", image: "img6.jpg", category: "Staples"},
    {name: "Cadbury Dairy Milk", price: "₹50", image: "img4.jpg", category: "Snacks", offer: "Buy 2 Get 1"},
    {name: "Red Label Tea", price: "₹150", image: "img2.jpg", category: "Beverages"},
    {name: "Saffola Oil", price: "₹220", image: "img5.jpg", category: "Oils & Ghee", offer: "5% OFF"},
    {name: "Haldiram Snacks", price: "₹80", image: "img1.jpg", category: "Snacks"},
    {name: "Patanjali Honey", price: "₹200", image: "img6.jpg", category: "Staples"},
    {name: "MTR Ready Mix", price: "₹90", image: "img2.jpg", category: "Staples", offer: "Flat ₹10 OFF"}
];

const productsContainer = document.getElementById('products-container');

// Render products
function renderProducts(filter = "All") {
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const hasOffer = !!product.offer;

        // Filtering logic
        if (
            filter === "All" ||
            product.category === filter ||
            (filter === "Offers" && hasOffer)
        ) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                ${product.offer ? `<div class="offer-badge">${product.offer}</div>` : ''}
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <a href="https://wa.me/917386032284?text=${encodeURIComponent(`Hi! I would like to order ${product.name}. Please confirm availability.`)}" target="_blank" class="cta-button">Order on WhatsApp</a>
            `;
            productsContainer.appendChild(card);
        }
    });
}

// Initial render
renderProducts();

// Category filter
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        categoryCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        renderProducts(card.getAttribute('data-filter'));
    });
});
