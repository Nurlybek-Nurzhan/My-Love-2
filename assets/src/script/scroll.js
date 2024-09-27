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

let videos_left = gsap.utils.toArray([".frame-media_left"]);
let videos_right = gsap.utils.toArray([".frame-media_right"]);
let images = gsap.utils.toArray([".frame-img"]);

gsap.registerPlugin(ScrollTrigger);

const reveal = (
  element,
  beforeX,
  beforeY,
  beforeOpacity,
  beforeScale,
  beforeRotate,
  afterX,
  afterY,
  afterOpacity,
  afterScale,
  afterRotate,
  start,
  end,
  duration,
  markersVisible = false
) => {
  gsap.fromTo(
    element,
    {
      x: beforeX,
      y: beforeY,
      opacity: beforeOpacity,
      scale: beforeScale,
      rotate: beforeRotate,
    },
    {
      x: afterX,
      y: afterY,
      opacity: afterOpacity,
      scale: afterScale,
      rotate: afterRotate,
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        scrub: true,
        duration: duration,
        markers: markersVisible,
      },
    }
  );
};

// Apply the animation to the left-side videos
videos_left.forEach((video) => {
  reveal(
    video, // element
    -100, // beforeX: slide in from the left
    100, // beforeY
    0, // beforeOpacity
    0.8, // beforeScale: start slightly smaller
    -15, // beforeRotate: slight tilt for a dynamic entrance
    0, // afterX: move to original position
    0, // afterY
    1, // afterOpacity: fully visible
    1, // afterScale: normal size
    0, // afterRotate: no rotation
    "top 80%", // start: start animation as the top of the element reaches 80% of the viewport
    "bottom 60%", // end: end the animation when the bottom of the element reaches 20% of the viewport
    1.5 // duration: smoother transition over 1.5 seconds
  );
});

// Apply the animation to the right-side videos
videos_right.forEach((video) => {
  reveal(
    video, // element
    100, // beforeX: slide in from the right
    100, // beforeY
    0, // beforeOpacity
    0.8, // beforeScale: start smaller
    15, // beforeRotate: slight tilt for a dynamic entrance
    0, // afterX: move to original position
    0, // afterY
    1, // afterOpacity: fully visible
    1, // afterScale: normal size
    0, // afterRotate: no rotation
    "top 80%", // start: start animation as the top of the element reaches 80% of the viewport
    "bottom 50%", // end: end the animation when the bottom of the element reaches 20% of the viewport
    1.5 // duration: smoother transition over 1.5 seconds
  );
});

// Apply the animation to the images
images.forEach((video) => {
  reveal(
    video, // element
    0, // beforeX: slide in from the right
    100, // beforeY
    0, // beforeOpacity
    0.8, // beforeScale: start smaller
    0, // beforeRotate: slight tilt for a dynamic entrance
    0, // afterX: move to original position
    0, // afterY
    1, // afterOpacity: fully visible
    1, // afterScale: normal size
    0, // afterRotate: no rotation
    "top 80%", // start: start animation as the top of the element reaches 80% of the viewport
    "center 50%", // end: end the animation when the bottom of the element reaches 20% of the viewport
    1.5 // duration: smoother transition over 1.5 seconds
  );
});