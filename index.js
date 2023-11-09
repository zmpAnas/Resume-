 const btnE1 = document.getElementById("calculate")
 const billInput = document.getElementById("bill");
 const tipInput = document.getElementById("tip");
 const totalSpan = document.getElementById("total");

 function calculateTotal(){
const billvalue = billInput.value;
const tipvalue = tipInput.value;
const totalvalue = billvalue * (1 + tipvalue / 100);
totalSpan.innerText = totalvalue.toFixed(2);


 }

 btnE1.addEventListener("click", calculateTotal)