function login() {
  const name = document.getElementById("name").value.trim();
  const usn  = document.getElementById("usn").value.trim();

  if (!name || !usn) {
    // Inline shake on empty fields instead of alert
    ["name","usn"].forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.style.borderColor = "#e53e3e";
        el.style.animation = "none";
        setTimeout(() => { el.style.borderColor = ""; }, 1500);
      }
    });
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("usn",  usn);

  // Show rules modal
  document.getElementById("rulesModal").classList.add("active");
}

function startExam() {
  const el = document.documentElement;
  const req = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;

  const go = () => { window.location.href = "exam.html"; };

  if (req) {
    req.call(el).then(go).catch(go);
  } else {
    go();
  }
}

// Clear red border on input
document.addEventListener("DOMContentLoaded", () => {
  ["name","usn"].forEach(id => {
    document.getElementById(id).addEventListener("input", function () {
      this.style.borderColor = "";
    });
  });
});
