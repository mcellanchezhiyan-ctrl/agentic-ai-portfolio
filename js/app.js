let points = localStorage.getItem("points");

if (!points) {
  points = 100;
  localStorage.setItem("points", points);
}

function updatePoints() {
  const el = document.getElementById("points");
  if (el) el.innerText = points;
}

function teach() {
  points = parseInt(points) + 10;
  localStorage.setItem("points", points);
  alert("You earned +10 knowledge points!");
}

function learn() {
  if (points < 10) {
    alert("Not enough points!");
    return;
  }
  points = parseInt(points) - 10;
  localStorage.setItem("points", points);
  alert("You spent -10 points to learn!");
}

updatePoints();
