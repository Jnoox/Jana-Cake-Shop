function getLocation() {
  const out = document.getElementById("location");
 
  // ask the browser for the current location
  navigator.geolocation.getCurrentPosition(function (pos) {
    out.textContent = "Location: " +
      pos.coords.latitude + " , " + pos.coords.longitude;
  });
}
 