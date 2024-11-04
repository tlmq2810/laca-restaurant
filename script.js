// Xác nhận đặt bàn
document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.querySelector('form');
    
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Thank you for your reservation! We’ll be in touch with you soon!");
        reservationForm.reset();
    });
});

// Liên hệ
document.addEventListener("DOMContentLoaded", function() {
    const contactInfo = document.querySelectorAll('#contact li');

    contactInfo.forEach(item => {
        item.addEventListener('click', function() {
            alert("Contact information has been copied to your clipboard!");
        });
    });
});

// Map
function initMap() {
    const lacaBeer24 = { lat: 21.031706, lng: 105.848337 }; // Tọa độ cho 24 Ly Quoc Su
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: lacaBeer24
    });
    const marker = new google.maps.Marker({
        position: lacaBeer24,
        map: map,
        title: 'Laca Beer 24'
    });

    const infoWindow = new google.maps.InfoWindow({
        content: '<h3>Laca Beer 24</h3><p>24 Ly Quoc Su, Hoan Kiem, Hanoi, Vietnam</p>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

document.addEventListener("DOMContentLoaded", function() {    
    if (typeof google !== 'undefined') {
        initMap();
    }
});

