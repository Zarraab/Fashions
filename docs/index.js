// https://docs.google.com/spreadsheets/d/1dvG_6CXt76mYOhT2DgSNUGtt1w26L9JEt5LD7qwS_hY/edit?usp=sharing
/*
var g_sheet_address = "https://docs.google.com/spreadsheets/d/";
var g_sheet_id = "1dvG_6CXt76mYOhT2DgSNUGtt1w26L9JEt5LD7qwS_hY";
var g_command_controller = "gvid/type=CSV";
var g_sheet = g_sheet_address+g_sheet_id+"/"+g_command_controller;
*/
//alert("Hello from JavaScript");

//var web_Icons = [
//["Favicon"], ["Body", ["Logo"], ["Header Area Icon"], ["Main Area Icon"]], ["Footer Area Icon", [], []]
//];

//var a = { "name" : "Cassim", "age" : "32", "gender" : "Male"};
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
"https://script.google.com/macros/s/AKfycbxUoXEtaIl44_TfX8Xf7UnL4OLiYVz5E_MPR2DNco7G4NCUVxAd2RKmI9gkkEOpiPZx/exec"
];
//const scriptUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=owlIK4yejPvzGuBPKtTdaefFCiIC0_utopKwHvrQGQnON1CHRP-FhTh3p1OYNOiAgKConbzFl5CNHP5NJphqBo183H9Vmj0Xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMVakcrgxx4CAmI_bdFAkkpiy7RLU7lluLqcucPCGvrbaq69MlTgfhjVeHKdDVG5E-RUeBvCquBINyDG9n69D5Ok9ewf2yZ-1A&lib=M8NYWJV3-Y5rfZUFfXfp1m7Md4ojxwRP6';

const scriptUrl = uRl[3];

