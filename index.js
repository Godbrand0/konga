const products = [
  {
    name: "iPower Ipower X Max 3kw Inverter -3000w Mppt (Z...",
    picture: "assets/_1715267378.webp",
    price: "599,000",
    former: "700,000",
    discount: "-20%",
  },
  {
    name: "Nexus Gccr-nx-5055bc(4+0) Gas Cooker Black",
    picture: "assets/_1689687174.webp",
    price: "844,000",
    former: "1,000,000",
    discount: "-30%",
  },
  {
    name: "iTEC Fixed Plate Sandwich Maker Ism750-19 (znx-...",
    picture: "assets/174740_1701422055.webp",
    price: "200,000",
    former: "300,000",
    discount: "-10%",
  },
  {
    name: "Nokia 105 New Africa Edition (2023) - Dual Sim ...",
    picture: "assets/_1699087676.webp",
    price: "15,000",
    former: "70,000",
    discount: "-50%",
  },
  {
    name: "Nexus Nx-130 Nexus Fridge-black",
    picture: "assets/118566_1645712964.webp",
    price: "700,000",
    former: "800,000",
    discount: "-10%",
  },
  {
    name: "Haier Thermocool Chest Freezer 319 White",
    picture: "assets/_1720429447.webp",
    price: "299,000",
    former: "400,000",
    discount: "-20%",
  },
  {
    name: "Haier Thermocool 1.5hp Genpal Inverter Air Cond...",
    picture: "assets/_1698312484.webp",
    price: "499,000",
    former: "700,000",
    discount: "-40%",
  },
  {
    name: "Haier Thermocool Double Door Refrigerator | Hrf...",
    picture: "assets/118566_1634296023.webp",
    price: "378,000",
    former: "500,000",
    discount: "-10%",
  },
  {
    name: "Starlink Standard Actuated Kit",
    picture: "assets/230034_1723555589.webp",
    price: "399,000",
    former: "700,000",
    discount: "-20%",
  },
  {
    name: "Realme C61 6.74'' 6gb Ram 128gb Rom Android 13 ...",
    picture: "assets/118566_1729177638.webp",
    price: "218,000",
    former: "700,000",
    discount: "-30%",
  },
];

function updateProductInfo(products) {
  products.forEach((product, index) => {
    const grid = document.querySelector(".grid");
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.innerHTML = `
     
            <img
              src=${product.picture}
              alt=""
              class="grid-image"
            />
            <p>${product.name}</p>
            <div class="numbers">
              <span class="number-1"
                ><i class="fa-solid fa-naira-sign"></i>${product.price}</span
              >
              <span class="number-2"
                ><i class="fa-solid fa-naira-sign"></i>${product.former}</span
              >
              <span class="number-3">${product.discount}</span>
            </div>
            <div class="time">
              <i class="fa-solid fa-clock"></i> 7days -1hr 2min 15secs
            </div>
            <div class="bar">
              <div class="Sold">Sold: <span>20%</span></div>
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
            </div>
           
            <button class="grid-button">Add To Cart</button>
          
    `;
    // gridItem.classList.add("grid-item");

    // const img = document.createElement("img");
    // img.classList.add("grid-image");
    // img.src = product.picture;

    // const productName = document.createElement("p");
    // productName.textContent = product.name;

    // const number1 = document.createElement("span");
    // number1.classList.add("number-1");
    // number1.innerHTML = `<i class="fa-solid fa-naira-sign"></i>${product.price}`;

    // const number2 = document.createElement("span");
    // number2.classList.add("number-2");
    // number2.innerHTML = `<i class="fa-solid fa-naira-sign"></i>${product.former}`;

    // const number3 = document.createElement("span");
    // number3.classList.add("number-3");
    // number3.textContent = product.discount;

    // const timeElement = document.createElement("span");
    // timeElement.classList.add("time");
    // timeElement.innerHTML = `<i class="fa-solid fa-clock"></i>`;

    // const soldElement = document.createElement("span");
    // soldElement.classList.add("Sold");
    // const soldSpan = document.createElement("span");
    // soldSpan.textContent = "0%";
    // soldElement.appendChild(soldSpan);

    // const progressBar = document.createElement("div");
    // progressBar.classList.add("progress");
    // progressBar.style.width = "0%";

    // gridItem.appendChild(img);
    // gridItem.appendChild(productName);
    // gridItem.appendChild(number1);
    // gridItem.appendChild(number2);
    // gridItem.appendChild(number3);
    // gridItem.appendChild(timeElement);
    // gridItem.appendChild(soldElement);
    // gridItem.appendChild(progressBar);

    grid.appendChild(gridItem);
  });
}

updateProductInfo(products);
