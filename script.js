// List of products
const products = [
  {name: "Agarbathi (1 pack)", price: "₹520", image: "https://via.placeholder.com/150", category: "General"},
  {name: "Ajwain (100 gm)", price: "₹1610", image: "https://via.placeholder.com/150", category: "General"},
  {name: "Almond (100 gms)", price: "₹2880", image: "https://via.placeholder.com/150", category: "General"},
  {name: "Amul Butter (500 gm)", price: "₹300", image: "https://via.placeholder.com/150", category: "Dairy"},
  {name: "Aashirvaad Atta (5 kg)", price: "₹285", image: "https://via.placeholder.com/150", category: "Staples"},
  {name: "Arhar Dal (1 kg)", price: "₹160", image: "https://via.placeholder.com/150", category: "Pulses"},
  {name: "Besan Flour (500 gm)", price: "₹70", image: "https://via.placeholder.com/150", category: "Staples"},
  {name: "Bournvita (500 gm)", price: "₹250", image: "https://via.placeholder.com/150", category: "Beverages"},
  {name: "Britannia Bread (400 gm)", price: "₹45", image: "https://via.placeholder.com/150", category: "Bakery"},
  {name: "Cadbury Dairy Milk (50 gm)", price: "₹55", image: "https://via.placeholder.com/150", category: "Snacks", offer: "Buy 2 Get 1"},
  {name: "Coca Cola (1 L)", price: "₹65", image: "https://via.placeholder.com/150", category: "Beverages"},
  {name: "Colgate Toothpaste (100 gm)", price: "₹70", image: "https://via.placeholder.com/150", category: "Personal Care"},
  {name: "Dalda Ghee (1 L)", price: "₹295", image: "https://via.placeholder.com/150", category: "Oils & Ghee"},
  {name: "Dettol Soap (125 gm)", price: "₹45", image: "https://via.placeholder.com/150", category: "Personal Care"},
  {name: "Fortune Sunflower Oil (1 L)", price: "₹175", image: "https://via.placeholder.com/150", category: "Oils & Ghee"},
  {name: "Good Day Biscuits (100 gm)", price: "₹30", image: "https://via.placeholder.com/150", category: "Snacks"},
  {name: "Haldiram Namkeen (150 gm)", price: "₹60", image: "https://via.placeholder.com/150", category: "Snacks"},
  {name: "Horlicks (500 gm)", price: "₹230", image: "https://via.placeholder.com/150", category: "Beverages"},
  {name: "Lifebuoy Handwash (200 ml)", price: "₹90", image: "https://via.placeholder.com/150", category: "Personal Care"},
  {name: "Maggi Noodles (Pack of 4)", price: "₹60", image: "https://via.placeholder.com/150", category: "Snacks", offer: "Buy 1 Get 1"},
  {name: "Nestle Milkmaid (400 gm)", price: "₹130", image: "https://via.placeholder.com/150", category: "Dairy"},
  {name: "Parle-G Biscuits (250 gm)", price: "₹50", image: "https://via.placeholder.com/150", category: "Snacks"},
  {name: "Patanjali Honey (250 gm)", price: "₹140", image: "https://via.placeholder.com/150", category: "Staples"},
  {name: "Red Label Tea (500 gm)", price: "₹180", image: "https://via.placeholder.com/150", category: "Beverages"},
  {name: "Rice (1 kg)", price: "₹70", image: "https://via.placeholder.com/150", category: "Staples"},
  {name: "Salt Tata (1 kg)", price: "₹25", image: "https://via.placeholder.com/150", category: "Staples"},
  {name: "Saffola Oil (1 L)", price: "₹210", image: "https://via.placeholder.com/150", category: "Oils & Ghee"},
  {name: "Surf Excel (1 kg)", price: "₹190", image: "https://via.placeholder.com/150", category: "Household"},
  {name: "Sugar (1 kg)", price: "₹48", image: "https://via.placeholder.com/150", category: "Staples"},
  {name: "Tata Tea Gold (500 gm)", price: "₹250", image: "https://via.placeholder.com/150", category: "Beverages"},
  {name: "Toor Dal (1 kg)", price: "₹165", image: "https://via.placeholder.com/150", category: "Pulses"},
  {name: "Vim Bar (500 gm)", price: "₹25", image: "https://via.placeholder.com/150", category: "Household"},
  {name: "Wheat Flour (1 kg)", price: "₹50", image: "https://via.placeholder.com/150", category: "Staples"}
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
