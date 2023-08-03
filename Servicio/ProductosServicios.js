//get 

// script.js
const listaProductos = () => {
    fetch("http://localhost:3000/products")
      .then(respuesta => respuesta.json())
      .then(data => displayProductList(data))
      .catch(error => console.log(error));
  };
  
  const displayProductList = (products) => {
    const productListContainer = document.getElementById("productList");
    productListContainer.innerHTML = ""; // Clear previous items
  
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "col-md-4 mb-4"; // Bootstrap grid column classes
  
      const cardContent = `
        <div class="card">
        <p class="card-text">${product.id}</p>
          <img src="${product.imageUrl}" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
          </div>
        </div>
      `;
  
      productCard.innerHTML = cardContent;
      productListContainer.appendChild(productCard);
    });
  };
  
  // Call the function when the page is loaded
  document.addEventListener("DOMContentLoaded", () => {
    listaProductos();
  });
  