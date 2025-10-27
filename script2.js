// ========== CONFIGURE YOUR WHATSAPP NUMBER HERE ==========
const whatsappNumber = "917386032284"; // 👈 Replace with your WhatsApp number (no + or spaces)

// ========== PRODUCT LIST ==========
const products = [  {"name":"Agarbathi (1 pack)","price":"₦520","image":"img00.webp","category":"Personal Care & Cleaning","offer":"buy 1 get 1"},
  {"name":"Agarbathi -Mangaldeep (Big)","price":"₦3050","image":"img11.jpg","category":"Personal Care & Cleaning","offer":"50% off"},
  {"name":"Ajwain (100 gm)","price":"₦1610","image":"img12.jpg","category":"Masala & Spices"},
  {"name":"Almond (100 gms)","price":"₦2880","image":"ing13.jpg","category":"Others / General","offer":"15% off"},
  {"name":"Amrutanjan (25 gms)","price":"₦2580","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Ani Seeds Powder (50 gms)","price":"₦1430","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Appalam - Bindu (120 gms)","price":"₦3910","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Atta - Wheat Flour - Mehek (5 Kg)","price":"₦10900","image":"https://via.placeholder.com/150","category":"Flours & Atta","offer":"buy 1 get 1"},
  {"name":"Atta - Wheat Flour - Mehek (500 g)","price":"₦1500","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Atta - Nigeria Multigrain - Swallow (500 g)","price":"₦10900","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Bajji Bonda Mix (200 gms)","price":"₦1300","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Baking Soda (90 gms)","price":"₦560","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Basil Seeds (100 gms)","price":"₦3290","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Bathroom Air Freshner - Sunrise (50 gms)","price":"₦500","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Besan Flour - Tansukh (1 Kg)","price":"₦3220","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Besan Flour - Madam (1 Kg)","price":"₦5250","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Biriyani Masala - Sakthi/Aachi (50 gms)","price":"₦2020","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Black Pepper Powder (200 gms)","price":"₦7800","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Black Pepper Whole (50 gms)","price":"₦2980","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Black Pepper Whole (100 gms)","price":"₦5640","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Black Pepper Whole (200 gms)","price":"₦10150","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Black Split Urid Dhal (1 Kg)","price":"₦5920","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"Camphor Tablets (20 gms)","price":"₦4030","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Cardamon Seeds (10 gms)","price":"₦1590","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Cashew Broken (500 gms)","price":"₦5400","image":"https://via.placeholder.com/150","category":"Others / General"},
  {"name":"Cashew Whole (1 Kg - 240)","price":"₦0","image":"https://via.placeholder.com/150","category":"Others / General"},
  {"name":"Channa Dhal (500 gms)","price":"₦2650","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"Chat Masala - Pathanjali (100 gms)","price":"₦1625","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Chia Seeds (100 gms)","price":"₦4020","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Chick Peas (500 gms) - White","price":"₦4030","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"Chilli Chicken 65 Masala - Sakthi (50 gms)","price":"₦2020","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Chilly Parotta (150 gms)","price":"₦4670","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Chutney Dal (Roasted Gram - 200 gms)","price":"₦3170","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"Cinnamon Sticks (100 gms)","price":"₦2625","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Cloves (20 gm)","price":"₦1180","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Cloves (100 gm)","price":"₦6870","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Coconut Oil (Virgin) Satvik (200 ml)","price":"₦4600","image":"https://via.placeholder.com/150","category":"Oils & Ghee"},
  {"name":"Coconut Oil (Virgin) Satvik (500 ml)","price":"₦10930","image":"https://via.placeholder.com/150","category":"Oils & Ghee"},
  {"name":"Coffee Powder - Nescafe Classic (45 gms)","price":"₦6990","image":"img14.jpg","category":"Snacks & Mixes"},
  {"name":"Coffee Powder - Nescafe Classic (100 gms)","price":"₦11890","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Coffee Powder - Nescafe Classic (200 gms)","price":"₦20200","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Country Chicken Masala (50 gms)","price":"₦1890","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Coriander Powder Everest (100 gms)","price":"₦1680","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Coriander Seeds (100 gms)","price":"₦1500","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Corn Flour (Checkers - 450 gms)","price":"₦1800","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Cranberry Chatpata (100 gms)","price":"₦4900","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Cumin Seeds (100 gms)","price":"₦2530","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Cumin Powder (50 gms)","price":"₦1790","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Cumin Powder (100 gms)","price":"₦2070","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Cumin Powder (Everest - 100 gms)","price":"₦3430","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Dal Rice Powder (100 gms)","price":"₦3550","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Dishwash Liquid - Morning Fresh (1 Ltr)","price":"₦2850","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Dishwash Liquid - Morning Fresh (700 ml)","price":"₦2200","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Dishwash Liquid - Morning Fresh (450 ml)","price":"₦1530","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Dried Green Peas (1 Kg)","price":"₦2480","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"Dry Chilli Kashmiri Whole (100 gms)","price":"₦2340","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Egg Kuruma (Sakthi – 50 gms)","price":"₦2020","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Falooda Mix (200 gms)","price":"₦5960","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Flax Seeds (200 gm)","price":"₦2620","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Flax Seeds (100 gm)","price":"₦1610","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Garam Masala – LG (100 gms)","price":"₦1210","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Garlic Dal Powder (100 gms)","price":"₦4180","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Ghee Kavin (500 gms)","price":"₦10200","image":"https://via.placeholder.com/150","category":"Oils & Ghee"},
  {"name":"Ginger Powder (Everest – 100 gms)","price":"₦6210","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"GRB Payasam Mix (180 gms)","price":"₦5060","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Health Mix – Ulandankali (250 gms)","price":"₦8600","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Health Mix – Carrot Malt (250 gms)","price":"₦14420","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Health Mix – Ragi Cocoa Malt (250 gms)","price":"₦12970","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Hing – LG/MTR (50 gms)","price":"₦2490","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Hing – Premia Brown (50 gms)","price":"₦2490","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Hing Yellow (50 gms)","price":"₦2250","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Honey (Dabur) 100 gm","price":"₦2530","image":"https://via.placeholder.com/150","category":"Others / General"},
  {"name":"Idli Rawa (Madam – 1 Kg)","price":"₦3840","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Idly Rice – Omsom (5 Kg)","price":"₦17860","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Idly Rice – Vitali (5 Kg)","price":"₦16450","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Idly Rice – Vitali (2 Kg)","price":"₦7570","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Jaggery Powder (500 gm)","price":"₦4650","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Kadal Paasi (Dagad Phool – 50 gms)","price":"₦2840","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Kitchen King Masala – Navnath (100 gms)","price":"₦2560","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Maida – Madam (500 gms)","price":"₦2390","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Mayonnaise – Veg (100 gms)","price":"₦3300","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Mehandi Cone (1 No.)","price":"₦460","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Methi Seeds (200 gms)","price":"₦2640","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Mixed Masala Kulambu (Sakthi 50 gms)","price":"₦1660","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Moog Dhal – Green Whole (500 gms)","price":"₦2390","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"Moong Dal – Yellow Split (500 gms)","price":"₦6900","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"Mustard Oil (1 Ltr)","price":"₦7820","image":"https://via.placeholder.com/150","category":"Oils & Ghee"},
  {"name":"Mustard Seeds (50 gms)","price":"₦560","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Mustard Seeds (100 gms)","price":"₦1290","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Mustard Seeds (200 gms)","price":"₦2160","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Noodles (Maggi Veg – 280 gms)","price":"₦2590","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Noodles Masala (50 gms)","price":"₦2020","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Pappad – Palak (100 gms)","price":"₦3160","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Pappad – Jeera (100 gms)","price":"₦3160","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Pappad – Red Chilly (100 gms)","price":"₦3160","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Pappad – Aaloo (100 gms)","price":"₦3160","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Phenyle (1000 ml)","price":"₦7130","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Pickle (Mixed – 777 – 200 gms)","price":"₦5630","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Pithambari (150 gms)","price":"₦1730","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Pizza/Pasta Sauce (100 gms)","price":"₦3300","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Poha – Madam (1 Kg)","price":"₦4500","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Poha (500 gms)","price":"₦2100","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Poha (200 gms)","price":"₦1050","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Puffed Rice (500 gm)","price":"₦2640","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Ragi Flour – Madam (1 Kg)","price":"₦4440","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Rajma (1 Kg)","price":"₦7480","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"Rajma (500 gm)","price":"₦4030","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"Red Chilli Powder (50 gms)","price":"₦900","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Red Chilli Powder (100 gms)","price":"₦2160","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Red Chilli Powder Tikalal Everest (100 gms)","price":"₦3000","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Red Chilli Powder Kashmiri Everest (100 gms)","price":"₦3000","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Rice Atta (Madam – 1 Kg)","price":"₦3580","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Rice – Golden Grain Rozana (1 Kg)","price":"₦3910","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Rice Mogra – India Gate (5 Kg)","price":"₦16100","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Rice Golden Grain Sella (1 Kg)","price":"₦3600","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Rice Feast Rozana – India Gate (5 Kg)","price":"₦18170","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Rice India Gate Sona Masoori (5 Kg)","price":"₦17850","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Rock Salt (1 Kg)","price":"₦3410","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Roohafza Syrup (750 ml)","price":"₦6860","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Roohafza Syrup (750 ml)","price":"₦7940","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Sabja Seed (100 gms)","price":"₦1670","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Sabudana (500 gms)","price":"₦2340","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Salt - Tata (1 Kg)","price":"₦1680","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Sambar Powder - Navnath (100 gms)","price":"₦2560","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Sambar Chilly Powder - Aachi (100 gms)","price":"₦4490","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Sambar Masala - Sakthi (50 gms)","price":"₦1710","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Ketchup - Tomato Kisan (500 gms)","price":"₦3570","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Sesame Oil (500 ml)","price":"₦4600","image":"https://via.placeholder.com/150","category":"Oils & Ghee"},
  {"name":"Sooji Rava - Madam (500 gms)","price":"₦2450","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Soup Mix (Knorr Veg - 40 gms)","price":"₦2470","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Soup Mix (Knorr Mexican Corn Tomato - 50 gms)","price":"₦2650","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Star Ani Seeds (50 gm)","price":"₦4330","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Sugar - Dangote (500 g)","price":"₦1440","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Sunflower Oil - Golden (1 Ltr)","price":"₦5880","image":"https://via.placeholder.com/150","category":"Oils & Ghee"},
  {"name":"Sunflower Oil - Fiona (5 Ltrs)","price":"₦24730","image":"https://via.placeholder.com/150","category":"Oils & Ghee"},
  {"name":"Talcum Powder (Nycil - 210 gms)","price":"₦8460","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Talcum Powder (Dermicool - 210 gms)","price":"₦8460","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Tandoori Masala (Everest - 100 gms)","price":"₦4260","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Tamarind (100 gms)","price":"₦1500","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Tamarind (200 gms)","price":"₦2400","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Tea - Tata Gold (250 gms)","price":"₦4720","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Tea Powder - Tata Agni (250 gms)","price":"₦2730","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Tea Powder - Taj Mahal (100 gms)","price":"₦5050","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"},
  {"name":"Clothes Whitener (Hypo - 180ml Sachet)","price":"₦200","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Tooth Paste - Dabur Red (150 gms)","price":"₦3050","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Toor Dal (500 gms)","price":"₦4630","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"Turmeric Powder (100 gms)","price":"₦1680","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Urad Dhal Split (1 Kg)","price":"₦7450","image":"https://via.placeholder.com/150","category":"Pulses & Dals"},
  {"name":"VathaKuzhambu Powder (50 gms)","price":"₦1900","image":"https://via.placeholder.com/150","category":"Masala & Spices"},
  {"name":"Vermicilli (500 gms)","price":"₦2040","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Vermicilli (200 gms) - Lemon","price":"₦5320","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Vermicilli (180 gms) - Millet/Wheat/Ragi/Varagu","price":"₦4890","image":"https://via.placeholder.com/150","category":"Flours & Atta"},
  {"name":"Vicks VapoRub Strong (25 gms)","price":"₦3470","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Vicks VapoRub BabyRub (25 gms)","price":"₦3640","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Washing Powder (Good Mama - 800 gms)","price":"₦1880","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Washing Soap (Viva - 250 gms)","price":"₦800","image":"https://via.placeholder.com/150","category":"Personal Care & Cleaning"},
  {"name":"Yoghurt Chilly (More Milagai - 150g)","price":"₦4080","image":"https://via.placeholder.com/150","category":"Snacks & Mixes"}];

// ========== FUNCTIONS ==========
const productsContainer = document.getElementById("products-container");
const categoryButtons = document.querySelectorAll(".category-card");
const searchInput = document.getElementById("search-input");
const clearSearch = document.getElementById("clear-search");

// Render products dynamically
function displayProducts(filteredProducts) {
  productsContainer.innerHTML = "";

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `<p>No products found.</p>`;
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <div class="image-container">
        ${product.offer ? `<span class="offer-badge">${product.offer}</span>` : ""}
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/200';" />
      </div>
      <div class="product-details">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <button class="whatsapp-btn">
          <i class="fab fa-whatsapp"></i> Order on WhatsApp
        </button>
      </div>
    `;

    // WhatsApp button click
    const whatsappBtn = productCard.querySelector(".whatsapp-btn");
    whatsappBtn.addEventListener("click", () => {
      const message = `Hello Sharma Grocery Mart 👋,\nI want to order:\n🛒 *${product.name}* - ${product.price}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });

    productsContainer.appendChild(productCard);
  });
}



// ========== FILTER BY CATEGORY ==========
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".category-card.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");

    if (category === "All") {
      displayProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === category);
      displayProducts(filtered);
    }
  });
});

// ========== SEARCH FUNCTIONALITY ==========
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query)
  );
  displayProducts(filtered);
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  displayProducts(products);
});

// ========== INITIAL LOAD ==========
displayProducts(products);
