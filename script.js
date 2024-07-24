function initiMap(){ //Loads Google Maps at a specific point on the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        mapId: '75851ff91bc5e98a'
        });
}