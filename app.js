'use strict'

const cookieHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const seattle = {
  cityName: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookpCust: 6.3,
  randoCustnum: function() {
    let randoNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer+ 1) + this.minCustomer);
    return randoNum;
  }
}

