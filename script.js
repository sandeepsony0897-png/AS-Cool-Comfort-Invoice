
function calculate() {
  let qty = Number(document.getElementById("qty").value);
  let price = Number(document.getElementById("price").value);

  if (qty <= 0 || price < 0) {
    alert("Please enter valid quantity and rate");
    return;
  }

  let total = qty * price;

  document.getElementById("total").innerText =
    total.toLocaleString("en-IN");
}

document.getElementById("date").value =
  new Date().toISOString().split("T")[0];
