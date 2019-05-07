// This is the array of all hours

var allData = [];

var locationNames = [];

var locationTable = document.getElementById('locationData');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function allLocations(location, minCust, maxCust, averageSales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageSales = averageSales;
  this.hourlySales = [];
  
  this.hourlySalesCalc = function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  }
  this.render = function () {
    // make a tr
    var trEl = document.createElement('tr');
    // create, content, append for "Name"
    for (var i = 0; i < hourlySales.length; i++)
    var tdEl = document.createElement('td');
    tdEl.textContent = hourlySales[i];
    trEl.appendChild(tdEl);
    // append the tr to the table
    locationData.appendChild(trEl);
  };
  allData.push(this);
};

console.log(allData);

function makeHeaderRow() {
  // create the row
  var trEl = document.createElement('tr');
  // create, content, append first cell
  thEl = document.createElement('th');
  thEl.textContent = '----';
  trEl.appendChild(thEl);
  // create, content, append first cell
  for (var i = 0; i < hours.length; i++) {
  thEl = document.createElement('th');
  thEl.textContent = hours[i];
  trEl.appendChild(thEl);
  };
  // append the row to the table
  locationData.appendChild(trEl);
}



var pike = new allLocations('First and Pike', 23, 65, 6.3);
var seaTac = new allLocations('SeaTac Airport', 3, 24, 3.2);
var seattleCenter = new allLocations('Seattle Center', 11, 38, 3.7);
var capitolHill = new allLocations('Capitol Hill', 20, 38, 2.3);
var alki = new allLocations('Alki', 2, 16, 4.6);


pike.hourlySalesCalc();
console.log('Pikes hourly sales: ' + pike.hourlySales);
seaTac.hourlySalesCalc();
console.log('SeaTacs hourly sales: ' + seaTac.hourlySales);
seattleCenter.hourlySalesCalc();
console.log('Seattle Centers hourly sales: ' + seattleCenter.hourlySales);
capitolHill.hourlySalesCalc();
console.log('Capitol Hills hourly sales: ' + capitolHill.hourlySales);
alki.hourlySalesCalc();
console.log('Alkis hourly sales: ' + alki.hourlySales);

makeHeaderRow();