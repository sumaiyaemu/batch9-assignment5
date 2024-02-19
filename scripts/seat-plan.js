let add = [];
let total_price = 0;


function realme(name, name2, price) {
  add.push({ name, name2, price });
  total_price += price;
  reload();
}

function reload() {
  const cartelement = document.getElementById("items");
  const totalprice = document.getElementById("price");
  totalprice.textContent = total_price;
  cartelement.innerHTML = "";
  add.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = ${item.name}---${item.name2}----${item.price};
    cartelement.appendChild(li);
  });
}
  

  

