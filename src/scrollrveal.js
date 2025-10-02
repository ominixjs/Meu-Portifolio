const timer = {
  opacity: 0,
  duration: 600,
};

function reveal(seletor, obj = {}) {
  ScrollReveal().reveal(seletor, { ...timer, ...obj });
}

// Sections:

// header e homepage
reveal(".navbar", { ...timer });
reveal(".txtMiniTitle", { ...timer });
reveal(".title", { ...timer, delay: 300 });
reveal(".txtPro", { ...timer, delay: 600 });
reveal(".txtPrf", { ...timer, delay: 900 });
reveal(".button-home", { ...timer, delay: 1200 });

// About
reveal("#img-show", {
  ...timer,
  origin: "left",
  distance: "4rem",
});
reveal("#title_about", { ...timer });
reveal("#subt_about", { ...timer, delay: 400, interval: 1000 });
reveal("#prf_about", { ...timer, delay: 800, interval: 1000 });
reveal(".button-about", {
  ...timer,
  delay: 2000,
  interval: 600,
});

// Skills
reveal("#title_skills", { ...timer });
reveal("#prf_skills", { ...timer, delay: 400 });
reveal(".scroll-imgs > div", {
  ...timer,
  delay: 800,
  interval: 400,
});

// Works
reveal("#title_works", { ...timer });
reveal("#subt_works", { ...timer, delay: 400 });
reveal(".scroll-cards > div", {
  ...timer,
  delay: 800,
  interval: 400,
  origin: "bottom",
  distance: "2rem",
});

// Contact
reveal("#img_show", {
  ...timer,
  origin: "left",
  distance: "3rem",
});
reveal("#title_contact", { ...timer });
reveal("#subt_contact", { ...timer, delay: 400 });
reveal("#form label", { ...timer, delay: 600, interval: 600 });
reveal("#form input", { ...timer, delay: 800, interval: 600 });
reveal("#form textarea", { ...timer, delay: 2000 });
reveal("#form button", { ...timer, delay: 2400 });

// Footer
reveal("#footer", { ...timer });
reveal(".flex-list > ul", {
  ...timer,
  delay: 800,
  interval: 400,
});
