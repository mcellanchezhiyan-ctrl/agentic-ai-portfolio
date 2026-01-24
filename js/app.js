/* ---------- COURSE NAVIGATION ---------- */

function openCourse(course) {
  window.location.href = `courses/${course}.html`;
}

/* ---------- ARC REACTOR ROTATION ---------- */

const arc = document.querySelector(".arc-ring");
let isDragging = false;
let startAngle = 0;
let rotation = 0;

function getAngle(x, y, cx, cy) {
  return Math.atan2(y - cy, x - cx) * 180 / Math.PI;
}

arc.addEventListener("mousedown", startRotate);
arc.addEventListener("touchstart", startRotate);

document.addEventListener("mousemove", rotate);
document.addEventListener("touchmove", rotate);

document.addEventListener("mouseup", stopRotate);
document.addEventListener("touchend", stopRotate);

function startRotate(e) {
  isDragging = true;

  const rect = arc.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const p = e.touches ? e.touches[0] : e;
  startAngle = getAngle(p.clientX, p.clientY, cx, cy);
}

function rotate(e) {
  if (!isDragging) return;

  const rect = arc.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const p = e.touches ? e.touches[0] : e;
  const angle = getAngle(p.clientX, p.clientY, cx, cy);

  const delta = angle - startAngle;
  rotation += delta;

  arc.style.transform = `rotate(${rotation}deg)`;

  // Keep text straight
  arc.querySelectorAll("span").forEach(item => {
    item.style.transform = `rotate(${-rotation}deg)`;
  });

  startAngle = angle;
}

function stopRotate() {
  isDragging = false;
}
/* ---------- PROGRAMMING LANGUAGE PLANS ---------- */

const LANGUAGE_PLANS = {
  Python: {
    duration: "4–6 weeks",
    steps: [
      "Python basics & syntax",
      "Control flow & loops",
      "Functions & modules",
      "Data structures",
      "Mini projects"
    ],
    learn: [
      ["Python Docs", "https://docs.python.org/3/"],
      ["W3Schools", "https://www.w3schools.com/python/"]
    ]
  },

  Java: {
    duration: "6–8 weeks",
    steps: [
      "Java syntax",
      "OOP concepts",
      "Collections framework",
      "Exception handling",
      "Mini projects"
    ],
    learn: [
      ["Oracle Docs", "https://docs.oracle.com/javase/"],
      ["GeeksforGeeks", "https://www.geeksforgeeks.org/java/"]
    ]
  },

  "C++": {
    duration: "6–8 weeks",
    steps: [
      "C++ basics",
      "Pointers & memory",
      "OOP in C++",
      "STL",
      "Problem solving"
    ],
    learn: [
      ["GeeksforGeeks", "https://www.geeksforgeeks.org/c-plus-plus/"]
    ]
  },

  JavaScript: {
    duration: "4–6 weeks",
    steps: [
      "JS basics",
      "DOM manipulation",
      "Events",
      "Async programming",
      "Mini projects"
    ],
    learn: [
      ["MDN Docs", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"]
    ]
  }
};

/* ---------- GENERATE LANGUAGE PLAN ---------- */

function generateLanguagePlan(language) {
  const plan = LANGUAGE_PLANS[language];
  if (!plan) return;

  let html = `<h3>${language} Learning Plan</h3>`;
  html += `<p><b>Duration:</b> ${plan.duration}</p>`;

  plan.steps.forEach(step => {
    html += `<div>🔹 ${step}</div>`;
  });

  html += `<h4>Learn from</h4>`;
  plan.learn.forEach(item => {
    html += `🔗 <a href="${item[1]}" target="_blank">${item[0]}</a><br>`;
  });

  document.getElementById("planOutput").innerHTML = html;
}
