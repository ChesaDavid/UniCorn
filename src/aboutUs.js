const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

var map = L.map('map').setView([45.741533, 21.227503], 16);

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

var points = [
    { cords: [45.741533, 21.227503], description: "UniCORN Headquarters" }
];

points.forEach(function (point) {
    var marker = L.marker(point.cords).addTo(map);
    marker.bindPopup(point.description);
});

map.on('load', function() {
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker) {
            layer.openPopup();
        }
    });
});