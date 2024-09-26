import { swiper_modal } from "./swiper-play";

const mail = document.body.querySelector("#mail");
const mail_icon = document.body.querySelector(".bx-envelope");
const modal = document.getElementById("modal");

mail.addEventListener("click", () => {
  mail_icon.classList.remove("bx-envelope");
  mail_icon.classList.add("bx-envelope-open");
  modal.classList.add("open");
  swiper_modal.autoplay.start();
});

document.body.addEventListener("click", (event) => {
  if (
    modal.classList.contains("open") &&
    event.target != mail &&
    event.target != mail_icon
  ) {
    modal.classList.remove("open");
    mail_icon.classList.remove("bx-envelope-open");
    mail_icon.classList.add("bx-envelope");
    swiper_modal.autoplay.stop();
  }
});
