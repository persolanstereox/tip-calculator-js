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


for(let i = 0; i < percantageBtns.length; i++) {
    percantageBtns[i].addEventListener('click', function() {
       if(i<3) {
       percantageBtns[i].value =  tip * (i+1);
       } else if(i === 3) {
        percantageBtns[i].value =  tip * 5;
       } else {
        percantageBtns[i].value = tip * 10;
       }
    //    tip = percantageBtns[i].value;
    })
}


function calculateTip() {

}