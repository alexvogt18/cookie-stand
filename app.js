'use strict';

// const cookieHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// // First array is store hours, next is the only Object, after that is sales array then render
// const seattle = {
//   cityName: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookpCust: 6.3,
//   randoCustnum: function() {
//     let randoNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//     return randoNum;
//   }
// };

// function generateSalesArray(location) {
//   location.grandTotal = 0;
//   location.hourlySalesArray = [];
//   for (let i = 0; i < cookieHours.length; i++){
//     let customers = location.randoCustnum();
//     let cookiesSold = Math.floor(customers * location.avgCookpCust);
//     location.grandTotal += cookiesSold;
//     location.hourlySalesArray.push(cookiesSold);
//   }
// }
// console.log(seattle, 'preArray');

// generateSalesArray(seattle);

// console.log(seattle, ' with the array');

// const locationDivElem = document.getElementById('locations');

// function renderStoreInfo(location) {
//   const h2Elem = document.createElement('h2');
//   h2Elem.textContent = location.cityName;
//   locationDivElem.appendChild(h2Elem);
//   //   h2 is rendered, now ul and li need to render
//   const ulElem = document.createElement('ul');
//   locationDivElem.appendChild(ulElem);
//   for (let i = 0; i < cookieHours.length; i++) {
//     const liElem = document.createElement('li');
//     liElem.textContent = cookieHours[i]+ ' : ' +location.hourlySalesArray[i]+ ' cookies';
//     ulElem.appendChild(liElem);
//   }
//   const totalLiElem = document.createElement('li');
//   totalLiElem.textContent = 'Total: ' +location.grandTotal+ ' cookies';
//   ulElem.appendChild(totalLiElem);
// }

// renderStoreInfo(seattle);

//https://googlechrome.github.io/devtools-samples/debug-js/get-started


// *** PART 2 CONSTRUCTOR FUNCTIONS ***

const cookieHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function StorePlace(cityName, minCustomer, maxCustomer, avgCookpCust) {
  this.name = cityName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookpCust = avgCookpCust;
}

function randoCustnum(minCustomer, maxCustomer) {
  return Math.floor(Math.random() * (maxCustomer - minCustomer + 1) + minCustomer);
}

StorePlace.prototype.getAvgcust = function() {
  return randoCustnum(this.minCustomer, this.maxCustomer);
};

StorePlace.prototype.generateSalesArray = function() {
  this.grandTotal = 0;
  this.hourlySalesArray = [];
  for (let i = 0; i < cookieHours.length; i++){
    let customers = this.getAvgcust();
    let cookiesSold = Math.floor(customers * this.avgCookpCust);
    this.grandTotal += cookiesSold;
    this.hourlySalesArray.push(cookiesSold);
  }
};

//Everything above is good, we have the information being generated.
const seattle = new StorePlace('Seattle', 23, 65, 6.3);

const tokyo = new StorePlace('Tokyo', 3, 24, 1.2);

const dubai = new StorePlace('Dubai', 11, 38, 3.7);

const paris = new StorePlace('Paris', 20, 38, 2.3);

const lima = new StorePlace('Lima', 2, 16, 4.6);

seattle.generateSalesArray();
tokyo.generateSalesArray();
dubai.generateSalesArray();
paris.generateSalesArray();
lima.generateSalesArray();

//Deleted earlier rendering of table, rendering header- then table data - the render footer

const storeDivElem = document.getElementById('storeNames');

// h2 element create
const h2Elem = document.createElement('h2');
h2Elem.textContent = 'Cookies Sold per Open Hour';
storeDivElem.appendChild(h2Elem);

function renderHeader(){
  const locationArticle = document.createElement('article');
  storeDivElem.appendChild(locationArticle);
  const tableElement = document.createElement('table');
  tableElement.setAttribute = ('id', 'salestable');
  locationArticle.appendChild(tableElement);
  const trElement = document.createElement('tr_1');
  tableElement.appendChild(trElement);
  for (let i = 0; i <= cookieHours.length; i++) {
    const thElement = document.createElement('th');
    thElement.textContent = cookieHours[i];
    trElement.appendChild(thElement);
  }
  const th1Element = document.createElement('th');
  th1Element.textContent= 'Daily Total';
  trElement.appendChild(th1Element);
}

StorePlace.prototype.render = function() {
  const trElement = document.createElement('tr_2');
  trElement.textcontent = this.name;
  storeDivElem.appendChild(trElement);
//   tdElement.textContent = this.name;
//   trElement.appendChild(tdElement);
//   for (let i=0; i < cookieHours.length; i++){
//     const tdElement = document.createElement('td');
//     tdElement.textContent = cookieHours[i];
//     tableElement.appendChild(tdElement);
// }
};


// const tableElem = document.getElementById('sales table');
// let dailytotal= 0;

// const tdElementTotal = document.createElement('td');
//   tdElementTotal.textContent = this.grandTotal;
//   trElement.appendChild(tdElementTotal);

// function renderFooter () {
//   const trElem = document.createElement('tr');
//   tableElem.appendChild(trElem);
//   const thElem = document.createElement('th');
//   thElem.textContent = 'hourly total';
//   trElem.appendChild(thElem);\
//   let dailytotal= 0;
//   for (letindex = 0; index < cookieHours.length; index++) {
//     let hourlytotal= 0;
//     for (let index2 = 0; index2 < cookieHours.length; index2 ++) {
//       let currentstore = salmonCookieStoreArray [index2];
//     }
//   }
// }
renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
// renderFooter();