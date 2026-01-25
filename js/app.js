/* MENU */
function toggleMenu(){
  document.getElementById("sideMenu").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

/* COURSE NAV */
function goCourse(c){
  location.href = `courses/${c}.html`;
}

/* PLANS */
const PLANS = {
  Python:["Basics","Control Flow","Functions","DS","Projects"],
  Java:["Basics","OOP","Collections","Projects"],
  "C++":["Basics","Pointers","STL","Practice"],
  JavaScript:["DOM","Events","Async","Projects"],
  Go:["Syntax","Concurrency","APIs"]
};

function generatePlan(lang){
  const box = document.getElementById("planBox");
  document.getElementById("robot-msg").innerText =
    `🔥 Great choice! ${lang}`;
  box.innerHTML = `<h3>${lang}</h3>` +
    PLANS[lang].map(d=>`<p>📘 ${d}</p>`).join("");
}

/* ARC ROTATION */
const arc=document.querySelector(".arc-ring");
let dragging=false,start=0,rot=0;
arc.onmousedown=e=>{dragging=true;start=e.clientX;arc.style.animation="none";}
document.onmousemove=e=>{
  if(!dragging)return;
  rot+=e.clientX-start;
  arc.style.transform=`rotate(${rot/2}deg)`;
  arc.querySelectorAll("span")
    .forEach(s=>s.style.transform=`rotate(${-rot/2}deg)`);
  start=e.clientX;
}
document.onmouseup=()=>dragging=false;
