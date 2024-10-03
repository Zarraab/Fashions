let web_Icons_Web_Properties = {
 //"Favicon" : let f = {
  "Favicon" : {
   "New" : ""
  },
  "Body" : {
   "Header" : {
    "Search" : "",
   },
   "Main" : {
    "Product" : "https://imgs.search.brave.com/asVsLXuaR_vhZQGMnoW23o6wQS_nVcZQAIjVhnkO_OA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly80Lmlt/aW1nLmNvbS9kYXRh/NC9ESS9PUC9NWS0y/MjkxMTM3MC9tZW4t/cy10aG9iZS01MDB4/NTAwLmpwZw"
   },
   "Footer" : {
    "Social-Media" : {
     "FaceBook" : "",
     "Meta" : "",
     "Twitter" : "",
    },
    "Payment" : {
     "Bank-Transfer" : "",
    }
   }
  }
};
// 
// Select the image element by its class name
let dummyproduct_productImage = document.querySelector('.product-front-image-dummyproduct');
//let dummyproduct_productImage = document.querySelector('.product-front-image-dummyproduct');
//let dummyproduct_productImage = document.getElementById('.product-front-image-dummyproduct');//.getElementsByTagName("img");

// Set the 'src' attribute of the image to the product URL
dummyproduct_productImage.src = web_Icons_Web_Properties.Body.Main.Product;
//alert(web_Icons_Web_Properties.Body.Main.Product);

const uRl = [
"https://script.googleusercontent.com/macros/echo?user_content_key=owlIK4yejPvzGuBPKtTdaefFCiIC0_utopKwHvrQGQnON1CHRP-FhTh3p1OYNOiAgKConbzFl5CNHP5NJphqBo183H9Vmj0Xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMVakcrgxx4CAmI_bdFAkkpiy7RLU7lluLqcucPCGvrbaq69MlTgfhjVeHKdDVG5E-RUeBvCquBINyDG9n69D5Ok9ewf2yZ-1A&lib=M8NYWJV3-Y5rfZUFfXfp1m7Md4ojxwRP6",
"https://script.google.com/macros/s/AKfycbxUoXEtaIl44_TfX8Xf7UnL4OLiYVz5E_MPR2DNco7G4NCUVxAd2RKmI9gkkEOpiPZx/exec",
"https://script.google.com/macros/s/AKfycbxUoXEtaIl44_TfX8Xf7UnL4OLiYVz5E_MPR2DNco7G4NCUVxAd2RKmI9gkkEOpiPZx/exec",
"https://script.google.com/macros/s/AKfycbxUoXEtaIl44_TfX8Xf7UnL4OLiYVz5E_MPR2DNco7G4NCUVxAd2RKmI9gkkEOpiPZx/exec",
"https://script.google.com/macros/s/AKfycbxUoXEtaIl44_TfX8Xf7UnL4OLiYVz5E_MPR2DNco7G4NCUVxAd2RKmI9gkkEOpiPZx/exec?path=Zarraab"
];

//const scriptUrl = uRl[3];

//const url = uRl[4];

fetch(url)//, { mode: 'no-cors' })
 .then(response => {
   if (response.ok) {
    return response.json(); // Parse the response as JSON
   } else {
    throw new Error(`HTTP error! status: ${response.status}, URL: ${response.url}`);
   }
 })
 .then(data => {
  console.log('Fetched Data:', data); // Debugging: Display fetched data in console
  displayProducts(data); // Call the displayProducts function with the fetched data
 })//.then(response => {
 //console.log('Fetch successful, but CORS policy prevents reading data', response);
 //})
 .catch(error => {
  console.error('Error fetching data:', error);
 });

// List of fallback images when the main image is not available
image_NA_list = [
"https://imgs.search.brave.com/QrrF8yctvnxGKn5UBvuEt1XL7Pv04zXmzQ0y50RN5cY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzkxLzIyLzU5/LzM2MF9GXzc5MTIy/NTkyN19jYVJQUEg5/OUQ2RDFpRm9ua0NS/bUNHemtKUGYzNlFE/dy5qcGc",
"https://imgs.search.brave.com/yvto4Mk6Yl8PjkarpBb1RqId_9rsXFqs3MiQrCtjMhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC84/Mi85OS9uby1pbWFn/ZS1hdmFpbGFibGUt/bGlrZS1taXNzaW5n/LXBpY3R1cmUtdmVj/dG9yLTQzOTM4Mjk5/LmpwZw",
"https://imgs.search.brave.com/Tn5pKlMOw0_FerWffTprFCqRcdROmyyfH62WlFnrX-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FjL05vX2ltYWdl/X2F2YWlsYWJsZS5z/dmc"
];

