function getLocation() {
  const out = document.getElementById("location");
 
  // ask the browser for the current location
  navigator.geolocation.getCurrentPosition(function (pos) {
    out.textContent = "Location: " +
      pos.coords.latitude + " , " + pos.coords.longitude;
  });
}
 
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