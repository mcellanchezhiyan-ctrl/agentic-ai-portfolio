/* MENU */
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.style.right = menu.style.right === "0px" ? "-220px" : "0px";
}

/* COURSE NAV */
function goCourse(c) {
  window.location.href = `courses/${c}.html`;
}

/* LANGUAGE PLANS */
const PLANS = {
  Python: {
    duration: "30 Days",
    days: [
      "Day 1–3: Syntax & Variables",
      "Day 4–6: Control Flow",
      "Day 7–9: Functions",
      "Day 10–12: Data Structures",
      "Day 13–15: File Handling",
      "Day 16–18: OOP",
      "Day 19–22: Modules",
      "Day 23–26: Mini Projects",
      "Day 27–30: Practice"
    ],
    sources: [
      { name: "Python Docs", link: "https://docs.python.org/3/" },
      { name: "Coursera", link: "https://www.coursera.org" },
      { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/python-programming-language/" }
    ],
    practice: [
      "HackerRank",
      "LeetCode",
      "CodeChef"
    ]
  },

  Java: {
    duration: "35 Days",
    days: [
      "Day 1–5: Java Basics",
      "Day 6–10: OOP",
      "Day 11–15: Collections",
      "Day 16–20: Exceptions",
      "Day 21–25: File Handling",
      "Day 26–30: Mini Projects",
      "Day 31–35: Practice"
    ],
    sources: [
      { name: "Oracle Docs", link: "https://docs.oracle.com/javase/" },
      { name: "Coursera", link: "https://www.coursera.org" },
      { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/java/" }
    ],
    practice: [
      "HackerRank",
      "LeetCode"
    ]
  },

  "C++": {
    duration: "30 Days",
    days: [
      "Day 1–5: Basics",
      "Day 6–10: Pointers",
      "Day 11–15: OOP",
      "Day 16–20: STL",
      "Day 21–25: Problem Solving",
      "Day 26–30: Practice"
    ],
    sources: [
      { name: "C++ Reference", link: "https://en.cppreference.com/" },
      { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/c-plus-plus/" }
    ],
    practice: [
      "Codeforces",
      "LeetCode"
    ]
  },

  JavaScript: {
    duration: "25 Days",
    days: [
      "Day 1–3: Basics",
      "Day 4–6: DOM",
      "Day 7–9: Events",
      "Day 10–12: ES6",
      "Day 13–16: Async JS",
      "Day 17–25: Projects"
    ],
    sources: [
      { name: "MDN Docs", link: "https://developer.mozilla.org" },
      { name: "freeCodeCamp", link: "https://www.freecodecamp.org" }
    ],
    practice: [
      "CodePen",
      "Frontend Mentor"
    ]
  },

  Go: {
    duration: "20 Days",
    days: [
      "Day 1–3: Syntax",
      "Day 4–6: Functions",
      "Day 7–9: Structs",
      "Day 10–12: Concurrency",
      "Day 13–16: APIs",
      "Day 17–20: Projects"
    ],
    sources: [
      { name: "Go Docs", link: "https://go.dev/doc/" }
    ],
    practice: [
      "Exercism",
      "LeetCode"
    ]
  }
};
function generatePlan(lang) {
  const plan = PLANS[lang];
  const box = document.getElementById("planBox");

  if (!plan) {
    box.innerHTML = "<p>Plan coming soon 🚧</p>";
    return;
  }

  let html = `<h3>${lang} Learning Plan</h3>`;
  html += `<p><b>Duration:</b> ${plan.duration}</p><hr>`;

  plan.days.forEach(day => {
    html += `<p>📘 ${day}</p>`;
  });

  html += "<h4>📚 Learn From</h4>";
  plan.sources.forEach(src => {
    html += `🔗 <a href="${src.link}" target="_blank">${src.name}</a><br>`;
  });

  html += "<h4>🧪 Practice On</h4>";
  plan.practice.forEach(p => {
    html += `<p>✅ ${p}</p>`;
  });

  html += `<br><button onclick="saveToCalendar('${lang}')">📅 Save to My Plan</button>`;

  box.innerHTML = html;
}
/* calender */
function saveToCalendar(lang) {
  const savedPlans = JSON.parse(localStorage.getItem("savedPlans")) || [];
  if (!savedPlans.includes(lang)) {
    savedPlans.push(lang);
    localStorage.setItem("savedPlans", JSON.stringify(savedPlans));
  }
  alert(`${lang} plan saved to your calendar 📅`);
}
/* ===== ARC REACTOR ROTATION (USER DRAG) ===== */

const arc = document.querySelector(".arc-ring");
let isDragging = false;
let startAngle = 0;
let currentRotation = 0;

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
  currentRotation += delta;

  arc.style.transform = `rotate(${currentRotation}deg)`;

  // keep text straight
  arc.querySelectorAll("span").forEach(span => {
    span.style.transform = `rotate(${-currentRotation}deg)`;
  });

  startAngle = angle;
}

function stopRotate() {
  isDragging = false;
}
