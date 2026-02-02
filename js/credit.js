// ===============================
// Website Credit – Rahul Meena
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const creditContainer = document.getElementById("c111");

  if (!creditContainer) return;

  const credit = document.createElement("p");
  credit.style.margin = "6px 0 0";
  credit.style.fontSize = "0.9rem";
  credit.style.color = "#ffffff";
  credit.style.textAlign = "center";

  credit.innerHTML = `
    Developed by 
    <a href="https://www.linkedin.com/in/rahul-meena-715193260/" 
       target="_blank" 
       style="color:#9fd7ff; text-decoration:none; font-weight:600;">
       Rahul Meena
    </a>
    &nbsp;|&nbsp;
    <a href="https://github.com/rahulrajalwal" 
       target="_blank" 
       style="color:#9fd7ff; text-decoration:none; font-weight:600;">
       GitHub
    </a>
  `;

  creditContainer.appendChild(credit);
});
