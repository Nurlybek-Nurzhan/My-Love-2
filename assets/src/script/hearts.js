import { modal, mail_icon } from "./mail.js";

const bgHeart = document.querySelector("#bg_heart");

function explodeHearts(x, y) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart heart_tiny";
    heart.style.cssText = `
      --x-offset: ${(Math.random() - 0.5) * 2000}px;
      --y-offset: ${(Math.random() - 0.5) * 2000}px;
      left: ${x}px;
      top: ${y}px;
    `;
    fragment.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
  bgHeart.appendChild(fragment);
}

document.body.addEventListener("click", (event) => {
  const { clientX: x, clientY: y } = event;
  explodeHearts(x, y);

  if (modal.classList.contains("open") && event.target === modal) {
    modal.classList.remove("open");
    mail_icon.classList.remove("bx-envelope-open");
    mail_icon.classList.add("bx-envelope");
  }
});
