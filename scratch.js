
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

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees() {
    // e.preventDefault// don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameInput.value;
    var filteredCoffees = [];
    JSON.parsee(window.localStorage.getItem('customCoffees'));
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast || 'All' === selectedRoast) {
            if(coffee.name.toLowerCase().includes(selectedName.toLowerCase())) {
                filteredCoffees.push(coffee);
            }   else if("" === selectedName) {
                filteredCoffees.push(coffee)}
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
if(localStorage.getItem('customCoffees')=== null) {
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
    coffees.reverse();
} else {
    var coffees = JSON.parse(window.localStorage.getItem('customCoffees'));
    coffees.reverse();
}


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameInput = document.querySelector('#name-input')
var roastSelection2 = document.querySelector('#roast-selection2');
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

//Ascending Order
////////////////////////////////////////////////////////////////////////
//coffees.sort(function compareCoffee(a, b) {
//   const value1 = a.name.toUpperCase();
//  const value2 = b.name.toUpperCase();
// if (value1 < value2)
//    return -1
// if (value1 > value2)
//   return 1
// return 0
//});


////////////////////////////////////////////////////////////////////////


// Coffee Name Section Below

////////////////////////////////////////////////////////////////////////

// var interval = 0;
// var callInterval = null;
//
// function registerEvents(){
//     $("#input-form").on("keydown", function(e){
//         var keyCode = e.keyCode ? e.keyCode : e.which;
//         console.log(keyCode);
//         if(!callInterval){
//             intervalInit();
//         }
//         else{
//             resetInterval();
//         }
//     });
// }
//
// function intervalInit(){
//     interval = 0;
//     callInterval = setInterval(function(){
//         interval++;
//         if(interval >=1){
//             fetchAutoCompleteData($("#input-form").val());
//             window.clearInterval(callInterval);
//             callInterval = null;
//         }
//     },1000);
// }
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
// function resetInterval(){
//     window.clearInterval(callInterval);
//     intervalInit()
// }
//
// function fetchAutoCompleteData(coffees){
//     console.log("Data: ", coffees);
// }
// (function(){
//     registerEvents();
// })()
// var bandA = document.querySelector('#input-form'); // Location of what's being typed in
// bandA.addEventListener('keyup', function test() {
//     document.querySelector('#coffees').innerHTML = renderCoffees(coffees);
// });
