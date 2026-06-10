
let map;
let marker;
let chosen = "";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21.5, lng: 39.2 },
    zoom: 11
  });

  map.addListener("click", function (e) {
    if (marker) marker.setMap(null);
    marker = new google.maps.Marker({ position: e.latLng, map: map });
    chosen = e.latLng.lat().toFixed(4) + " , " + e.latLng.lng().toFixed(4);
    document.getElementById("map-location").textContent = "Selected: " + chosen;
  });
}

 
// Add order to the list on the page
function addOrder() {
  const name = document.getElementById("name").value;
  const cake = document.getElementById("cake").value;
 
  if (name === "") { alert("Enter your name first!"); return; }
  if (chosen === "") { alert("Choose your delivery location on the map!"); return; }
 
  const li = document.createElement("li");
  li.className = "receipt";
  li.innerHTML =
    "<strong>Order details</strong><br>" +
    "Name: " + name + "<br>" +
    "Cake type: " + cake + "<br>" +
    "Delivery location: " + chosen;
 
  document.getElementById("ordersList").appendChild(li);
 
  document.getElementById("name").value = "";  
}

function searchCakes() {
  const text = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
 
  cards.forEach(function (card) {
    if (card.textContent.toLowerCase().includes(text)) {
      card.style.display = "";      
    } else {
      card.style.display = "none";  
    }
  });
}