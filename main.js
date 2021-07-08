"use strict"

// Main Roast Section
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(filtered) {
    var html = '';
    for (let i = 0; i < filtered.length; i++) {
        html += renderCoffee(filtered[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameInput.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(selectedName.toLowerCase())) {
            filteredCoffees.push(coffee);
        } else if ('all' === selectedRoast && coffee.name.toLowerCase().includes(selectedName.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    listCoffees.innerHTML = renderCoffees(filteredCoffees);
}
function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var input = nameInput.value.toLowerCase()
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        var currentRoast = coffee.roast.toLowerCase();
        var currentName = coffee.name.toLowerCase();
        if (currentRoast.includes(input) || currentName.includes(input)) {
            filteredCoffees.push(coffee);
        }
    });
    listCoffees.innerHTML = renderCoffees(filteredCoffees);
}

function addC(e){
    e.preventDefault();
    var addedCoffee = {
        id: coffees.length,
        name:   newCoffeeName.value,
        roast:  newCoffeeRoast.value,
    }
    coffees.push(addedCoffee);
    listCoffees.innerHTML = renderCoffees(coffees);
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var listCoffees = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameInput = document.querySelector('#name-input');
var addCoffee = document.querySelector('#btn-AddC');
var newCoffeeName = document.querySelector('#cName');
var newCoffeeRoast = document.querySelector('#cRoast');

listCoffees.innerHTML = renderCoffees(coffees.sort(function(a, b){return a.id-b.id}));


submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
nameInput.addEventListener("keyup", searchCoffees);
addCoffee.addEventListener("click", addC);