// List of fallback images when the image is Error in state
error_image_list = [
"https://imgs.search.brave.com/yjr2Z5T-8TlPrkntaN9BXJG8jX_1UT8fWyhtzhCBivU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/MjgwNjE0MS9waG90/by9jb21wdXRlci1l/cnJvci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9UXFORVhn/YlBqMzFfZElhYkZk/WXh1NjFfSDBYSkNL/YzVTXzJMTzdaX1Rl/VT0",
"https://imgs.search.brave.com/6jwmSKewyErBtn4tZLYQqObgqQ2aMS8WbBDPHnAEevM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgz/NzczMTYzL3Bob3Rv/L2V4Y2xhbWF0aW9u/LXBvaW50LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1ISWJ1/QTRJbDR3YlRaZnRn/eHhqMHY2d0ZYYlBD/VUZrQUJiR0Vyb2Jp/X0hNPQ",
"https://imgs.search.brave.com/KmcovpJlxHYPBqbwzFd2YOLtWBZDshXUYUCQyumCteA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NzczOTAzL3Bob3Rv/L3dhcm5pbmctc2ln/bi1leGNsYW1hdGlv/bi1wb2ludC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dDlm/R3VMTWR2RTBjNlBu/dXFNWXIxWUd5NDZG/X2JOdE90ZVE0T1pD/MHhaST0"
];

async function displayProducts(products) {
 const content = document.getElementById('product-list');
 content.innerHTML = ''; // Clear existing products
 for (const product of products) {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';
  // Clean and trim the image URLs to remove extra spaces or new lines
  const cleanedImages = product.images
  .map(img => img && img.replace(/[,\s\n]+/g, '').trim()) // Trim spaces and handle null/undefined and Clean Remove commas, spaces, and newlines unwanted characters
  .filter(img => img && img.length > 0);  // Filter out empty or invalid URLs
  // Log cleaned images for debugging purposes
  console.log('Cleaned Images for Product:', product.name, cleanedImages);
  // Find the first valid image URL that includes 'http' or 'https'
  const firstImage = cleanedImages.find(img => img.startsWith('http') || img.startsWith('https'));
  let imageUrl = '';
  if (firstImage && await isImageAccessible(firstImage)) {
   // If a valid image is found and accessible, use it
   imageUrl = firstImage;
  } else if (!firstImage) {
   // If no valid image is found, use a random NA image
   imageUrl = getRandomImage(image_NA_list);
  } else {
   // If an image exists but failed to load, use a random error image
   imageUrl = getRandomImage(error_image_list);
  }
  // Log the selected image URL for debugging purposes
  console.log('Selected Image URL for Product:', product.name, imageUrl);
  // Format price and quantity
  const formattedPrice = product.price ? product.price.toLocaleString() : 'N/A';
  const formattedQuantity = product.totalAvailableQuantity && product.totalAvailableQuantity[0] ? product.totalAvailableQuantity[0] : 'N/A';
  // Add product HTML with image
  productDiv.innerHTML = `
   <div class="product_front" id="product_front">
    <!-- Product image -->
    <div class="product_front_image-div" id="product_front_image-div">
     <img src="${imageUrl}" class="product-front-image-dummyproduct" id="product-front-image-dummyproduct" title="${product.name}" alt="${product.name}">
    </div>
    <!-- Product video -->
    <div class="product_video-div" id="product_video-div">
     <iframe 
    class="product_video_yt_iframe"
    id="product_video_yt_iframe"
    title="${product.name}"
    alt="${product.name}"
    src="https://www.youtube.com/embed/${product.productTrailer}?autoplay=1&mute=1&loop=1&playlist=${product.productTrailer}&controls=0&branding=0" 
    title="${product.name}" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
   </iframe>
     <!--<video class="product_video_tag" id="product_video_tag" type="video/mp4" title="${product.name}" alt="${product.name}" src="${product.productTrailer}" autoplay loop muted>
      <source src="${product.productTrailer}">
     </video>-->
    </div>
   </div>
   <br>
   <h2 id="h2-product-name" class="h2-product-name">${product.name}</h2>
    <!--
     <textarea id="text-area-description" class="text-area-description" style="background: transparent; color: white;" readonly>
      This is the Dummy Product; Where we are showing you how the product looks like. There is the quickest Brownish Foxies Jumped over the World’s Laziest Doggies.
     </textarea>
    -->
    <h3 id="h3-product-price" class="h3-product-price">Price (in SAR): ${formattedPrice}</h3>
    <h5 id="h5-product-quantity" class="h5-product-stock-quantity"> Available Stock Quantity: ${formattedQuantity} </h5>
    <br>
    <table class="separator-between-switch">
     <tr>
      <td style="border-right: 1px solid red; padding: 11px; padding-right: 13px;">
       <div title="Add to Cart or Basket; This is the Basket Icon box" class="add-to-cart-box">
        <img src="https://imgs.search.brave.com/rJRwdmImEaNZ6nW7xkvChhUOxrhHWeGRmdkM5bhjwl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y3VzdG9tLWljb24t/ZGVzaWduL2ZsYXRh/c3RpYy0xMS81MTIv/U2hvcHBpbmctYmFz/a2V0LWFkZC1pY29u/LnBuZw" style="" title="${product.name}; Add to Cart or Basket; This is the Basket Icon Image click here" class="add-to-cart-img class="add-to-cart-img" id="dummyProduct" onclick="addToCart('${product.id}');">
       </div>
      </td>
      <td>
       <div title="Check complete details about the products you like" class="open-view-detailed">
        <button title="Check complete Detailed about this products ${product.name} which you like to press this Button; Press this button and see What is it ${product.name}!" id="open-view-detailed" class="open-view-detailed-botton" onclick="open-view-detailed('${product.id}')">Open Detailed View</button>
       </div>
      </td>
     </tr>
    </table>
  `;
  content.appendChild(productDiv);
 }
}


