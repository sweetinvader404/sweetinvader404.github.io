function initMap() {
  var latitude = 17.5911091;
  var longitude = 120.4328791;

  var map = L.map("map").setView([latitude, longitude], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18
  }).addTo(map);

  L.marker([latitude, longitude]).addTo(map);
}

initMap();
