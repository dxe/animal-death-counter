/* Yearly farmed animal death totals by species */
var animals = [
  { species: 'cows',     deaths: 28740000   },
  { species: 'chickens', deaths: 8822695000 },
  { species: 'pigs',     deaths: 115414000  },
  { species: 'turkeys',  deaths: 232398000  },
  { species: 'ducks',    deaths: 27794000   },
  { species: 'lambs',    deaths: 2217000    }
]

/* Calculates today's current total from the yearly total */
function slaughtersToday( animalDeaths ) {
  var now = new Date();
  var secondsToday = now.getSeconds() + (60 * (now.getMinutes() + (60 * now.getHours())));

  return Math.round(( animalDeaths / 365 / 24 / 60 / 60 ) * secondsToday ).toLocaleString();
}

/* Updates the counters */
function updateCounters() {
  for ( var i = 0; i < animals.length; i++ ) {
    var animal = animals[i];
    var counterElement = document.querySelector( '[data-animal='+animal.species+'] .counter' );
    counterElement.innerHTML = slaughtersToday( animal.deaths );
  }
}

window.setInterval(updateCounters, 1000);
