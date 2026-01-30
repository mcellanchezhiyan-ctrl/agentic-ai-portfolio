/* ===============================
   ELEMENT REFERENCES
================================ */
const menu = document.getElementById("arc-menu");
const toggle = document.getElementById("menu-toggle");
const items = document.querySelectorAll(".menu-item");

/* ===============================
   STATE VARIABLES
================================ */
let isOpen = false;
let isDragging = false;
let startX = 0;
let angle = 0;

/* ===============================
   CONFIGURATION
================================ */
const radius = 130;     // Radius of semi-circle
const center = 160;     // Center of arc-menu
const rotateSpeed = 0.3;

/* ===============================
   POSITION ITEMS IN SEMI-CIRCLE
================================ */
const totalItems = items.length;
const stepAngle = 180 / (totalItems - 1);

items.forEach((item, index) => {
  const deg = stepAngle * index - 90; // -90 to +90 degrees
  const rad = deg * Math.PI / 180;

  const x = center + radius * Math.cos(rad);
  const y = center + radius * Math.sin(rad);

  item.style.left = `${x - 45}px`;
  item.style.top = `${y - 10}px`;
});

/* ===============================
   TOGGLE MENU OPEN / CLOSE
================================ */
toggle.addEventListener("click", () => {
  isOpen = !isOpen;
  menu.style.display = isOpen ? "block" : "none";
});

/* ===============================
   DRAG START (MOUSE + TOUCH)
================================ */
menu.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
});

menu.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
});

/* ===============================
   DRAG MOVE (ROTATION)
================================ */
window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  rotateMenu(e.clientX);
});

window.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  rotateMenu(e.touches[0].clientX);
});

/* ===============================
   DRAG END
================================ */
window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("touchend", () => {
  isDragging = false;
});

/* ===============================
   ROTATION LOGIC
================================ */
function rotateMenu(currentX) {
  const deltaX = currentX - startX;
  angle += deltaX * rotateSpeed;
  startX = currentX;

  // Rotate the arc container
  menu.style.transform = `translateY(-50%) rotate(${angle}deg)`;

  // Counter-rotate items so text stays upright
  items.forEach(item => {
    item.style.transform = `rotate(${-angle}deg)`;
  });
}
