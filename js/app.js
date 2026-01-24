/* COURSE NAVIGATION */
function openCourse(course) {
  window.location.href = `courses/${course}.html`;
}

/* ARC ROTATION (USER CONTROLLED) */
const arc = document.querySelector(".arc-ring");
let dragging = false;
let startAngle = 0;
let rotation = 0;

function angle(x, y, cx, cy) {
  return Math.atan2(y - cy, x - cx) * 180 / Math.PI;
}

arc.addEventListener("mousedown", start);
arc.addEventListener("touchstart", start);

document.addEventListener("mousemove", move);
document.addEventListener("touchmove", move);

document.addEventListener("mouseup", stop);
document.addEventListener("touchend", stop);

function start(e) {
  dragging = true;
  const r = arc.getBoundingClientRect();
  const p = e.touches ? e.touches[0] : e;
  startAngle = angle(p.clientX, p.clientY, r.left + r.width/2, r.top + r.height/2);
}

function move(e) {
  if (!dragging) return;
  const r = arc.getBoundingClientRect();
  const p = e.touches ? e.touches[0] : e;
  const a = angle(p.clientX, p.clientY, r.left + r.width/2, r.top + r.height/2);
  rotation += a - startAngle;
  arc.style.transform = `rotate(${rotation}deg)`;
  arc.querySelectorAll("span").forEach(s => {
    s.style.transform = `rotate(${-rotation}deg)`;
  });
  startAngle = a;
}

function stop() {
  dragging = false;
}

/* LANGUAGE PLANS */
const PLANS = {
  Python: ["Basics", "Control flow", "Functions", "Data structures", "Mini projects"],
  Java: ["Syntax", "OOP", "Collections", "Exceptions", "Projects"],
  "C++": ["Basics", "Pointers", "OOP", "STL", "Problem solving"],
  JavaScript: ["Basics", "DOM", "Events", "Async JS", "Projects"]
};

function generateLanguagePlan(lang) {
  const box = document.getElementById("planOutput");
  let html = `<h3>${lang} Learning Plan</h3>`;
  PLANS[lang].forEach(s => html += `<p>• ${s}</p>`);
  box.innerHTML = html;
}
