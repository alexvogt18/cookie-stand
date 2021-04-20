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

//global variables
const cookieHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const storeLocations=[];
const salmonTable = document.getElementById('salmonTable');
const salesInput = document.getElementById('salesInput');

//constructor function
function StorePlace(cityName, minCustomer, maxCustomer, avgCookpCust) {
  this.name = cityName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookpCust = avgCookpCust;
  //Arrays
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  //Methods
  this.numOfCustomersPerHour();
  this.cookiesPerCustomer();
  //Push to Array
  storeLocations.push(this);
}

StorePlace.prototype.render = function() {
  const trElement = document.createElement('tr');
  const tdElement= document.createElement('td');
  tdElement.textContent= this.name;
  trElement.appendChild(tdElement);
  for (let i = 0; i< this.averageCookiesPerHour.length; i++) {
    const tdData = document.createElement('td');
    tdData.textContent = this.averageCookiesPerHour[i];
    trElement.appendChild(tdData);
  }
  const tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookiesPerDay;
  trElement.appendChild(tdTotal);
  salmonTable.appendChild(trElement);
};

StorePlace.prototype.numOfCustomersPerHour = function() {
  for (let i = 0; i < cookieHours.length; i++) {
    let singleHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.averageCustomersPerHour.push(singleHourCustomers);
  }
};
StorePlace.prototype.cookiesPerCustomer = function() {
  for (let i = 0; i < cookieHours.length; i++) {
    let singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avgCookies);
    this.averageCookiesPerHour.push(singleHourCookies);
    this.totalCookiesPerDay += singleHourCookies;
  }
};

StorePlace.prototype.cookiesPerCustomer = function() {
  for (let i = 0; i < cookieHours.length; i++) {
    const singleHourCookies = Math.floor(this.averageCustomersPerHour[i] * this.avgCookies);
    this.averageCookiesPerHour.push(singleHourCookies);
    this.totalCookiesPerDay += singleHourCookies;
  }
};

function renderHeader(){
  const trElement = document.createElement('tr');
  const thElement = document.createElement('th');
  salmonTable.appendChild(trElement);
  trElement.appendChild(thElement);
  for (let i = 0; i < cookieHours.length; i++){
    const thHours = document.createElement('thHours');
    thHours.textContent = cookieHours[i];
    trElement.appendChild(thElement);
  }
  const th1Element = document.createElement('th');
  th1Element.textContent= 'Daily Total';
  trElement.appendChild(th1Element);
}

function renderAllStores() {
  for (let i = 0; i < storeLocations.length; i++){
    storeLocations[i].render();
  }
}

function renderFooter () {
  const trElement = document.createElement('tr');
  trElement.textContent = 'Totals';
  salmonTable.appendChild(trElement);
  let grandTotal = 0;
  for (let i = 0; i < cookieHours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < storeLocations.length; j++) {
      hourlyTotal += hourlyTotal +storeLocations[j].averageCookiesPerHour[i];
      grandTotal += storeLocations[j].averageCookiesPerHour[i];
    }
    const tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    trElement.appendChild(tdElement);
  }
  const tdTotal = document.createElement('tdTotal');
  tdTotal.textContent = grandTotal;
  trElement.appendChild(tdTotal);
}

new StorePlace('Seattle', 23, 65, 6.3);

new StorePlace('Tokyo', 3, 24, 1.2);

new StorePlace('Dubai', 11, 38, 3.7);

new StorePlace('Paris', 20, 38, 2.3);

new StorePlace('Lima', 2, 16, 4.6);

//Event Handler function
function dataInput(event) {
  event.preventDefault();
  console.log('Submit button was clicked');
  //If statement to prevent empty text fields
  if (!event.target.name.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.avgCookies.value) {
    return alert('Fields cannot be empty!');
  }

  event.target.name = null;
  event.target.minCustomers = null;
  event.target.maxCustomers = null;
  event.target.avgCookies = null;

  let name = event.target.name.value;
  let minCustomers = parseInt(event.target.minCustomers.value);
  let maxCustomers = parseInt(event.target.maxCustomers.value);
  let avgCookies = parseFloat(event.target.avgCookies.value);

  salmonTable.textContent = null;
  //Code to make the input fields blank after user submits

  let storeExist = doesStoreExist(storeLocations, name);
  let index;

  function doesStoreExist(x,y) {
    for (let i = 0; i < x.length; i++) {
      if (x[i].name === y) {
        return true;
      }
    }
    return false;
  }

  doesStoreExist(storeLocations, name);
  console.log(doesStoreExist(storeLocations, name));

  if (storeExist === true) {
    console.log('did find name');
    storeLocations[index].minCustomers = parseInt(minCustomers);
    storeLocations[index].maxCustomers = parseInt(maxCustomers);
    storeLocations[index].avgCookies = parseFloat(avgCookies);
    storeLocations[index].averageCustomersPerHour = [];
    storeLocations[index].averageCookiesPerHour = [];
    storeLocations[index].totalCookiesPerDay = 0;
    storeLocations[index].numOfCustomersPerHour();
    storeLocations[index].cookiesPerCustomer();
  }

  if (storeExist === false) {
    new StorePlace(name, minCustomers, maxCustomers, avgCookies);
  }

  //Re-creating our table with the new user inputs
  renderHeader();
  renderAllStores();
  renderFooter();
}

renderHeader();
renderAllStores();
renderFooter();

salesInput.addEventListener('submit', dataInput);


// tableElement.appendChild(tr2Element);
//   const tdElement = document.createElement('td');
//   tdElement.textContent= this.name;
//   tdElement.textContent = ${this.name};
//   trElement.appendChild(tdElement);
//   for (let i=0; i < cookieHours.length; i++){
//     const tdElement = document.createElement('td');
//     tdElement.textContent = cookieHours[i];
//     tableElement.appendChild(tdElement);
//   }
// };



// StorePlace.prototype.generateSalesArray = function() {
//   this.grandTotal = 0;
//   this.hourlySalesArray = [];
//   for (let i = 0; i < cookieHours.length; i++){
//     let customers = this.getAvgcust();
//     let cookiesSold = Math.floor(customers * this.avgCookpCust);
//     this.grandTotal += cookiesSold;
//     this.hourlySalesArray.push(cookiesSold);
//   }
// };

// seattle.generateSalesArray();
// tokyo.generateSalesArray();
// dubai.generateSalesArray();
// paris.generateSalesArray();
// lima.generateSalesArray();

//Deleted earlier rendering of table, rendering header- then table data - the render footer

// const storeDivElem = document.getElementById('storeNames');

// h2 element create
// const h2Elem = document.createElement('h2');
// h2Elem.textContent = 'Cookies Sold per Open Hour';
// storeDivElem.appendChild(h2Elem);
// general variables to help render table
// const locationArticle = document.createElement('article');
// storeDivElem.appendChild(locationArticle);
// const tableElement = document.createElement('table');
// tableElement.setAttribute = ('id', 'salestable');
// locationArticle.appendChild(tableElement);

// const tableElem = document.getElementById('sales table');
// let dailytotal= 0;

// const tdElementTotal = document.createElement('td');
//   tdElementTotal.textContent = this.grandTotal;
//   trElement.appendChild(tdElementTotal);


