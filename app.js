'use strict';

const cookieHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// First array is store hours, next is the only Object, after that is sales array then render
const seattle = {
  cityName: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookpCust: 6.3,
  randoCustnum: function() {
    let randoNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    return randoNum;
  }
};

function generateSalesArray(location) {
  location.grandTotal = 0;
  location.hourlySalesArray = [];
  for (let i = 0; i < cookieHours.length; i++){
    let customers = location.randoCustnum();
    let cookiesSold = Math.floor(customers * location.avgCookpCust);
    location.grandTotal += cookiesSold;
    location.hourlySalesArray.push(cookiesSold);
  }
}
console.log(seattle, 'preArray');

generateSalesArray(seattle);

console.log(seattle, ' with the array');

const locationDivElem = document.getElementById('locations');

function renderStoreInfo(location) {
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = location.cityName;
  locationDivElem.appendChild(h2Elem);
  //   h2 is rendered, now ul and li need to render
  const ulElem = document.createElement('ul');
  locationDivElem.appendChild(ulElem);
  for (let i = 0; i < cookieHours.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = cookieHours[i]+ ' : ' +location.hourlySalesArray[i]+ ' cookies';
    ulElem.appendChild(liElem);
  }
  const totalLiElem = document.createElement('li');
  totalLiElem.textContent = 'Total: ' +location.grandTotal+ ' cookies';
  ulElem.appendChild(totalLiElem);
}

renderStoreInfo(seattle);