// Function to check if an image URL is accessible
async function isImageAccessible(url) {
 return new Promise((resolve) => {
  const img = new Image();
  img.onload = () => resolve(true);  // Image loaded successfully
  img.onerror = () => resolve(false); // Image failed to load
  img.src = url;
 });
}

// Function to get a random image from a list
function getRandomImage(imageList) {
 const randomIndex = Math.floor(Math.random() * imageList.length);
 return imageList[randomIndex];
}

// Calculate available stock based on current orders
function calculateAvailableStock(productId) {
 var product = allProducts.find(p => p.id === productId);
 var orderedQuantity = cart.reduce(function(total, item) {
  return item.productId === productId ? total + item.quantity : total;
 }, 0);
 return product.quantity - orderedQuantity;
}

// Search products dynamically and update both search suggestions and main product display
function searchProducts() {
 var query = document.getElementById('searchInput').value.toLowerCase();
 // Filter products based on query
 var filteredProducts = allProducts.filter(function(product) {
  return product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
 });
 // Update the datalist with filtered results
 updateSearchSuggestions(filteredProducts);
 // Use your existing displayProducts function to update the main product display
 displayProducts(filteredProducts);
}

// Function to update datalist with filtered products
function updateSearchSuggestions(products) {
 const dataList = document.getElementById('search-data-list');
 dataList.innerHTML = ''; // Clear existing suggestions
 products.forEach(function(product) {
  const option = document.createElement('option');
  option.value = product.name;
  option.textContent = `${product.name} - Price: ${product.price} SAR`;
  dataList.appendChild(option);
 });
}

// Function to clear datalist suggestions
function clearSearchSuggestions() {
 document.getElementById('search-data-list').innerHTML = '';
}

// Attach the 'input' event listener to dynamically search
document.getElementById('searchInput').addEventListener('input', searchProducts);

// Optional: Clear the datalist if the input is cleared
document.getElementById('searchInput').addEventListener('change', function() {
 if (!this.value.trim()) {
  clearSearchSuggestions();
 }
});

// Function to update the datalist with filtered product names
function updateDatalist(filteredProducts) {
 let datalist = document.getElementById('search-data-list');
 datalist.innerHTML = ''; // Clear previous list
 filteredProducts.forEach(product => {
  let option = document.createElement('option');
  option.value = product.name; // Display product name in the datalist
  datalist.appendChild(option);
 });
}

// JavaScript for Lightbox
function showProductDetails(productId) {
 document.getElementById('product-lightbox').style.display = 'block';
 // Fetch and display product details based on productId
}

function openLightbox(product) {
 // Set the product image, title, price, and details in the lightbox
 document.getElementById('lightbox-image').src = product.imageSrc;
 document.getElementById('lightbox-title').innerText = product.title;
 document.getElementById('lightbox-price').innerText = "Price: " + product.price;
 document.getElementById('lightbox-details').innerText = product.details;
 // Display the lightbox
 document.getElementById('product-lightbox').style.display = 'block';
}

