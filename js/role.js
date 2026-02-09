// ==============================
// ROLE SELECTION ONLY
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const roleBoxes = document.querySelectorAll(".role-box");

  if (roleBoxes.length === 0) {
    console.log("No role boxes found ❌");
    return;
  }

  roleBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.classList.contains("barber")) {
        window.location.href = "barber.html";
      } 
      else if (box.classList.contains("customer")) {
        window.location.href = "customer.html";
      }
    });
  });

  console.log("Role selection ready ✅");
});
