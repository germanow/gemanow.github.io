var map;

function initialize() {
    var myLatlng = new google.maps.LatLng(50.45127, 30.523368); //Kiev
    var myOptions = {
        zoom: 9,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(document.getElementById("my_map"), myOptions);

    let myPoints = []; 
    let markers = [];
    let myPolygon; 
    google.maps.event.addListener(map, 'click', function(event) {
        let index = myPoints.length;
        markers[index] = new google.maps.Marker({
            position:event.latLng,
            clickable:false
        });
        markers[index].setMap(map);
        myPoints.push(event.latLng);
        if(myPoints.length > 2){
            if(myPolygon){
                myPolygon.setMap(null);
            }
            // создаем контур
            myPolygon = new google.maps.Polygon({
                paths: myPoints,
                strokeColor: '#FFFF00', //цвет линии обводки
                strokeOpacity: 0.8, // прозрачность линии обводки
                strokeWeight: 2, //толщина линии обводки
                fillColor: '#FF00FF', //этим цветом будет заполнен контур
                fillOpacity: 0.2 //прозрачность заливки контура
            });
            myPolygon.setMap(map); //размещаем контур на карте
        }
    });
}
  
function loadScript() {
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBH7-l4Q49bKrM72WAmwUb7SjBu3HjevVk&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;
