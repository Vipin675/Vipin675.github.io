// Initialize the map and set its view to our chosen geographical coordinates and a zoom level:
var map = L.map("map").setView([30.900965, 75.857277], 12);

// tileLayer: Used to load and display tile layers on the map, in this case it’s a OpenStreetMap tile layer.
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Make sure all the code is called after the div and leaflet.js inclusion.

// ################################################################################################################################

// POPUP Lat and Lng on click on anywhere on map
var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);

// ---------------------------------------------------------- BLACKSPOT IMPLEMENTATION -----------------------------------------------------------------
fetch("https://vipin675.github.io/map/data/json/coeData.json")
  .then((response) => response.json())
  .then((data) => {
    // Process the JSON data as an array
    var coeDataArray = data;

    coeDataArray.map((black_data_item) => {
      var myIcon = L.icon({
        iconUrl: "https://gndec.ac.in/~hsrai/maps/coe/coe2.jpeg",
        iconSize: [black_data_item.iconSize],
        iconOffset: [black_data_item.iconOffset],
      });
      var marker = L.marker([black_data_item.lat, black_data_item.lon], {
        icon: myIcon,
      })
        .addTo(map)
        .bindPopup(black_data_item.title + ", " + black_data_item.description);

      //   POI (Point of Interest) representing accident data on Open Street Map.
      var circle = L.circle([black_data_item.lat, black_data_item.lon], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 100,
      })
        .addTo(map)
        .bindPopup(black_data_item.description);
    });
  })
  .catch((error) => console.error(error));
// -------------------------------------------------------------------------------------------------------------------------------
