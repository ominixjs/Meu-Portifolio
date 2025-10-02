const timer = {
  opacity: 0,
  duration: 600,
};

// Sections:

// header e homepage
ScrollReveal().reveal(".navbar", { ...timer });
ScrollReveal().reveal(".txtMiniTitle", { ...timer });
ScrollReveal().reveal(".title", { ...timer, delay: 300 });
ScrollReveal().reveal(".txtPro", { ...timer, delay: 600 });
ScrollReveal().reveal(".txtPrf", { ...timer, delay: 900 });
ScrollReveal().reveal(".button-home", { ...timer, delay: 1200 });

// About
ScrollReveal().reveal("#img-show", {
  ...timer,
  origin: "left",
  distance: "4rem",
});
ScrollReveal().reveal("#title_about", { ...timer });
ScrollReveal().reveal("#subt_about", { ...timer, delay: 400, interval: 1000 });
ScrollReveal().reveal("#prf_about", { ...timer, delay: 800, interval: 1000 });
ScrollReveal().reveal(".button-about", { ...timer, delay: 2000, interval: 600 });
