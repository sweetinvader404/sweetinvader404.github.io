// function initMap() {
//   var latitude = 17.5911091;
//   var longitude = 120.4328791;

//   var map = L.map("map").setView([latitude, longitude], 13);

//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: "&copy; OpenStreetMap contributors",
//     maxZoom: 18
//   }).addTo(map);

//   L.marker([latitude, longitude]).addTo(map);
// }
//initMap();

document.addEventListener("DOMContentLoaded", function () {
  var mapContainer = document.getElementById("map");
  if (!mapContainer) {
    console.error("Map container element not found.");
    return;
  }
  var latitude = 17.5911091; // Replace with your latitude
  var longitude = 120.4328791; // Replace with your longitude
  var zoom = 13;

  var tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

  var centerTile = latLonToTile(latitude, longitude, zoom);

  var tileUrlFormatted = tileUrl
    .replace("{z}", zoom)
    .replace("{x}", centerTile.x)
    .replace("{y}", centerTile.y);

  mapContainer.style.backgroundImage = "url(" + tileUrlFormatted + ")";

  function latLonToTile(lat, lon, zoom) {
    var latRad = (lat * Math.PI) / 180;
    var n = Math.pow(2, zoom);
    var xtile = parseInt(((lon + 180) / 360) * n);
    var ytile = parseInt(
      ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) *
        n
    );
    return { x: xtile, y: ytile };
  }
});
