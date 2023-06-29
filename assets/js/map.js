function initMap() {
  var latitude = YOUR_LATITUDE;
  var longitude = YOUR_LONGITUDE;

  var map = new OpenLayers.Map("map");
  var mapnik = new OpenLayers.Layer.OSM();

  var lonLat = new OpenLayers.LonLat(longitude, latitude).transform(
    new OpenLayers.Projection("EPSG:4326"),
    map.getProjectionObject()
  );

  var markers = new OpenLayers.Layer.Markers("Markers");
  markers.addMarker(new OpenLayers.Marker(lonLat));

  map.addLayer(mapnik);
  map.addLayer(markers);

  map.setCenter(lonLat, 15);
}

initMap();
