// function myMap() {
//   var mapOptions = {
//       center: new google.maps.LatLng(50.870340, 4.347922),
//       zoom: 10,
//       mapTypeId: google.maps.MapTypeId.HYBRID
//   }
//   var marker = new google.maps.Marker({
//     position: mapOptions,
//     map: map
//   })
// var map = new google.maps.Map(document.getElementById("maps-container"), mapOptions);
// }

function initMap() {
  var brussel = {lat: 50.870340, lng: 4.347922};
  var map = new google.maps.Map(document.getElementById('maps-container'), {
    zoom: 11,
    center: brussel
  });
  var marker = new google.maps.Marker({
    position: brussel,
    map: map
  });
}