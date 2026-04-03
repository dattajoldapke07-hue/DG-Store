let products = JSON.parse(localStorage.getItem("products")) || [
  {id:1,name:"T-Shirt",price:500,img:"https://www.freeiconspng.com/uploads/blank-t-shirt-png-16.jpg"},
  {id:2,name:"Shoes",price:1500,img:"https://www.pngall.com/wp-content/uploads/5/Men-Shoes-PNG-Image-File.png"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wish")) || [];

/* SHOW PRODUCTS */
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

/* NAVIGATION */
function view(id){
  localStorage.setItem("view", id);
  location.href="product.html";
}

function goCart(){ location.href="cart.html"; }
function goWishlist(){ alert("Wishlist coming soon"); }

/* PRODUCT DETAIL */
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

/* CART */
function addCart(id){
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
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

/* ORDER */
function placeOrder(){
  let method = document.getElementById("payment").value;
  alert("Order placed via "+method);
  localStorage.removeItem("cart");
  location.href="index.html";
}

/* WISHLIST */
function addWish(id){
  wishlist.push(id);
  localStorage.setItem("wish", JSON.stringify(wishlist));
  alert("Added to wishlist");
}

/* ADMIN */
function addProduct(){
  let name = pname.value;
  let price = pprice.value;
  let img = pimg.value;

  products.push({id:Date.now(),name,price,img});
  localStorage.setItem("products", JSON.stringify(products));
  loadAdmin();
}

function loadAdmin(){
  let box = document.getElementById("adminProducts");

  box.innerHTML = products.map(p=>`
    <div>
      ${p.name} ₹${p.price}
      <button onclick="removeProduct(${p.id})">Delete</button>
    </div>
  `).join('');
}

function removeProduct(id){
  products = products.filter(p=>p.id!==id);
  localStorage.setItem("products", JSON.stringify(products));
  loadAdmin();
}

/* INIT */
showProducts();
