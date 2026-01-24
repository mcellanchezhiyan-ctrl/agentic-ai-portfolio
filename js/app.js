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
      "Day 16–18: OOP Basics",
      "Day 19–22: Modules & Packages",
      "Day 23–26: Mini Projects",
      "Day 27–30: Practice & Revision"
    ],
    practice: ["HackerRank", "LeetCode", "CodeChef"]
  },

  JavaScript: {
    duration: "25 Days",
    days: [
      "Day 1–3: Basics",
      "Day 4–6: DOM",
      "Day 7–9: Events",
      "Day 10–12: ES6",
      "Day 13–15: Async JS",
      "Day 16–20: Projects",
      "Day 21–25: Practice"
    ],
    practice: ["CodePen", "Frontend Mentor"]
  }
};
function generatePlan(lang) {
  const plan = PLANS[lang];
  const box = document.getElementById("planBox");

  if (!plan) {
    box.innerHTML = "<p>Plan coming soon 🚧</p>";
    return;
  }

  let html = `
    <h3>${lang} Learning Plan</h3>
    <p><b>Duration:</b> ${plan.duration}</p>
    <hr>
  `;

  plan.days.forEach(d => {
    html += `<p>📘 ${d}</p>`;
  });

  html += "<h4>🧪 Practice Platforms</h4>";
  plan.practice.forEach(p => {
    html += `<p>🔗 ${p}</p>`;
  });

  box.innerHTML = html;
}
