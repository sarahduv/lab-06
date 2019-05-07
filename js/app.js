var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPikeList = document.getElementById('first');
var seaTacAirportList = document.getElementById('second');
var seattleCenterList = document.getElementById('third');
var capitolHillList = document.getElementById('fourth');
var alkiList = document.getElementById('fifth');


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var firstAndPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  averageSales: 6.3,
  hourlySales: [],
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {

      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('liEl with content', liEl);
      // append the element to the dom
      firstAndPikeList.appendChild(liEl);
    }
  }
};

firstAndPike.hourlySalesCalc();
console.log(firstAndPike.hourlySales);
firstAndPike.render();



var seaTacAirport = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  averageSales: 1.2,
  hourlySales: [],
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {

      // create an element
      var liEl = document.createElement('li');
      // console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      // console.log('liEl with content', liEl);
      // append the element to the dom
      seaTacAirportList.appendChild(liEl);
    }
  }
};

seaTacAirport.hourlySalesCalc();
console.log(seaTacAirport.hourlySales);
seaTacAirport.render();



var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  averageSales: 3.7,
  hourlySales: [],
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {

      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('liEl with content', liEl);
      // append the element to the dom
      seattleCenterList.appendChild(liEl);
    }
  }
};

seattleCenter.hourlySalesCalc();
console.log(seattleCenter.hourlySales);
seattleCenter.render();



var capitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  averageSales: 2.3,
  hourlySales: [],
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {

      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('liEl with content', liEl);
      // append the element to the dom
      capitolHillList.appendChild(liEl);
    }
  }
};

capitolHill.hourlySalesCalc();
console.log(capitolHill.hourlySales);
capitolHill.render();


var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  averageSales: 4.6,
  hourlySales: [],
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {

      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('liEl with content', liEl);
      // append the element to the dom
      alkiList.appendChild(liEl);
    }
  }
};

alki.hourlySalesCalc();
console.log(alki.hourlySales);
alki.render();

// var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

// for (var i = 0; i < stores.length; i++) {
//   stores[i].render();
// }
