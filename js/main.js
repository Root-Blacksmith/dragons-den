/* Dragon's Den: small, dependency-free behaviour. */

// Mobile nav toggle
(function () {
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
})();

// Set the current year in the footer
(function () {
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();

// If the logo file hasn't been dropped in yet, fall back gracefully
// (swap any <img data-logo> that fails to load for a styled placeholder).
(function () {
  var logos = document.querySelectorAll("img[data-logo]");
  logos.forEach(function (img) {
    img.addEventListener("error", function () {
      var fb = img.getAttribute("data-fallback") || "Dragon's Den";
      var box = document.createElement("div");
      box.className = img.getAttribute("data-fallback-class") || "brand__logo";
      box.style.display = "grid";
      box.style.placeItems = "center";
      box.style.fontFamily = '"Cinzel", Georgia, serif';
      box.style.color = "var(--gold)";
      box.style.textAlign = "center";
      box.style.fontSize = img.classList.contains("hero__logo") ? "1rem" : "1.1rem";
      box.style.border = "1px dashed var(--gold-deep)";
      if (img.classList.contains("hero__logo")) {
        box.className = "hero__logo hero__logo--placeholder";
        box.innerHTML =
          '<div><strong style="font-size:1.4rem;color:var(--gold-bright)">Dragon’s Den</strong>' +
          '<br><span style="color:var(--ink-mute);font-size:0.85rem;letter-spacing:0.1em">' +
          "Drop logo at images/logo.png</span></div>";
      } else {
        box.textContent = "🐉";
      }
      img.replaceWith(box);
    });
  });
})();
