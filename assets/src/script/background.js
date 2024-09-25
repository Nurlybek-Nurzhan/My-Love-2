particlesJS("particles-js", {
  particles: {
    number: {
      value: 50,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    shape: {
      type: "image",
      image: {
        src: "./assets/public/images/heart.png",
        width: 100,
        height: 100,
      },
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: false,
        speed: 30,
        size_min: 30,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
});