function openProductDetailsPopup(product) {
 // Set the product image, title, price, and quantity available in the popup
 document.getElementById('popup-image').src = product.imageSrc;
 document.getElementById('popup-title').innerText = product.title;
 document.getElementById('popup-price').innerText = "Price: " + product.price;
 document.getElementById('popup-quantity').innerText = "Number of Quantity Available: " + product.quantityAvailable;
 // Display the popup
 document.getElementById('product-details-popup').style.display = 'block';
}

function updatePrice() {
 const quantity = parseInt(document.getElementById('quantity').value, 10);
 const unitPrice = 10.00; // Replace with dynamic price
 const totalPrice = (quantity * unitPrice).toFixed(2);
 document.getElementById('total-price').textContent = totalPrice;
}

document.querySelector("#product-details-popup button").addEventListener("click", function() {
 const product = { // Example product data
  id: 1, 
  imageSrc: "path/to/image.jpg",
  title: "Sample Product",
  price: "$20",
  quantityAvailable: 10,
 };
 addToCart(product);
});

//let cart = [];
//var d_c = document.getElementById('basket-icon');
//cart = cart.length > 0 ? d_c.style.display = "block" : d_c.style.display = "none" ;

let cart = [];
var d_c = document.getElementById('basket-icon');

// Check if the cart has items and show/hide the basket icon
if (cart.length > 0) {
    d_c.style.display = "block"; // Show the icon if cart has items
} else {
    d_c.style.display = "none"; // Hide the icon if the cart is empty
}

function addToCart(productId) {
 var product = allProducts.find(p => p.id === productId);
 var availableStock = calculateAvailableStock(productId);
 if (availableStock > 0) {
  const quantity = parseInt(document.getElementById('popup-quantity-input').value, 10);
  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
   // Update the quantity if the product is already in the cart
   existingProduct.quantity += parseInt(quantity);
  } else {
   // Add the product to the cart
   cart.push({ ...product, quantity: parseInt(quantity) });
  }
  cart.push({ productId: productId, quantity: 1 });
  displayProducts(allProducts); // Update product display after adding to cart
  // Trigger the toast
  showToast(`${product.title} has been added to your cart!`);
 } else {
  // Display success toast
  //alert(`${product.title}`);
  showToast(`${product.title} has been added to your cart!`, 'success');
  displayProducts(allProducts); // Update product display after adding to cart
 } /*else {
 //alert('Out of stock!');
 // Display error toast
 showToast(`${product.title} is out of stock!`, 'error');
 }*/
 // Here is the Toast Pop-Up to User Indication
 // alert(product.title + " has been added to your cart!");
 // Save the cart and update UI to localStorage
 saveCart();
 updateCartCount();
 updateTotalPrice();
 // Optionally, you can hide the popup after adding to the cart
 hideDetails();
}

function saveCart() {
 localStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
 // Clear cart items
 cart = []; // Starts from Empty Basket or Cart
 saveCart(); // Save the Empty Cart to LocalStorage
 displayCart(); // Update the Cart UI to Reflect the Empty Cart on Display
 updateCartCount(); // Reset the cart count to 0
 updateTotalPrice(); // Reset the total price to 0
 alert('Cart has been cleared.');
}

function displayCart() {
 const cartContainer = document.getElementById('cart-items');
 cartContainer.innerHTML = '';
 var dac = document.getElementById("basket-icon"); // dac stands Direct Add to Cart
 var table = document.getElementById("shopping-cart-detaileds-table");
 if (cart.length === 0) {
  [dac, table].forEach(el => el.style.display = "none");
  //(dac, table).style.display : "none";
  cartContainer.innerHTML = '<p class="empty-cart" id="empty-cart">You have not put in the basket anything which is avaliable in over market thats why your cart is empty.</p>';
  return;
 }
 cart.forEach(item => {
  dac.style.display = "block";
  //const cartItem = document.createElement('div');
  const cartItem = document.createElement('tr');
  for(i=0; i<cart.length; i++){
   var serial_number = i;
  }
  cartItem.innerHTML = `
   <td>${serial_number}</td>
   <td>
    <img src="${item.imageSrc}" title="${item.title}" class="cartProductImagesPicture" id="cartProductImagesPicture" />
   </td>
   <td>${item.articleNumber}</td>
   <td>${item.title}</td>
   <td>${item.price}</td>
   <td>
    <input type="number" value="${cart.qty}" name="quantity" width="auto" >
   </td>
   <td>${(item.price)*(cart.qty)}</td>
   <td>
    <label class="Delete" onclick>Delete</label>
   </td>
  `;
  cartContainer.appendChild(cartItem);
 });
}

