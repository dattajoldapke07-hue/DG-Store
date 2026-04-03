// ==== PRODUCT DATA ====
const categories = ["Kurti & Dress", "Kids & Toys", "Westernwear", "Home", "Sarees"];

const products = [
  // Kurti & Dress (15)
  {id:101,name:"Floral Kurti",category:"Kurti & Dress",price:1200,image:"https://i.postimg.cc/N0mKxW7p/kurti1.jpg"},
  {id:102,name:"Cotton Kurti",category:"Kurti & Dress",price:999,image:"https://i.postimg.cc/pXd0cG9r/kurti2.jpg"},
  {id:103,name:"Embroidered Dress",category:"Kurti & Dress",price:1500,image:"https://i.postimg.cc/DyB5W1x1/kurti3.jpg"},
  {id:104,name:"Silk Kurti",category:"Kurti & Dress",price:1800,image:"https://i.postimg.cc/4y2S0ZHW/kurti4.jpg"},
  {id:105,name:"Printed Dress",category:"Kurti & Dress",price:1300,image:"https://i.postimg.cc/PrRG6zRZ/kurti5.jpg"},
  {id:106,name:"A-Line Kurti",category:"Kurti & Dress",price:1100,image:"https://i.postimg.cc/ht15FmBr/kurti6.jpg"},
  {id:107,name:"Anarkali Dress",category:"Kurti & Dress",price:2000,image:"https://i.postimg.cc/1Xr8Y5fY/kurti7.jpg"},
  {id:108,name:"Straight Kurti",category:"Kurti & Dress",price:950,image:"https://i.postimg.cc/w3bZGss0/kurti8.jpg"},
  {id:109,name:"Party Kurti",category:"Kurti & Dress",price:1700,image:"https://i.postimg.cc/T1LQ3Wb0/kurti9.jpg"},
  {id:110,name:"Cotton Dress",category:"Kurti & Dress",price:1250,image:"https://i.postimg.cc/Wz7Zx5Qf/kurti10.jpg"},
  {id:111,name:"Long Kurti",category:"Kurti & Dress",price:1400,image:"https://i.postimg.cc/Bv5m9vVY/kurti11.jpg"},
  {id:112,name:"Chanderi Kurti",category:"Kurti & Dress",price:1900,image:"https://i.postimg.cc/fy6YbTtZ/kurti12.jpg"},
  {id:113,name:"Linen Dress",category:"Kurti & Dress",price:1600,image:"https://i.postimg.cc/fRy0z2vY/kurti13.jpg"},
  {id:114,name:"Rayon Kurti",category:"Kurti & Dress",price:1150,image:"https://i.postimg.cc/3xRGt6vQ/kurti14.jpg"},
  {id:115,name:"Designer Kurti",category:"Kurti & Dress",price:2200,image:"https://i.postimg.cc/XqQ1JgqJ/kurti15.jpg"},

  // Kids & Toys (12)
  {id:201,name:"Toy Car Set",category:"Kids & Toys",price:500,image:"https://i.postimg.cc/B6K4hHhX/kid1.jpg"},
  {id:202,name:"Building Blocks",category:"Kids & Toys",price:700,image:"https://i.postimg.cc/9fq7h6x0/kid2.jpg"},
  {id:203,name:"Action Figure",category:"Kids & Toys",price:450,image:"https://i.postimg.cc/43dXgGfX/kid3.jpg"},
  {id:204,name:"Doll Set",category:"Kids & Toys",price:550,image:"https://i.postimg.cc/NMvnXwny/kid4.jpg"},
  {id:205,name:"Puzzle Board",category:"Kids & Toys",price:350,image:"https://i.postimg.cc/fTx7vLzH/kid5.jpg"},
  {id:206,name:"Coloring Book",category:"Kids & Toys",price:150,image:"https://i.postimg.cc/Dz3R3FvG/kid6.jpg"},
  {id:207,name:"Educational Toy",category:"Kids & Toys",price:800,image:"https://i.postimg.cc/bw6TQX6q/kid7.jpg"},
  {id:208,name:"Toy Train",category:"Kids & Toys",price:900,image:"https://i.postimg.cc/4dGmV1b5/kid8.jpg"},
  {id:209,name:"Stuffed Animal",category:"Kids & Toys",price:400,image:"https://i.postimg.cc/DfBR7j9p/kid9.jpg"},
  {id:210,name:"Kids T-Shirt",category:"Kids & Toys",price:350,image:"https://i.postimg.cc/4xk2VwqV/kid10.jpg"},
  {id:211,name:"Toy Drum",category:"Kids & Toys",price:600,image:"https://i.postimg.cc/zXh0QFzL/kid11.jpg"},
  {id:212,name:"Water Gun",category:"Kids & Toys",price:250,image:"https://i.postimg.cc/6q3z8qYp/kid12.jpg"},

  // Westernwear (12)
  {id:301,name:"Men T-Shirt",category:"Westernwear",price:499,image:"https://i.postimg.cc/Hx9jzXwT/west1.jpg"},
  {id:302,name:"Jeans",category:"Westernwear",price:1200,image:"https://i.postimg.cc/Gp0ytqS2/west2.jpg"},
  {id:303,name:"Hoodie",category:"Westernwear",price:1500,image:"https://i.postimg.cc/wvyLXzC2/west3.jpg"},
  {id:304,name:"Jacket",category:"Westernwear",price:2000,image:"https://i.postimg.cc/T1ywW5Pr/west4.jpg"},
  {id:305,name:"Women Top",category:"Westernwear",price:700,image:"https://i.postimg.cc/NF2Q5MZ6/west5.jpg"},
  {id:306,name:"Leggings",category:"Westernwear",price:900,image:"https://i.postimg.cc/t42XHp5g/west6.jpg"},
  {id:307,name:"Sneakers",category:"Westernwear",price:1800,image:"https://i.postimg.cc/1X2yLztV/west7.jpg"},
  {id:308,name:"Shirt",category:"Westernwear",price:800,image:"https://i.postimg.cc/FsY4L3cD/west8.jpg"},
  {id:309,name:"Skirt",category:"Westernwear",price:950,image:"https://i.postimg.cc/ZK1z5pL6/west9.jpg"},
  {id:310,name:"Blazer",category:"Westernwear",price:2500,image:"https://i.postimg.cc/KzR0CVnV/west10.jpg"},
  {id:311,name:"Shorts",category:"Westernwear",price:650,image:"https://i.postimg.cc/9M5BnsxM/west11.jpg"},
  {id:312,name:"Crop Top",category:"Westernwear",price:700,image:"https://i.postimg.cc/NfH7cDhn/west12.jpg"},

  // Home (10)
  {id:401,name:"Cushion Cover",category:"Home",price:350,image:"https://i.postimg.cc/j2rCshdM/home1.jpg"},
  {id:402,name:"Wall Clock",category:"Home",price:500,image:"https://i.postimg.cc/3xFmXJbQ/home2.jpg"},
  {id:403,name:"Table Lamp",category:"Home",price:1200,image:"https://i.postimg.cc/VL7H0kD9/home3.jpg"},
  {id:404,name:"Ceramic Vase",category:"Home",price:800,image:"https://i.postimg.cc/TwG9YbT9/home4.jpg"},
  {id:405,name:"Rug Carpet",category:"Home",price:1500,image:"https://i.postimg.cc/zXyd0g1k/home5.jpg"},
  {id:406,name:"Wall Art",category:"Home",price:1100,image:"https://i.postimg.cc/BvVhbY8Y/home6.jpg"},
  {id:407,name:"Curtains",category:"Home",price:900,image:"https://i.postimg.cc/XJmYqzjG/home7.jpg"},
  {id:408,name:"Table Mat",category:"Home",price:400,image:"https://i.postimg.cc/0yVjhtzV/home8.jpg"},
  {id:409,name:"LED Light",category:"Home",price:1300,image:"https://i.postimg.cc/3J3S4jGn/home9.jpg"},
  {id:410,name:"Storage Box",category:"Home",price:700,image:"https://i.postimg.cc/jqJwYc8X/home10.jpg"},

  // Sarees (10)
  {id:501,name:"Silk Saree Pink",category:"Sarees",price:2200,image:"https://i.postimg.cc/j2f8P5dT/saree1.jpg"},
  {id:502,name:"Cotton Saree Blue",category:"Sarees",price:1800,image:"https://i.postimg.cc/Z0DcHxvn/saree2.jpg"},
  {id:503,name:"Designer Saree Red",category:"Sarees",price:3500,image:"https://i.postimg.cc/JzKhxwns/saree3.jpg"},
  {id:504,name:"Chiffon Saree Green",category:"Sarees",price:2000,image:"https://i.postimg.cc/ZYZT4g7r/saree4.jpg"},
  {id:505,name:"Linen Saree Yellow",category:"Sarees",price:1500,image:"https://i.postimg.cc/wjv2X7fC/saree5.jpg"},
  {id:506,name:"Party Saree Purple",category:"Sarees",price:3200,image:"https://i.postimg.cc/8P2s9mP6/saree6.jpg"},
  {id:507,name:"Silk Saree Orange",category:"Sarees",price:2500,image:"https://i.postimg.cc/4dWZ7PqT/saree7.jpg"},
  {id:508,name:"Cotton Saree White",category:"Sarees",price:1800,image:"https://i.postimg.cc/0Q7h0kYg/saree8.jpg"},
  {id:509,name:"Designer Saree Grey",category:"Sarees",price:3000,image:"https://i.postimg.cc/Wp1gVcv0/saree9.jpg"},
  {id:510,name:"Party Saree Maroon",category:"Sarees",price:3500,image:"https://i.postimg.cc/XqWZ3Pcs/saree10.jpg"},
];

// ==== FUNCTIONS ====
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function showProducts(category="All") {
  const container = document.getElementById("products");
  container.innerHTML = "";

  const filtered = category==="All" ? products : products.filter(p=>p.category===category);

  filtered.forEach(p=>{
    const wish = wishlist.includes(p.id) ? "❤️" : "🤍";
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <div class="wishlist" onclick="toggleWishlist(${p.id})">${wish}</div>
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ==== WISHLIST ====
function toggleWishlist(id){
  if(wishlist.includes(id)){
    wishlist = wishlist.filter(i=>i!==id);
  } else {
    wishlist.push(id);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  showProducts();
}

// ==== CART ====
function addToCart(id){
  let item = products.find(p=>p.id===id);
  let exist = cart.find(c=>c.id===id);
  if(exist){
    exist.qty +=1;
  } else {
    cart.push({...item, qty:1});
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to Cart ✅");
}

function updateCartCount(){
  let count = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("cartCount").innerText = count;
}

// ==== INIT ====
document.addEventListener("DOMContentLoaded", ()=>{
  showProducts();
  updateCartCount();
});
