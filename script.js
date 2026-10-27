const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});


// Click a certificate to open an animated full-size preview.
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("certificateLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeButton = document.getElementById("lightboxClose");
  let lastTrigger = null;
  if (!lightbox || !lightboxImage || !closeButton) return;
  function openPreview(button) {
    lastTrigger = button;
    lightboxImage.src = button.dataset.certificate;
    const thumb = button.querySelector("img");
    lightboxImage.alt = thumb ? thumb.alt : "Expanded certificate";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-active");
    closeButton.focus();
  }
  function closePreview() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-active");
    lightboxImage.src = "";
    if (lastTrigger) lastTrigger.focus();
  }
  document.querySelectorAll(".certificate-card").forEach(function (button) {
    button.addEventListener("click", function () { openPreview(button); });
  });
  closeButton.addEventListener("click", closePreview);
  lightbox.addEventListener("click", function (event) { if (event.target === lightbox) closePreview(); });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) closePreview();
  });
});
