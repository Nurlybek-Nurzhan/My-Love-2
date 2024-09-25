const sound = document.body.querySelector("#sound");
const sound_icon = document.body.querySelector(".bx-volume-mute");
const audio = document.querySelector(".audio");

sound.addEventListener("click", () => {
  sound_icon.classList.toggle("bx-volume-full");
  sound_icon.classList.toggle("bx-volume-mute");

  sound.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  sound.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};
