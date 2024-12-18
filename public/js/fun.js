let DataInfo = document.getElementById("dataInfo");
let priceFromInput = document.getElementById("price").value;
let buttonCalc = document.getElementById("calc");

function Discound() {
  let total = priceFromInput - (priceFromInput * (10 / 100));

  return total;
}

let laptop = Discound(25000, 10);

DataInfo.innerHTML = laptop;

buttonCalc.addEventListener("click", (params) => {
  console.log(priceFromInput);
  DataInfo += Discound();
});
