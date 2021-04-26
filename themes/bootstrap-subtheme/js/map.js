(function ($) {
let map = L.map('map',{
          center:[-34.5189, -58.7508],
          zoom:16,
       
      });

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(map);

L.Icon.Default.imagePath = '/mapadrupal/themes/bootstrap-subtheme/images/';


/*
var marker = L.marker([-34.52074154517496, -58.7453387948518]).addTo(map);

var popup = marker.bindPopup('<b>Hola soy la Unpaz.');

var marker = L.marker([-34.52159201572261, -58.74428733060266]).addTo(map);

var marker = L.marker([-34.51731972650697, -58.74855773918418]).addTo(map);
*/

// Agregar puntos al mapa.
  function addDataToMap(data, map) {
    var dataLayer = L.geoJson(data);
    dataLayer.addTo(map);
  }

  $.getJSON('/mapadrupal/points', function(data) {
    addDataToMap(data, map);
  });
	
  function addDataToMap(data, map) {
    var dataLayer = L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            var popupText = feature.properties.name;
            var popupImage = feature.properties.field_imagen_;
            var popupCoordinates = feature.properties.coordinates;
            var popupTaxonomy = feature.properties.term_node_tid;
            layer.bindPopup(popupText+popupImage+popupTaxonomy);
        }
    });
    dataLayer.addTo(map);
}


})(jQuery);
