let totalAmount = 0;

function addItem(){

let product = document.getElementById("product").value;
let price = document.getElementById("price").value;
let qty = document.getElementById("qty").value;

let total = price * qty;

let table = document.getElementById("billTable");

let row = table.insertRow();

row.insertCell(0).innerHTML = product;
row.insertCell(1).innerHTML = price;
row.insertCell(2).innerHTML = qty;
row.insertCell(3).innerHTML = total;

totalAmount += total;

document.getElementById("total").innerText = totalAmount;

}