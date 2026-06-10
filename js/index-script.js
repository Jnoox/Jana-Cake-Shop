function getLocation() {
  const out = document.getElementById("location");
 
  // ask the browser for the current location
  navigator.geolocation.getCurrentPosition(function (pos) {
    out.textContent = "Location: " +
      pos.coords.latitude + " , " + pos.coords.longitude;
  });
}

const map = L.map("map").setView([21.5, 39.2], 11); 
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
 
let chosen = "";   
let marker;        
 
map.on("click", function (e) {
  if (marker) map.removeLayer(marker);          
  marker = L.marker(e.latlng).addTo(map);       
  chosen = e.latlng.lat.toFixed(4) + " , " + e.latlng.lng.toFixed(4);
  document.getElementById("location").textContent = "Selected: " + chosen;
});

 
// Add order to the list on the page
function addOrder() {
  const name = document.getElementById("name").value;
  const cake = document.getElementById("cake").value;
 
  if (name === "") { alert("Please enter your name first!"); return; }
 
  const li = document.createElement("li");
  li.textContent = name + " ordered " + cake;
  document.getElementById("ordersList").appendChild(li);
 
  document.getElementById("name").value = ""; // clear the name field
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