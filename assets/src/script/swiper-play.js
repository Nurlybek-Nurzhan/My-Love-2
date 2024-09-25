import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

const play = document.body.querySelector("#play");
const play_icon = document.body.querySelector(".bx-pause-circle");

const swiper = new Swiper(".swiper", {
  modules: [Autoplay],
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 1500,
  },
});

play.addEventListener("click", () => {
  play_icon.classList.toggle("bx-play-circle");
  play_icon.classList.toggle("bx-pause-circle");

  if (play_icon.classList.contains("bx-pause-circle")) {
    swiper.autoplay.start();
  } else {
    swiper.autoplay.stop();
  }
});