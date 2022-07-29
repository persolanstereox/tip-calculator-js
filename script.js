'use strict'
const bill = document.getElementById('inputForBill');
const customTip = document.getElementById('customTip');
const percantageBtns = document.querySelectorAll('.btnBillPercantage');
const numberOfPeople = document.getElementById('inputNumberOfPeople');
const tipAmount = document.querySelector('.tipForOnePerson');
const total = document.querySelector('.totalForOnePerson');
const tip = 0.05;
bill.value = 0;
numberOfPeople.value = 0;
customTip.value = 0;

for(let i =0; i < percantageBtns.length; i++) {
    percantageBtns[i].addEventListener('click', function() {
        percantageBtns[i].value = percantageBtns[i-1].value + percantageBtns[i-2].value
    })
}
console.log(percantageBtns[3].value);

function calculateTip() {

}