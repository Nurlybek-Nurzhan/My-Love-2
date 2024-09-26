import Lenis from "lenis";
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

const reveal = (
  element,
  beforeX,
  beforeY,
  beforeOpacity,
  afterX,
  afterY,
  afterOpacity,
  start,
  end,
  duration,
  markersVisible = false
) => {
  gsap.fromTo(
    element,
    { x: beforeX, y: beforeY, opacity: beforeOpacity },
    {
      opacity: afterOpacity,
      x: afterX,
      y: afterY,
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        duration: duration,
        scrub: true,
        markers: markersVisible
      },
    }
  );
};

reveal(".home-img", 0, 0, 1, 50, -200, 0, "0", "1000", { min: 0.2, max: 3 });