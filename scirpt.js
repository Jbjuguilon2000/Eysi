function clickmetoremove() {
  $(".thisBtn").attr("class", "thisBtn btn btn-outline-secondary border-none");
}

function nonono() {
  var button = document.getElementById("moveButton");

  // Set the window dimensions to 400x400 pixels
  var windowWidth = 200;
  var windowHeight = 200;

  // Calculate new random position within the limited space
  var newPositionX = Math.floor(
    Math.random() * (windowWidth - button.offsetWidth)
  );
  var newPositionY = Math.floor(
    Math.random() * (windowHeight - button.offsetHeight)
  );

  // Set the new position
  button.style.left = newPositionX + "px";
  button.style.top = newPositionY + "px";
}

function izAYes() {
  $(".NewText").text("I LOVE YOU! ALLAYSA CAMILLE D. VILLANUEVA");

  location.href = "#ItsAYes";
}