fetch(scriptUrl)//, { mode: 'no-cors' })
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
	  .map(img => img && img.replace(/[, \n]/g, '').trim()) // Remove commas, spaces, and newlines
      //.map(img => img && img.trim(", \n"))  // Trim spaces and handle null/undefined
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
	 <img src="${imageUrl}" class="product-front-image-dummyproduct" id="product-front-image-product" title="${product.name}" alt="${product.name}">
     <br>
     <h2 id="h2-product-name" class="h2-product-name" >${product.name}</h2>
     <h3 id="h3-product-price" class="h3-product-price" >Price (in SAR): ${formattedPrice}</h3>
     <h5 id="h5-product-quantity" class="h5-product-stock-quantity" > Available Stock Quantity: ${formattedQuantity}</h5>
     <br>
	<table class="separator-between-switch">
	 <tr>
	  <td style="border-right: 1px solid red; padding: 11px; padding-right: 13px;">
	   <div title="${product.name}; Add to Cart or Basket; This is the Basket Icon box" class="add-to-cart-box">
        <img src="https://imgs.search.brave.com/rJRwdmImEaNZ6nW7xkvChhUOxrhHWeGRmdkM5bhjwl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y3VzdG9tLWljb24t/ZGVzaWduL2ZsYXRh/c3RpYy0xMS81MTIv/U2hvcHBpbmctYmFz/a2V0LWFkZC1pY29u/LnBuZw" style="" title="${product.name}; Add to Cart or Basket; This is the Basket Icon Image click here" class="add-to-cart-img" id="" onclick="addToCart('${product.id}');">
       </div>
      </td>
      <td>
       <div title="Check complete Detailed about this products ${product.name} which you like in the Box" class="open-view-detailed">
        <button title="Check complete Detailed about this products ${product.name} which you like to press this Button; Press this button and see What is it ${product.name}!" id="open-view-detailed" class="open-view-detailed-botton" onclick="open-view-detailed('${product.id}')">Open Detailed View</button>
       </div>
      </td>
     </tr>
    </table>
	`;
    content.appendChild(productDiv);
  }
}

/*<img src="${imageUrl}" class="product-front-image" alt="${product.name}" /><br>
      <h2 id="h2-product-name" class="h2-product-name">${product.name}</h2><br>
      <h3 id="h3-product-price" class="h3-product-price">Price (in SAR): ${formattedPrice}</h3><br>
      <h5 id="h5-product-quantity" class="h5-product-stock-quantity">Available Stock Quantity: ${formattedQuantity}</h5><br>
	  <img src="https://imgs.search.brave.com/rJRwdmImEaNZ6nW7xkvChhUOxrhHWeGRmdkM5bhjwl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y3VzdG9tLWljb24t/ZGVzaWduL2ZsYXRh/c3RpYy0xMS81MTIv/U2hvcHBpbmctYmFz/a2V0LWFkZC1pY29u/LnBuZw" style="" class="add-to-cart" id="" onclick="addToCart('${product.id}');">
      <button id="open-view-detailed" class="open-view-detailed" onclick="addToCart(${product.id})">Open Detailed View</button>*/


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


/*
async function displayProducts(products) {
  const content = document.getElementById('product-list');
  content.innerHTML = ''; // Clear existing products

  for (const product of products) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

	// Clean and trim the image URLs to remove extra spaces, new lines, or empty values
const cleanedImages = product.images
  .map(img => img && img.trim())  // Trim each image URL and handle any null/undefined
  .filter(img => img && img.length > 0);  // Filter out any empty or invalid URLs

	// Log cleaned images for debugging purposes
	console.log('Cleaned Images:', cleanedImages);

	// Find the first valid image that includes 'http' or 'https'
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
	console.log('Selected Image URL:', imageUrl);

	/*
    // Clean and trim the image URLs to remove extra spaces or new lines
    const cleanedImages = product.images.map(img => img.trim()).filter(img => img);

    // Log cleaned images for debugging purposes
    console.log('Cleaned Images:', cleanedImages);

    // First valid image in the cleaned `images` array
    const firstImage = cleanedImages.find(img => img && img.includes('https'));
	
    let imageUrl = '';
    if (firstImage && (await isImageAccessible(firstImage))) {
      imageUrl = firstImage;
    } else if (!firstImage) {
      // No valid image, use a random NA image
      imageUrl = getRandomImage(image_NA_list);
    } else {
      // Image exists but failed to load, use a random error image
      imageUrl = getRandomImage(error_image_list);
    }
	/

    // Log the selected image for debugging
    console.log('Image URL to display:', imageUrl);

    // Format price and quantity
    const formattedPrice = product.price ? product.price.toLocaleString() : 'N/A';
    const formattedQuantity = product.totalAvailableQuantity.length > 0 ? product.totalAvailableQuantity[0] : 'N/A';

    // Add product HTML with image
    productDiv.innerHTML = `
      <img src="${imageUrl}" class="product-front-image" title="${product.name}" alt="${product.name}" /><br>
      <h2 id="h2-product-name" class="h2-product-name">${product.name}</h2><br>
      <h3 id="h3-product-price" class="h3-product-price">Price (in SAR): ${formattedPrice}</h3><br>
      <h5 id="h5-product-quantity" class="h5-product-stock-quantity">Available Stock Quantity: ${formattedQuantity}</h5><br>
      <button id="open-view-detailed" class="open-view-detailed" onclick="addToCart(${product.id})">Open Detailed View</button>
    `;
    content.appendChild(productDiv);
  }
}
*/

/*
async function displayProducts(products) {
  const content = document.getElementById('product-list');
  content.innerHTML = ''; // Clear existing products

  for (const product of products) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // First image in the `images` array
    //const firstImage = product.images[0];  // Assuming first valid image URL starts at index 1
	const firstImage = product.images.find(img => img && img.includes('http')); // Find the first valid URL

    let imageUrl = '';
    if (firstImage && (await isImageAccessible(firstImage))) {
      imageUrl = firstImage;
    } else if (!firstImage) {
      // No valid image, use a random NA image
      imageUrl = getRandomImage(image_NA_list);
    } else {
      // Image exists but failed to load, use a random error image
      imageUrl = getRandomImage(error_image_list);
    }

    // Format price and quantity
    const formattedPrice = product.price.toLocaleString();
    const formattedQuantity = product.totalAvailableQuantity[0];

    // Add product HTML with image
    productDiv.innerHTML = `
      <img src="${imageUrl}" class="product-front-image" alt="${product.name}" /><br>
      <h2 id="h2-product-name" class="h2-product-name">${product.name}</h2><br>
      <h3 id="h3-product-price" class="h3-product-price">Price (in SAR): ${formattedPrice}</h3><br>
      <h5 id="h5-product-quantity" class="h5-product-stock-quantity">Available Stock Quantity: ${formattedQuantity}</h5><br>
	  <img src="https://imgs.search.brave.com/rJRwdmImEaNZ6nW7xkvChhUOxrhHWeGRmdkM5bhjwl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y3VzdG9tLWljb24t/ZGVzaWduL2ZsYXRh/c3RpYy0xMS81MTIv/U2hvcHBpbmctYmFz/a2V0LWFkZC1pY29u/LnBuZw" style="" class="add-to-cart" id="" onclick="addToCart('dummyproduct');">
      <button id="open-view-detailed" class="open-view-detailed" onclick="addToCart(${product.id})">Open Detailed View</button>
    `;
    content.appendChild(productDiv);
  }
}
*/






/*
// Fetch products when the page loads
// Script URL from Google Apps Script Web App
//const scriptUrl = 'YOUR_SCRIPT_URL_HERE'; // Update with your correct URL

// Fetch products when the page loads
window.onload = fetchProducts;

// Function to fetch products from the Google Apps Script Web App
async function fetchProducts() {
    try {
        // Try to fetch the data
        const response = await fetch(scriptUrl, {
            method: 'GET',
            mode: 'cors', // Enable CORS
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Check if the response is not okay
        if (!response.ok) {
            const errorMessage = `HTTP error! status: ${response.status || 'undefined'}, statusText: ${response.statusText || 'No status text'}`;
            console.log('Full Response:', response);
            throw new Error(errorMessage);
        }

        const data = await response.json(); // Parse JSON data
        displayProducts(data); // Display the products
        console.log('Data fetched:', data); // Debugging info
    } catch (error) {
        //console.error('Error fetching data:', error);
        //alert(`Error fetching data: ${error.message}`);
    }
}

// Dummy display function for testing
function displayProducts(data) {
    console.log('Products:', data);
}

// Dummy function for adding product to cart
function addToCart(productId) {
    alert(`Product with ID: ${productId} added to cart.`);
}
*/



// Script URL from Google Apps Script Web App
//const scriptUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=owlIK4yejPvzGuBPKtTdaefFCiIC0_utopKwHvrQGQnON1CHRP-FhTh3p1OYNOiAgKConbzFl5CNHP5NJphqBo183H9Vmj0Xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMVakcrgxx4CAmI_bdFAkkpiy7RLU7lluLqcucPCGvrbaq69MlTgfhjVeHKdDVG5E-RUeBvCquBINyDG9n69D5Ok9ewf2yZ-1A&lib=M8NYWJV3-Y5rfZUFfXfp1m7Md4ojxwRP6';
/*
// Fetch products when the page loads
window.onload = fetchProducts;

// Fetch products from the Google Apps Script Web App
async function fetchProducts() {
    try {
        const response = await fetch(scriptUrl, { method: 'GET' });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
			alert(`throw ${response.status}`);
        }

        const data = await response.json(); // Parse JSON data
        displayProducts(data); // Display the products
        //console.log('Data fetched:', data); // For debugging
    } catch (error) {
        //console.error('Error fetching data:', error);
        //alert(`Error fetching data: ${error.message}`);
    }
}
*/
/*
// List of fallback images when the main image is not available (no image provided)
const image_NA_list = [
    "https://imgs.search.brave.com/QrrF8yctvnxGKn5UBvuEt1XL7Pv04zXmzQ0y50RN5cY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzkxLzIyLzU5/LzM2MF9GXzc5MTIy/NTkyN19jYVJQUEg5/OUQ2RDFpRm9ua0NS/bUNHemtKUGYzNlFE/dy5qcGc",
    "https://imgs.search.brave.com/yvto4Mk6Yl8PjkarpBb1RqId_9rsXFqs3MiQrCtjMhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC84/Mi85OS9uby1pbWFn/ZS1hdmFpbGFibGUt/bGlrZS1taXNzaW5n/LXBpY3R1cmUtdmVj/dG9yLTQzOTM4Mjk5/LmpwZw",
    "https://imgs.search.brave.com/Tn5pKlMOw0_FerWffTprFCqRcdROmyyfH62WlFnrX-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FjL05vX2ltYWdl/X2F2YWlsYWJsZS5z/dmc"
];

// List of fallback images when the image URL is inaccessible or returns an error
const error_image_list = [
    "https://imgs.search.brave.com/yjr2Z5T-8TlPrkntaN9BXJG8jX_1UT8fWyhtzhCBivU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/MjgwNjE0MS9waG90/by9jb21wdXRlci1l/cnJvci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9UXFORVhn/YlBqMzFfZElhYkZk/WXh1NjFfSDBYSkNL/YzVTXzJMTzdaX1Rl/VT0",
    "https://imgs.search.brave.com/6jwmSKewyErBtn4tZLYQqObgqQ2aMS8WbBDPHnAEevM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgz/NzczMTYzL3Bob3Rv/L2V4Y2xhbWF0aW9u/LXBvaW50LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1ISWJ1/QTRJbDR3YlRaZnRn/eHhqMHY2d0ZYYlBD/VUZrQUJiR0Vyb2Jp/X0hNPQ",
    "https://imgs.search.brave.com/KmcovpJlxHYPBqbwzFd2YOLtWBZDshXUYUCQyumCteA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NzczOTAzL3Bob3Rv/L3dhcm5pbmctc2ln/bi1leGNsYW1hdGlv/bi1wb2ludC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dDlm/R3VMTWR2RTBjNlBu/dXFNWXIxWUd5NDZG/X2JOdE90ZVE0T1pD/MHhaST0"
];

// Function to get a random image from the provided list
function getRandomImage(imageList) {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
}

// Function to check if the image URL is accessible
function isImageAccessible(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

// Display products on the page
async function displayProducts(products) {
    const content = document.getElementById('product-list');
    content.innerHTML = ''; // Clear existing products

    for (const product of products) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Filter out invalid image URLs and get the first valid image
        const validImages = product.images.filter(image => image && image.includes('http'));

        // Use the first valid image or an NA image if none is provided
        let imageUrl = validImages.length > 0 ? validImages[0] : getRandomImage(image_NA_list);

        // If the image is inaccessible, use the error image
        if (!(await isImageAccessible(imageUrl))) {
            imageUrl = getRandomImage(error_image_list);
        }

        const formattedPrice = product.price.toLocaleString(); // Format the Price with number separators
        const formattedQuantity = product.totalAvailableQuantity[0]; // Assuming this is an array with one element

        // Build the HTML for each product
        productDiv.innerHTML = `
          <img src="${imageUrl}" class="product-front-image" alt="${product.name}" /><br>
      <h2 id="h2-product-name" class="h2-product-name">${product.name}</h2><br>
      <h3 id="h3-product-price" class="h3-product-price">Price (in SAR): ${formattedPrice}</h3><br>
      <h5 id="h5-product-quantity" class="h5-product-stock-quantity">Available Stock Quantity: ${formattedQuantity}</h5><br>
	  <img src="https://imgs.search.brave.com/rJRwdmImEaNZ6nW7xkvChhUOxrhHWeGRmdkM5bhjwl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y3VzdG9tLWljb24t/ZGVzaWduL2ZsYXRh/c3RpYy0xMS81MTIv/U2hvcHBpbmctYmFz/a2V0LWFkZC1pY29u/LnBuZw" style="" class="add-to-cart" id="" onclick="addToCart('dummyproduct');">
      <button id="open-view-detailed" class="open-view-detailed" onclick="addToCart(${product.id})">Open Detailed View</button>
        `;

        content.appendChild(productDiv);
    }
}

// Dummy function for adding product to cart
function addToCart(productId) {
    alert(`Product with ID: ${productId} added to cart.`);
}
*/





/*
async function fetchProducts() {
  const scriptUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=owlIK4yejPvzGuBPKtTdaefFCiIC0_utopKwHvrQGQnON1CHRP-FhTh3p1OYNOiAgKConbzFl5CNHP5NJphqBo183H9Vmj0Xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMVakcrgxx4CAmI_bdFAkkpiy7RLU7lluLqcucPCGvrbaq69MlTgfhjVeHKdDVG5E-RUeBvCquBINyDG9n69D5Ok9ewf2yZ-1A&lib=M8NYWJV3-Y5rfZUFfXfp1m7Md4ojxwRP6';

  try {
    const response = await fetch(scriptUrl, { method: 'GET' });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    displayProducts(data); // This will display products on the page
    console.log('Data fetched:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
    alert(`Error fetching data: ${error.message}`);
  }
}

window.onload = fetchProducts;
*/
/*
window.onload = fetchProducts;
alert(scriptUrl);
// Function to fetch products from the Google Apps Script Web App

async function fetchProducts() {
  try {
    const response = await fetch(scriptUrl, {
      method: 'GET',
      //mode: 'cors', // Enable CORS
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorMessage = `HTTP error! status: ${response.status}`;
      alert(errorMessage);
      console.log(errorMessage);
      throw new Error(errorMessage);
    }

    const data = await response.json(); // Parse JSON data only once
    console.log('Data fetched:', data); // Debugging information
    
    // Ensure data is an array and display the products
    if (Array.isArray(data) && data.length > 0) {
      displayProducts(data); // Call display function if the data is valid
    } else {
      throw new Error('Received data is not an array or is empty.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    alert(`Error fetching data: ${error.message}`);
  }
}
*/


/*
async function fetchProducts() {
  try {
    const response = await fetch(scriptUrl, {
      method: 'GET',
      mode: 'cors', // Enable CORS
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorMessage = `HTTP error! status: ${response.status}`;
      alert(errorMessage);
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
	const data = await response.json(); // Parse JSON data only once
    displayProducts(data); // Display the products
    console.log('Data fetched:', data); // For debugging
	

    data = response.json(); // Parse JSON data only once
    console.log('Data fetched:', data); // Debugging information

    if (Array.isArray(data) && data.length > 0) {
      displayProducts(data); // Call display function only if the data is valid
    } else {
      throw new Error('Received data is not an array or is empty.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    alert(`Error fetching data: ${error.message}`);
  }
}
*/


/*
async function fetchProducts() {
  try {
    const response = fetch(scriptUrl, {
		method: 'GET',
		mode: 'cors'
	}); // Enable CORS
	if (!response.ok) {
      alert(`HTTP error! status: ${response.status}`);
      console.log(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON data only once
    displayProducts(data); // Display the products
    console.log('Data fetched:', data); // For debugging
  } catch (error) {
    console.error('Error fetching data:', error);
  }

//    if (!response.ok) {
//     alert(`HTTP error! status: ${response.status}`);
//	 console.log(`HTTP error! status: ${response.status}`);
//     throw new Error(`HTTP error! status: ${response.status}`);
//    }                                                       
//     const data = await response.json(); // Parse JSON data
//	 //const data = await data.json(); // Parse JSON data
//     displayProducts(data); // Display the products
//     console.log('Data fetched:', data); // For debugging
//    } catch (error) {
//     const data = await data.json(); // Parse JSON data
//     displayProducts(error); // Display the products
//     alert('Error fetching data: ' + error);
//     console.error('Error fetching data:', error);
//    }
}
*/

/*

// Function to get a random image from a list
function getRandomImage(imageList) {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
}

// Function to check if the image URL is accessible
function isImageAccessible(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

// Display products on the page
async function displayProducts(products) {
  const content = document.getElementById('product-list');
  content.innerHTML = ''; // Clear existing products

  for (const product of products) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Display only the first image in the `images` array
    const firstImage = product.images[0]; // Assuming the first actual image URL is at index 0

    let imageUrl = '';
    if (firstImage && (await isImageAccessible(firstImage))) {
      imageUrl = firstImage;
    } else {
      imageUrl = getRandomImage(image_NA_list);
    }

    const formattedPrice = product.price.toLocaleString(); // Format the Price with number separators
    const formattedQuantity = product.totalAvailableQuantity[0]; // Assuming this is an array with one element

    productDiv.innerHTML = `
      <img src="${imageUrl}" class="product-front-image" alt="${product.name}" /><br>
      <h2 id="h2-product-name" class="h2-product-name">${product.name}</h2><br>
      <h3 id="h3-product-price" class="h3-product-price">Price (in SAR): ${formattedPrice}</h3><br>
      <h5 id="h5-product-quantity" class="h5-product-stock-quantity">Available Stock Quantity: ${formattedQuantity}</h5><br>
	  <img src="https://imgs.search.brave.com/rJRwdmImEaNZ6nW7xkvChhUOxrhHWeGRmdkM5bhjwl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y3VzdG9tLWljb24t/ZGVzaWduL2ZsYXRh/c3RpYy0xMS81MTIv/U2hvcHBpbmctYmFz/a2V0LWFkZC1pY29u/LnBuZw" style="" class="add-to-cart" id="" onclick="addToCart('dummyproduct');">
      <button id="open-view-detailed" class="open-view-detailed" onclick="addToCart(${product.id})">Open Detailed View</button>
    `;

    content.appendChild(productDiv);
  }
}
*/


// Assume you call this function to render the products on page load
//displayProducts(products);











// Calculate available stock based on current orders
function calculateAvailableStock(productId) {
  var product = allProducts.find(p => p.id === productId);
  var orderedQuantity = cart.reduce(function(total, item) {
	  return item.productId === productId ? total + item.quantity : total;
  }, 0);
  return product.quantity - orderedQuantity;
}

// Add product to cart
function addToCart(productId) {
  var product = allProducts.find(p => p.id === productId);
  var availableStock = calculateAvailableStock(productId);

  if (availableStock > 0) {
	  cart.push({ productId: productId, quantity: 1 });
	  displayProducts(allProducts); // Update product display after adding to cart
  } else {
	  alert('Out of stock!');
  }
}

// Search products
function searchProducts() {
  var query = document.getElementById('searchInput').value.toLowerCase();
  /*
  const search-data-list = document.getElementById('search-data-list');
  search-data-list.innerHTML = ''; // Clear existing products
  const ul = document.createElement('ul');
  ul.className = 'search-data-list-ul';
  const li = document.createElement('li');
  li.className = 'search-data-list-ul-li';
  */
  
  
  
  var filteredProducts = allProducts.filter(function(product) {
	  return product.name.toLowerCase().includes(query) ||
			  product.description.toLowerCase().includes(query);
  });
  //displayProducts(filteredProducts);
  search_data_list(filteredProducts);
}
/*
// Data List
function search_data_list (search_query_data) {
 const search_data_list = document.getElementById('search-data-list');
  search_data_list.innerHTML = ''; // Clear existing products

  for (const product of products) {
    const search_data_list_ul = document.createElement('ul');
    search_data_list_ul.className = 'search-data-list-ul';

    // Display only the first image in the `images` array
    const firstImage = product.images[0]; // Assuming the first actual image URL is at index 0

    let imageUrl = '';
    if (firstImage && (await isImageAccessible(firstImage))) {
      imageUrl = firstImage;
    } else {
      imageUrl = getRandomImage(image_NA_list);
    }

    const formattedPrice = product.price.toLocaleString(); // Format the Price with number separators
    const formattedQuantity = product.totalAvailableQuantity[0]; // Assuming this is an array with one element

    search-data-list-ul.innerHTML = `
      <li class="search-data-list-ul-li" id="search-data-list-ul-li">
	   <img src="${imageUrl}" class="product-front-image" alt="${product.name}" /><br>
       <h2 id="h2-product-name" class="h2-product-name">${product.name}</h2><br>
       <h3 id="h3-product-price" class="h3-product-price">Price (in SAR): ${formattedPrice}</h3><br>
       <h5 id="h5-product-quantity" class="h5-product-stock-quantity">Available Stock Quantity: ${formattedQuantity}</h5><br>
       <img src="https://imgs.search.brave.com/rJRwdmImEaNZ6nW7xkvChhUOxrhHWeGRmdkM5bhjwl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Y3VzdG9tLWljb24t/ZGVzaWduL2ZsYXRh/c3RpYy0xMS81MTIv/U2hvcHBpbmctYmFz/a2V0LWFkZC1pY29u/LnBuZw" style="" class="add-to-cart" id="" onclick="addToCart('dummyproduct');">
       <button id="open-view-detailed" class="open-view-detailed" onclick="addToCart(${product.id})">Open Detailed View</button>
	  </li>
    `;

    content.appendChild(productDiv);
  }
}
}
*/
// Initialize and fetch products on page load
window.onload = function() {
  dataProducts();
  //fetchProducts();
};

// JavaScript for Lightbox
function showProductDetails(productId) {
	document.getElementById('product-lightbox').style.display = 'block';
	// Fetch and display product details based on productId
}

function closeLightbox() {
	document.getElementById('product-lightbox').style.display = 'none';
}

function updatePrice() {
	const quantity = parseInt(document.getElementById('quantity').value, 10);
	const unitPrice = 10.00; // Replace with dynamic price
	const totalPrice = (quantity * unitPrice).toFixed(2);
	document.getElementById('total-price').textContent = totalPrice;
}

function addToCart() {
	let cart = '';
	// Add product to cart and update cart icon
	const itemCount = parseInt(document.getElementById('item-count').textContent, 10);
	document.getElementById('item-count').textContent = itemCount + 1;
	closeLightbox();
}

function toggleCart() {
	const cart = document.getElementById('cart');
	cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

function checkout() {
	// Redirect to checkout or display checkout form
}

function clearCart() {
	// Clear cart items
}

// Tabs
function openTab(tabName) {
	const tabs = document.getElementsByClassName('tab-content');
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].style.display = 'none';
	}
	document.getElementById(tabName).style.display = 'block';
}

function startAutoUpdate(interval) {
  fetchProducts(); // Initial fetch
  setInterval(fetchProducts, interval); // Fetch every 'interval' milliseconds
}

window.onload = function() {
  startAutoUpdate(1); // Auto-update every 60 seconds
};
