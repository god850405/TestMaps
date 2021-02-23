let flightPath;
let map;
var image;
let markers = [];
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 23.792636556803156, lng: 120.29335035547457 },
    zoom: 8,
    mapTypeControl: false,
    scaleControl: true
  });
  // This event listener will call addMarker() when the map is clicked.
  map.addListener('click', event => {
    addMarker(event.latLng);
  });
  // Adds a marker at the center of the map.
  addMarker(haightAshbury);
}

function drawPolyLine() {
  const flightPlanCoordinates = [
    { lat: 23.772, lng: 120.214 },
    { lat: 23.291, lng: 120.821 },
    { lat: 23.142, lng: 120.431 },
    { lat: 23.467, lng: 120.027 }
  ];
  flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  flightPath.setMap(map);
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: image
  });
  markers.push(marker);
}

function addLine() {
  drawPolyLine();
  flightPath.setMap(map);
}

function removeLine() {
  flightPath.setMap(null);
}
// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}
function setMarkersIcon() {
  image = document.getElementById('inputUri').value;
}
