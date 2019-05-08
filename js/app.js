// This is the array of all data put through the constructor
var allData = [];

// These are var's getting the form element on sales.html, and for submitting the new form
var newForm = document.getElementById('new-form');
var submitNewForm = document.getElementById('submit-new-form');

// This is linking the tabular data and headers to sales.html
var locationTable = document.getElementById('location-data');

// This is an array holding all hours the stores are open
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// This calculates a random number and is called inside the constructor
function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Constructor function
function allLocations(location, minCust, maxCust, averageSales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageSales = averageSales;
  this.hourlySales = [];
  
  // Calcuates a random number, and multiplies it time the averageSales value for each hour
  this.hourlySalesCalc = function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * 
        this.averageSales));
    }
  }

  // Render function
  this.render = function () {
    // These are the table rows under the header
    var trEl = document.createElement('tr');

    // Location names being appended to the row
    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    
    // Gathers all this.hourlySales[i] and appends to the row
    for (var i = 0; i < this.hourlySales.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.hourlySales[i];
      trEl.appendChild(tdEl);
    };

    // This is appending the total data for each location
    var totalLocationHourlySales = 0;

    // Calculates all hourly sales for this location
    for (i = 0; i < this.hourlySales.length; i++) {
      totalLocationHourlySales += this.hourlySales[i];
    }

    // Appends total hourly sales for each location to the end of the row
    var totalEl = document.createElement('td');
    console.log('totalEl is', totalEl);
    totalEl.textContent = totalLocationHourlySales;
    trEl.appendChild(totalEl);

    // append the table row to the table
    locationTable.appendChild(trEl);

  };

  // Populating all "this" data for this instance and pushing to allData array.
  allData.push(this);

  // Calling function that calculates each hours sales
  this.hourlySalesCalc();
};

function makeHeaderRow() {
  // Creating the row for the header
  var trEl = document.createElement('tr');

  // Creating the first column for the header
  thEl = document.createElement('th');
  thEl.textContent = '----';
  trEl.appendChild(thEl);

  // Creating the hourly columns for the header
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  // Creating the total column for the end of the header
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  // append the row to the table
  locationTable.appendChild(trEl);
}

// Footer row function
function makeFooterRow() {
  var trEl = document.createElement('tr');

  tfEl = document.createElement('tfoot');
  tfEl.textContent = 'Totals';
  trEl.appendChild(tfEl);

  // holds the row total value calculated below
  var rowTotal = 0; 
  
  // Calculates the hourly sales for all locations at hour[i]
  for (var i = 0; i < hours.length; i++) {
    var columnTotal = 0;
    for (var d = 0; d < allData.length; d++) {
      columnTotal += allData[d].hourlySales[i];    
    }

    // Adding each hour[i] sales for all locations, and adding them together for the total
    rowTotal += columnTotal;

    tfEl = document.createElement('td');
    tfEl.textContent = columnTotal;
    trEl.appendChild(tfEl);
  }
  
  tfEl = document.createElement('td');
  tfEl.textContent = rowTotal;
  trEl.appendChild(tfEl);

  //appending the footer row to the table
  locationTable.appendChild(trEl);
}

// New instances for the constructor
var pike = new allLocations('First and Pike', 23, 65, 6.3);
var seaTac = new allLocations('SeaTac Airport', 3, 24, 3.2);
var seattleCenter = new allLocations('Seattle Center', 11, 38, 3.7);
var capitolHill = new allLocations('Capitol Hill', 20, 38, 2.3);
var alki = new allLocations('Alki', 2, 16, 4.6);

// Event handle for submitting a new form
function handleNewForm(event) {
  event.preventDefault();

  new allLocations(event.target.new-location-name.value, event.target.min-customer.value, event.target.max-customer.value, event.target.average-sales.value);
}

// Calling the header function that creates and appends the header row
makeHeaderRow();

// Renders allData of each instance
for (var i = 0; i < allData.length; i++) {
  allData[i].render();
}

// Calling the footer function that creates and appends the footer row
makeFooterRow();

// Event listener for submitting a new form
newForm.addEventListener('submit-new-location', handleNewForm);
