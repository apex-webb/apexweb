particlesJS("particles-js", {
  particles: {
    number: { value: 30, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "polygon",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover",
  },
});
// Désactiver Ctrl+U (afficher le code source)
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
    alert("L'accès au code source est désactivé.");
  }
});

// Désactiver Ctrl+Shift+I (outils de développement)
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    alert("L'accès aux outils de développement est désactivé.");
  }
});

// Désactiver Ctrl+Shift+J (console JavaScript)
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault();
    alert("L'accès à la console JavaScript est désactivé.");
  }
});

// Désactiver clic droit
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Le clic droit est désactivé.");
});
