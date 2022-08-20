const originInput = document.getElementById("origin")
const destInput = document.getElementById("destination")
const submitButton = document.getElementById("calculate")


submitButton.addEventListener("click", e => {
    findPlace(originInput.value)
})


// call maps api 
//KEY:AIzaSyCTmoNvj8PFoA6BBqVPsdG4mH_xahEJi9c

var map;
var service;
var infowindow;

function initMap() {
  var sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById('map'), {center: sydney, zoom: 15});
  autocomplete = new google.maps.places.Autocomplete(originInput, {
    componentRestrictions: { country: ["au"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  originInput.focus()

}

function findPlace(place){
    var request = {
        query: place,
        fields: ['name', 'geometry'],
      };
    var service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, function(results, status) {
        //console.log(results)
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
           createMarker(results[i]);
          }
          map.setCenter(results[0].geometry.location);
        }
      });
}


function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
  
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
    });
  
    google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name || "");
      infowindow.open(map);
    });
  }