const mail = document.body.querySelector("#mail");
const mail_icon = document.body.querySelector(".bx-envelope");

mail.addEventListener("click", () => {
  mail_icon.classList.toggle("bx-envelope");
  mail_icon.classList.toggle("bx-envelope-open");

  let cutie = document.body.querySelectorAll(".swiper-slide")[0];
});
