'use strict';
const bill = document.getElementById('inputForBill');
const customTip = document.getElementById('customTip');
const percantageBtns = document.querySelectorAll('.btnBillPercantage');
const numberOfPeople = document.getElementById('inputNumberOfPeople');
const tipAmount = document.querySelector('.tipForOnePerson');
const total = document.querySelector('.total');
const reset = document.querySelector('.reset');
const spanWhenZero = document.querySelector('.whenZero');
const basicTip = 0.05;
let tip = 0;
let activeButton = 0;

function tipCalculation() {
  for (let i = 0; i < percantageBtns.length; i++) {
    if (i < 3) {
      percantageBtns[i].value = basicTip * (i + 1);
    } else if (i === 3) {
      percantageBtns[i].value = basicTip * 5;
    } else {
      percantageBtns[i].value = basicTip * 10;
    }
  }
}
tipCalculation();

for (let i = 0; i < percantageBtns.length; i++) {
  percantageBtns[i].addEventListener('click', function () {
    tip = percantageBtns[i].value;
    percantageBtns[i].classList.toggle('btnChoosen');
    
  });
}

customTip.addEventListener('change', function () {
  tip = customTip.value / 100;
});

numberOfPeople.addEventListener('change', function () {
  if (Number(numberOfPeople.value) === 0) {
    spanWhenZero.classList.remove('hidden');
    numberOfPeople.classList.add('outlineRed');
  } else {
    spanWhenZero.classList.add('hidden');
    numberOfPeople.classList.remove('outlineRed');
  }
});

function calculateTip() {
  if (bill.value > 0 && numberOfPeople.value > 0) {
    let calculatingTipAmount =
      (Number(bill.value) * tip) / Number(numberOfPeople.value);
    let totalAmount =
      Number(bill.value) / Number(numberOfPeople.value) + calculatingTipAmount;
    tipAmount.textContent = `$${calculatingTipAmount.toFixed(2)}`;
    total.textContent = `$${totalAmount.toFixed(2)}`;
  }
}
if (bill.value > 0 && numberOfPeople.value > 0) {
  bill.onsubmit();
  numberOfPeople.onsubmit();
  calculateTip();
}

function resetValues() {
  tip = 0;
  bill.value = ' ';
  numberOfPeople.value = ' ';
  customTip.value = ' '
  tipAmount.textContent = '$0.00';
  total.textContent = '$0.00';
  if(numberOfPeople.classList.contains('outlineRed')) {
    numberOfPeople.classList.remove('outlineRed');
    spanWhenZero.classList.add('hidden');
  }
}
bill.addEventListener('change', calculateTip);
numberOfPeople.addEventListener('change', calculateTip);
reset.addEventListener('click', resetValues);
