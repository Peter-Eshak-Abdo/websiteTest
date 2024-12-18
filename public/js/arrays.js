// const demo = document.getElementById("demo");

// let myFreinds = ["Peter", "Jacob", "John", "Androw", ["Beshoy", "Keroles", "Michel"]];

// demo.innerHTML = `Hello, ${myFreinds[4][2]}`;

// let price = 150;
// let descountStatus = true;
// let descount = 40;

// let country = "Egypt";
// if (descountStatus === false) {
//   price -= descount;
// } else if (country === "Egyptc") {
//   price -= 50;
// } else if (country === "Syria") {
//   price -= 90;
// } else {
//   price += 50;
//   demo.innerText = "There are no offers";
// }

// demo.innerText = price;

// for(let i = 0; i < 20; i++) {
//   demo.innerHTML += `Number : ${i} <br>`;
// }
// -----------------------------------------------------------------------------------------------------
// let productName = ["Phone", "TV" , "Laptop", "Watch", "Radio", "Air Conditioner", "Fridge", "Clock", "Calculator", "Pen", "Pencil"];
// let productImage = ["phone", "tv" , "laptop", "watch", "radio", "air-conditioner", "fridge", "clock", "calculator", "pen", "pencil"];

// let container = document.createElement("div");
// document.body.appendChild(container);
// function Card(i) {
//   let card = `
//       <div class="card-data" style="width= 200px;height:350px;border-radius:15px;padding:5px; margin: 15px 25px">
//       <img src="../images/${productImage[i]}.jpeg" alt="Image of Product" style="max-width: 190px;max-height: 200px; border-radius: 10px">
//       <h2>${productName[i]}</h2>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellat odio labore, quam cum officiis.</p>
//       <a href="#">More Info</a>
//       </div>
//     `;

// }
// for (let i = 0; i < 11; i++) {
//   Card(i);
// }
// ----------------------------------------------------------------------------------------------------------------------------

let productName = ["Phone", "TV", "Laptop", "Watch", "Radio", "Air Conditioner", "Fridge", "Clock", "Calculator", "Pen", "Pencil"];
let productImage = [
  "../images/phone.jpeg",
  "../images/tv.jpeg",
  "../images/laptop.jpeg",
  "../images/watch.jpeg",
  "../images/radio.jpeg",
  "../images/air-conditioner.jpeg",
  "../images/fridge.jpeg",
  "../images/clock.jpeg",
  "../images/calculator.jpeg",
  "../images/pen.jpeg",
  "../images/pencil.jpeg",
];
let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign = "center";

function element(prodName, prodImg) {
  // Elements
  let card = document.createElement("div");
  let img = document.createElement("img");
  let title = document.createElement("h2");
  let desc = document.createElement("p");
  let button = document.createElement("button");

  // Content
  let head = document.createTextNode(prodName);
  img.src = prodImg;
  img.alt = "Error src of image";
  title.appendChild(head);
  desc.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores repellat odio labore, quam cum officiis.";
  button.innerText = "More Info";
  // Style
  card.style.width = "200px";
  card.style.background = "#444";
  card.style.color = "#fff";
  card.style.padding = "10px";
  card.style.margin = "3px";
  card.style.display = "inline-block";
  img.style.width = "100%";
  button.className = "btn btn-primary";

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(head);
  card.appendChild(desc);
  card.appendChild(button);
  container.appendChild(card);
}
for (let i = 0; i < 9; i++) {
  i = Math.floor(Math.random() * 10);
  element(productName[i], productImage[i]);
}


let buttReload = document.createElement("button");
document.body.appendChild(buttReload);
buttReload.innerText = "Reload Page";
buttReload.style.position = "fixed";
buttReload.style.bottom = "10px";
buttReload.style.right = "10px";
buttReload.addEventListener("click" , (params) => {
  window.location.reload();
});



