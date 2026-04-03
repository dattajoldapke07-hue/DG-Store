

let products = JSON.parse(localStorage.getItem("products")) || [

/* ===== FASHION (15) ===== */
{id:1,name:"Silk Saree",price:1299,cat:"fashion",img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c"},
{id:2,name:"Cotton Saree",price:899,cat:"fashion",img:"https://images.unsplash.com/photo-1593032465171-8a6b47ffcf1d"},
{id:3,name:"Designer Kurti",price:699,cat:"fashion",img:"https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03"},
{id:4,name:"Anarkali Dress",price:1199,cat:"fashion",img:"https://images.unsplash.com/photo-1521335629791-ce4aec67dd47"},
{id:5,name:"Western Dress",price:999,cat:"fashion",img:"https://images.unsplash.com/photo-1509631179647-0177331693ae"},
{id:6,name:"Men Shirt",price:599,cat:"fashion",img:"https://images.unsplash.com/photo-1520975916090-3105956dac38"},
{id:7,name:"Casual T-Shirt",price:299,cat:"fashion",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
{id:8,name:"Hoodie",price:899,cat:"fashion",img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"},
{id:9,name:"Denim Jacket",price:1499,cat:"fashion",img:"https://images.unsplash.com/photo-1520975922284-9f06c2d0b9fa"},
{id:10,name:"Track Pants",price:499,cat:"fashion",img:"https://images.unsplash.com/photo-1593032465171-8a6b47ffcf1d"},
{id:11,name:"Formal Pants",price:799,cat:"fashion",img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246"},
{id:12,name:"Lehenga",price:2499,cat:"fashion",img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"},
{id:13,name:"Blouse",price:399,cat:"fashion",img:"https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03"},
{id:14,name:"Palazzo Set",price:999,cat:"fashion",img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c"},
{id:15,name:"Dupatta",price:299,cat:"fashion",img:"https://images.unsplash.com/photo-1593032465171-8a6b47ffcf1d"},

/* ===== FOOTWEAR (15) ===== */
{id:16,name:"Running Shoes",price:1299,cat:"footwear",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
{id:17,name:"Casual Sneakers",price:1499,cat:"footwear",img:"https://images.unsplash.com/photo-1528701800489-20be9c0d6f1c"},
{id:18,name:"Formal Shoes",price:1999,cat:"footwear",img:"https://images.unsplash.com/photo-1528701800489-20be9c0d6f1c"},
{id:19,name:"Sandals",price:499,cat:"footwear",img:"https://images.unsplash.com/photo-1582582494700-4c4b3a1fbb27"},
{id:20,name:"Flip Flops",price:299,cat:"footwear",img:"https://images.unsplash.com/photo-1593032465171-8a6b47ffcf1d"},
{id:21,name:"Sports Shoes",price:999,cat:"footwear",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
{id:22,name:"Loafers",price:1199,cat:"footwear",img:"https://images.unsplash.com/photo-1528701800489-20be9c0d6f1c"},
{id:23,name:"Boots",price:2499,cat:"footwear",img:"https://images.unsplash.com/photo-1520975922284-9f06c2d0b9fa"},
{id:24,name:"Heels",price:899,cat:"footwear",img:"https://images.unsplash.com/photo-1528701800489-20be9c0d6f1c"},
{id:25,name:"Kids Shoes",price:699,cat:"footwear",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
{id:26,name:"Slippers",price:399,cat:"footwear",img:"https://images.unsplash.com/photo-1582582494700-4c4b3a1fbb27"},
{id:27,name:"Ethnic Mojari",price:799,cat:"footwear",img:"https://images.unsplash.com/photo-1528701800489-20be9c0d6f1c"},
{id:28,name:"Office Shoes",price:1799,cat:"footwear",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
{id:29,name:"Canvas Shoes",price:899,cat:"footwear",img:"https://images.unsplash.com/photo-1528701800489-20be9c0d6f1c"},
{id:30,name:"Sports Sandals",price:699,cat:"footwear",img:"https://images.unsplash.com/photo-1582582494700-4c4b3a1fbb27"},

/* ===== HOME (15) ===== */
{id:31,name:"Wall Decor",price:699,cat:"home",img:"https://images.unsplash.com/photo-1505691938895-1758d7feb511"},
{id:32,name:"Table Lamp",price:999,cat:"home",img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"},
{id:33,name:"Bedsheet",price:799,cat:"home",img:"https://images.unsplash.com/photo-1582582494700-4c4b3a1fbb27"},
{id:34,name:"Curtains",price:899,cat:"home",img:"https://images.unsplash.com/photo-1505691938895-1758d7feb511"},
{id:35,name:"Sofa Cover",price:1199,cat:"home",img:"https://images.unsplash.com/photo-1582582494700-4c4b3a1fbb27"},
{id:36,name:"Wall Clock",price:499,cat:"home",img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"},
{id:37,name:"Cushion Set",price:699,cat:"home",img:"https://images.unsplash.com/photo-1582582494700-4c4b3a1fbb27"},
{id:38,name:"Carpet",price:1499,cat:"home",img:"https://images.unsplash.com/photo-1505691938895-1758d7feb511"},
{id:39,name:"Storage Box",price:599,cat:"home",img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"},
{id:40,name:"Dining Set",price:2499,cat:"home",img:"https://images.unsplash.com/photo-1505691938895-1758d7feb511"},
{id:41,name:"Flower Vase",price:399,cat:"home",img:"https://images.unsplash.com/photo-1493666438817-866a91353ca9"},
{id:42,name:"Kitchen Set",price:1299,cat:"home",img:"https://images.unsplash.com/photo-1503602642458-232111445657"},
{id:43,name:"Wall Shelf",price:999,cat:"home",img:"https://images.unsplash.com/photo-1505691938895-1758d7feb511"},
{id:44,name:"Night Lamp",price:799,cat:"home",img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"},
{id:45,name:"Decor Lights",price:499,cat:"home",img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"},

/* ===== ELECTRONICS (15) ===== */
{id:46,name:"Smart Watch",price:1999,cat:"electronics",img:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"},
{id:47,name:"Bluetooth Speaker",price:1499,cat:"electronics",img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad"},
{id:48,name:"Headphones",price:999,cat:"electronics",img:"https://images.unsplash.com/photo-1518444028785-8f5c4a7c87d0"},
{id:49,name:"Gaming Mouse",price:799,cat:"electronics",img:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7"},
{id:50,name:"Keyboard",price:1299,cat:"electronics",img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"},
{id:51,name:"Power Bank",price:899,cat:"electronics",img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad"},
{id:52,name:"LED Light",price:499,cat:"electronics",img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"},
{id:53,name:"Mobile Stand",price:299,cat:"electronics",img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"},
{id:54,name:"USB Cable",price:199,cat:"electronics",img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"},
{id:55,name:"Tripod",price:699,cat:"electronics",img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad"},
{id:56,name:"Laptop Bag",price:1199,cat:"electronics",img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"},
{id:57,name:"Webcam",price:1599,cat:"electronics",img:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7"},
{id:58,name:"Smart Bulb",price:799,cat:"electronics",img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"},
{id:59,name:"Tablet Stand",price:499,cat:"electronics",img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"},
{id:60,name:"Mini Fan USB",price:399,cat:"electronics",img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad"}

];
// ===== STORAGE =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wish")) || [];

// ===== SHOW PRODUCTS =====
function showProducts(){
  let box = document.getElementById("products");
  if(!box) return;

  box.innerHTML = products.map(p=>`
    <div class="card">
      <img src="${p.img}" width="100%">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button onclick="view(${p.id})">View</button>
      <button onclick="addCart(${p.id})">Cart</button>
      <button onclick="addWish(${p.id})">❤️</button>
    </div>
  `).join('');
}

// ===== CATEGORY =====
function openCategory(cat){
  localStorage.setItem("selectedCategory", cat);
  location.href = "category.html";
}

function loadCategory(){
  let cat = localStorage.getItem("selectedCategory");
  document.getElementById("catTitle").innerText = cat.toUpperCase();

  let filtered = products.filter(p => p.cat === cat);

  document.getElementById("products").innerHTML = filtered.map(p=>`
    <div class="card">
      <img src="${p.img}" width="100%">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button onclick="view(${p.id})">View</button>
      <button onclick="addCart(${p.id})">Cart</button>
    </div>
  `).join('');
}

function goBack(){ history.back(); }

// ===== PRODUCT DETAIL =====
function view(id){
  localStorage.setItem("view", id);
  location.href="product.html";
}

function showProductDetail(){
  let id = localStorage.getItem("view");
  let p = products.find(x=>x.id==id);

  document.getElementById("productDetail").innerHTML = `
    <h2>${p.name}</h2>
    <img src="${p.img}" width="200">
    <p>₹${p.price}</p>
    <button onclick="addCart(${p.id})">Add to Cart</button>
  `;
}

// ===== CART =====
function addCart(id){
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🛒");
}

function showCart(){
  let box = document.getElementById("cartItems");
  let total = 0;

  box.innerHTML = cart.map(id=>{
    let p = products.find(x=>x.id==id);
    total += p.price;
    return `<p>${p.name} - ₹${p.price}</p>`;
  }).join('');

  document.getElementById("total").innerText = "Total: ₹"+total;
}

// ===== ORDER =====
function placeOrder(){
  let method = document.getElementById("payment").value;
  alert("Order placed via "+method);
  localStorage.removeItem("cart");
  location.href="index.html";
}

// ===== WISHLIST =====
function addWish(id){
  wishlist.push(id);
  localStorage.setItem("wish", JSON.stringify(wishlist));
  alert("Added to wishlist ❤️");
}

// ===== ADMIN =====
function addProduct(){
  let name = pname.value;
  let price = pprice.value;
  let img = pimg.value;
  let cat = prompt("Enter category (fashion/footwear/home/electronics)");

  products.push({id:Date.now(),name,price,img,cat});
  localStorage.setItem("products", JSON.stringify(products));
  loadAdmin();
}

function loadAdmin(){
  let box = document.getElementById("adminProducts");

  box.innerHTML = products.map(p=>`
    <div>
      ${p.name} ₹${p.price} (${p.cat})
      <button onclick="removeProduct(${p.id})">Delete</button>
    </div>
  `).join('');
}

function removeProduct(id){
  products = products.filter(p=>p.id!==id);
  localStorage.setItem("products", JSON.stringify(products));
  loadAdmin();
}

// ===== INIT =====
showProducts();
