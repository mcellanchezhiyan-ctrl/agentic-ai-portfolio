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
  Python: ["Syntax", "Control Flow", "Functions", "Data Structures", "Mini Projects"],
  Java: ["Basics", "OOP", "Collections", "Projects"],
  "C++": ["Pointers", "OOP", "STL", "Problem Solving"],
  JavaScript: ["DOM", "Events", "Async JS", "Projects"],
  Go: ["Basics", "Concurrency", "APIs"]
};

function generatePlan(lang) {
  const box = document.getElementById("planBox");
  let html = `<h3>${lang} Roadmap</h3>`;
  PLANS[lang].forEach(s => html += `<p>• ${s}</p>`);
  box.innerHTML = html;
}