/*
<img src="${item.imageSrc}" title="${item.title}" />
   <p>${item.title}</p>
   <p>Price: ${item.price}</p>
   <label for="quantity-${item.id}">Quantity:</label>
   <input type="number" id="quantity-${item.id}" value="${item.quantity}" min="1" onchange="updateCartItem(${item.id}, this.value)">
   <button onclick="removeCartItem(${item.id})">Remove</button>
*/

function updateCartCount() {
 const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Sum of quantities
 document.getElementById('cart-count').innerText = totalItems;
}

function updateTotalPrice() {
 const totalPrice = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
 document.getElementById('total-price').innerText = totalPrice.toFixed(2); // Format to 2 decimal places
}

function updateCartItem(productId, newQuantity) {
 const product = cart.find(item => item.id === productId);
 if (product) {
  product.quantity = parseInt(newQuantity);
  saveCart();
  updateTotalPrice();
  updateCartCount();
 }
}

function removeCartItem(productId) {
 cart = cart.filter(item => item.id !== productId);
 saveCart();
 displayCart();
 updateCartCount();
 updateTotalPrice();
}

function checkout() {
 // Redirect to checkout or display checkout form
 if (cart.length === 0) {
  alert("Your cart is empty.");
  return;
 }
 alert("Proceeding to checkout...");
 // Save Order Details in LocalStorage to Access them on the Confirmation Page
 const currentOrder = cart;
 let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
 orderHistory.push({ date: new Date().toISOString(), order: currentOrder });
 localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
 localStorage.setItem('order', JSON.stringify(cart));
 // Clear the cart after checkout
 clearCart();
 // Redirect to the confirmation page
 window.location.href = 'order-confirmation.html';
 // Here, you'd integrate your payment system or navigate to a checkout page.
}

function closeLightbox() {
 document.getElementById('product-lightbox').style.display = 'none';
}

function hideDetails() {
 document.getElementById('product-details-popup').style.display = 'none';
}

function loadCart() {
 const savedCart = localStorage.getItem('cart');
 if (savedCart) {
  cart = JSON.parse(savedCart);
  displayCart(); // Display cart items and Update the UI with the loaded cart
  updateCartCount(); // Update the cart icon count
  updateTotalPrice(); // Update the total price
 }
}

function toggleCart() {
 const cart = document.getElementById('cart');
 cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

// Tabs
function openTab(tabName) {
 const tabs = document.getElementsByClassName('tab-content');
 for (let i = 0; i < tabs.length; i++) {
  tabs[i].style.display = 'none'; // Hide all tabs
 }
 document.getElementById(tabName).style.display = 'block'; // Show selected tab
}

function startAutoUpdate(interval) {
 fetchProducts(); // Initial fetch
 setInterval(fetchProducts, interval); // Fetch every 'interval' milliseconds
}

// Initialize and fetch products on page load
window.onload = function() {
 dataProducts();
 //fetchProducts();
 loadCart(); // Load the cart when the page is loaded
 startAutoUpdate(1); // Auto-update every 60 seconds
};

// Show dynamic toast with a message and type ('success' or 'error')
function showToast(message, type) {
 const toast = document.getElementById('toast');
 toast.textContent = message; // Set the message
 toast.className = `toast ${type} show`; // Set the class to include success or error
 // Hide the toast after 3 seconds
 setTimeout(() => {
  toast.className = toast.className.replace("show", "");
 }, 3000);
}

/*
let cart = [];

function addToCart(productId) {
 var product = allProducts.find(p => p.id === productId);
 var availableStock = calculateAvailableStock(productId);
 if (availableStock > 0) {
  const quantity = parseInt(document.getElementById('popup-quantity-input').value, 10);
  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
   // Update the quantity if the product is already in the cart
   existingProduct.quantity += parseInt(quantity);
  } else {
   // Add the product to the cart
   cart.push({ ...product, quantity: parseInt(quantity) });
  }
  cart.push({ productId: productId, quantity: 1 });
  displayProducts(allProducts); // Update product display after adding to cart
  // Trigger the toast
  showToast(`${product.title} has been added to your cart!`);
 } else {
  alert('Out of stock!');
 }
 // Here is the Toast Pop-Up to User Indication
 // alert(product.title + " has been added to your cart!");
 // Save the cart and update UI to localStorage
 saveCart();
 updateCartCount();
 updateTotalPrice();
 // Optionally, you can hide the popup after adding to the cart
 hideDetails();
}
*/


